class StudyApp {
    constructor() {
        this.currentQuestions = [];
        this.currentIndex = 0;
        this.sessionStats = { correct: 0, wrong: 0 };
        this.wrongAnswers = new Map(); // Track wrong answers per topic
        this.currentMode = 'all';
        
        this.initializeElements();
        this.setupEventListeners();
        this.loadQuestions();
    }
    
    initializeElements() {
        this.elements = {
            progress: document.getElementById('progress'),
            sessionStats: document.getElementById('session-stats'),
            allQuestionsBtn: document.getElementById('all-questions'),
            byModuleBtn: document.getElementById('by-module'),
            filterOptions: document.getElementById('filter-options'),
            filterSelect: document.getElementById('filter-select'),
            questionText: document.getElementById('question-text'),
            choices: document.getElementById('choices'),
            feedback: document.getElementById('feedback'),
            nextBtn: document.getElementById('next-btn'),
            showExplanation: document.getElementById('show-explanation'),
            struggleTracker: document.getElementById('struggle-tracker'),
            struggleList: document.getElementById('struggle-list')
        };
    }
    
    setupEventListeners() {
        this.elements.allQuestionsBtn.addEventListener('click', () => this.setMode('all'));
        this.elements.byModuleBtn.addEventListener('click', () => this.setMode('module'));
        this.elements.filterSelect.addEventListener('change', () => this.filterQuestions());
        this.elements.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.elements.showExplanation.addEventListener('click', () => this.toggleExplanation());
    }
    
    setMode(mode) {
        this.currentMode = mode;
        
        // Update active button
        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(mode === 'all' ? 'all-questions' : 'by-module').classList.add('active');
        
        // Show/hide filter options
        if (mode === 'all') {
            this.elements.filterOptions.classList.add('hidden');
            this.loadQuestions();
        } else {
            this.elements.filterOptions.classList.remove('hidden');
            this.populateFilterOptions();
        }
    }
    
    populateFilterOptions() {
        const select = this.elements.filterSelect;
        select.innerHTML = '<option value="">Select...</option>';
        
        const options = Object.keys(questionsByModule);
            
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            select.appendChild(optionElement);
        });
    }
    
    filterQuestions() {
        const selectedValue = this.elements.filterSelect.value;
        if (!selectedValue) return;
        
        this.currentQuestions = [...questionsByModule[selectedValue]];
        
        this.shuffleQuestions();
        this.currentIndex = 0;
        this.displayQuestion();
        this.updateProgress();
    }
    
    loadQuestions() {
        this.currentQuestions = [...questions];
        this.shuffleQuestions();
        this.currentIndex = 0;
        this.displayQuestion();
        this.updateProgress();
    }
    
    shuffleQuestions() {
        for (let i = this.currentQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.currentQuestions[i], this.currentQuestions[j]] = [this.currentQuestions[j], this.currentQuestions[i]];
        }
    }
    
    displayQuestion() {
        if (this.currentIndex >= this.currentQuestions.length) {
            this.showCompletion();
            return;
        }
        
        const question = this.currentQuestions[this.currentIndex];
        this.elements.questionText.textContent = question.question;
        
        // Clear previous choices
        this.elements.choices.innerHTML = '';
        
        // Create choice buttons
        question.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice';
            button.textContent = `${String.fromCharCode(97 + index)}. ${choice}`;
            button.addEventListener('click', () => this.selectAnswer(String.fromCharCode(97 + index), button));
            this.elements.choices.appendChild(button);
        });
        
        // Hide feedback and buttons
        this.elements.feedback.classList.add('hidden');
        this.elements.nextBtn.classList.add('hidden');
        this.elements.showExplanation.classList.add('hidden');
    }
    
    selectAnswer(selectedLetter, selectedButton) {
        const question = this.currentQuestions[this.currentIndex];
        const selectedChoiceIndex = selectedLetter.charCodeAt(0) - 97; // Convert 'a' to 0, 'b' to 1, etc.
        const selectedChoiceText = question.choices[selectedChoiceIndex];
        const isCorrect = selectedChoiceText === question.correct;
        
        // Disable all choices
        document.querySelectorAll('.choice').forEach(btn => {
            btn.classList.add('disabled');
            btn.style.pointerEvents = 'none';
        });
        
        // Highlight correct and incorrect answers
        document.querySelectorAll('.choice').forEach((btn, index) => {
            const choiceText = question.choices[index];
            if (choiceText === question.correct) {
                btn.classList.add('correct');
            } else if (btn === selectedButton && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // Update session stats
        if (isCorrect) {
            this.sessionStats.correct++;
        } else {
            this.sessionStats.wrong++;
            this.trackWrongAnswer(question.topic);
        }
        
        // Show feedback
        this.showFeedback(isCorrect, question);
        this.updateSessionStats();
        this.updateStruggleTracker();
        
        // Show next button
        this.elements.nextBtn.classList.remove('hidden');
        if (question.explanation) {
            this.elements.showExplanation.classList.remove('hidden');
        }
    }
    
    showFeedback(isCorrect, question) {
        this.elements.feedback.textContent = isCorrect ? 'Correct!' : `Incorrect. The correct answer is ${question.correct}.`;
        this.elements.feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        this.elements.feedback.classList.remove('hidden');
    }
    
    toggleExplanation() {
        const question = this.currentQuestions[this.currentIndex];
        const currentText = this.elements.feedback.textContent;
        
        if (currentText.includes(question.explanation)) {
            // Hide explanation
            this.elements.feedback.textContent = currentText.split('\n\nExplanation:')[0];
            this.elements.showExplanation.textContent = 'Show Explanation';
        } else {
            // Show explanation
            this.elements.feedback.textContent = currentText + `\n\nExplanation: ${question.explanation}`;
            this.elements.showExplanation.textContent = 'Hide Explanation';
        }
    }
    
    trackWrongAnswer(topic) {
        if (!this.wrongAnswers.has(topic)) {
            this.wrongAnswers.set(topic, 0);
        }
        this.wrongAnswers.set(topic, this.wrongAnswers.get(topic) + 1);
    }
    
    updateProgress() {
        this.elements.progress.textContent = `${this.currentIndex + 1}/${this.currentQuestions.length}`;
    }
    
    updateSessionStats() {
        this.elements.sessionStats.textContent = 
            `Session: ${this.sessionStats.correct} correct, ${this.sessionStats.wrong} wrong`;
    }
    
    updateStruggleTracker() {
        if (this.wrongAnswers.size === 0) {
            this.elements.struggleTracker.classList.add('hidden');
            return;
        }
        
        this.elements.struggleTracker.classList.remove('hidden');
        this.elements.struggleList.innerHTML = '';
        
        Array.from(this.wrongAnswers.entries())
            .sort((a, b) => b[1] - a[1])
            .forEach(([topic, count]) => {
                const li = document.createElement('li');
                li.innerHTML = `<span>${topic}</span><span>${count} wrong</span>`;
                this.elements.struggleList.appendChild(li);
            });
    }
    
    nextQuestion() {
        this.currentIndex++;
        this.displayQuestion();
        this.updateProgress();
    }
    
    showCompletion() {
        this.elements.questionText.textContent = 'Quiz Complete!';
        this.elements.choices.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h3>Final Score: ${this.sessionStats.correct}/${this.sessionStats.correct + this.sessionStats.wrong}</h3>
                <button onclick="location.reload()" style="margin-top: 15px; padding: 10px 20px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer;">Start Over</button>
            </div>
        `;
        this.elements.feedback.classList.add('hidden');
        this.elements.nextBtn.classList.add('hidden');
        this.elements.showExplanation.classList.add('hidden');
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new StudyApp();
});
