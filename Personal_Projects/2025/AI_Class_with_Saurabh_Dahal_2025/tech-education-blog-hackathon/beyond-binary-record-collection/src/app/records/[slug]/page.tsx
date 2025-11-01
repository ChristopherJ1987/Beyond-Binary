import Navigation from '@/components/Navigation';
import Link from 'next/link';

// Sample record data - will be replaced with real data later
const sampleRecords: { [key: string]: {
  title: string;
  description: string;
  content: string;
  genre: string;
  tags: string[];
  readTime: number;
  date: string;
  author: string;
} } = {
  "q-cli-exploration": {
    title: "Exploring Amazon Q CLI: An AI-Powered Development Journey",
    description: "A deep dive into Amazon Q CLI capabilities, MCP servers, and how AI is transforming the development workflow.",
    content: `
# Exploring Amazon Q CLI: An AI-Powered Development Journey

Amazon Q CLI represents a significant leap forward in AI-powered development tools. During my exploration for this hackathon project, I discovered capabilities that fundamentally change how we approach coding and project management.

## What is Amazon Q CLI?

Amazon Q CLI is an AI assistant built by AWS that runs directly in your terminal. It's designed to help developers with everything from code generation to AWS resource management.

## Key Capabilities I Discovered

### File Operations
- **fs_read**: Read files, directories, and images with batch operations
- **fs_write**: Create, edit, append, and modify files with precise string replacement
- **execute_bash**: Run shell commands with configurable permissions

### AWS Integration
- **use_aws**: Make AWS CLI API calls across all AWS services
- Direct integration with AWS credentials and profiles
- Support for all AWS regions and operations

### Development Assistance
- Code analysis, debugging, and optimization
- Multi-language support (Python, JavaScript, Java, etc.)
- Architecture recommendations and best practices
- Error troubleshooting and resolution

## My Experience Building This Blog

This entire blog was built collaboratively with Amazon Q CLI, and the experience was nothing short of remarkable. What surprised me most was how easily I could use natural language to create a fully functional application - no complex syntax or lengthy documentation required.

### The Agent Steering Approach

One of the biggest challenges I anticipated was maintaining continuity across multiple chat sessions. The solution turned out to be elegantly simple: using an RTF file to track our Amazon Q chat sessions. This approach worked very closely to how I've seen Agent Steering used in other AI development environments like Kiro.

While it isn't necessarily the same continuous chat session, this method allows each new session to be aware of the information discussed previously. It's a practical form of project memory that bridges the gap between sessions.

### What Made This Collaboration Invaluable

Having never used a CLI Agent prior to this project, everything was new territory for me. The speed of creating this application was amazing - I was able to focus on other areas of my life while still creating a fully functional blog application in a remarkably short time.

What I found particularly valuable was Q's ability to ask clarifying questions. This helped me:
- Clarify my own expectations
- Identify requirements I hadn't fully considered
- Make my vision clearer for Q to execute

I witnessed so many commands and operations that Q used which I had never encountered myself. The learning curve was steep, but in the best possible way.

### The Development Speed Revolution

This process made the entire journey from concept to deployment easier and faster to manage. The ability to have contextual conversations about code while simultaneously executing commands and creating files created an incredibly smooth development flow.

### Technical Impressions

I'm impressed by it all. The fact that this technology exists is impressive on its own. The more I learn about AI capabilities, the more I wonder why we're not seeing people in Iron Man suits flying through the skies - it seems entirely possible to use available resources and ask the right questions to achieve whatever end result is desired.

The combination of natural language processing, code generation, file operations, and deployment assistance in a single CLI tool represents a fundamental shift in how we approach software development.

## Looking Forward

As AI tools like Amazon Q CLI continue to evolve, I believe we're entering a new era of collaborative development where AI assistants become true partners in the creative process.

The future of development isn't about replacing developers—it's about augmenting our capabilities and allowing us to focus on higher-level problem solving and creativity.
    `,
    genre: "tech",
    tags: ["q-cli", "ai-ml", "development"],
    readTime: 8,
    date: "2025-10-14",
    author: "Christopher"
  },
  "oracle-ai-study-guide": {
    title: "Oracle AI Foundations Study Guide",
    description: "Comprehensive notes and insights from preparing for the Oracle AI Foundations certification exam.",
    content: `
# Oracle AI Foundations Study Guide

Preparing for the Oracle AI Foundations certification has been an incredible learning journey. Here are my comprehensive notes and insights that helped me understand the fundamentals of AI and machine learning.

## Core AI Concepts

### What is Artificial Intelligence?
AI is the simulation of human intelligence in machines that are programmed to think and learn like humans.

### Machine Learning Fundamentals
- **Supervised Learning**: Learning with labeled data
- **Unsupervised Learning**: Finding patterns in unlabeled data  
- **Reinforcement Learning**: Learning through interaction and feedback

## Key Topics Covered

### 1. AI Ethics and Responsible AI
- Bias in AI systems
- Fairness and transparency
- Privacy considerations
- Explainable AI

### 2. Machine Learning Algorithms
- Linear regression
- Decision trees
- Neural networks
- Deep learning basics

### 3. Data Science Fundamentals
- Data preprocessing
- Feature engineering
- Model evaluation
- Cross-validation techniques

## Study Tips

1. **Hands-on Practice**: Don't just read—implement concepts
2. **Real-world Examples**: Connect theory to practical applications
3. **Community Learning**: Join study groups and forums
4. **Regular Review**: Consistent daily study beats cramming

## Resources That Helped

- Oracle University courses
- Hands-on labs and exercises
- Community forums and discussions
- Practice exams and assessments

This certification journey has deepened my understanding of AI fundamentals and prepared me for more advanced topics in machine learning and data science.
    `,
    genre: "tech",
    tags: ["oracle-certification", "ai-ml", "study-guide"],
    readTime: 12,
    date: "2025-10-13",
    author: "Christopher"
  }
};

export async function generateStaticParams() {
  return [
    { slug: 'q-cli-exploration' },
    { slug: 'oracle-ai-study-guide' }
  ];
}

export default async function RecordPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const record = sampleRecords[slug];

  if (!record) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
        <Navigation />
        <div className="pt-20 relative z-10">
          <div className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-t-3xl min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Record Not Found</h1>
            <p className="text-gray-600">The record you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/records" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">
              ← Back to All Records
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-cyan-400 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-400 rounded-full blur-md animate-ping"></div>
      </div>
      
      <Navigation />
      <div className="pt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-t-3xl min-h-screen">
          {/* Back Navigation */}
          <Link href="/records" className="text-indigo-600 hover:text-indigo-800 mb-6 inline-flex items-center">
            ← Back to Records
          </Link>

          {/* Article Header */}
          <header className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex flex-wrap gap-2 mb-4">
              {record.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {record.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {record.description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span>By {record.author}</span>
                <span>📅 {record.date}</span>
                <span>⏱️ {record.readTime} min read</span>
                <span className="px-2 py-1 bg-gray-100 rounded-full">{record.genre}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg prose-gray max-w-none">
            <div className="text-gray-800 leading-relaxed space-y-6">
              {record.content.split('\n').map((paragraph: string, index: number) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{paragraph.slice(2)}</h1>;
                }
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-semibold text-gray-800 mt-6 mb-3">{paragraph.slice(3)}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold text-gray-800 mt-4 mb-2">{paragraph.slice(4)}</h3>;
                }
                if (paragraph.startsWith('- ')) {
                  return <li key={index} className="text-gray-700 ml-4">{paragraph.slice(2)}</li>;
                }
                if (paragraph.trim() === '') {
                  return <div key={index} className="h-2"></div>;
                }
                return <p key={index} className="text-gray-700 text-lg leading-relaxed">{paragraph}</p>;
              })}
            </div>
          </article>

          {/* Footer Navigation */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link 
                href={`/genre/${record.genre}`}
                className="text-indigo-600 hover:text-indigo-800"
              >
                More {record.genre} records →
              </Link>
              <Link 
                href="/records"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                View All Records
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
