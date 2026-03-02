# Oracle AI Foundations Study Tool

A simple, clean study application for the Oracle Cloud Infrastructure AI Foundations Associate Certification.

## Features

- **Multiple Study Modes**: Study all questions, filter by module, or filter by topic
- **Immediate Feedback**: Get instant results with correct answer highlighting
- **Struggle Tracking**: See which topics you're having trouble with (session-only)
- **Clean Interface**: Minimal, distraction-free design
- **Mobile Friendly**: Works on desktop and mobile devices

## Setup

1. **Clone or download** this repository
2. **Extract questions** from your study guide:
   ```bash
   node extract-questions.js
   ```
3. **Open** `index.html` in your web browser

That's it! No server setup required.

## Usage

### Study Modes
- **All Questions**: Random mix of all available questions
- **By Module**: Filter questions by course module (AI Foundations, ML Foundations, etc.)
- **By Topic**: Filter questions by specific topics (OCI Vision, OCI Speech, etc.)

### Question Flow
1. Read the question and select your answer
2. Get immediate feedback with correct answer highlighted
3. View explanation (if available) by clicking "Show Explanation"
4. Click "Next Question" to continue

### Struggle Tracking
The app tracks topics where you've answered incorrectly during your current session. This helps you identify areas that need more study focus.

## File Structure

```
oracle-ai-certification/
├── index.html          # Main application
├── style.css           # Styling
├── script.js           # Application logic
├── extract-questions.js # Question extraction script
├── questions.js        # Generated question database
└── README.md          # This file
```

## Customization

To update questions:
1. Modify your study guide markdown file
2. Run `node extract-questions.js` again
3. Refresh your browser

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (only for question extraction)

## License

Personal use only.
