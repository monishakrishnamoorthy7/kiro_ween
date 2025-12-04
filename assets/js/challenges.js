// ============================================
// CHALLENGES PAGE - CODE EDITOR MODAL
// ============================================

let monacoEditor = null;
let currentChallenge = null;
let currentLanguage = 'javascript';

// Challenge data with problem statements and starter code
const challenges = {
    1: {
        title: "The Corrupted Array",
        difficulty: "easy",
        description: `
            <h4>Problem:</h4>
            <p>Find the missing number in a corrupted array containing numbers from 1 to N.</p>
            <p>The ghost has removed one number from the sequence...</p>
            
            <h4>Example:</h4>
            <pre>Input: [1, 2, 4, 5, 6]
Output: 3

Input: [3, 7, 1, 2, 8, 4, 5]
Output: 6</pre>
            
            <h4>Constraints:</h4>
            <ul>
                <li>Array length: 1 ≤ n ≤ 10^6</li>
                <li>Numbers are unique and in range [1, n+1]</li>
            </ul>
        `,
        starterCode: {
            javascript: `function findMissingNumber(arr) {
    // Your code here
    // The ghost watches...
    
    return -1;
}

// Test cases
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Expected: 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Expected: 6`,
            python: `def find_missing_number(arr):
    # Your code here
    # The ghost watches...
    
    return -1

# Test cases
print(find_missing_number([1, 2, 4, 5, 6]))  # Expected: 3
print(find_missing_number([3, 7, 1, 2, 8, 4, 5]))  # Expected: 6`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

int findMissingNumber(vector<int> arr) {
    // Your code here
    // The ghost watches...
    
    return -1;
}

int main() {
    cout << findMissingNumber({1, 2, 4, 5, 6}) << endl; // Expected: 3
    cout << findMissingNumber({3, 7, 1, 2, 8, 4, 5}) << endl; // Expected: 6
    return 0;
}`,
            java: `import java.util.*;

public class Main {
    public static int findMissingNumber(int[] arr) {
        // Your code here
        // The ghost watches...
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(findMissingNumber(new int[]{1, 2, 4, 5, 6})); // Expected: 3
        System.out.println(findMissingNumber(new int[]{3, 7, 1, 2, 8, 4, 5})); // Expected: 6
    }
}`
        }
    },
    2: {
        title: "Palindrome Curse",
        difficulty: "easy",
        description: `
            <h4>Problem:</h4>
            <p>Check if a string reads the same forwards and backwards.</p>
            <p>Break the palindrome spell!</p>
            
            <h4>Example:</h4>
            <pre>Input: "racecar"
Output: true

Input: "hello"
Output: false</pre>
        `,
        starterCode: {
            javascript: `function isPalindrome(str) {
    // Your code here
    
    return false;
}

console.log(isPalindrome("racecar")); // Expected: true
console.log(isPalindrome("hello")); // Expected: false`,
            python: `def is_palindrome(s):
    # Your code here
    
    return False

print(is_palindrome("racecar"))  # Expected: True
print(is_palindrome("hello"))  # Expected: False`,
            cpp: `#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string str) {
    // Your code here
    
    return false;
}

int main() {
    cout << (isPalindrome("racecar") ? "true" : "false") << endl;
    cout << (isPalindrome("hello") ? "true" : "false") << endl;
    return 0;
}`,
            java: `public class Main {
    public static boolean isPalindrome(String str) {
        // Your code here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("racecar")); // Expected: true
        System.out.println(isPalindrome("hello")); // Expected: false
    }
}`
        }
    },
    3: {
        title: "Fibonacci Nightmare",
        difficulty: "medium",
        description: `
            <h4>Problem:</h4>
            <p>Generate the Nth Fibonacci number. The sequence haunts you...</p>
            
            <h4>Example:</h4>
            <pre>Input: 7
Output: 13 (sequence: 0, 1, 1, 2, 3, 5, 8, 13)</pre>
        `,
        starterCode: {
            javascript: `function fibonacci(n) {
    // Your code here
    
    return 0;
}

console.log(fibonacci(7)); // Expected: 13
console.log(fibonacci(10)); // Expected: 55`,
            python: `def fibonacci(n):
    # Your code here
    
    return 0

print(fibonacci(7))  # Expected: 13
print(fibonacci(10))  # Expected: 55`,
            cpp: `#include <iostream>
using namespace std;

int fibonacci(int n) {
    // Your code here
    
    return 0;
}

int main() {
    cout << fibonacci(7) << endl; // Expected: 13
    cout << fibonacci(10) << endl; // Expected: 55
    return 0;
}`,
            java: `public class Main {
    public static int fibonacci(int n) {
        // Your code here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(fibonacci(7)); // Expected: 13
        System.out.println(fibonacci(10)); // Expected: 55
    }
}`
        }
    }
};

// Challenge 4: Two Sum Terror
challenges[4] = {
    title: "Two Sum Terror",
    difficulty: "medium",
    description: `
        <h4>Problem:</h4>
        <p>Find two numbers in an array that add up to a target sum.</p>
        <p>Return their indices. The ghost watches...</p>
        
        <h4>Example:</h4>
        <pre>Input: [2, 7, 11, 15], target = 9
Output: [0, 1]

Input: [3, 2, 4], target = 6
Output: [1, 2]</pre>
    `,
    starterCode: {
        javascript: `function twoSum(nums, target) {
    // Your code here
    
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]`,
        python: `def two_sum(nums, target):
    # Your code here
    
    return []

print(two_sum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(two_sum([3, 2, 4], 6))  # Expected: [1, 2]`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int> nums, int target) {
    // Your code here
    
    return {};
}

int main() {
    vector<int> result = twoSum({2, 7, 11, 15}, 9);
    cout << "[" << result[0] << ", " << result[1] << "]" << endl;
    return 0;
}`,
        java: `import java.util.*;

public class Main {
    public static int[] twoSum(int[] nums, int target) {
        // Your code here
        
        return new int[]{};
    }
    
    public static void main(String[] args) {
        int[] result = twoSum(new int[]{2, 7, 11, 15}, 9);
        System.out.println(Arrays.toString(result)); // Expected: [0, 1]
    }
}`
    }
};

// Add remaining challenges (5-13)
for (let i = 5; i <= 13; i++) {
    const titles = {
        5: "Binary Tree Haunting",
        6: "Longest Substring Curse",
        7: "Anagram Detection",
        8: "Reverse String Spell",
        9: "Merge Sorted Souls",
        10: "Valid Parentheses",
        11: "Climbing Stairs of Doom",
        12: "Maximum Subarray",
        13: "The Final Curse"
    };
    
    challenges[i] = {
        title: titles[i],
        difficulty: i <= 8 ? (i === 8 ? "easy" : i === 5 ? "hard" : "medium") : (i <= 10 ? "medium" : "hard"),
        description: `<h4>Problem:</h4><p>Solve ${titles[i]} to break the curse!</p><p>The ghost awaits your solution...</p>`,
        starterCode: {
            javascript: `// ${titles[i]}\nfunction solve() {\n    // Your code here\n    console.log("Solving ${titles[i]}");\n}\n\nsolve();`,
            python: `# ${titles[i]}\ndef solve():\n    # Your code here\n    print("Solving ${titles[i]}")\n\nsolve()`,
            cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // ${titles[i]}\n    cout << "Solving ${titles[i]}" << endl;\n    return 0;\n}`,
            java: `public class Main {\n    public static void main(String[] args) {\n        // ${titles[i]}\n        System.out.println("Solving ${titles[i]}");\n    }\n}`
        }
    };
}

// Initialize Monaco Editor
function initMonacoEditor() {
    require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' } });
    
    require(['vs/editor/editor.main'], function () {
        monacoEditor = monaco.editor.create(document.getElementById('monacoEditor'), {
            value: '// Select a challenge to begin...',
            language: 'javascript',
            theme: 'vs-dark',
            automaticLayout: true,
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            lineNumbers: 'on',
            renderWhitespace: 'selection',
            tabSize: 4
        });
    });
}

// Open editor modal with challenge
function attemptChallenge(challengeNumber) {
    currentChallenge = challengeNumber;
    const challenge = challenges[challengeNumber];
    
    if (!challenge) {
        alert('Challenge not found!');
        return;
    }
    
    // Update modal content
    document.getElementById('modalChallengeTitle').textContent = challenge.title;
    document.getElementById('modalDifficulty').textContent = challenge.difficulty.toUpperCase();
    document.getElementById('modalDifficulty').className = `difficulty-badge ${challenge.difficulty}`;
    document.getElementById('problemStatement').innerHTML = challenge.description;
    
    // Set editor content
    if (monacoEditor) {
        monacoEditor.setValue(challenge.starterCode[currentLanguage]);
    }
    
    // Show modal
    document.getElementById('editorModal').classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Play sound effect
    const whisperSound = document.getElementById('whisperSound');
    if (whisperSound) {
        whisperSound.currentTime = 0;
        whisperSound.play().catch(e => console.log('Audio play failed:', e));
    }
}

// Close editor modal
function closeEditorModal() {
    document.getElementById('editorModal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Change programming language
function changeLanguage() {
    const select = document.getElementById('languageSelect');
    currentLanguage = select.value;
    
    const challenge = challenges[currentChallenge];
    if (challenge && monacoEditor) {
        monacoEditor.setValue(challenge.starterCode[currentLanguage]);
        
        // Update Monaco language
        const languageMap = {
            javascript: 'javascript',
            python: 'python',
            cpp: 'cpp',
            java: 'java'
        };
        monaco.editor.setModelLanguage(monacoEditor.getModel(), languageMap[currentLanguage]);
    }
}

// Run code using Piston API
async function runCode() {
    if (!monacoEditor) return;
    
    const code = monacoEditor.getValue();
    const consoleOutput = document.getElementById('consoleOutput');
    
    // Show loading
    consoleOutput.innerHTML = '<div class="console-line ghost-text">👻 Running your code...</div>';
    
    // Language version mapping for Piston API
    const languageVersions = {
        javascript: { language: 'javascript', version: '18.15.0' },
        python: { language: 'python', version: '3.10.0' },
        cpp: { language: 'c++', version: '10.2.0' },
        java: { language: 'java', version: '15.0.2' }
    };
    
    const langConfig = languageVersions[currentLanguage];
    
    try {
        const response = await fetch('https://emkc.org/api/v2/piston/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                language: langConfig.language,
                version: langConfig.version,
                files: [{
                    content: code
                }]
            })
        });
        
        const result = await response.json();
        
        // Display output
        let output = '';
        if (result.run && result.run.output) {
            output = result.run.output;
        } else if (result.compile && result.compile.output) {
            output = result.compile.output;
        } else {
            output = 'No output';
        }
        
        // Format output
        const lines = output.split('\n').map(line => {
            if (line.includes('error') || line.includes('Error')) {
                return `<div class="console-line error-text">${escapeHtml(line)}</div>`;
            } else {
                return `<div class="console-line success-text">${escapeHtml(line)}</div>`;
            }
        }).join('');
        
        consoleOutput.innerHTML = lines || '<div class="console-line ghost-text">No output</div>';
        
    } catch (error) {
        consoleOutput.innerHTML = `<div class="console-line error-text">❌ Error: ${escapeHtml(error.message)}</div>
            <div class="console-line ghost-text">The ghost is displeased...</div>`;
    }
}

// Clear console
function clearConsole() {
    document.getElementById('consoleOutput').innerHTML = '<div class="console-line ghost-text">👻 Console cleared...</div>';
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize editor when page loads
document.addEventListener('DOMContentLoaded', () => {
    initMonacoEditor();
    
    // Add hover effects to challenge cards
    const challengeCards = document.querySelectorAll('.challenge-card');
    
    challengeCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Random glitch effect
            if (Math.random() < 0.3) {
                card.style.animation = 'glitchCard 0.3s';
                setTimeout(() => {
                    card.style.animation = '';
                }, 300);
            }
        });
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeEditorModal();
        }
    });
    
    // Close modal when clicking outside
    document.getElementById('editorModal').addEventListener('click', (e) => {
        if (e.target.id === 'editorModal') {
            closeEditorModal();
        }
    });
});
