# Claude Code in Action
`Created: March 27.2026`
`Last Updated: April 2, 2026`

## Study Guide Overview

1. [What is Claude Code](#what-is-claude-code)
2. [Getting Hands On](#getting-hands-on)
3. [Hooks and the SDK](#hooks-SDK)
4. [Wrapping Up: Quiz](#quiz)

---

### [What is Claude Code](#what-is-claude-code)

#### What is a coding assistant?

A coding assistant is more than just a tool that writes code - it's a sophisticated system that uses language models to tackle complex programming tasks. Understanding how these assistants work behind the scenes will help you appreciate what makes a truly powerful coding companion.

#### How Coding Assistants Work

When you give a coding assistant a task, like fixing a bug based on an error message, it follows a process similar to how a human developer would approach the problem:

**Gather context** - Understanding what the error refers to, which part of the codebase is affected, and what files are relevant
**Formulate a plan** - Deciding how to solve the issue, such as changing code and running tests to verify the fix
Take action - Actually implementing the solution by updating files and running commands

**The key insight here is that the first and last steps require the assistant to interact with the outside world - reading files, fetching documentation, running commands, or editing code.**

#### The Tool Use Challenge
Here's where things get interesting. Language models by themselves can only process text and return text - they can't actually read files or run commands. If you ask a standalone language model to read a file, it will tell you it doesn't have that capability.

So how do coding assistants solve this problem? They use a clever system called "tool use."

#### How Tool Use Works
When you send a request to a coding assistant, it automatically adds instructions to your message that teach the language model how to request actions. For example, it might add text like: "If you want to read a file, respond with 'ReadFile: name of file'"

#### Here's the complete flow:

#### *`You ask:`* "What code is written in the main.go file?"

- The coding assistant adds tool instructions to your request
The language model responds: "ReadFile: main.go"
- The coding assistant reads the actual file and sends its contents back to the model
- The language model provides a final answer based on the file contents
- This system allows language models to effectively "read files," "write code," and "run commands" even though they're really just generating carefully formatted text responses.

#### Why Claude's Tool Use Matters

Not all language models are equally good at using tools. The Claude series of models (Opus, Sonnet, and Haiku) are particularly strong at understanding what tools do and using them effectively to complete complex tasks.

This strength in tool use provides several key benefits for Claude Code:

#### *`Benefits of Strong Tool Use`*
- Tackles harder tasks - Claude can combine different tools to handle complex work and will use tools it hasn't seen before
Extensible platform - You can easily add new tools to Claude Code, and Claude will adapt to use them as your workflow evolves
- Better security - Claude Code can navigate codebases without requiring indexing, which often means not sending your entire codebase to external servers
- Key Takeaways
Understanding coding assistants comes down to a few essential points:

Coding assistants use language models to complete different tasks
Language models need tools to handle most real-world programming tasks
Not all language models use tools with the same skill level
Claude's strong tool use enables better security, customization, and longevity in Claude Code
This tool-use capability is what transforms a simple text-generating model into a powerful coding assistant that can read your files, understand your codebase, and make meaningful changes to your projects.

Claude Code comes with a comprehensive set of built-in tools that handle common development tasks like reading files, writing code, running commands, and managing directories. But what makes Claude Code truly powerful is how intelligently it combines these tools to tackle complex, multi-step problems.

### [Getting Hands On](#getting-hands-on)

#### Time to get Claude Code set up locally!

##### Full setup directions can be found here: 
- https://code.claude.com/docs/en/quickstart

##### In short, you'll need to do the following:

- Install Claude Code
- MacOS (Homebrew): brew install --cask claude-code
- MacOS, Linux, WSL: curl -fsSL https://claude.ai/install.sh | bash
- Windows CMD: curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd

After installation, run claude at your terminal. The first time you run this command you will be prompted to authenticate
If you're making use of AWS Bedrock or Google Cloud Vertex, there is some additional setup:

##### Special directions for AWS Bedrock: 
- https://code.claude.com/docs/en/amazon-bedrock
##### Special directions for Google Cloud Vertex: 
- https://code.claude.com/docs/en/google-vertex-ai

#### Working with Claude Code is more interesting if you have a project to work with.

*I've put together a small project to explore with Claude Code. It is the same UI generation app shown in a previous video. Note: you don't have to run this project. You can always follow along with the remainder of the course with your own code base if you wish!*

#### Setup

**This project requires a small amount of setup:**

- Ensure you have Node JS installed locally. Link to installation directions.
- Download the zip file called uigen.zip attached to this lecture and extract it
- In the project directory, run npm run setup to install dependencies and set up a local SQLite database
Optional: this project uses Claude through the Anthropic API to generate UI components. If you want to fully test out the app, you will need to provide an API key to access the Anthropic API. This is optional. If no API key is provided, the app will still generate some static fake code. Here's how you can set the api key:
- Get an Anthropic API key at https://console.anthropic.com/
- Place your API key in the .env file.
- Start the project by running npm run dev

---

**When working with Claude on coding projects, context management is crucial. Your project might have dozens or hundreds of files, but Claude only needs the right information to help you effectively. Too much irrelevant context actually decreases Claude's performance, so learning to guide it toward relevant files and documentation is essential.**

#### The /init Command
When you first start Claude in a new project, run the /init command. This tells Claude to analyze your entire codebase and understand:

- The project's purpose and architecture
- Important commands and critical files
- Coding patterns and structure

After analyzing your code, Claude creates a summary and writes it to a CLAUDE.md file. When Claude asks for permission to create this file, you can either hit Enter to approve each write operation, or press Shift+Tab to let Claude write files freely throughout your session.

#### The CLAUDE.md File
##### The CLAUDE.md file serves two main purposes:

Guides Claude through your codebase, pointing out important commands, architecture, and coding style
Allows you to give Claude specific or custom directions
This file gets included in every request you make to Claude, so it's like having a persistent system prompt for your project.

#### CLAUDE.md File Locations
##### Claude recognizes three different CLAUDE.md files in three common locations:

- CLAUDE.md - Generated with /init, committed to source control, shared with other engineers
- CLAUDE.local.md - Not shared with other engineers, contains personal instructions and customizations for Claude
- ~/.claude/CLAUDE.md - Used with all projects on your machine, contains instructions that you want Claude to follow on all projects

##### Adding Custom Instructions
You can customize how Claude behaves by adding instructions to your CLAUDE.md file. For example, if Claude is adding too many comments to code, you can address this by updating the file.

Use the # command to enter "memory mode" - this lets you edit your CLAUDE.md files intelligently. Just type something like:

##### Use comments sparingly. Only comment complex code.
Claude will merge this instruction into your CLAUDE.md file automatically.

##### **File Mentions with '@'**
When you need Claude to look at specific files, use the @ symbol followed by the file path. This automatically includes that file's contents in your request to Claude.

For example, if you want to ask about your authentication system and you know the relevant files, you can type:

- How does the auth system work? @auth
Claude will show you a list of auth-related files to choose from, then include the selected file in your conversation.

##### **Referencing Files in CLAUDE.md**
You can also mention files directly in your CLAUDE.md file using the same @ syntax. This is particularly useful for files that are relevant to many aspects of your project.

For example, if you have a database schema file that defines your data structure, you might add this to your CLAUDE.md:

- The database schema is defined in the @prisma/schema.prisma file. Reference it anytime you need to understand the structure of data stored in the database.
- When you mention a file this way, its contents are automatically included in every request, so Claude can answer questions about your data structure immediately without having to search for and read the schema file each time.

#### Making Changes

When working with Claude in your development environment, you'll often need to make changes to existing projects. This guide covers practical techniques for implementing changes effectively, including visual communication with screenshots and leveraging Claude's advanced reasoning capabilities.

##### Using Screenshots for Precise Communication
One of the most effective ways to communicate with Claude is through screenshots. When you want to modify a specific part of your interface, taking a screenshot helps Claude understand exactly what you're referring to.

To paste a screenshot into Claude, use Ctrl+V (not Cmd+V on macOS). This keyboard shortcut is specifically designed for pasting screenshots into the chat interface. Once you've pasted the image, you can ask Claude to make specific changes to that area of your application.

##### Planning Mode
For more complex tasks that require extensive research across your codebase, you can enable Planning Mode. This feature makes Claude do thorough exploration of your project before implementing changes.

Enable Planning Mode by pressing Shift + Tab twice (or once if you're already auto-accepting edits). In this mode, Claude will:

##### Read more files in your project
Create a detailed implementation plan
Show you exactly what it intends to do
Wait for your approval before proceeding
This gives you the opportunity to review the plan and redirect Claude if it missed something important or didn't consider a particular scenario.

##### Thinking Modes
Claude offers different levels of reasoning through "thinking" modes. These allow Claude to spend more time reasoning about complex problems before providing solutions.

**`The available thinking modes include:`**

- "Think" - Basic reasoning
- "Think more" - Extended reasoning
- "Think a lot" - Comprehensive reasoning
- "Think longer" - Extended time reasoning
- "Ultrathink" - Maximum reasoning capability

Each mode gives Claude progressively more tokens to work with, allowing for deeper analysis of challenging problems.

##### When to Use Planning vs Thinking
These two features handle different types of complexity:

##### Planning Mode is best for:

- Tasks requiring broad understanding of your codebase
- Multi-step implementations
- Changes that affect multiple files or components

##### Thinking Mode is best for:

-  Complex logic problems
-  Debugging difficult issues
-  Algorithmic challenges

You can combine both modes for tasks that require both breadth and depth. Just keep in mind that both features consume additional tokens, so there's a cost consideration for using them.

#### Controlling Context

When working with Claude on complex tasks, you'll often need to guide the conversation to keep it focused and productive. There are several techniques you can use to control the flow of your conversation and help Claude stay on track.

##### Interrupting Claude with Escape
Sometimes Claude starts heading in the wrong direction or tries to tackle too much at once. You can press the Escape key to stop Claude mid-response, allowing you to redirect the conversation.

This is particularly useful when you want Claude to focus on one specific task instead of trying to handle multiple things simultaneously. For example, if you ask Claude to write tests for multiple functions and it starts creating a comprehensive plan for all of them, you can interrupt and ask it to focus on just one function at a time.

##### Combining Escape with Memories
One of the most powerful applications of the escape technique is fixing repetitive errors. When Claude makes the same mistake repeatedly across different conversations, you can:

##### Press Escape to stop the current response
Use the # shortcut to add a memory about the correct approach
Continue the conversation with the corrected information
This prevents Claude from making the same error in future conversations on your project.

##### Rewinding Conversations
During long conversations, you might accumulate context that becomes irrelevant or distracting. For instance, if Claude encounters an error and spends time debugging it, that back-and-forth discussion might not be useful for the next task.

You can rewind the conversation by pressing Escape twice. This shows you all the messages you've sent, allowing you to jump back to an earlier point and continue from there. This technique helps you:

##### Maintain valuable context (like Claude's understanding of your codebase)

- Remove distracting or irrelevant conversation history
- Keep Claude focused on the current task
- Context Management Commands
- Claude provides several commands to help manage conversation context effectively:
    - /compact
        - The /compact command summarizes your entire conversation history while preserving the key information Claude has learned. This is ideal when:

            - Claude has gained valuable knowledge about your project
            - You want to continue with related tasks
            - The conversation has become long but contains important context
            - Use compact when Claude has learned a lot about the current task and you want to maintain that knowledge as it moves to the next related task.

    - /clear
        - The /clear command completely removes the conversation history, giving you a fresh start. This is most useful when:

            - You're switching to a completely different, unrelated task
            - The current conversation context might confuse Claude for the new task
            - You want to start over without any previous context
 

##### When to Use These Techniques
These conversation control techniques are particularly valuable during:

- Long-running conversations where context can become cluttered
- Task transitions where previous context might be distracting
- Situations where Claude repeatedly makes the same mistakes
- Complex projects where you need to maintain focus on specific components
- By using escape, double-tap escape, /compact, and /clear strategically, you can keep Claude focused and productive throughout your development workflow. These aren't just convenience features—they're essential tools for maintaining effective AI-assisted development sessions.

#### Custom Commands

Claude Code comes with built-in commands that you can access by typing a forward slash, but you can also create your own custom commands to automate repetitive tasks you run frequently.

##### Creating Custom Commands
To create a custom command, you need to set up a specific folder structure in your project:

- Find the .claude folder in your project directory
- Create a new directory called commands inside it
- Create a new markdown file with your desired command name (like audit.md)
- The filename becomes your command name - so audit.md creates the /audit command.

*`Example: Audit Command`*

Here's a practical example of a custom command that audits project dependencies for vulnerabilities:

    - This audit command does three things:

        - Runs npm audit to find vulnerable installed packages
        - Runs npm audit fix to apply updates
        - Runs tests to verify the updates didn't break anything
        - After creating your command file, you must restart Claude Code for it to recognize the new command.

##### Commands with Arguments
Custom commands can accept arguments using the $ARGUMENTS placeholder. This makes them much more flexible and reusable.

For example, a write_tests.md command might contain:

*`Write comprehensive tests for: $ARGUMENTS`*

Testing conventions:
* Use Vitests with React Testing Library
* Place test files in a __tests__ directory in the same folder as the source file
* Name test files as [filename].test.ts(x)
* Use @/ prefix for imports

Coverage:
* Test happy paths
* Test edge cases
* Test error states
* You can then run this command with a file path:
    * /write_tests the use-auth.ts file in the hooks directory 

The arguments don't have to be file paths - they can be any string you want to pass to give Claude context and direction for the task.

##### Key Benefits
* Automation - Turn repetitive workflows into single commands
* Consistency - Ensure the same steps are followed every time
* Context - Provide Claude with specific instructions and conventions for your project
* Flexibility - Use arguments to make commands work with different inputs
* Custom commands are particularly useful for project-specific workflows like running test suites, deploying code, or generating boilerplate following your team's conventions.

#### MCP Servers with Claude Code

You can extend Claude Code's capabilities by adding MCP (Model Context Protocol) servers. These servers run either remotely or locally on your machine and provide Claude with new tools and abilities it wouldn't normally have.

One of the most popular MCP servers is Playwright, which gives Claude the ability to control a web browser. This opens up powerful possibilities for web development workflows.

##### Installing the Playwright MCP Server
To add the Playwright server to Claude Code, run this command in your terminal (not inside Claude Code):

`claude mcp add playwright npx @playwright/mcp@latest`

**This command does two things:**

Names the MCP server "playwright"

* Provides the command that starts the server locally on your machine

Managing Permissions

* When you first use MCP server tools, Claude will ask for permission each time. If you get tired of these permission prompts, you can pre-approve the server by editing your settings.

**Open the .claude/settings.local.json file and add the server to the allow array:**

```
{
  "permissions": {
    "allow": ["mcp__playwright"],
    "deny": []
  }
}
```
Note the double underscores in mcp__playwright. This allows Claude to use the Playwright tools without asking for permission every time.

*`Practical Example:`* Improving Component Generation
Here's a real-world example of how the Playwright MCP server can improve your development workflow. Instead of manually testing and tweaking prompts, you can have Claude:

* Open a browser and navigate to your application
* Generate a test component
* Analyze the visual styling and code quality
* Update the generation prompt based on what it observes
* Test the improved prompt with a new component

For instance, you might ask Claude to:

`"Navigate to localhost:3000, generate a basic component, review the styling, and update the generation prompt at @src/lib/prompts/generation.tsx to produce better components going forward."`

Claude will use the browser tools to interact with your app, examine the generated output, and then modify your prompt file to encourage more original and creative designs.

##### Results and Benefits
In practice, this approach can lead to significantly better results. Instead of generic purple-to-blue gradients and standard Tailwind patterns, Claude might update prompts to encourage:

* Warm sunset gradients (orange-to-pink-to-purple)
* Ocean depth themes (teal-to-emerald-to-cyan)
* Asymmetric designs and overlapping elements
* Creative spacing and unconventional layouts
* The key advantage is that Claude can see the actual visual output, not just the code, which allows it to make much more informed decisions about styling improvements.

##### Exploring Other MCP Servers
Playwright is just one example of what's possible with MCP servers. The ecosystem includes servers for:

* Database interactions
* API testing and monitoring
* File system operations
* Cloud service integrations
* Development tool automation
* Consider exploring MCP servers that align with your specific development needs. They can transform Claude from a code assistant into a comprehensive development partner that can interact with your entire toolchain.

#### GitHub Integration

Claude Code offers an official GitHub integration that lets Claude run inside GitHub Actions. This integration provides two main workflows: mention support for issues and pull requests, and automatic pull request reviews.

##### Setting Up the Integration
To get started, run `/install-github-app` in Claude. This command walks you through the setup process:

* Install the Claude Code app on GitHub
* Add your API key
* Automatically generate a pull request with the workflow files

The generated pull request adds two GitHub Actions to your repository. Once merged, you'll have the workflow files in your .github/workflows directory.

##### Default GitHub Actions
The integration provides two main workflows:

##### Mention Action
You can mention Claude in any issue or pull request using @claude. When mentioned, Claude will:

* Analyze the request and create a task plan
* Execute the task with full access to your codebase
* Respond with results directly in the issue or PR

###### Pull Request Action
Whenever you create a pull request, Claude automatically:

* Reviews the proposed changes
* Analyzes the impact of modifications
* Posts a detailed report on the pull request

##### Customizing the Workflows
After merging the initial pull request, you can customize the workflow files to fit your project's needs. Here's how to enhance the mention workflow:

###### Adding Project Setup
Before Claude runs, you can add steps to prepare your environment:

```
- name: Project Setup
  run: |
    npm run setup
    npm run dev:daemon
```

##### Custom Instructions
Provide Claude with context about your project setup:

```
custom_instructions: |
  The project is already set up with all dependencies installed.
  The server is already running at localhost:3000. Logs from it
  are being written to logs.txt. If needed, you can query the
  db with the 'sqlite3' cli. If needed, use the mcp__playwright
  set of tools to launch a browser and interact with the app.
```

##### MCP Server Configuration
You can configure MCP servers to give Claude additional capabilities:

```
mcp_config: |
  {
    "mcpServers": {
      "playwright": {
        "command": "npx",
        "args": [
          "@playwright/mcp@latest",
          "--allowed-origins",
          "localhost:3000;cdn.tailwindcss.com;esm.sh"
        ]
      }
    }
  }
```

##### Tool Permissions
When running Claude in GitHub Actions, you must explicitly list all allowed tools. This is especially important when using MCP servers.

```
allowed_tools: "Bash(npm:*),Bash(sqlite3:*),mcp__playwright__browser_snapshot,mcp__playwright__browser_click,..."
```

Unlike local development, there's no shortcut for permissions in GitHub Actions. Each tool from each MCP server must be individually listed.

##### Best Practices
When setting up Claude's GitHub integration:

* Start with the default workflows and customize gradually
* Use custom instructions to provide project-specific context
* Be explicit about tool permissions when using MCP servers
* Test your workflows with simple tasks before complex ones
* Consider your project's specific needs when configuring additional steps

The GitHub integration transforms Claude from a development assistant into an automated team member that can handle tasks, review code, and provide insights directly within your GitHub workflow.

