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