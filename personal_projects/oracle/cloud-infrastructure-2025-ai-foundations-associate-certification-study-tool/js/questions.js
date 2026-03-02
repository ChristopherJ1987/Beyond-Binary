// Manual questions file - Oracle AI Foundations Certification
// Contains Skills Check + Practice Exam questions + Review Questions

const questions = [
  // AI Foundations Skills Check Questions (5 questions)
  {
    "id": "AI_Foundations_1",
    "question": "Which task is an example of a speech-related AI task?",
    "choices": [
      "Random number generation",
      "Music composition",
      "Speech-to-text conversion",
      "Language translation"
    ],
    "correct": "Speech-to-text conversion",
    "explanation": "Speech-to-text conversion involves converting spoken language into written text. Also known as Automatic Speech Recognition (ASR), this task processes audio recordings of spoken words and transcribes them into textual form.",
    "module": "AI Foundations"
  },
  {
    "id": "AI_Foundations_2",
    "question": "Which is NOT an example of vision or image-related AI task?",
    "choices": [
      "Repair damaged images",
      "Facial recognition",
      "Classify images",
      "Identify objects in images"
    ],
    "correct": "Repair damaged images",
    "explanation": "While image restoration and repair involve working with images, it's not a typical core vision task. Vision AI focuses on identifying objects, classifying images, and facial recognition rather than image repair/restoration.",
    "module": "AI Foundations"
  },
  {
    "id": "AI_Foundations_3",
    "question": "Which type of machine learning is used in autonomous car driving?",
    "choices": [
      "Reinforcement Learning",
      "Natural language processing",
      "Unsupervised learning",
      "Supervised learning"
    ],
    "correct": "Reinforcement Learning",
    "explanation": "Reinforcement Learning (RL) trains agents to perform actions in an environment to maximize cumulative reward. In autonomous driving: Agent: The car, Environment: Road and surroundings, Reward: Safe/efficient navigation, obeying traffic rules, reaching destination",
    "module": "AI Foundations"
  },
  {
    "id": "AI_Foundations_4",
    "question": "Which task is a generative AI task?",
    "choices": [
      "Identifying the main topic of a news article",
      "Calculating the total word count in an article",
      "Writing a poem based on a given theme",
      "Detecting credit card fraud"
    ],
    "correct": "Writing a poem based on a given theme",
    "explanation": "Writing a poem based on a theme is generative AI - creating new creative content (text, images, music) from a given prompt or theme.",
    "module": "AI Foundations"
  },
  {
    "id": "AI_Foundations_5",
    "question": "Which type of Machine Learning algorithms extracts trends from data?",
    "choices": [
      "Unsupervised machine learning",
      "Natural language processing",
      "Supervised machine learning",
      "Reinforcement learning"
    ],
    "correct": "Unsupervised machine learning",
    "explanation": "Unsupervised machine learning extracts trends from unlabeled data. In contrast: Supervised learning: Uses labeled data to predict outcomes/classify, Reinforcement learning: Trains agents through trial and error for decision-making, Natural Language Processing: Field within ML for processing human language (not a type of ML algorithm)",
    "module": "AI Foundations"
  },

  // Machine Learning Foundations Skills Check Questions (5 questions)
  {
    "id": "Machine_Learning_Foundations_1",
    "question": "Which application does not require a machine learning solution?",
    "choices": [
      "Password validation",
      "Stock price predictions",
      "Detecting spam emails",
      "Customer segmentation"
    ],
    "correct": "Password validation",
    "explanation": "Password validation typically does not require a machine learning solution. Password validation is a straightforward process that involves checking whether a user-entered password matches the stored password on a server. This can be achieved through standard cryptographic techniques and rules without the need for machine learning.",
    "module": "Machine Learning Foundations"
  },
  {
    "id": "Machine_Learning_Foundations_2",
    "question": "What type of machine learning algorithm is used when we want to predict the resale price on a residential property?",
    "choices": [
      "Anomaly detection",
      "Multiclass classification",
      "Regression",
      "Binary classification"
    ],
    "correct": "Regression",
    "explanation": "Regression is the type of machine learning algorithm used when we want to predict continuous numerical values, such as the resale price of a residential property. In regression tasks, the goal is to learn a mapping between input features (e.g., square footage, number of bedrooms, location) and a continuous target variable (e.g., price).",
    "module": "Machine Learning Foundations"
  },
  {
    "id": "Machine_Learning_Foundations_3",
    "question": "Which type of function is used in logistic regression to predict a loan defaulter?",
    "choices": [
      "Gaussian function",
      "Step function",
      "Identity function",
      "Sigmoidal function"
    ],
    "correct": "Sigmoidal function",
    "explanation": "Logistic regression uses the sigmoidal (logistic) function to model the probability of binary outcomes. The sigmoidal function has an S-shaped curve that maps any input value to a value between 0 and 1, making it perfect for probability interpretation in binary classification tasks like loan default prediction.",
    "module": "Machine Learning Foundations"
  },
  {
    "id": "Machine_Learning_Foundations_4",
    "question": "Which algorithm is used for predicting continuous numerical values?",
    "choices": [
      "K-means clustering",
      "Linear regression",
      "Logistic regression",
      "Decision tree classification"
    ],
    "correct": "Linear regression",
    "explanation": "Linear regression is a regression algorithm used for predicting continuous numerical values by modeling the relationship between dependent and independent variables using a straight line. Logistic regression is actually for classification, not regression.",
    "module": "Machine Learning Foundations"
  },
  {
    "id": "Machine_Learning_Foundations_5",
    "question": "Which type of machine learning algorithm learns from outcomes to make decisions?",
    "choices": [
      "Reinforcement learning",
      "Unsupervised learning",
      "Natural language processing",
      "Supervised learning"
    ],
    "correct": "Reinforcement learning",
    "explanation": "Reinforcement learning is a type of machine learning algorithm that learns from outcomes to make decisions. An agent interacts with an environment, takes actions, and receives rewards or penalties, learning to maximize cumulative rewards over time through trial and error.",
    "module": "Machine Learning Foundations"
  },

  // Deep Learning Foundations Skills Check Questions (5 questions)
  {
    "id": "Deep_Learning_Foundations_1",
    "question": "Which type of Recurrent Neural Network (RNN) architecture is used for Machine Translation?",
    "choices": [
      "One-to-one",
      "One-to-many",
      "Many-to-many",
      "Many-to-one"
    ],
    "correct": "Many-to-many",
    "explanation": "Machine Translation involves translating a sentence or a sequence of text from one language to another, which is essentially a sequence-to-sequence problem. In Many-to-Many RNN architecture, the network takes a sequence of inputs and produces a sequence of outputs.",
    "module": "Deep Learning Foundations"
  },
  {
    "id": "Deep_Learning_Foundations_2",
    "question": "Which Neural Network has a feedback loop and is designed to handle sequential data?",
    "choices": [
      "Recurrent neural networks",
      "Convolutional neural networks",
      "Multi-layer perceptron neural networks",
      "Feed forward neural networks"
    ],
    "correct": "Recurrent neural networks",
    "explanation": "Recurrent Neural Networks (RNNs) are a type of neural network architecture that includes feedback connections. These feedback connections allow RNNs to process sequential data, such as time series, natural language, speech, and more.",
    "module": "Deep Learning Foundations"
  },
  {
    "id": "Deep_Learning_Foundations_3",
    "question": "How do hidden layers in neural networks help with character recognition?",
    "choices": [
      "Increasing the network's processing speed",
      "Directly mapping input characters to output predictions",
      "Enabling the network to learn complex features like edges and shapes",
      "Improving the interpretability of the model's decisions"
    ],
    "correct": "Enabling the network to learn complex features like edges and shapes",
    "explanation": "Hidden layers in neural networks are crucial for character recognition because they enable the network to learn and extract complex features and patterns, such as edges, shapes, and curves, which are essential for recognizing characters.",
    "module": "Deep Learning Foundations"
  },
  {
    "id": "Deep_Learning_Foundations_4",
    "question": "Which essential component of Artificial Neural Network performs weighted summation and applies activation function on input data to produce an output?",
    "choices": [
      "Neuron",
      "Classifier",
      "Iterator",
      "Bias"
    ],
    "correct": "Neuron",
    "explanation": "A neuron in an Artificial Neural Network is the fundamental building block responsible for performing weighted summation and applying an activation function to input data to produce an output.",
    "module": "Deep Learning Foundations"
  },
  {
    "id": "Deep_Learning_Foundations_5",
    "question": "Which sequence model can maintain relevant information over long sequences?",
    "choices": [
      "Convolutional neural networks",
      "Feed forward neural networks",
      "Long Short-Term Memory neural networks",
      "Recurrent neural networks"
    ],
    "correct": "Long Short-Term Memory neural networks",
    "explanation": "Long Short-Term Memory (LSTM) Neural Networks are the sequence model of choice when it comes to handling and maintaining relevant information over long sequences, making them particularly well-suited for tasks like language modeling, machine translation, and speech recognition.",
    "module": "Deep Learning Foundations"
  },

  // Generative AI and LLM Foundations Skills Check Questions (5 questions)
  {
    "id": "Generative_AI_and_LLM_Foundations_1",
    "question": "Which statement accurately describes generative AI?",
    "choices": [
      "Focuses on making accurate predictions based on training data",
      "Exclusively trains to predict future data patterns",
      "Creates new content without making predictions",
      "Limits functions to generating only text-based outputs"
    ],
    "correct": "Creates new content without making predictions",
    "explanation": "Generative AI is focused on creating new content or data rather than making predictions based on existing training data. It involves generating novel and meaningful outputs, such as images, text, music, or other forms of creative content.",
    "module": "Generative AI and LLM Foundations"
  },
  {
    "id": "Generative_AI_and_LLM_Foundations_2",
    "question": "Fine-tuning is unnecessary for Large Language Models (LLMs) if your application does not involve which specific aspect?",
    "choices": [
      "Domain vocabulary",
      "Task specific adaptation",
      "Efficiency & resource utilization",
      "Bias mitigation"
    ],
    "correct": "Task specific adaptation",
    "explanation": "Fine-tuning of Large Language Models (LLMs) is primarily performed to adapt the model to specific tasks or domains. If your application doesn't require task-specific adaptation, then fine-tuning may not be necessary.",
    "module": "Generative AI and LLM Foundations"
  },
  {
    "id": "Generative_AI_and_LLM_Foundations_3",
    "question": "What is \"in-context\" learning in the context of large language models (LLMs)?",
    "choices": [
      "Teaching the model through zero-shot learning",
      "Providing a few examples of a target task via the input prompt",
      "Modifying the behavior of a pretrained LLM permanently",
      "Training a model on a diverse range of tasks"
    ],
    "correct": "Providing a few examples of a target task via the input prompt",
    "explanation": "In-context learning refers to the capability of generative large language models (LLMs) to learn and perform new tasks without further training or fine-tuning. Instead of modifying the model permanently, users can guide the model's behavior by providing a few examples of the target task through the input prompt.",
    "module": "Generative AI and LLM Foundations"
  },
  {
    "id": "Generative_AI_and_LLM_Foundations_4",
    "question": "What aspect of Large Language Models significantly impacts their capabilities, performance, and requirements?",
    "choices": [
      "Number of training iterations performed during model training",
      "Total number of GPUs used for model training",
      "Complexity of the programming languages used for model development",
      "Model size and parameters, including the number of tokens and weights"
    ],
    "correct": "Model size and parameters, including the number of tokens and weights",
    "explanation": "The size and complexity of a language model, including the number of parameters (weights) and tokens have a profound impact on its capabilities and performance. Larger models with more parameters tend to have a better understanding of language and can generate more coherent and contextually relevant text.",
    "module": "Generative AI and LLM Foundations"
  },
  {
    "id": "Generative_AI_and_LLM_Foundations_5",
    "question": "Sequence models are used to solve problems involving sequentially ordered data points or events. Which is NOT the best use case for sequence models?",
    "choices": [
      "Speech recognition and language translation",
      "Natural language processing tasks like sentiment analysis",
      "Time series analysis and forecasting",
      "Image classification and object recognition"
    ],
    "correct": "Image classification and object recognition",
    "explanation": "Sequence models are indeed well-suited for tasks involving sequentially ordered data points or events, such as time series analysis, natural language processing, speech recognition, and language translation. However, for image classification and object recognition, traditional machine learning models and convolutional neural networks (CNNs) are more commonly used.",
    "module": "Generative AI and LLM Foundations"
  },

  // OCI AI Portfolio Skills Check Questions (5 questions)
  {
    "id": "OCI_AI_Portfolio_1",
    "question": "Which is NOT an Oracle Cloud Infrastructure AI service?",
    "choices": [
      "Speech",
      "Language", 
      "Translator",
      "Vision"
    ],
    "correct": "Translator",
    "explanation": "Oracle Cloud Infrastructure (OCI) offers various AI services, including Language, Speech, and Vision services. \"Translator\" is not a standalone AI service category offered by Oracle Cloud Infrastructure.",
    "module": "OCI AI Portfolio"
  },
  {
    "id": "OCI_AI_Portfolio_2",
    "question": "Which OCI Data Science feature allows you to use catalogued models as HTTP endpoints on fully managed infrastructure?",
    "choices": [
      "Conda environments",
      "Model deployments",
      "Jobs", 
      "Model catalog"
    ],
    "correct": "Model deployments",
    "explanation": "Model Deployments in OCI Data Science enable you to deploy your machine learning models as HTTP endpoints, making them accessible for real-time predictions and inferences. You can easily deploy, manage, and scale these models on fully managed infrastructure.",
    "module": "OCI AI Portfolio"
  },
  {
    "id": "OCI_AI_Portfolio_3", 
    "question": "Which OCI Data Science feature enables you to define and run repeatable machine learning tasks on fully managed infrastructure?",
    "choices": [
      "Model detection",
      "Model catalog",
      "Jobs",
      "Conda environments"
    ],
    "correct": "Jobs",
    "explanation": "Jobs in OCI Data Science allow you to define and run repeatable machine learning tasks and workflows. You can create and execute specific operations, such as data preprocessing, model training, model evaluation, and more, using Jobs.",
    "module": "OCI AI Portfolio"
  },
  {
    "id": "OCI_AI_Portfolio_4",
    "question": "What is the advantage of using OCI Superclusters for AI workloads?",
    "choices": [
      "Deliver exceptional performance and scalability for complex AI tasks",
      "Offer seamless integrations with social media platforms",
      "Provide a cost-effective solution for simple AI tasks",
      "Are ideal for tasks like speech-to-text conversion"
    ],
    "correct": "Deliver exceptional performance and scalability for complex AI tasks",
    "explanation": "OCI AI Superclusters are specifically designed to handle demanding AI workloads that require significant computational power and scalability. They are optimized to provide high performance for complex tasks like training large machine learning models, deep learning, and other compute-intensive AI tasks.",
    "module": "OCI AI Portfolio"
  },
  {
    "id": "OCI_AI_Portfolio_5",
    "question": "Which data type is used in Oracle Database 23ai to compare documents?",
    "choices": [
      "Vector",
      "Array", 
      "String",
      "Boolean"
    ],
    "correct": "Vector",
    "explanation": "VECTOR data type to store vectors directly in Oracle Database 23ai.",
    "module": "OCI AI Portfolio"
  },

  // OCI Generative AI Services Skills Check Questions (5 questions)
  {
    "id": "OCI_Generative_AI_Services_1",
    "question": "Which key feature allows AI Vector Search to store embeddings in Oracle Database 23ai?",
    "choices": [
      "VECTOR datatype",
      "JSON object storage",
      "Image datatype", 
      "Graph-based indexing"
    ],
    "correct": "VECTOR datatype",
    "explanation": "The VECTOR datatype in Oracle Database 23ai is specifically designed to store embeddings for AI Vector Search. This datatype allows efficient storage and retrieval of high-dimensional numerical representations of data, enabling similarity searches for AI and machine learning applications.",
    "module": "OCI Generative AI Services"
  },
  {
    "id": "OCI_Generative_AI_Services_2",
    "question": "What is the primary purpose of the OCI Playground in Generative AI?",
    "choices": [
      "To deploy AI models for production use",
      "To manage GPU-based compute resources for AI training",
      "To visually explore and test pre-trained and fine-tuned models without writing code",
      "To store embeddings for AI Vector Search"
    ],
    "correct": "To visually explore and test pre-trained and fine-tuned models without writing code",
    "explanation": "The OCI Playground allows users to test prompts, refine parameters, and experiment with models before integrating them into applications, all without writing code.",
    "module": "OCI Generative AI Services"
  },
  {
    "id": "OCI_Generative_AI_Services_3",
    "question": "How do chat models in OCI Generative AI differ from embedding models?",
    "choices": [
      "Both chat and embedding models perform the same function",
      "Embedding models generate text responses, while chat models focus on vector representations",
      "Chat models generate text, while embedding models convert text into numerical representations",
      "Chat models are for search queries, while embedding models process images"
    ],
    "correct": "Chat models generate text, while embedding models convert text into numerical representations",
    "explanation": "Chat models generate human-like responses, while embedding models convert text into vectors for semantic search and similarity analysis.",
    "module": "OCI Generative AI Services"
  },
  {
    "id": "OCI_Generative_AI_Services_4",
    "question": "Your company wants to fine-tune a pre-trained LLM to better respond to customer queries related to travel bookings. What resource is required in OCI for this fine-tuning?",
    "choices": [
      "AI Vision service",
      "Model catalog",
      "Object storage bucket",
      "Dedicated AI cluster"
    ],
    "correct": "Dedicated AI cluster",
    "explanation": "Dedicated AI Clusters provide GPU-based compute resources required to fine-tune a pre-trained model for specific tasks like customer support.",
    "module": "OCI Generative AI Services"
  },
  {
    "id": "OCI_Generative_AI_Services_5",
    "question": "What is the purpose of model endpoints in OCI Generative AI?",
    "choices": [
      "To host and serve fine-tuned models for inference",
      "To store embeddings for AI Vector Search",
      "To automatically scale AI compute resources",
      "To manage network security for applications"
    ],
    "correct": "To host and serve fine-tuned models for inference",
    "explanation": "Model endpoints allow deployed models to be accessed via an API for real-time inference, making them available for AI applications.",
    "module": "OCI Generative AI Services"
  },

  // OCI AI Services Skills Check Questions (4 questions)
  {
    "id": "OCI_AI_Services_1",
    "question": "Which OCI AI service is used to extract tabular content from documents?",
    "choices": [
      "Speech",
      "Object Storage",
      "Vision",
      "Language"
    ],
    "correct": "Vision",
    "explanation": "You can organize and extract text and structure from image-based documents and PDFs by calling the Document AI pretrained models with a single request in OCI Vision.",
    "module": "OCI AI Services"
  },
  {
    "id": "OCI_AI_Services_2",
    "question": "Which capability is offered by the OCI Language service?",
    "choices": [
      "Speech-to-text conversion",
      "Object detection",
      "Text sentiment analysis",
      "Image recognition"
    ],
    "correct": "Text sentiment analysis",
    "explanation": "OCI Language Service is a natural language processing (NLP) service. This service allows you to analyze text data and determine the sentiment or emotional tone expressed in the text.",
    "module": "OCI AI Services"
  },
  {
    "id": "OCI_AI_Services_3",
    "question": "Which language is not supported by the OCI Speech service?",
    "choices": [
      "Portuguese",
      "Mandarin",
      "Spanish",
      "English"
    ],
    "correct": "Mandarin",
    "explanation": "OCI Speech supports English, Spanish, and Portuguese.",
    "module": "OCI AI Services"
  },
  {
    "id": "OCI_AI_Services_4",
    "question": "Which capability of OCI Vision service uses a bounding box inside an image?",
    "choices": [
      "Object repair",
      "Object detection",
      "Image recognition",
      "Image classification"
    ],
    "correct": "Object detection",
    "explanation": "Object Detection is a computer vision task that involves identifying and locating objects within an image. It not only recognizes the presence of objects but also provides information about their location in the image through the use of bounding boxes.",
    "module": "OCI AI Services"
  },

  // Practice Exam Questions (40 questions)
  {
    "id": "Practice_Exam_1",
    "question": "What is the role of a target variable in supervised learning?",
    "choices": [
      "it represents the input data",
      "it contains the desired output or class labels",
      "it is used to split the dataset",
      "it helps in feature selection"
    ],
    "correct": "it contains the desired output or class labels",
    "explanation": "The target variable refers to desired outcome. It could be a numerical value or a label. e.g. spam or not spam or predicted rainfall in milimeters.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_2",
    "question": "Which technique involves providing explicit examples in a prompt to guide an LLM's response?",
    "choices": [
      "self-supervised learning",
      "zero-shot learning",
      "few-shot prompting",
      "chain-of-thought prompting"
    ],
    "correct": "few-shot prompting",
    "explanation": "Few-shot prompting involves giving k examples of a task before asking the model to generate an answer, helping improve its performance. For example, showing translations before requesting a new one.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_3",
    "question": "You are training a deep learning model to predict stock prices. What type of data is this an example of?",
    "choices": [
      "time series data",
      "image data",
      "text data",
      "sequential data"
    ],
    "correct": "time series data",
    "explanation": "Stock data consist of a series time stamp and a stock price pairs. hence it is considered as a time series data.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_4",
    "question": "T-Few fine-tuning in OCI Generative AI Service reduces cost and training time as compared to traditional fine-tuning. Which statement correctly explains the reason behind it?",
    "choices": [
      "it does not allow customizations of retrained models",
      "it requires manually configuring each layer of the model for optimization",
      "it selectively updated only a fraction of the model's weights",
      "it trains the entire model from scratch for each task"
    ],
    "correct": "it selectively updated only a fraction of the model's weights",
    "explanation": "T-Few fine-tuning adds new layers to the pre-trained model and modifies only a fraction of the model s weights, significantly reducing the time and cost compared to full fine-tuning.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_5",
    "question": "A company wants to automate its email filtering system to reduce spam. Which AI technique would you recommend?",
    "choices": [
      "deep learning",
      "reinforcement learning",
      "machine learning",
      "natural language processing"
    ],
    "correct": "machine learning",
    "explanation": "Detecting spam is a classification problem. Hence Machine Learning can be used for Supervised Machine Learning.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_6",
    "question": "John works in a news aggregation platform and wants to automatically categorize articles into topics like \"politics\", \"technology\", and \"sports\". Which feature of OCI Language would help him?",
    "choices": [
      "language detection",
      "named entity recognition",
      "sentiment analysis",
      "text classification"
    ],
    "correct": "text classification",
    "explanation": "The text classification feature of OCI Language is the best choice. It assigns content to one of 600+ categories.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_7",
    "question": "Which statement best describes the primary difference between Large Language Models (LLMs) and traditional Machine Learning (ML) models?",
    "choices": [
      "LLMs require extensive training, while traditional ML models can generate human-like text with minimal feature engineering",
      "LLMs are retrained on a large text corpus where ML models need to be trained on custom data",
      "Traditional ML models are better at understanding and generating natural language, while LLMs are primarily used for numerical data analysis",
      "LLMs have a limited number of parameters compared to ML models"
    ],
    "correct": "LLMs are retrained on a large text corpus where ML models need to be trained on custom data",
    "explanation": "Large Language Models (LLMs) are trained on massive datasets containing diverse text sources, enabling them to generalize across a wide range of language tasks. In contrast, traditional ML models often require training on specific, task-oriented datasets and may not generalize as well across different domains without retraining.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_8",
    "question": "John needs to analyze the accuracy of OCI Speech transcriptions for a legal case. He wants to evaluate how sure the model is about each word in the transcription. Which feature should he use?",
    "choices": [
      "normalization",
      "batch support",
      "profanity filtering",
      "confidence scoring"
    ],
    "correct": "confidence scoring",
    "explanation": "To analyze accuracy, confidence scoring is the best option. It provides word-by-word and overall transcription confidence levels.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_9",
    "question": "A self-driving car needs to detect pedestrians and make safe lane changes. Which AI concept is being applied here?",
    "choices": [
      "artificial intelligence",
      "machine learning",
      "deep learning",
      "natural language processing"
    ],
    "correct": "artificial intelligence",
    "explanation": "Detecting pedestrians and making lane changes is similar to a human behaviour. Hence the answer is Artificial Intelligence.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_10",
    "question": "David is transcribing a custom support call using OCI Speech. The call contains some profane language, and he wants to retain the original words but mark them as inappropriate rather than discarding them. Which profanity filtering option should David use?",
    "choices": [
      "tagging",
      "removing",
      "normalization",
      "masking"
    ],
    "correct": "tagging",
    "explanation": "To retain the words but mark them, tagging is the correct choice. This method leaves the words in place while adding labels to indicate profanity.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_11",
    "question": "Which of these is NOT a common application of unsupervised machine learning?",
    "choices": [
      "outlier detection",
      "customer segmentation",
      "spam detection",
      "targeted marketing campaigns"
    ],
    "correct": "spam detection",
    "explanation": "Spam detection is a supervised machine learning problem and NOT a unsupervised learning example.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_12",
    "question": "You are working on a deep learning project to generate music. Which type of neural network is best suited for this task?",
    "choices": [
      "convolutional neural network (CNN)",
      "auto encoder",
      "feedforward neural network (FNN)",
      "recurrent neural network (RNN)"
    ],
    "correct": "recurrent neural network (RNN)",
    "explanation": "Predicting a next note in music needs context of prior notes. For this RNN is well suited.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_13",
    "question": "What is the role of the loss function in supervised learning algorithms?",
    "choices": [
      "it helps in feature scaling",
      "it evaluates the model's complexity",
      "it measures the similarity between actual predictions and actual targets",
      "it quantifies the cost of incorrect predictions"
    ],
    "correct": "it quantifies the cost of incorrect predictions",
    "explanation": "Loss function checks what is the difference between actual value and predicted value.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_14",
    "question": "What technique is used to predict the price of a house based on its features?",
    "choices": [
      "regression",
      "time series analysis",
      "classification",
      "clustering"
    ],
    "correct": "regression",
    "explanation": "Predicting a house price which is a numerical value is an example of a supervised machine learning, more specifically Regression algorithm.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_15",
    "question": "What is the primary function of the inference process in machine learning?",
    "choices": [
      "adjusting the weights of a neural network",
      "predicting outcomes from new data points",
      "collecting training data",
      "labeling the training data"
    ],
    "correct": "predicting outcomes from new data points",
    "explanation": "Inference refers to predicting an outcome given an input using a trained model.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_16",
    "question": "John has successfully trained a machine learning model using OCI. He now needs to deploy it for real-time predictions where it can process user inputs and generate responses. Which OCI service should he use for deployment?",
    "choices": [
      "OCI Language",
      "OCI Object Storage",
      "OCI Data Science",
      "OCI Speech"
    ],
    "correct": "OCI Data Science",
    "explanation": "Once a model is trained, it needs to be deployed for real-time inferencing using OCI Data Science and GPU Compute. This allows the model to process new data efficiently.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_17",
    "question": "A streaming service wants to recommend TV shows based on user behavior. Which machine learning approach should be used?",
    "choices": [
      "deep learning",
      "supervised learning",
      "unsupervised learning",
      "reinforcement learning"
    ],
    "correct": "supervised learning",
    "explanation": "Recommendations are given based on the user's past choices or similar user or product choices. Hence it is an example of a Supervised Machine Learning.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_18",
    "question": "What type of data is most likely to be used with deep learning algorithms?",
    "choices": [
      "time series data",
      "only string data",
      "data with human interpretable features",
      "complex data with non-human interpretable features"
    ],
    "correct": "complex data with non-human interpretable features",
    "explanation": "Deep Learning is suitable for complex data like images, audio or video. These type of data is usually not human interpretable. e.g. if we pick a few pixels out of the image , we may or may not be interpret these individually.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_19",
    "question": "You're developing an image classification software that can identify specific objects. Which AI subset would you use?",
    "choices": [
      "deep learning",
      "natural language processing",
      "machine learning",
      "reinforcement learning"
    ],
    "correct": "deep learning",
    "explanation": "Object detection is implemented using Deep Learning. Hence the answer is Deep Learning.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_20",
    "question": "Mark is analyzing customer receipts and wants to automatically find and save details such as merchant name, transaction date, and total amount for record keeping. Which OCI Vision feature should he use?",
    "choices": [
      "key-value extraction",
      "OCR (Optical Character Recognition)",
      "Document classification",
      "Table extraction"
    ],
    "correct": "key-value extraction",
    "explanation": "To extract specific values from receipts, key-value extraction is the best feature, as it identifies and extracts predefined fields like merchant name and transaction date.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_21",
    "question": "You are training a deep learning model to recognize faces. What type of neural network is best suited for this task?",
    "choices": [
      "feedforward neural network (FNN)",
      "convolutional neural network (CNN)",
      "autoencoder",
      "recurrent neural network (RNN)"
    ],
    "correct": "convolutional neural network (CNN)",
    "explanation": "Face recognition is based on the feature extraction given an image. CNN is well suited for this purpose.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_22",
    "question": "You are writing poems. You need your computer to help you complete your lines by suggesting right words. Which deep learning model is best suited for this task?",
    "choices": [
      "recurrent neural networks (RNN)",
      "convolutional neural networks (CNN)",
      "generative adversarial network (GAN)",
      "variational autoencoder (VAE)"
    ],
    "correct": "recurrent neural networks (RNN)",
    "explanation": "Prediction of a next word given a sequence of words needs to use a context of prior words in a sequence. RNN is well suited for this",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_23",
    "question": "How does Oracle Database 23ai allow the use of pretrained AI models for vector search?",
    "choices": [
      "by restricting to only Oracle-provided APIs",
      "by loading ONNX models directly into the database",
      "by manually converting AI models into SQL queries",
      "by storing only raw image files for direct comparison"
    ],
    "correct": "by loading ONNX models directly into the database",
    "explanation": "Oracle Database 23ai allows ONNX models to be loaded into the database, enabling vector embedding generation and similarity searches.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_24",
    "question": "Which algorithm in a non-parametric approach for supervised learning?",
    "choices": [
      "decision trees",
      "k-nearest neighbors (KNN)",
      "linear regression",
      "random forest"
    ],
    "correct": "k-nearest neighbors (KNN)",
    "explanation": "K-Nearest Neighbors (KNN) is considered a non-parametric algorithm: Unlike parametric models (e.g., linear regression, neural networks), KNN doesn't have any parameters that need to be learned from the data. The only parameter to tune is the number of nearest neighbors (K).",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_25",
    "question": "Which of these summarizes the three guiding principles for AI to be trustworthy?",
    "choices": [
      "AI should replace human oversight, be independent, and highly scalable",
      "AI should be fast, unbiased, and autonomous",
      "AI should be lawful, ethical, and robust",
      "AI should be cost-effective, cloud-based, and user-friendly"
    ],
    "correct": "AI should be lawful, ethical, and robust",
    "explanation": "For AI to be trustworthy, it must comply with laws and regulations (lawful), adhere to ethical values (ethical), and be reliable both technically and socially (robust).",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_26",
    "question": "Which OCI Vision feature is useful for identifying whether a document is an invoice, receipt, or resume, based on its appearance and keywords?",
    "choices": [
      "table extraction",
      "document classification",
      "OCR (Optical Character Recognition)",
      "Image classification"
    ],
    "correct": "document classification",
    "explanation": "Document classification helps categorize documents based on their visual structure and extracted keywords, making it useful for recognizing invoices, receipts, and resumes.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_27",
    "question": "You need a suitable GPU for small or medium scale AI training and inference workloads. Which NVIDIA GPU you are most likely to use?",
    "choices": [
      "A100",
      "B200",
      "H200",
      "GB200"
    ],
    "correct": "A100",
    "explanation": "The NVIDIA A100 GPU is widely used for small to medium-scale AI training and inference workloads, offering high-performance compute capabilities, tensor cores, and scalability. While H200 is a newer high-memory variant, the A100 remains a strong choice for efficient AI workloads.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_28",
    "question": "How does normalization improve the readability of transcripts in OCI Speech?",
    "choices": [
      "it translates transcriptions into multiple languages",
      "it replaces all uppercase letters with lowercase",
      "it removes unnecessary words from the transcription",
      "it converts elements like numbers, dates, and URLs into standard readable format"
    ],
    "correct": "it converts elements like numbers, dates, and URLs into standard readable format",
    "explanation": "Normalization ensures that addresses, times, numbers, and URLs are formatted correctly, making the text more readable and suitable for further processing.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_29",
    "question": "How does Select AI enhance the interaction with Oracle Autonomous Database?",
    "choices": [
      "by enabling natural language prompts instead of SQL code",
      "by eliminating the need for database administrators",
      "by providing advanced data visualization tools",
      "by improving network security protocols"
    ],
    "correct": "by enabling natural language prompts instead of SQL code",
    "explanation": "Select AI simplifies database queries by allowing users to interact with Oracle Autonomous Database using natural language prompts instead of writing SQL code. This enables faster data retrieval and makes querying more accessible to non-technical users.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_30",
    "question": "What is the purpose of the Model Catalog in OCI Data Science?",
    "choices": [
      "it only stores raw datasets for training ML models",
      "it serves as a repository for storing, tracking, and managing machine learning models",
      "it is used to deploy models as API endpoints",
      "it functions as a real-time data processing engine"
    ],
    "correct": "it serves as a repository for storing, tracking, and managing machine learning models",
    "explanation": "The Model Catalog in OCI Data Science acts as a centralized repository where users can store, track, and share models with their team. It enables collaboration and easy retrieval of models for future use.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_31",
    "question": "You need a suitable GPU for massive-scale (HPC) AI training and inference workloads. Which NVIDIA GPU you are most likely to choose?",
    "choices": [
      "GB200",
      "A100",
      "A10",
      "H100"
    ],
    "correct": "GB200",
    "explanation": "The GB200 GPU is a next-generation Grace Blackwell GPU designed for exascale AI and HPC workloads, making it more suitable for massive-scale AI training rather than standard large-scale AI workloads.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_32",
    "question": "How does Select AI generate SQL queries from natural language questions?",
    "choices": [
      "it connects to an LLM, infers the query intent, and formulates the SQL command",
      "it only works with structures datasets that contain predefined SQL commands",
      "it requires user to manually input query parameters",
      "it provides the best SQL query based on predefined templates"
    ],
    "correct": "it connects to an LLM, infers the query intent, and formulates the SQL command",
    "explanation": "Select AI translates natural language into SQL by leveraging large language models (LLMs) to infer intent and construct the required SQL query.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_33",
    "question": "What is the purpose of the hidden layer in an artificial neural network?",
    "choices": [
      "this layer produces the final outputs of the neural network based on the processed information from the other layers",
      "this layer applies filters to the image data",
      "this layer receives and passes input data to the subsequent layers; it does not perform any computations",
      "this layer is optional, and it processes and transforms inputs from the network's weights and activation functions"
    ],
    "correct": "this layer is optional, and it processes and transforms inputs from the network's weights and activation functions",
    "explanation": "Hidden layers, take the input from input or other hidden layer and multiples it through weights and activations. Input layer accepts input and output layer outputs the final result.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_34",
    "question": "What role do tokens play in Large Language Models (LLMs)?",
    "choices": [
      "they are used to define the architecture of the model's neural network",
      "they are individual units into which a piece of text is divided during processing by the model",
      "they represent the numerical values of model parameters",
      "they determine the size of the model's memory"
    ],
    "correct": "they are individual units into which a piece of text is divided during processing by the model",
    "explanation": "Tokens are the fundamental units of text that Large Language Models (LLMs) process. A token can be a word, subword, or character, depending on the tokenization method used. The model interprets and generates text based on these tokens rather than entire sentences or paragraphs at once.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_35",
    "question": "What is the primary limitation of Recurrent Neural Networks (RNNs) when processing long sequences?",
    "choices": [
      "RNNs can only process numerical data, not text",
      "RNNs can only understand words that appear at the beginning of a sentence",
      "RNNs struggle with long-range dependencies due to the vanishing gradient problem",
      "RNNs process words in parallel, making them less efficient than transformers"
    ],
    "correct": "RNNs struggle with long-range dependencies due to the vanishing gradient problem",
    "explanation": "RNNs process text sequentially and struggle to retain context from distant words due to vanishing gradient issues. This limits their ability to capture long-range dependencies.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_36",
    "question": "What is the primary goal of fine-tuning a Large Language Model (LLM)?",
    "choices": [
      "to convert the model into different type of neural network architecture",
      "to train the model from scratch using a completely new dataset",
      "to decrease the number of parameters in the model to reduce computational cost",
      "to adjust the pertained model's parameters using a smaller, task-specific dataset, improving it performance on specific tasks"
    ],
    "correct": "to adjust the pertained model's parameters using a smaller, task-specific dataset, improving it performance on specific tasks",
    "explanation": "Fine-tuning involves adapting a pre-trained LLM to a specific domain or task by training it on a smaller, specialized dataset. This allows the model to retain its general knowledge while improving accuracy and relevance for particular applications.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_37",
    "question": "Which statement best describes the pretaining process of a Generative AI model?",
    "choices": [
      "it only memorizes examples and reproduces the exactly",
      "it learns from labeled data and maps inputs to corresponding labels",
      "it learns patterns in unstructured data without requiring labeled training data",
      "it exclusively relies on reinforcement learning from human feedback"
    ],
    "correct": "it learns patterns in unstructured data without requiring labeled training data",
    "explanation": "Generative AI models do not require labeled data in the pre-training stage. Instead, they learn patterns from vast amounts of unstructured data, enabling them to generate new, unique outputs.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_38",
    "question": "Emma works for a media company that produces video content for online platforms. She needs to add closed captions to their videos for accessibility. Which OCI Speech feature should Emma use?",
    "choices": [
      "batching support",
      "profanity filtering",
      "SRT file support",
      "confidence scoring"
    ],
    "correct": "SRT file support",
    "explanation": "For closed captions, OCI Speech s SRT file support is the best choice. This allows captions to be added easily to videos in industry-standard format.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_39",
    "question": "Lisa runs an automated security system that monitors parking lots using cameras. She wants to locate and label vehicles and license plates in each frame. Which OCI Vision feature should she use?",
    "choices": [
      "speech-to-text",
      "image classification",
      "document classification",
      "object detection"
    ],
    "correct": "object detection",
    "explanation": "To detect and label specific objects (vehicles and license plates) within images, object detection is the best choice.",
    "module": "Practice Exam"
  },
  {
    "id": "Practice_Exam_40",
    "question": "Which of these components is NOT a part of the OCI AI Infrastructure?",
    "choices": [
      "OCI Vault",
      "OCI Storage",
      "NVIDIA GPUs",
      "RDMA Network"
    ],
    "correct": "OCI Vault",
    "explanation": "OCI AI Infrastructure includes NVIDIA GPUs, OCI Storage, and RDMA Networking for high-performance AI and ML workloads. However, OCI Vault is primarily used for securing and managing cryptographic keys and secrets, not AI infrastructure.",
    "module": "Practice Exam"
  },

  // Review Questions from Study Guide
  {
    "id": "Review_1",
    "question": "What are the four components of the AI Stack?",
    "choices": [
      "Artificial Intelligence, Machine Learning, Deep Learning, Generative AI",
      "Data, Infrastructure, Services, Applications",
      "Vision, Language, Speech, Recommendations",
      "Supervised, Unsupervised, Reinforcement, Transfer Learning"
    ],
    "correct": "Artificial Intelligence, Machine Learning, Deep Learning, Generative AI",
    "explanation": "The AI Stack consists of four main components: Artificial Intelligence (broad field), Machine Learning (subset that learns from data), Deep Learning (subset using neural networks), and Generative AI (creates new content).",
    "module": "Review Questions"
  },
  {
    "id": "Review_2",
    "question": "What are the four layers of the Oracle AI Stack?",
    "choices": [
      "SaaS → AI Services → Data → Infrastructure",
      "Applications → Models → Training → Hardware",
      "Frontend → Backend → Database → Cloud",
      "Vision → Language → Speech → Analytics"
    ],
    "correct": "SaaS → AI Services → Data → Infrastructure",
    "explanation": "Oracle AI Stack has four layers from top to bottom: SaaS Applications (AI-powered apps), AI Services (pre-built capabilities), Data (management layer), and Infrastructure (compute/storage).",
    "module": "Review Questions"
  },
  {
    "id": "Review_3",
    "question": "What is the difference between AGI and AI?",
    "choices": [
      "AGI is older technology, AI is newer",
      "AGI replicates human intelligence capabilities, AI applies AGI to specific objectives",
      "AGI is for gaming, AI is for business",
      "AGI uses neural networks, AI uses traditional algorithms"
    ],
    "correct": "AGI replicates human intelligence capabilities, AI applies AGI to specific objectives",
    "explanation": "AGI (Artificial General Intelligence) aims to replicate broad human intelligence capabilities, while AI (Artificial Intelligence) applies AGI concepts to specific, narrow objectives and tasks.",
    "module": "Review Questions"
  },
  {
    "id": "Review_4",
    "question": "What are the eight AI domains?",
    "choices": [
      "Language, Vision, Speech, Recommendations, Anomaly Detection, Reward Learning, Forecasting, Content Generation",
      "Classification, Regression, Clustering, Association, Neural Networks, Decision Trees, SVM, Random Forest",
      "Supervised, Unsupervised, Reinforcement, Transfer, Meta, Few-shot, Zero-shot, Multi-task",
      "Text, Image, Audio, Video, Sensor, Structured, Unstructured, Time-series"
    ],
    "correct": "Language, Vision, Speech, Recommendations, Anomaly Detection, Reward Learning, Forecasting, Content Generation",
    "explanation": "The eight AI domains that replicate human intelligence capabilities are: Language, Vision, Speech, Recommendations, Anomaly Detection, Reward Learning, Forecasting, and Content Generation.",
    "module": "Review Questions"
  },
  {
    "id": "Review_5",
    "question": "What is tokenization and why is it needed?",
    "choices": [
      "Converting images to pixels for processing",
      "Converting words to numbers for model training",
      "Converting audio to digital format",
      "Converting data to encrypted format"
    ],
    "correct": "Converting words to numbers for model training",
    "explanation": "Tokenization is the process of converting words and text into numerical tokens that machine learning models can process, as models work with numbers rather than text directly.",
    "module": "Review Questions"
  },
  {
    "id": "Review_6",
    "question": "What are the three main types of machine learning?",
    "choices": [
      "Fast, Medium, Slow Learning",
      "Supervised, Unsupervised, Reinforcement Learning",
      "Linear, Non-linear, Deep Learning",
      "Classification, Regression, Clustering"
    ],
    "correct": "Supervised, Unsupervised, Reinforcement Learning",
    "explanation": "The three main types of machine learning are: Supervised Learning (uses labeled data), Unsupervised Learning (finds patterns in unlabeled data), and Reinforcement Learning (learns through rewards/penalties).",
    "module": "Review Questions"
  },
  {
    "id": "Review_7",
    "question": "What are the four main capabilities of Oracle Vision AI Service?",
    "choices": [
      "Image classification, Object detection, OCR, Face detection",
      "Image editing, Color correction, Resizing, Filtering",
      "Image storage, Backup, Compression, Encryption",
      "Image generation, Style transfer, Enhancement, Restoration"
    ],
    "correct": "Image classification, Object detection, OCR, Face detection",
    "explanation": "Oracle Vision AI Service provides four main capabilities: Image classification (categorizing images), Object detection (finding objects), OCR (text recognition), and Face detection (identifying faces).",
    "module": "Review Questions"
  },
  {
    "id": "Review_8",
    "question": "What is the difference between image classification and object detection?",
    "choices": [
      "Classification is faster, detection is more accurate",
      "Classification identifies what's in the image, detection finds where objects are located",
      "Classification works on small images, detection on large images",
      "Classification uses CNN, detection uses RNN"
    ],
    "correct": "Classification identifies what's in the image, detection finds where objects are located",
    "explanation": "Image classification identifies what category an entire image belongs to, while object detection locates and identifies multiple specific objects within an image with bounding boxes.",
    "module": "Review Questions"
  },
  {
    "id": "Review_9",
    "question": "What are the six types of analysis performed by Oracle Language AI text analysis?",
    "choices": [
      "Grammar, Spelling, Punctuation, Style, Tone, Readability",
      "Sentiment analysis, Key phrase extraction, Language detection, Text classification, Named entity recognition, PII detection",
      "Summarization, Translation, Generation, Completion, Paraphrasing, Question answering",
      "Tokenization, Stemming, Lemmatization, POS tagging, Parsing, Chunking"
    ],
    "correct": "Sentiment analysis, Key phrase extraction, Language detection, Text classification, Named entity recognition, PII detection",
    "explanation": "Oracle Language AI performs six types of text analysis: Sentiment analysis, Key phrase extraction, Language detection, Text classification, Named entity recognition, and PII (Personally Identifiable Information) detection.",
    "module": "Review Questions"
  },
  {
    "id": "Review_10",
    "question": "What characterizes supervised machine learning?",
    "choices": [
      "Uses unlabeled data to find patterns",
      "Uses labeled training data to learn input-output mappings",
      "Learns through trial and error with rewards",
      "Requires human supervision during inference"
    ],
    "correct": "Uses labeled training data to learn input-output mappings",
    "explanation": "Supervised learning uses labeled training data where both inputs and correct outputs are provided, allowing the model to learn the mapping between inputs and outputs for making predictions on new data.",
    "module": "Review Questions"
  },
  {
    "id": "Review_11",
    "question": "What is the difference between regression and classification in supervised learning?",
    "choices": [
      "Regression is faster than classification",
      "Regression predicts continuous values, classification predicts categories",
      "Regression uses neural networks, classification uses decision trees",
      "Regression works with images, classification with text"
    ],
    "correct": "Regression predicts continuous values, classification predicts categories",
    "explanation": "Regression predicts continuous numerical values (like house prices or temperatures), while classification predicts discrete categories or classes (like spam/not spam or dog/cat).",
    "module": "Review Questions"
  },
  {
    "id": "Review_12",
    "question": "What is reinforcement learning and how does it work?",
    "choices": [
      "Learning from labeled examples provided by teachers",
      "Finding hidden patterns in unlabeled data",
      "Learning through interaction with environment using rewards and penalties",
      "Copying behavior from other successful models"
    ],
    "correct": "Learning through interaction with environment using rewards and penalties",
    "explanation": "Reinforcement learning involves an agent learning to make decisions by interacting with an environment, receiving rewards for good actions and penalties for bad ones, gradually improving its strategy over time.",
    "module": "Review Questions"
  },
  {
    "id": "Review_13",
    "question": "What is generative AI and how does it differ from other AI types?",
    "choices": [
      "It only analyzes existing data without creating anything new",
      "It creates new content like text, images, or audio based on training patterns",
      "It only works with numerical data and calculations",
      "It requires constant human supervision to function"
    ],
    "correct": "It creates new content like text, images, or audio based on training patterns",
    "explanation": "Generative AI creates new content (text, images, audio, code) by learning patterns from training data, unlike discriminative AI which classifies or analyzes existing content.",
    "module": "Review Questions"
  },
  {
    "id": "Review_14",
    "question": "What is ASR and what does it do?",
    "choices": [
      "Automatic Speech Recognition - converts spoken language to text",
      "Advanced Signal Processing - enhances audio quality",
      "Artificial Speech Rendering - generates synthetic voices",
      "Audio Spectrum Reduction - compresses audio files"
    ],
    "correct": "Automatic Speech Recognition - converts spoken language to text",
    "explanation": "ASR (Automatic Speech Recognition) is the technology that converts spoken language into written text, enabling applications like voice assistants and transcription services.",
    "module": "Review Questions"
  },
  {
    "id": "Review_15",
    "question": "What is the sigmoid function and why is it important for classification?",
    "choices": [
      "It converts any input to a value between 0 and 1, representing probability",
      "It creates straight lines for linear relationships",
      "It generates random numbers for model training",
      "It calculates the distance between data points"
    ],
    "correct": "It converts any input to a value between 0 and 1, representing probability",
    "explanation": "The sigmoid function maps any real number to a value between 0 and 1, making it perfect for binary classification as the output can be interpreted as a probability.",
    "module": "Review Questions"
  },
  {
    "id": "Review_16",
    "question": "What are the three main core vision AI tasks?",
    "choices": [
      "Image editing, color correction, resizing",
      "Image classification, object detection, facial recognition",
      "Image storage, backup, compression",
      "Image generation, enhancement, restoration"
    ],
    "correct": "Image classification, object detection, facial recognition",
    "explanation": "The three main core vision AI tasks are: Image classification (categorizing entire images), Object detection (locating objects within images), and Facial recognition (identifying faces).",
    "module": "Review Questions"
  },
  {
    "id": "Review_17",
    "question": "What characterizes unsupervised machine learning?",
    "choices": [
      "Uses labeled training data with known outputs",
      "Uses unlabeled data to find hidden patterns",
      "Learns through rewards and penalties",
      "Requires constant human supervision"
    ],
    "correct": "Uses unlabeled data to find hidden patterns",
    "explanation": "Unsupervised learning works with unlabeled data (no known correct outputs) to discover hidden patterns, structures, or relationships in the data through techniques like clustering and association.",
    "module": "Review Questions"
  },
  {
    "id": "Review_18",
    "question": "How does a self-driving car demonstrate AI capabilities?",
    "choices": [
      "It only follows pre-programmed routes",
      "It uses reinforcement learning to navigate safely while maximizing rewards",
      "It relies entirely on human remote control",
      "It only works on specially marked roads"
    ],
    "correct": "It uses reinforcement learning to navigate safely while maximizing rewards",
    "explanation": "Self-driving cars use reinforcement learning where the car (agent) learns to navigate the environment (roads) by receiving rewards for safe driving and penalties for unsafe actions.",
    "module": "Review Questions"
  },
  {
    "id": "Review_19",
    "question": "What makes machine learning different from traditional rule-based systems?",
    "choices": [
      "ML systems are always faster than rule-based systems",
      "ML learns patterns from data instead of following pre-written rules",
      "ML systems never make mistakes",
      "ML only works with numerical data"
    ],
    "correct": "ML learns patterns from data instead of following pre-written rules",
    "explanation": "Machine learning systems learn patterns and make decisions based on training data, while traditional rule-based systems follow explicitly programmed if-then rules written by developers.",
    "module": "Review Questions"
  },
  {
    "id": "Review_20",
    "question": "What are the drawbacks of manual/rules-based credit card approval systems?",
    "choices": [
      "They are too expensive to implement",
      "They cannot handle complex patterns and require constant manual updates",
      "They process applications too quickly",
      "They only work with certain types of credit cards"
    ],
    "correct": "They cannot handle complex patterns and require constant manual updates",
    "explanation": "Rule-based systems struggle with complex patterns in data, require manual updates when conditions change, and cannot adapt to new scenarios without explicit programming modifications.",
    "module": "Review Questions"
  },
  {
    "id": "Review_21",
    "question": "What is functional approximation in the context of neural networks?",
    "choices": [
      "Estimating the cost of running neural networks",
      "Learning to approximate complex mathematical functions from data",
      "Calculating the size of neural network architectures",
      "Measuring the accuracy of neural network predictions"
    ],
    "correct": "Learning to approximate complex mathematical functions from data",
    "explanation": "Functional approximation refers to neural networks' ability to learn and approximate complex mathematical functions by finding patterns in training data, enabling them to make predictions on new inputs.",
    "module": "Review Questions"
  },
  {
    "id": "Review_22",
    "question": "What types of content can generative AI create?",
    "choices": [
      "Only text documents",
      "Text, images, audio, code, and other creative content",
      "Only numerical calculations",
      "Only data analysis reports"
    ],
    "correct": "Text, images, audio, code, and other creative content",
    "explanation": "Generative AI can create diverse types of content including text (articles, stories), images (artwork, photos), audio (music, speech), code (programs), and other creative outputs.",
    "module": "Review Questions"
  },
  {
    "id": "Review_23",
    "question": "Which type of machine learning extracts trends from unlabeled data?",
    "choices": [
      "Supervised learning",
      "Unsupervised learning",
      "Reinforcement learning",
      "Transfer learning"
    ],
    "correct": "Unsupervised learning",
    "explanation": "Unsupervised learning specializes in finding trends, patterns, and structures in unlabeled data without knowing the correct outputs, using techniques like clustering and dimensionality reduction.",
    "module": "Review Questions"
  },
  {
    "id": "Review_24",
    "question": "Is Natural Language Processing a type of machine learning algorithm?",
    "choices": [
      "Yes, NLP is a specific ML algorithm",
      "No, NLP is an application domain that uses various ML algorithms",
      "Yes, but only for text classification",
      "No, NLP only uses rule-based approaches"
    ],
    "correct": "No, NLP is an application domain that uses various ML algorithms",
    "explanation": "NLP (Natural Language Processing) is an application domain focused on understanding and generating human language, which uses various ML algorithms like neural networks, transformers, and statistical models.",
    "module": "Review Questions"
  },
  {
    "id": "Review_25",
    "question": "What are four everyday examples of machine learning applications?",
    "choices": [
      "Email spam detection, product recommendations, voice assistants, image recognition",
      "Word processing, spreadsheets, presentations, databases",
      "Web browsing, file management, system updates, antivirus",
      "Video streaming, music players, photo editors, games"
    ],
    "correct": "Email spam detection, product recommendations, voice assistants, image recognition",
    "explanation": "Common ML applications include: Email spam detection (classification), Product recommendations (collaborative filtering), Voice assistants (speech recognition/NLP), and Image recognition (computer vision).",
    "module": "Review Questions"
  },
  {
    "id": "Review_26",
    "question": "What data does Netflix use to recommend movies and shows?",
    "choices": [
      "Only the user's age and location",
      "Viewing history, ratings, time spent watching, similar user preferences",
      "Only the most popular content globally",
      "Random selection from available content"
    ],
    "correct": "Viewing history, ratings, time spent watching, similar user preferences",
    "explanation": "Netflix uses collaborative filtering and content-based filtering with data including viewing history, user ratings, time spent watching, genre preferences, and behavior patterns of similar users.",
    "module": "Review Questions"
  },
  {
    "id": "Review_27",
    "question": "What are the key input features used to distinguish cats from dogs in ML?",
    "choices": [
      "Only the color of the animal",
      "Ear shape, facial features, body proportions, fur patterns",
      "Only the size of the animal",
      "Only the background of the image"
    ],
    "correct": "Ear shape, facial features, body proportions, fur patterns",
    "explanation": "ML models use multiple visual features to distinguish cats from dogs including ear shape (pointed vs floppy), facial structure, body proportions, fur patterns, and other distinctive characteristics.",
    "module": "Review Questions"
  },
  {
    "id": "Review_28",
    "question": "What happens during the training phase of machine learning?",
    "choices": [
      "The model makes predictions on new data",
      "The model learns patterns by adjusting parameters based on training data",
      "The model is deployed to production",
      "The model is tested for accuracy"
    ],
    "correct": "The model learns patterns by adjusting parameters based on training data",
    "explanation": "During training, the ML model iteratively adjusts its internal parameters (weights and biases) by learning from training data to minimize prediction errors and capture underlying patterns.",
    "module": "Review Questions"
  },
  {
    "id": "Review_29",
    "question": "What is inference in machine learning?",
    "choices": [
      "The process of training the model",
      "The process of using a trained model to make predictions on new data",
      "The process of collecting training data",
      "The process of evaluating model performance"
    ],
    "correct": "The process of using a trained model to make predictions on new data",
    "explanation": "Inference is the phase where a trained ML model applies its learned patterns to make predictions or classifications on new, previously unseen data.",
    "module": "Review Questions"
  },
  {
    "id": "Review_30",
    "question": "What are the four main steps in the supervised learning workflow?",
    "choices": [
      "Data collection, model training, evaluation, deployment",
      "Planning, coding, testing, maintenance",
      "Input, processing, output, feedback",
      "Analysis, design, implementation, testing"
    ],
    "correct": "Data collection, model training, evaluation, deployment",
    "explanation": "The supervised learning workflow consists of: 1) Data collection and preparation, 2) Model training on labeled data, 3) Evaluation of model performance, 4) Deployment for making predictions.",
    "module": "Review Questions"
  },
  {
    "id": "Review_31",
    "question": "What is binary classification and give examples?",
    "choices": [
      "Classification with exactly two possible output categories, like spam/not spam, pass/fail",
      "Classification using only binary (0,1) input data",
      "Classification that takes exactly two input features",
      "Classification that runs on binary computer systems"
    ],
    "correct": "Classification with exactly two possible output categories, like spam/not spam, pass/fail",
    "explanation": "Binary classification predicts one of exactly two possible categories or classes, such as spam/not spam emails, pass/fail exams, or fraud/legitimate transactions.",
    "module": "Review Questions"
  },
  {
    "id": "Review_32",
    "question": "What is multi-class classification and give examples?",
    "choices": [
      "Classification with more than two possible output categories, like flower species or image categories",
      "Classification using multiple different algorithms",
      "Classification that requires multiple training datasets",
      "Classification performed by multiple models simultaneously"
    ],
    "correct": "Classification with more than two possible output categories, like flower species or image categories",
    "explanation": "Multi-class classification predicts one of three or more possible categories, such as classifying flower species (iris, rose, tulip) or image categories (cat, dog, bird, car).",
    "module": "Review Questions"
  },
  {
    "id": "Review_33",
    "question": "What is the Iris dataset and why is it important?",
    "choices": [
      "A dataset of 150 iris flowers with 4 features, used as a classic ML example",
      "A database of eye color measurements",
      "A collection of camera lens specifications",
      "A dataset of rainbow color measurements"
    ],
    "correct": "A dataset of 150 iris flowers with 4 features, used as a classic ML example",
    "explanation": "The Iris dataset contains 150 iris flower samples with 4 measurements (sepal/petal length/width) across 3 species, making it a perfect introductory dataset for learning classification algorithms.",
    "module": "Review Questions"
  },
  {
    "id": "Review_34",
    "question": "What is Anaconda and what is its main purpose?",
    "choices": [
      "A Python web framework for building applications",
      "A data science platform that manages packages and environments",
      "A machine learning algorithm for classification",
      "A cloud computing service for AI"
    ],
    "correct": "A data science platform that manages packages and environments",
    "explanation": "Anaconda is a comprehensive data science platform that simplifies package management, environment isolation, and provides tools like Jupyter Notebook for Python and R development.",
    "module": "Review Questions"
  },
  {
    "id": "Review_35",
    "question": "What is Jupyter Notebook and what does IDE stand for?",
    "choices": [
      "A text editor; IDE stands for Internet Development Environment",
      "An interactive development environment; IDE stands for Integrated Development Environment",
      "A database system; IDE stands for Information Data Exchange",
      "A web browser; IDE stands for Interactive Display Engine"
    ],
    "correct": "An interactive development environment; IDE stands for Integrated Development Environment",
    "explanation": "Jupyter Notebook is an interactive IDE (Integrated Development Environment) that allows combining code, text, equations, and visualizations in a single document for data science work.",
    "module": "Review Questions"
  },
  {
    "id": "Review_36",
    "question": "What are the five steps in a typical machine learning process?",
    "choices": [
      "Data collection, preprocessing, model training, evaluation, deployment",
      "Planning, analysis, coding, testing, maintenance",
      "Input, transformation, processing, output, feedback",
      "Research, design, development, testing, release"
    ],
    "correct": "Data collection, preprocessing, model training, evaluation, deployment",
    "explanation": "The typical ML process includes: 1) Data collection and preparation, 2) Data preprocessing and cleaning, 3) Model training, 4) Model evaluation and validation, 5) Model deployment and monitoring.",
    "module": "Review Questions"
  },
  {
    "id": "Review_37",
    "question": "What is pandas used for and how is it commonly aliased?",
    "choices": [
      "Image processing; aliased as 'cv'",
      "Data manipulation and analysis; aliased as 'pd'",
      "Machine learning algorithms; aliased as 'ml'",
      "Web development; aliased as 'web'"
    ],
    "correct": "Data manipulation and analysis; aliased as 'pd'",
    "explanation": "Pandas is a Python library for data manipulation and analysis, providing data structures like DataFrames. It's commonly imported as 'pd' (import pandas as pd).",
    "module": "Review Questions"
  },
  {
    "id": "Review_38",
    "question": "What is scikit-learn and what tools does it provide?",
    "choices": [
      "A web framework providing HTML and CSS tools",
      "A machine learning library providing algorithms and evaluation tools",
      "A database system providing SQL tools",
      "A visualization library providing plotting tools"
    ],
    "correct": "A machine learning library providing algorithms and evaluation tools",
    "explanation": "Scikit-learn is a comprehensive Python machine learning library that provides classification, regression, clustering algorithms, and tools for model evaluation and data preprocessing.",
    "module": "Review Questions"
  },
  {
    "id": "Review_39",
    "question": "What does the .head() method do and why is it useful?",
    "choices": [
      "Calculates statistical summaries of the data",
      "Displays the first few rows of a dataset for quick inspection",
      "Sorts the data in ascending order",
      "Removes missing values from the dataset"
    ],
    "correct": "Displays the first few rows of a dataset for quick inspection",
    "explanation": "The .head() method displays the first 5 rows (by default) of a DataFrame, allowing quick inspection of data structure, column names, and sample values without loading the entire dataset.",
    "module": "Review Questions"
  },
  {
    "id": "Review_40",
    "question": "What is the difference between features (X) and labels (y) in machine learning?",
    "choices": [
      "Features are outputs, labels are inputs",
      "Features are input variables used for prediction, labels are the target outputs to predict",
      "Features are categorical, labels are numerical",
      "Features are training data, labels are test data"
    ],
    "correct": "Features are input variables used for prediction, labels are the target outputs to predict",
    "explanation": "Features (X) are the input variables or attributes used to make predictions, while labels (y) are the target outputs or outcomes that the model is trying to predict.",
    "module": "Review Questions"
  },
  {
    "id": "Review_41",
    "question": "What method is used to train a machine learning model in scikit-learn?",
    "choices": [
      ".predict() method",
      ".fit() method",
      ".transform() method",
      ".score() method"
    ],
    "correct": ".fit() method",
    "explanation": "The .fit() method is used to train machine learning models in scikit-learn. It takes the training features (X) and labels (y) as inputs and adjusts the model's parameters to learn patterns.",
    "module": "Review Questions"
  },
  {
    "id": "Review_42",
    "question": "What method is used to make predictions with a trained model?",
    "choices": [
      ".fit() method",
      ".predict() method",
      ".train() method",
      ".evaluate() method"
    ],
    "correct": ".predict() method",
    "explanation": "The .predict() method is used to make predictions on new data using a trained model. It takes new feature data as input and returns the model's predictions.",
    "module": "Review Questions"
  },
  {
    "id": "Review_43",
    "question": "What is the goal of the iterative parameter adjustment process in ML?",
    "choices": [
      "To make the model run faster",
      "To minimize prediction errors by finding optimal weights and biases",
      "To reduce the size of the dataset",
      "To increase the complexity of the model"
    ],
    "correct": "To minimize prediction errors by finding optimal weights and biases",
    "explanation": "The iterative parameter adjustment process aims to minimize prediction errors (loss) by finding the optimal values for model parameters (weights and biases) through techniques like gradient descent.",
    "module": "Review Questions"
  },
  {
    "id": "Review_44",
    "question": "What is the standard audio sample rate and what does it mean?",
    "choices": [
      "44.1 kHz - 44,100 audio samples captured per second",
      "22 kHz - 22,000 audio samples captured per second",
      "16 kHz - 16,000 audio samples captured per second",
      "8 kHz - 8,000 audio samples captured per second"
    ],
    "correct": "44.1 kHz - 44,100 audio samples captured per second",
    "explanation": "The standard audio sample rate is 44.1 kHz, meaning 44,100 discrete audio samples are captured per second. This rate captures frequencies up to about 22 kHz, covering the full range of human hearing.",
    "module": "Review Questions"
  },
  {
    "id": "Review_45",
    "question": "What does YOLO stand for and what does it do?",
    "choices": [
      "You Only Look Once - a real-time object detection algorithm",
      "Yearly Optimization Learning Operation - a training method",
      "Young Object Learning Optimizer - a neural network type",
      "Yielding Optimal Learning Outcomes - an evaluation metric"
    ],
    "correct": "You Only Look Once - a real-time object detection algorithm",
    "explanation": "YOLO (You Only Look Once) is a popular real-time object detection algorithm that can identify and locate multiple objects in images in a single forward pass, making it very fast for real-time applications.",
    "module": "Review Questions"
  }
];

// Group questions by module
const questionsByModule = questions.reduce((acc, q) => {
    if (!acc[q.module]) acc[q.module] = [];
    acc[q.module].push(q);
    return acc;
}, {});

// Group questions by topic (same as module)
const questionsByTopic = questionsByModule;

// Export for use in the app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { questions, questionsByModule, questionsByTopic };
}
