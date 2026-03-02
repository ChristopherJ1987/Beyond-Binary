class UnifiedStudyApp {
    constructor() {
        this.currentMode = 'questions';
        this.sessionStats = { correct: 0, wrong: 0 };
        this.wrongAnswers = new Map();
        
        // Questions data
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        
        // Flashcards data
        this.flashcards = [];
        this.currentCardIndex = 0;
        this.flashcardMode = 'browse'; // 'browse' or 'quiz'
        this.studyQueue = [];
        
        // Study materials data
        this.studyMaterials = [];
        this.currentModule = null;
        
        this.initializeElements();
        this.setupEventListeners();
        this.loadData();
        this.showMode('questions');
    }
    
    initializeElements() {
        // Mode selector
        this.modeRadios = document.querySelectorAll('input[name="study-mode"]');
        
        // Questions elements
        this.questionFilter = document.getElementById('question-filter');
        this.moduleSelect = document.getElementById('module-select');
        this.questionText = document.getElementById('question-text');
        this.choices = document.getElementById('choices');
        this.feedback = document.getElementById('feedback');
        this.nextBtn = document.getElementById('next-btn');
        this.showExplanation = document.getElementById('show-explanation');
        
        // Flashcard elements
        this.quizModeBtn = document.getElementById('quiz-mode-btn');
        this.browseModeBtn = document.getElementById('browse-mode-btn');
        this.termSearch = document.getElementById('term-search');
        this.termText = document.getElementById('term-text');
        this.definitionText = document.getElementById('definition-text');
        this.flipCard = document.getElementById('flip-card');
        this.knowIt = document.getElementById('know-it');
        this.studyMore = document.getElementById('study-more');
        this.nextCard = document.getElementById('next-card');
        this.flashcardElement = document.getElementById('current-flashcard');
        
        // Study materials elements
        this.contentSearch = document.getElementById('content-search');
        this.moduleFilter = document.getElementById('module-filter');
        this.moduleList = document.getElementById('module-list');
        this.moduleContent = document.getElementById('module-content');
        
        // Stats
        this.progress = document.getElementById('progress');
        this.sessionStatsEl = document.getElementById('session-stats');
    }
    
    setupEventListeners() {
        // Mode selection
        this.modeRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.showMode(e.target.value);
                }
            });
        });
        
        // Questions mode
        this.questionFilter?.addEventListener('change', () => this.filterQuestions());
        this.moduleSelect?.addEventListener('change', () => this.filterQuestions());
        this.nextBtn?.addEventListener('click', () => this.nextQuestion());
        this.showExplanation?.addEventListener('click', () => this.toggleExplanation());
        
        // Flashcards mode
        this.quizModeBtn?.addEventListener('click', () => this.setFlashcardMode('quiz'));
        this.browseModeBtn?.addEventListener('click', () => this.setFlashcardMode('browse'));
        this.termSearch?.addEventListener('input', (e) => this.searchTerms(e.target.value));
        this.flipCard?.addEventListener('click', () => this.flipFlashcard());
        this.knowIt?.addEventListener('click', () => this.markCardKnown());
        this.studyMore?.addEventListener('click', () => this.markCardStudy());
        this.nextCard?.addEventListener('click', () => this.nextFlashcard());
        
        // Study materials mode
        this.contentSearch?.addEventListener('input', (e) => this.searchContent(e.target.value));
        this.moduleFilter?.addEventListener('change', () => this.filterModules());
    }
    
    showMode(mode) {
        this.currentMode = mode;
        
        // Hide all content areas
        document.querySelectorAll('.study-content').forEach(el => el.classList.add('hidden'));
        
        // Show selected mode
        document.getElementById(`${mode}-mode`).classList.remove('hidden');
        
        // Initialize mode-specific content
        switch(mode) {
            case 'questions':
                this.initializeQuestions();
                break;
            case 'flashcards':
                this.initializeFlashcards();
                break;
            case 'study-materials':
                this.initializeStudyMaterials();
                break;
        }
    }
    
    // Questions Mode Methods
    initializeQuestions() {
        this.loadQuestions();
        this.updateQuestionStats();
    }
    
    loadQuestions() {
        if (typeof questions !== 'undefined') {
            this.currentQuestions = [...questions];
            this.shuffleArray(this.currentQuestions);
            this.currentQuestionIndex = 0;
            this.populateModuleSelect();
            this.displayQuestion();
        }
    }
    
    populateModuleSelect() {
        const modules = [...new Set(this.currentQuestions.map(q => q.module))];
        this.moduleSelect.innerHTML = '<option value="">Select Module...</option>';
        modules.forEach(module => {
            const option = document.createElement('option');
            option.value = module;
            option.textContent = module;
            this.moduleSelect.appendChild(option);
        });
    }
    
    filterQuestions() {
        const filterType = this.questionFilter.value;
        const moduleValue = this.moduleSelect.value;
        
        if (filterType === 'module') {
            this.moduleSelect.classList.remove('hidden');
            if (moduleValue) {
                this.currentQuestions = questions.filter(q => q.module === moduleValue);
            } else {
                this.currentQuestions = [...questions];
            }
        } else {
            this.moduleSelect.classList.add('hidden');
            this.currentQuestions = [...questions];
        }
        
        this.shuffleArray(this.currentQuestions);
        this.currentQuestionIndex = 0;
        this.displayQuestion();
        this.updateQuestionStats();
    }
    
    displayQuestion() {
        if (this.currentQuestions.length === 0) return;
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        this.questionText.textContent = question.question;
        
        this.choices.innerHTML = '';
        question.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice';
            button.textContent = choice;
            button.addEventListener('click', () => this.selectAnswer(index));
            this.choices.appendChild(button);
        });
        
        this.feedback.classList.add('hidden');
        this.nextBtn.classList.add('hidden');
        this.showExplanation.classList.add('hidden');
    }
    
    selectAnswer(selectedIndex) {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const choices = this.choices.querySelectorAll('.choice');
        
        choices.forEach(choice => choice.classList.add('disabled'));
        
        // Find correct answer index
        let correctIndex = question.correct;
        if (typeof correctIndex === 'string') {
            correctIndex = question.choices.indexOf(question.correct);
        }
        
        const isCorrect = selectedIndex === correctIndex;
        
        choices[selectedIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
        choices[correctIndex].classList.add('correct');
        
        this.feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        this.feedback.textContent = isCorrect ? 'Correct!' : 'Incorrect';
        this.feedback.classList.remove('hidden');
        
        if (isCorrect) {
            this.sessionStats.correct++;
        } else {
            this.sessionStats.wrong++;
            this.trackWrongAnswer(question);
        }
        
        this.nextBtn.classList.remove('hidden');
        if (question.explanation) {
            this.showExplanation.classList.remove('hidden');
        }
        
        this.updateQuestionStats();
    }
    
    nextQuestion() {
        this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.currentQuestions.length;
        this.displayQuestion();
    }
    
    toggleExplanation() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        if (this.feedback.textContent.includes(question.explanation)) {
            this.feedback.textContent = this.feedback.textContent.split('\n\n')[0];
        } else {
            this.feedback.textContent += `\n\n${question.explanation}`;
        }
    }
    
    trackWrongAnswer(question) {
        const topic = question.topic || question.module;
        this.wrongAnswers.set(topic, (this.wrongAnswers.get(topic) || 0) + 1);
    }
    
    updateQuestionStats() {
        this.progress.textContent = `${this.currentQuestionIndex + 1}/${this.currentQuestions.length}`;
        this.sessionStatsEl.textContent = `Session: ${this.sessionStats.correct} correct, ${this.sessionStats.wrong} wrong`;
    }
    
    // Flashcards Mode Methods
    initializeFlashcards() {
        this.extractFlashcards();
        this.currentCardIndex = 0;
        this.displayFlashcard();
    }
    
    extractFlashcards() {
        // Load flashcards from external file
        if (typeof flashcards !== 'undefined') {
            this.flashcards = flashcards;
        } else {
            // Fallback sample data
            this.flashcards = [
                { term: "Loading...", definition: "Flashcards are loading. Please ensure flashcards.js is loaded." }
            ];
        }
    }
    
    setFlashcardMode(mode) {
        this.flashcardMode = mode;
        this.quizModeBtn.classList.toggle('active', mode === 'quiz');
        this.browseModeBtn.classList.toggle('active', mode === 'browse');
        
        if (mode === 'quiz') {
            this.studyQueue = [...this.flashcards];
            this.shuffleArray(this.studyQueue);
        }
    }
    
    displayFlashcard() {
        if (this.flashcards.length === 0) return;
        
        const card = this.flashcards[this.currentCardIndex];
        this.termText.textContent = card.term;
        this.definitionText.textContent = card.definition;
        
        // Always reset to front side (term) for new cards
        this.flashcardElement.classList.remove('flipped');
        this.flipCard.textContent = 'Show Definition';
        
        // Show/hide appropriate buttons based on mode
        if (this.flashcardMode === 'quiz') {
            this.knowIt.style.display = 'block';
            this.studyMore.style.display = 'block';
        } else {
            this.knowIt.style.display = 'none';
            this.studyMore.style.display = 'none';
        }
    }
    
    flipFlashcard() {
        if (this.flashcardElement.classList.contains('flipped')) {
            // Show term (flip back to front)
            this.flashcardElement.classList.remove('flipped');
            this.flipCard.textContent = 'Show Definition';
        } else {
            // Show definition (flip to back)
            this.flashcardElement.classList.add('flipped');
            this.flipCard.textContent = 'Show Term';
        }
    }
    
    markCardKnown() {
        this.nextFlashcard();
    }
    
    markCardStudy() {
        if (this.flashcardMode === 'quiz') {
            this.studyQueue.push(this.flashcards[this.currentCardIndex]);
        }
        this.nextFlashcard();
    }
    
    nextFlashcard() {
        // Add stack animation to inner element
        const flashcardInner = this.flashcardElement.querySelector('.flashcard-inner');
        flashcardInner.classList.add('card-changing');
        
        // At peak blur (50% = 400ms): change content AND flip to term side simultaneously
        setTimeout(() => {
            this.currentCardIndex = (this.currentCardIndex + 1) % this.flashcards.length;
            const card = this.flashcards[this.currentCardIndex];
            this.termText.textContent = card.term;
            this.definitionText.textContent = card.definition;
            
            // Flip to term side at the same time as content change (hidden by blur)
            this.flashcardElement.classList.remove('flipped');
            this.flipCard.textContent = 'Show Definition';
        }, 400);
        
        // Clean up animation class after it completes
        setTimeout(() => {
            flashcardInner.classList.remove('card-changing');
        }, 800);
    }
    
    searchTerms(query) {
        // Filter flashcards based on search query
        const filtered = this.flashcards.filter(card => 
            card.term.toLowerCase().includes(query.toLowerCase()) ||
            card.definition.toLowerCase().includes(query.toLowerCase())
        );
        
        if (filtered.length > 0) {
            this.currentCardIndex = this.flashcards.indexOf(filtered[0]);
            this.displayFlashcard();
        }
    }
    
    // Study Materials Mode Methods
    initializeStudyMaterials() {
        this.loadStudyMaterials();
        this.displayModuleList();
    }
    
    loadStudyMaterials() {
        // Load from external study materials file
        if (typeof studyMaterials !== 'undefined') {
            this.studyMaterials = studyMaterials;
        } else {
            // Fallback data
            this.studyMaterials = [
                {
                    title: "Module 1: Welcome to AI Foundations",
                    content: "Introduction to AI concepts and Oracle AI Stack..."
                },
                {
                    title: "Module 2: AI Foundations", 
                    content: "What is Artificial Intelligence? Human Intelligence Capabilities..."
                }
            ];
        }
        
        // Populate module filter
        this.moduleFilter.innerHTML = '<option value="">All Modules</option>';
        this.studyMaterials.forEach((module, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = module.title;
            this.moduleFilter.appendChild(option);
        });
    }
    
    displayModuleList() {
        this.moduleList.innerHTML = '';
        this.studyMaterials.forEach((module, index) => {
            const item = document.createElement('div');
            item.className = 'module-item';
            item.textContent = module.title;
            item.addEventListener('click', () => this.selectModule(index));
            this.moduleList.appendChild(item);
        });
    }
    
    selectModule(index) {
        this.currentModule = index;
        
        // Update active state
        document.querySelectorAll('.module-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        // Display module content
        const module = this.studyMaterials[index];
        this.moduleContent.innerHTML = `
            <h2>${module.title}</h2>
            <div>${module.content}</div>
        `;
    }
    
    filterModules() {
        const selectedIndex = this.moduleFilter.value;
        if (selectedIndex !== '') {
            this.selectModule(parseInt(selectedIndex));
        }
    }
    
    searchContent(query) {
        if (!query) {
            this.displayModuleList();
            return;
        }
        
        const filtered = this.studyMaterials.filter(module => {
            const titleMatch = module.title.toLowerCase().includes(query.toLowerCase());
            const contentMatch = module.content.toLowerCase().includes(query.toLowerCase());
            const searchTermsMatch = module.searchTerms ? 
                module.searchTerms.toLowerCase().includes(query.toLowerCase()) : false;
            
            return titleMatch || contentMatch || searchTermsMatch;
        });
        
        this.moduleList.innerHTML = '';
        filtered.forEach((module, index) => {
            const originalIndex = this.studyMaterials.indexOf(module);
            const item = document.createElement('div');
            item.className = 'module-item';
            item.textContent = module.title;
            item.addEventListener('click', () => this.selectModule(originalIndex));
            this.moduleList.appendChild(item);
        });
    }
    
    // Utility Methods
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    loadData() {
        // Load questions if available
        if (typeof questions !== 'undefined') {
            this.loadQuestions();
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new UnifiedStudyApp();
});
