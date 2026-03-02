// Study materials extracted from oracle-ai-foundations-study-guide.md
const studyMaterials = [
  {
    "id": "module1",
    "title": "Module 1: Welcome to AI Foundations",
    "content": `
      <h3>Main Technology Stacks</h3>
      
      <h4>The AI Stack</h4>
      <ul>
        <li><strong>Artificial Intelligence</strong> - Broad field of computer science</li>
        <li><strong>Machine Learning</strong> - Subset of AI that learns from data</li>
        <li><strong>Deep Learning</strong> - Subset of ML using neural networks</li>
        <li><strong>Generative AI</strong> - AI that creates new content</li>
      </ul>
      
      <h4>The Oracle AI Stack</h4>
      <ul>
        <li><strong>SaaS Applications</strong> - Software as a Service AI-powered apps</li>
        <li><strong>AI Services</strong> - Pre-built AI capabilities and APIs</li>
        <li><strong>Data</strong> - Data management and processing layer</li>
        <li><strong>Infrastructure</strong> - Underlying compute and storage resources</li>
      </ul>
      
      <h4>Complete Course Outline</h4>
      <ol>
        <li>Welcome to AI Foundations</li>
        <li>AI Foundations</li>
        <li>Machine Learning Foundations</li>
        <li>Deep Learning Foundations</li>
        <li>Generative AI and LLM Foundations</li>
        <li>OCI AI Portfolio</li>
        <li>OCI Generative AI Services</li>
        <li>OCI AI Services</li>
      </ol>
    `,
    "searchTerms": "ai stack oracle technology artificial intelligence machine learning deep learning generative"
  },
  {
    "id": "module2",
    "title": "Module 2: AI Foundations",
    "content": `
      <h3>Module Objectives</h3>
      <ol>
        <li>Explain Artificial Intelligence concepts</li>
        <li>Describe common AI domains and tasks</li>
        <li>Differentiate between Artificial Intelligence, Machine Learning, and Deep Learning</li>
      </ol>
      
      <h3>Key Concepts</h3>
      <h4>Human Intelligence Capabilities</h4>
      <ul>
        <li><strong>Language</strong> - Understanding and generating human language</li>
        <li><strong>Vision</strong> - Processing and interpreting visual information</li>
        <li><strong>Speech</strong> - Understanding and producing spoken language</li>
        <li><strong>Recommendations</strong> - Making informed suggestions</li>
        <li><strong>Anomaly Detection</strong> - Identifying unusual patterns</li>
        <li><strong>Reward Learning</strong> - Learning through feedback</li>
        <li><strong>Forecasting</strong> - Predicting future outcomes</li>
        <li><strong>Content Generation</strong> - Creating new content</li>
      </ul>
      
      <h4>AI vs AGI</h4>
      <ul>
        <li><strong>AGI (Artificial General Intelligence)</strong> - Replicating human intelligence capabilities</li>
        <li><strong>AI (Artificial Intelligence)</strong> - AGI applied to specific, narrow objectives</li>
      </ul>
    `,
    "searchTerms": "artificial intelligence agi human capabilities language vision speech recommendations anomaly detection"
  },
  {
    "id": "module3",
    "title": "Module 3: Machine Learning Foundations",
    "content": `
      <h3>Machine Learning Overview</h3>
      <p>Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.</p>
      
      <h3>Types of Machine Learning</h3>
      <h4>Supervised Learning</h4>
      <ul>
        <li>Uses labeled training data</li>
        <li>Examples: Classification, Regression</li>
        <li>Goal: Predict outcomes for new data</li>
      </ul>
      
      <h4>Unsupervised Learning</h4>
      <ul>
        <li>Uses unlabeled data</li>
        <li>Examples: Clustering, Association</li>
        <li>Goal: Find hidden patterns</li>
      </ul>
      
      <h4>Reinforcement Learning</h4>
      <ul>
        <li>Learns through interaction with environment</li>
        <li>Uses rewards and penalties</li>
        <li>Examples: Game playing, Autonomous vehicles</li>
      </ul>
    `,
    "searchTerms": "machine learning supervised unsupervised reinforcement classification regression clustering"
  },
  {
    "id": "module4",
    "title": "Module 4: Deep Learning Foundations",
    "content": `
      <h3>Deep Learning Overview</h3>
      <p>Deep Learning is a subset of Machine Learning that uses neural networks with multiple layers to model and understand complex patterns.</p>
      
      <h3>Neural Networks</h3>
      <ul>
        <li><strong>Neurons</strong> - Basic processing units</li>
        <li><strong>Layers</strong> - Input, Hidden, Output layers</li>
        <li><strong>Weights and Biases</strong> - Parameters that are learned</li>
        <li><strong>Activation Functions</strong> - Determine neuron output</li>
      </ul>
      
      <h3>Common Architectures</h3>
      <ul>
        <li><strong>Feedforward Networks</strong> - Basic neural networks</li>
        <li><strong>Convolutional Neural Networks (CNNs)</strong> - For image processing</li>
        <li><strong>Recurrent Neural Networks (RNNs)</strong> - For sequential data</li>
        <li><strong>Transformers</strong> - For natural language processing</li>
      </ul>
    `,
    "searchTerms": "deep learning neural networks cnn rnn transformers neurons layers weights biases"
  },
  {
    "id": "module5",
    "title": "Module 5: Generative AI and LLM Foundations",
    "content": `
      <h3>Generative AI Overview</h3>
      <p>Generative AI creates new content including text, images, audio, and code based on training data patterns.</p>
      
      <h3>Large Language Models (LLMs)</h3>
      <ul>
        <li><strong>Tokenization</strong> - Converting words to numbers for model training</li>
        <li><strong>Training Process</strong> - Learning patterns from vast text datasets</li>
        <li><strong>Inference</strong> - Generating responses to prompts</li>
        <li><strong>Fine-tuning</strong> - Adapting models for specific tasks</li>
      </ul>
      
      <h3>Key Concepts</h3>
      <ul>
        <li><strong>Prompt Engineering</strong> - Crafting effective inputs</li>
        <li><strong>Context Window</strong> - Amount of text the model can process</li>
        <li><strong>Temperature</strong> - Controls randomness in generation</li>
        <li><strong>Hallucination</strong> - When models generate false information</li>
      </ul>
    `,
    "searchTerms": "generative ai llm large language models tokenization prompt engineering context window temperature"
  },
  {
    "id": "module6",
    "title": "Module 6: OCI AI Portfolio",
    "content": `
      <h3>Oracle Cloud Infrastructure AI Services</h3>
      <p>OCI provides a comprehensive portfolio of AI services for various use cases.</p>
      
      <h3>AI Service Categories</h3>
      <h4>Vision Services</h4>
      <ul>
        <li>Image classification</li>
        <li>Object detection</li>
        <li>Optical Character Recognition (OCR)</li>
        <li>Face detection</li>
      </ul>
      
      <h4>Language Services</h4>
      <ul>
        <li>Sentiment analysis</li>
        <li>Key phrase extraction</li>
        <li>Language detection</li>
        <li>Text classification</li>
      </ul>
      
      <h4>Speech Services</h4>
      <ul>
        <li>Speech-to-text</li>
        <li>Text-to-speech</li>
        <li>Real-time transcription</li>
      </ul>
    `,
    "searchTerms": "oci ai portfolio vision language speech services ocr sentiment analysis transcription"
  },
  {
    "id": "module7",
    "title": "Module 7: OCI Generative AI Services",
    "content": `
      <h3>OCI Generative AI Service</h3>
      <p>Fully managed service providing access to large language models for various generative AI tasks.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Pre-trained Models</strong> - Ready-to-use foundation models</li>
        <li><strong>Custom Models</strong> - Fine-tune models for specific use cases</li>
        <li><strong>Dedicated AI Clusters</strong> - Isolated compute resources</li>
        <li><strong>API Access</strong> - RESTful APIs for integration</li>
      </ul>
      
      <h3>Use Cases</h3>
      <ul>
        <li>Content generation</li>
        <li>Code generation</li>
        <li>Summarization</li>
        <li>Question answering</li>
        <li>Language translation</li>
      </ul>
    `,
    "searchTerms": "oci generative ai service foundation models custom models dedicated clusters api"
  },
  {
    "id": "module8",
    "title": "Module 8: OCI AI Services",
    "content": `
      <h3>Individual AI Services</h3>
      <p>Specialized AI services for specific tasks and domains.</p>
      
      <h3>OCI Vision</h3>
      <ul>
        <li>Pre-trained models for common vision tasks</li>
        <li>Custom model training capabilities</li>
        <li>Batch and real-time processing</li>
      </ul>
      
      <h3>OCI Language</h3>
      <ul>
        <li>Natural language processing capabilities</li>
        <li>Multi-language support</li>
        <li>Custom entity extraction</li>
      </ul>
      
      <h3>OCI Speech</h3>
      <ul>
        <li>Automatic speech recognition</li>
        <li>Real-time and batch transcription</li>
        <li>Multiple language support</li>
      </ul>
      
      <h3>OCI Anomaly Detection</h3>
      <ul>
        <li>Multivariate anomaly detection</li>
        <li>Time-series data analysis</li>
        <li>Real-time monitoring</li>
      </ul>
    `,
    "searchTerms": "oci vision language speech anomaly detection multivariate time-series real-time batch processing"
  }
];
