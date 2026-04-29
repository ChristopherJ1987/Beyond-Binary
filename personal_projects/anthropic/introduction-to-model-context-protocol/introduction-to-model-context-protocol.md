# Introduction to Model Context Protocol

`Created: April 28.2026`

`Last Updated: April 29, 2026`

## Study Guide Overview

1. [Introduction](#introduction)
2. [Hands-on with MCP Servers](#hands-on-with-mcp-servers)
3. [Connecting with MCP Clients](#connecting-with-mcp-clients)
4. [Assessment and Wrap Up](#assessment-and-wrap-up)

---

### [Introduction](#introduction)

#### Welcome to the course

Model Context Protocol (MCP) is a communication layer that provides Claude with context and tools without requiring you to write a bunch of tedious integration code. Think of it as a way to shift the burden of tool definitions and execution away from your server to specialized MCP servers.

#### Introducing MCP

##### The Problem MCP Solves
Let's say you're building a chat interface where users can ask Claude about their GitHub data. A user might ask "What open pull requests are there across all my repositories?" To handle this, Claude needs tools to access GitHub's API.

GitHub has massive functionality - repositories, pull requests, issues, projects, and tons more. Without MCP, you'd need to create an incredible number of tool schemas and functions to handle all of GitHub's features.

This means writing, testing, and maintaining all that integration code yourself. That's a lot of effort and ongoing maintenance burden.

##### How MCP Works
MCP shifts this burden by moving tool definitions and execution from your server to dedicated MCP servers. Instead of you authoring all those GitHub tools, an MCP Server for GitHub handles it.

The MCP Server wraps up tons of functionality around GitHub and exposes it as a standardized set of tools. Your application connects to this MCP server instead of implementing everything from scratch.

##### MCP Servers Explained
MCP Servers provide access to data or functionality implemented by outside services. They act as specialized interfaces that expose tools, prompts, and resources in a standardized way.

In our GitHub example, the MCP Server for GitHub contains tools like get_repos() and connects directly to GitHub's API. Your server communicates with the MCP server, which handles all the GitHub-specific implementation details.

##### Common Questions

| Question | Answer |
| :--- | :--- |
| Who authors MCP Servers? | Anyone can create an MCP server implementation. Often, service providers themselves will make their own official MCP implementations. For example, AWS might release an official MCP server with tools for their various services. |
| How is this different from calling APIs directly? | MCP servers provide tool schemas and functions already defined for you. If you want to call an API directly, you'll be authoring those tool definitions on your own. MCP saves you that implementation work. |
| Isn't MCP just the same as tool use? | This is a common misconception. MCP servers and tool use are complementary but different concepts. MCP servers provide tool schemas and functions already defined for you, while tool use is about how Claude actually calls those tools. The key difference is who does the work - with MCP, someone else has already implemented the tools for you. |
---

The benefit is clear: instead of maintaining a complex set of integrations yourself, you can leverage MCP servers that handle the heavy lifting of connecting to external services.

#### MCP Clients

The MCP client serves as the communication bridge between your server and MCP servers. It's your access point to all the tools that an MCP server provides, handling the message exchange and protocol details so your application doesn't have to.

##### Transport Agnostic Communication
One of MCP's key strengths is being transport agnostic - a fancy way of saying the client and server can communicate over different protocols depending on your setup.

The most common setup runs both the MCP client and server on the same machine, communicating through standard input/output. But you can also connect them over:

    - HTTP
    - WebSockets
    - Various other network protocols

##### MCP Message Types
Once connected, the client and server exchange specific message types defined in the MCP specification. The main ones you'll work with are:

    - ListToolsRequest/ListToolsResult: The client asks the server "what tools do you provide?" and gets back a list of available tools.
    - CallToolRequest/CallToolResult: The client asks the server to run a specific tool with given arguments, then receives the results.

##### How It All Works Together
Here's a complete example showing how a user query flows through the entire system - from your server, through the MCP client, to external services like GitHub, and back to Claude.

Let's say a user asks "What repositories do I have?" Here's the step-by-step flow:

    - User Query: The user submits their question to your server
    - Tool Discovery: Your server needs to know what tools are available to send to Claude
    - List Tools Exchange: Your server asks the MCP client for available tools
    - MCP Communication: The MCP client sends a ListToolsRequest to the MCP server and receives a ListToolsResult
    - Claude Request: Your server sends the user's query plus the available tools to Claude
    - Tool Use Decision: Claude decides it needs to call a tool to answer the question
    - Tool Execution Request: Your server asks the MCP client to run the tool Claude specified
    - External API Call: The MCP client sends a CallToolRequest to the MCP server, which makes the actual GitHub API call
    - Results Flow Back: GitHub responds with repository data, which flows back through the MCP server as a CallToolResult
    - Tool Result to Claude: Your server sends the tool results back to Claude
    - Final Response: Claude formulates a final answer using the repository data
    - User Gets Answer: Your server delivers Claude's response back to the user

### [Hands-on with MCP Servers](#hands-on-with-mcp-servers)

#### Project Set Up

- CLI based chat bot that allows users to chat with a set of documents
- Claude should be able to read a document
- Claude should be able to edit a document
- Users can "mention" a document by writing out "@doc_name"
  - The documents contents will automatically be included as context
- Users can run a command with "/command_name"

#### Defining Tools with MCP

Building an MCP server becomes much simpler when you use the official Python SDK. Instead of writing complex JSON schemas by hand, you can define tools with decorators and let the SDK handle the heavy lifting.

##### Setting Up the MCP Server
The Python MCP SDK makes server creation straightforward. You can initialize a server with just one line:
```
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("DocumentMCP", log_level="ERROR")
```

Your documents can be stored in a simple dictionary structure:

```
docs = {
    "deposition.md": "This deposition covers the testimony of Angela Smith, P.E.",
    "report.pdf": "The report details the state of a 20m condenser tower.",
    "financials.docx": "These financials outline the project's budget and expenditures",
    "outlook.pdf": "This document presents the projected future performance of the system",
    "plan.md": "The plan outlines the steps for the project's implementation.",
    "spec.txt": "These specifications define the technical requirements for the equipment"
}
```

##### Tool Definition with Decorators
The SDK uses decorators to define tools. Instead of writing JSON schemas manually, you can use Python type hints and field descriptions. The SDK automatically generates the proper schema that Claude can understand.

##### Creating a Document Reader Tool
The first tool reads document contents by ID. Here's the complete implementation:

```
@mcp.tool(
    name="read_doc_contents",
    description="Read the contents of a document and return it as a string."
)
def read_document(
    doc_id: str = Field(description="Id of the document to read")
):
    if doc_id not in docs:
        raise ValueError(f"Doc with id {doc_id} not found")
    
    return docs[doc_id]
```

The decorator specifies the tool name and description, while the function parameters define the required arguments. The Field class from Pydantic provides argument descriptions that help Claude understand what each parameter expects.

##### Building a Document Editor Tool
The second tool performs simple find-and-replace operations on documents:

```
@mcp.tool(
    name="edit_document",
    description="Edit a document by replacing a string in the documents content with a new string."
)
def edit_document(
    doc_id: str = Field(description="Id of the document that will be edited"),
    old_str: str = Field(description="The text to replace. Must match exactly, including whitespace."),
    new_str: str = Field(description="The new text to insert in place of the old text.")
):
    if doc_id not in docs:
        raise ValueError(f"Doc with id {doc_id} not found")
    
    docs[doc_id] = docs[doc_id].replace(old_str, new_str)
```

This tool takes three parameters: the document ID, the text to find, and the replacement text. The implementation includes error handling for missing documents and performs a straightforward string replacement.

##### Key Benefits of the SDK Approach
- No manual JSON schema writing required
- Type hints provide automatic validation
- Clear parameter descriptions help Claude understand tool usage
- Error handling integrates naturally with Python exceptions
- Tool registration happens automatically through decorators

The MCP Python SDK transforms tool creation from a complex schema-writing exercise into simple Python function definitions. This approach makes it much easier to build and maintain MCP servers while ensuring Claude receives properly formatted tool specifications.

#### The Server Inspector

When building MCP servers, you need a way to test your functionality without connecting to a full application. The Python MCP SDK includes a built-in browser-based inspector that lets you debug and test your server in real-time.

##### Starting the Inspector
First, make sure your Python environment is activated (check your project's README for the exact command). Then run the inspector with:

```
mcp dev mcp_server.py
```

This starts a development server and gives you a local URL, typically something like http://127.0.0.1:6274. Open this URL in your browser to access the MCP Inspector.

##### Using the Inspector Interface
The inspector interface is actively being developed, so it may look different when you use it. However, the core functionality remains consistent. Look for these key elements:

- A Connect button to start your MCP server
- Navigation tabs for Resources, Tools, Prompts, and other features
- A tools listing and testing panel

Click the Connect button first to initialize your server. You'll see the connection status change from "Disconnected" to "Connected".

##### Testing Your Tools
Navigate to the Tools section and click "List Tools" to see all available tools from your server. When you select a tool, the right panel shows its details and input fields.

For example, to test a document reading tool:

- Select the read_doc_contents tool
- Enter a document ID (like "deposition.md")
- Click "Run Tool"
- Check the results for success and expected output

The inspector shows both the success status and the actual returned data, making it easy to verify your tool works correctly.

##### Testing Tool Interactions
You can test multiple tools in sequence to verify complex workflows. For instance, after using an edit tool to modify a document, immediately test the read tool to confirm the changes were applied correctly.

The inspector maintains your server state between tool calls, so edits persist and you can verify the complete functionality of your MCP server.

##### Development Workflow
The MCP Inspector becomes an essential part of your development process. Instead of writing separate test scripts or connecting to full applications, you can:

- Quickly iterate on tool implementations
- Test edge cases and error conditions
- Verify tool interactions and state management
- Debug issues in real-time

This immediate feedback loop makes MCP server development much more efficient and helps catch issues early in the development process.

#### Connecting with MCP Clients