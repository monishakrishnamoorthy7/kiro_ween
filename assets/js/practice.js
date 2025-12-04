// ============================================
// PRACTICE PAGE - CODE EDITOR & PROBLEMS
// ============================================

const problems = [
    {
        title: "Fix the Corrupted Function",
        description: "The ghost has corrupted this function. Fix it to return the sum of two numbers.",
        starterCode: "function add(a, b) {\n  return a - b; // This is wrong!\n}",
        solution: "function add(a, b) {\n  return a + b;\n}",
        test: (code) => {
            try {
                eval(code);
                return add(5, 3) === 8 && add(10, 20) === 30;
            } catch {
                return false;
            }
        }
    },
    {
        title: "Reverse the Curse",
        description: "Reverse a string to break the spell.",
        starterCode: "function reverseString(str) {\n  // TODO: Reverse the string\n  return str;\n}",
        solution: "function reverseString(str) {\n  return str.split('').reverse().join('');\n}",
        test: (code) => {
            try {
                eval(code);
                return reverseString("hello") === "olleh" && reverseString("ghost") === "tsohg";
            } catch {
                return false;
            }
        }
    },
    {
        title: "Sum of Haunted Numbers",
        description: "Calculate the sum of all numbers in an array.",
        starterCode: "function sumArray(arr) {\n  // TODO: Return sum of all numbers\n  return 0;\n}",
        solution: "function sumArray(arr) {\n  return arr.reduce((sum, num) => sum + num, 0);\n}",
        test: (code) => {
            try {
                eval(code);
                return sumArray([1, 2, 3, 4]) === 10 && sumArray([10, 20, 30]) === 60;
            } catch {
                return false;
            }
        }
    },
    {
        title: "Find the Ghost in Array",
        description: "Find the maximum number in an array.",
        starterCode: "function findMax(arr) {\n  // TODO: Return the largest number\n  return 0;\n}",
        solution: "function findMax(arr) {\n  return Math.max(...arr);\n}",
        test: (code) => {
            try {
                eval(code);
                return findMax([1, 5, 3, 9, 2]) === 9 && findMax([10, 20, 5]) === 20;
            } catch {
                return false;
            }
        }
    },
    {
        title: "Palindrome Spell",
        description: "Check if a string is a palindrome (reads same forwards and backwards).",
        starterCode: "function isPalindrome(str) {\n  // TODO: Return true if palindrome\n  return false;\n}",
        solution: "function isPalindrome(str) {\n  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleaned === cleaned.split('').reverse().join('');\n}",
        test: (code) => {
            try {
                eval(code);
                return isPalindrome("racecar") === true && isPalindrome("hello") === false;
            } catch {
                return false;
            }
        }
    }
];

const ghostComments = {
    success: [
        "Impressive... for a mortal.",
        "The curse weakens...",
        "You have potential.",
        "The ghost approves.",
        "Your logic is strong."
    ],
    failure: [
        "Your logic is weak...",
        "I see errors in the darkness...",
        "The curse grows stronger...",
        "Try again, mortal.",
        "The ghost mocks your failure."
    ]
};

let currentProblemIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const problemSelect = document.getElementById('problemSelect');
    const codeEditor = document.getElementById('codeEditor');
    const runButton = document.getElementById('runCode');
    const resetButton = document.getElementById('resetCode');
    const problemDescription = document.getElementById('problemDescription');
    const terminalContent = document.getElementById('terminalContent');
    const terminalStatus = document.getElementById('terminalStatus');

    // Load first problem
    loadProblem(0);

    // Problem selector
    if (problemSelect) {
        problemSelect.addEventListener('change', (e) => {
            currentProblemIndex = parseInt(e.target.value);
            loadProblem(currentProblemIndex);
        });
    }

    // Run code button
    if (runButton) {
        runButton.addEventListener('click', () => {
            runCode();
        });
    }

    // Reset button
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            loadProblem(currentProblemIndex);
            addTerminalLine('Code reset to starter template.', 'ghost-text');
        });
    }

    function loadProblem(index) {
        const problem = problems[index];
        if (!problem) return;

        // Update description
        if (problemDescription) {
            problemDescription.innerHTML = `
                <h3>${problem.title}</h3>
                <p>${problem.description}</p>
                <pre><code>${escapeHtml(problem.starterCode)}</code></pre>
            `;
        }

        // Update editor
        if (codeEditor) {
            codeEditor.value = problem.starterCode;
        }

        // Clear terminal
        if (terminalContent) {
            terminalContent.innerHTML = '<p class="terminal-line ghost-text">Ghost: New challenge loaded...</p>';
        }
    }

    function runCode() {
        const code = codeEditor.value;
        const problem = problems[currentProblemIndex];

        if (terminalStatus) {
            terminalStatus.textContent = 'RUNNING...';
        }

        clearTerminal();
        addTerminalLine('Executing code...', 'ghost-text');

        setTimeout(() => {
            try {
                const passed = problem.test(code);

                if (passed) {
                    handleSuccess();
                } else {
                    handleFailure();
                }
            } catch (error) {
                handleError(error);
            }

            if (terminalStatus) {
                terminalStatus.textContent = 'READY';
            }
        }, 1000);
    }

    function handleSuccess() {
        addTerminalLine('✓ SUCCESS! All tests passed.', 'success-text');
        const comment = ghostComments.success[Math.floor(Math.random() * ghostComments.success.length)];
        addTerminalLine(`Ghost: ${comment}`, 'ghost-text');
        
        showGhostComment(comment);
        playSuccessSound();
    }

    function handleFailure() {
        addTerminalLine('✗ FAILED. Tests did not pass.', 'error-text');
        const comment = ghostComments.failure[Math.floor(Math.random() * ghostComments.failure.length)];
        addTerminalLine(`Ghost: ${comment}`, 'ghost-text');
        
        showGhostComment(comment);
        playErrorSound();
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 500);
    }

    function handleError(error) {
        addTerminalLine(`✗ ERROR: ${error.message}`, 'error-text');
        addTerminalLine('Ghost: Your code is cursed with syntax errors...', 'ghost-text');
        playErrorSound();
    }

    function clearTerminal() {
        if (terminalContent) {
            terminalContent.innerHTML = '';
        }
    }

    function addTerminalLine(text, className = '') {
        if (terminalContent) {
            const line = document.createElement('p');
            line.className = `terminal-line ${className}`;
            line.textContent = text;
            terminalContent.appendChild(line);
            terminalContent.scrollTop = terminalContent.scrollHeight;
        }
    }

    function showGhostComment(comment) {
        const ghostComment = document.getElementById('ghostComment');
        if (ghostComment) {
            ghostComment.textContent = comment;
            ghostComment.classList.add('show');
            setTimeout(() => {
                ghostComment.classList.remove('show');
            }, 2000);
        }
    }

    function playSuccessSound() {
        const successSound = document.getElementById('successSound');
        if (successSound) {
            successSound.currentTime = 0;
            successSound.play().catch(e => console.log('Audio play failed:', e));
        }
    }

    function playErrorSound() {
        const errorSound = document.getElementById('errorSound');
        if (errorSound) {
            errorSound.currentTime = 0;
            errorSound.play().catch(e => console.log('Audio play failed:', e));
        }
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
