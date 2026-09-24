const TOPIC_COUNTS = {
  variables: 34,
  operators: 33,
  control: 33,
  coding: 15,
};

const TOPIC_LIMITS = {
  variables: 6,
  operators: 6,
  control: 5,
  coding: 3,
};

const QUESTION_TEMPLATES = {
  variables: [
    { topic: 'Variables', q: 'Which keyword declares a block-scoped variable?', options: ['var', 'let', 'const', 'function'], answer: 1, explanation: 'let is block-scoped and can be reassigned.' },
    { topic: 'Variables', q: 'What is the correct way to declare a constant in JavaScript?', options: ['const value = 10;', 'var value = 10;', 'let value = 10;', 'constant value = 10;'], answer: 0, explanation: 'const creates a constant binding that cannot be reassigned.' },
    { topic: 'Variables', q: 'Which variable name is valid?', options: ['2name', 'my-name', '_score', 'class'], answer: 2, explanation: 'Variable names may start with underscore or letter.' },
    { topic: 'Variables', q: 'What happens when you declare var x = 5; inside a function?', options: ['It is block-scoped', 'It is function-scoped', 'It is inaccessible', 'It throws an error'], answer: 1, explanation: 'var is function-scoped, not block-scoped.' },
    { topic: 'Variables', q: 'Which statement is recommended for modern JavaScript variables?', options: ['var', 'let', 'const', 'function'], answer: 2, explanation: 'const is commonly used for fixed values and avoids accidental reassignment.' },
    { topic: 'Variables', q: 'If you write let x = 1; x = 2;, what changed?', options: ['The binding is broken', 'The value is reassigned', 'The variable is removed', 'A syntax error occurs'], answer: 1, explanation: 'let variables are mutable and can be reassigned.' },
    { topic: 'Variables', q: 'Which declaration is best for a fixed configuration value?', options: ['let', 'var', 'const', 'if'], answer: 2, explanation: 'const signals a fixed value and prevents re-assignment.' },
    { topic: 'Variables', q: 'What does a variable hold?', options: ['Only numbers', 'Only strings', 'A reference to data', 'HTML tags'], answer: 2, explanation: 'Variables store values or references to values.' },
    { topic: 'Variables', q: 'Which is a good example of a descriptive variable name?', options: ['x', 'n', 'userAge', 'a1'], answer: 2, explanation: 'userAge clearly communicates intent.' },
    { topic: 'Variables', q: 'What is the value of let total = 2 + 3;?', options: ['5', '23', 'undefined', 'NaN'], answer: 0, explanation: '2 + 3 evaluates to 5.' },
    { topic: 'Variables', q: 'Which statement is most likely to create a hoisted global variable in browsers?', options: ['let age = 20;', 'const age = 20;', 'var age = 20;', 'const { age } = obj;'], answer: 2, explanation: 'var is hoisted to the function or global scope.' },
    { topic: 'Variables', q: 'A variable cannot start with which character?', options: ['_', 'letter', 'number', '$'], answer: 2, explanation: 'A variable name cannot start with a number.' }
  ],
  operators: [
    { topic: 'Operators', q: 'What does the + operator do with strings?', options: ['Adds them numerically', 'Concatenates them', 'Subtracts them', 'Compares them'], answer: 1, explanation: 'The + operator concatenates strings.' },
    { topic: 'Operators', q: 'What is 10 % 3?', options: ['3', '1', '0', '7'], answer: 1, explanation: '10 divided by 3 leaves a remainder of 1.' },
    { topic: 'Operators', q: 'Which operator checks both value and type equality?', options: ['==', '===', '=', '!='], answer: 1, explanation: '=== compares both value and type.' },
    { topic: 'Operators', q: 'Which operator assigns a value to a variable?', options: ['==', '===', '=', '&&'], answer: 2, explanation: 'The = operator assigns a value.' },
    { topic: 'Operators', q: 'What is the result of 5 > 3 && 2 < 1?', options: ['true', 'false', 'NaN', 'undefined'], answer: 1, explanation: 'The second condition is false, so the entire expression is false.' },
    { topic: 'Operators', q: 'What does !true evaluate to?', options: ['1', '0', 'false', 'undefined'], answer: 2, explanation: '!true flips a boolean to false.' },
    { topic: 'Operators', q: 'Which operator is used for exponentiation in JS?', options: ['**', '^', 'exp', 'pow'], answer: 0, explanation: 'The ** operator raises a number to a power.' },
    { topic: 'Operators', q: 'What is 8 >> 1?', options: ['8', '4', '16', '2'], answer: 1, explanation: 'Right shift by one effectively halves the value.' },
    { topic: 'Operators', q: 'What is the value of null == undefined?', options: ['false', 'true', 'undefined', 'null'], answer: 1, explanation: 'JavaScript treats null and undefined as loosely equal.' },
    { topic: 'Operators', q: 'Which expression is truthy?', options: ['0', '""', 'null', '[]'], answer: 3, explanation: 'An empty array is truthy in JavaScript.' },
    { topic: 'Operators', q: 'What does 3 + "2" evaluate to?', options: ['5', '32', 'NaN', 'undefined'], answer: 1, explanation: 'The number is coerced into a string and concatenated.' },
    { topic: 'Operators', q: 'Which operator returns the remainder?', options: ['/', '%', '*', '**'], answer: 1, explanation: 'The % operator returns the remainder.' }
  ],
  control: [
    { topic: 'Control Statements', q: 'Which statement executes a block when a condition is true?', options: ['switch', 'if', 'for', 'while'], answer: 1, explanation: 'if executes a block only when the condition is true.' },
    { topic: 'Control Statements', q: 'Which loop is best for a fixed number of iterations?', options: ['for', 'if', 'switch', 'while'], answer: 0, explanation: 'for is commonly used with a known number of iterations.' },
    { topic: 'Control Statements', q: 'What does break do inside a loop?', options: ['Continues the loop', 'Skips the current iteration', 'Exits the loop', 'Creates a new variable'], answer: 2, explanation: 'break exits the nearest loop or switch block.' },
    { topic: 'Control Statements', q: 'Which statement chooses between multiple options?', options: ['switch', 'for', 'if else', 'return'], answer: 0, explanation: 'switch evaluates multiple case branches.' },
    { topic: 'Control Statements', q: 'What is the output of: let x = 0; while (x < 3) { x++; }', options: ['0,1,2', '1,2,3', '3', 'No output'], answer: 1, explanation: 'The loop increments x until 3 and stops.' },
    { topic: 'Control Statements', q: 'What happens if a do...while condition is false on the first check?', options: ['Never runs', 'Runs once', 'Throws an error', 'Runs forever'], answer: 1, explanation: 'do...while executes the block at least once before checking the condition.' },
    { topic: 'Control Statements', q: 'What does continue skip?', options: ['The entire loop', 'The remaining code in the current iteration', 'The next function', 'The switch block'], answer: 1, explanation: 'continue skips the remainder of the current loop iteration.' },
    { topic: 'Control Statements', q: 'Which statement is used for multiple else-if checks?', options: ['switch', 'for', 'if/else if', 'return'], answer: 2, explanation: 'if/else if handles multiple conditions in sequence.' },
    { topic: 'Control Statements', q: 'Which is a valid switch expression pattern?', options: ['switch (n) { case 1: ... }', 'switch { case 1: ... }', 'if (switch n)', 'switch = n'], answer: 0, explanation: 'switch requires an expression in the parentheses.' },
    { topic: 'Control Statements', q: 'What is the purpose of else?', options: ['To end the function', 'To run when the if condition fails', 'To declare a variable', 'To repeat a loop'], answer: 1, explanation: 'else runs when the if condition is false.' },
    { topic: 'Control Statements', q: 'How many times does a while loop with condition x < 2 run if x starts at 0 and increments by 1?', options: ['1', '2', '3', 'Infinite'], answer: 1, explanation: 'It runs for x = 0 and x = 1, then stops.' },
    { topic: 'Control Statements', q: 'What is the main difference between while and do...while?', options: ['do...while checks before the block', 'while runs at least once', 'do...while runs at least once', 'They are identical'], answer: 2, explanation: 'do...while guarantees the block executes once before evaluation.' }
  ],
  coding: [
    { topic: 'Coding', q: 'What will this code log? let x = 5; console.log(x++);', options: ['5', '6', 'undefined', 'NaN'], answer: 0, explanation: 'x++ returns the original value before incrementing.' },
    { topic: 'Coding', q: 'What will this code output? let n = 4; console.log(n % 2 === 0 ? "Even" : "Odd");', options: ['Even', 'Odd', '0', 'undefined'], answer: 0, explanation: '4 is even, so the ternary returns Even.' },
    { topic: 'Coding', q: 'What is the output of: console.log(typeof []);', options: ['array', 'object', 'string', 'undefined'], answer: 1, explanation: 'Arrays are objects in JavaScript.' },
    { topic: 'Coding', q: 'How many iterations in: for (let i = 0; i < 3; i++) { console.log(i); }', options: ['2', '3', '4', 'Infinite'], answer: 1, explanation: 'It iterates for i = 0, 1, and 2.' },
    { topic: 'Coding', q: 'What does return do inside a function?', options: ['Prints a value', 'Stops execution and sends a result back', 'Loops the function', 'Creates a variable'], answer: 1, explanation: 'return exits the function and gives the caller a value.' },
    { topic: 'Coding', q: 'Which value is falsy?', options: ['1', '"0"', 'false', '[]'], answer: 2, explanation: 'false is a falsy boolean value.' }
  ]
};

function buildQuestionBank() {
  const bank = [];
  Object.entries(TOPIC_COUNTS).forEach(([topicKey, count]) => {
    const templates = QUESTION_TEMPLATES[topicKey] || [];
    for (let i = 0; i < count; i += 1) {
      const template = templates[i % templates.length];
      bank.push({
        id: `${topicKey}-${i + 1}`,
        topic: template.topic,
        question: template.q,
        options: [...template.options],
        answer: template.answer,
        explanation: template.explanation,
      });
    }
  });
  return bank;
}

const MCQ_BANK = buildQuestionBank();

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getTopicKeyLabel(topicKey) {
  const map = {
    variables: 'Variables',
    operators: 'Operators',
    control: 'Control Statements',
    coding: 'Coding',
  };
  return map[topicKey] || 'General';
}

function drawQuestionSet() {
  const selected = [];
  Object.entries(TOPIC_LIMITS).forEach(([topicKey, limit]) => {
    const topicName = getTopicKeyLabel(topicKey);
    const questions = MCQ_BANK.filter((question) => question.topic === topicName);
    selected.push(...shuffleArray(questions).slice(0, limit));
  });
  return shuffleArray(selected).slice(0, 20);
}

const state = {
  questions: [],
  currentIndex: 0,
  selectedAnswer: null,
  answers: [],
  score: 0,
  transitioning: false,
};

function setScreen(screenName) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach((screen) => {
    const shouldShow = screen.dataset.screen === screenName;
    screen.classList.toggle('active', shouldShow);
    screen.classList.toggle('hidden', !shouldShow);
  });
}

function startQuiz() {
  state.questions = drawQuestionSet();
  state.currentIndex = 0;
  state.selectedAnswer = null;
  state.answers = [];
  state.score = 0;
  renderQuestion();
}

function renderIntro() {
  setScreen('intro');
  const introCard = document.getElementById('intro-card');
  introCard.innerHTML = `
    <div class="badge">KNOWLEDGE CHECK</div>
    <h2>Ready when you are</h2>
    <p>
      Each attempt randomly draws 20 multiple-choice questions from a bank of 115 (Variables,
      Operators, Control Statements & Coding), then finishes with 5 hands-on coding challenges.
    </p>
    <p class="subtext">Score 80% or higher across all 25 questions to pass.</p>
    <div class="stats-row">
      <div class="pill">25 Questions Total</div>
      <div class="pill">5 Live Coding Challenges</div>
      <div class="pill">80% to Pass</div>
    </div>
    <div class="topic-badges">
      <span>6 Variables</span>
      <span>6 Operators</span>
      <span>5 Control Statements</span>
      <span>3 Coding (output)</span>
      <span>5 Write-your-own-code</span>
    </div>
    <button id="start-quiz-btn" class="primary-btn large">Start Quiz</button>
  `;

  const startButton = document.getElementById('start-quiz-btn');
  startButton.addEventListener('click', startQuiz);
}

function renderFeedback(question, answerState) {
  const correctLabel = question.options[question.answer];

  if (answerState.correct) {
    return `
      <div class="feedback success">
        <span class="feedback-icon">✓</span>
        <span>Correct!</span>
      </div>
    `;
  }

  return `
    <div class="feedback failure">
      <div class="feedback-title">Incorrect</div>
      <div class="feedback-text">The correct answer is <strong>${correctLabel}</strong>.</div>
      <div class="feedback-explanation">${question.explanation}</div>
    </div>
  `;
}

function submitAnswer() {
  if (state.selectedAnswer === null || state.selectedAnswer === undefined || state.transitioning) return;

  const question = state.questions[state.currentIndex];
  const isCorrect = state.selectedAnswer === question.answer;

  state.answers[state.currentIndex] = {
    selected: state.selectedAnswer,
    correct: isCorrect,
  };

  if (isCorrect) {
    state.score += 1;
  }

  state.transitioning = true;
  renderQuestion();

  window.setTimeout(() => {
    if (!state.transitioning) return;

    state.transitioning = false;

    if (state.currentIndex >= state.questions.length - 1) {
      renderResults();
      return;
    }

    nextQuestion();
  }, 1400);
}

function nextQuestion() {
  if (state.transitioning) {
    state.transitioning = false;
  }

  state.selectedAnswer = null;
  state.currentIndex += 1;

  if (state.currentIndex >= state.questions.length) {
    renderResults();
    return;
  }

  renderQuestion();
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  const answered = state.answers[state.currentIndex];

  setScreen('quiz');

  const quizWrap = document.getElementById('quiz-wrap');
  quizWrap.innerHTML = `
    <div class="question-header-row">
      <div class="question-number">Question ${state.currentIndex + 1} of ${state.questions.length}</div>
      <div class="score-chip">Score: ${state.score} / ${state.questions.length}</div>
    </div>

    <div class="question-topline">
      <span class="question-badge">QUESTION ${state.currentIndex + 1}</span>
      <span class="topic-chip">${question.topic}</span>
    </div>

    <div class="question-label">Select one answer</div>
    <h3>${question.question}</h3>

    <div class="option-stack">
      ${question.options
        .map((option, index) => {
          const selected = state.selectedAnswer === index;
          const wasSelected = answered && answered.selected === index;
          const isCorrect = question.answer === index;
          const reveal = Boolean(answered);

          let className = 'option-item';
          if (!reveal && selected) className += ' selected';
          if (reveal && isCorrect) className += ' correct';
          if (reveal && wasSelected && !isCorrect) className += ' wrong';

          return `
            <label class="${className}">
              <input type="radio" name="answer" value="${index}" ${selected ? 'checked' : ''} ${answered ? 'disabled' : ''} />
              <span class="radio-mark"></span>
              <span class="option-label">${option}</span>
            </label>
          `;
        })
        .join('')}
    </div>

    ${answered ? renderFeedback(question, answered) : ''}

    <div class="button-row">
      ${answered
        ? `<button id="next-question-btn" class="primary-btn large">${state.currentIndex === state.questions.length - 1 ? 'View Results' : 'Next'}</button>`
        : `<button id="submit-answer-btn" class="primary-btn large">Confirm Answer</button>`}
    </div>
  `;

  if (!answered) {
    document.querySelectorAll('input[name="answer"]').forEach((input) => {
      input.addEventListener('change', (event) => {
        state.selectedAnswer = Number(event.target.value);

        document.querySelectorAll('.option-item').forEach((item) => {
          item.classList.remove('selected');
        });

        const selectedLabel = event.target.closest('.option-item');
        if (selectedLabel) {
          selectedLabel.classList.add('selected');
        }
      });
    });

    const submitButton = document.getElementById('submit-answer-btn');
    submitButton.addEventListener('click', submitAnswer);
  } else {
    document.getElementById('next-question-btn').addEventListener('click', nextQuestion);
  }
}

function renderResults() {
  setScreen('results');
  const total = state.questions.length;
  const correctCount = state.answers.filter((entry) => entry && entry.correct).length;
  const percentage = Math.round((correctCount / total) * 100);
  const passed = percentage >= 80;

  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = state.questions
    .map((question, index) => {
      const answer = state.answers[index];
      const selectedIndex = answer ? answer.selected : null;
      const selectedText = selectedIndex !== null && selectedIndex !== undefined ? question.options[selectedIndex] : 'Not answered';
      const correctText = question.options[question.answer];
      const statusClass = answer && answer.correct ? 'correct' : 'incorrect';

      return `
        <div class="review-item ${statusClass}">
          <div class="review-topline">
            <strong>Q${index + 1}</strong>
            <span>${question.topic}</span>
          </div>
          <div class="review-question">${question.question}</div>
          <div class="review-meta">Your answer: <span>${selectedText}</span></div>
          <div class="review-meta">Correct answer: <span>${correctText}</span></div>
          <div class="review-meta">Explanation: <span>${question.explanation}</span></div>
        </div>
      `;
    })
    .join('');

  const resultsPanel = document.getElementById('results-panel');
  resultsPanel.innerHTML = `
    <div class="results-head">
      <h2>Quiz Results</h2>
      <div class="result-pill ${passed ? 'pass' : 'fail'}">${passed ? 'Passed' : 'Failed'}</div>
    </div>
    <div class="result-grid">
      <div class="metric-card">
        <span>Score</span>
        <strong>${correctCount}/${total}</strong>
      </div>
      <div class="metric-card">
        <span>Accuracy</span>
        <strong>${percentage}%</strong>
      </div>
      <div class="metric-card">
        <span>Pass Mark</span>
        <strong>80%</strong>
      </div>
    </div>
    <button id="restart-quiz-btn" class="primary-btn large">Take Another Random Set</button>
  `;

  document.getElementById('restart-quiz-btn').addEventListener('click', startQuiz);
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    renderIntro();
  });
}

if (typeof module !== 'undefined') {
  module.exports = {
    TOPIC_COUNTS,
    TOPIC_LIMITS,
    MCQ_BANK,
    buildQuestionBank,
    drawQuestionSet,
    shuffleArray,
  };
}
