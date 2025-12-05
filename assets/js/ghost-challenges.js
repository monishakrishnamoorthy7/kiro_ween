// Ghost Challenges - Interactive Challenge System
const challenges = {
    1: {
        title: "The Vanishing Number",
        difficulty: "EASY",
        description: "A ghost has stolen one number from an array containing 1 to N. Find the missing number!",
        problem: `Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example:
Input: [3, 0, 1]
Output: 2

Input: [9,6,4,2,3,5,7,0,1]
Output: 8`,
        starterCode: `function findMissingNumber(nums) {
    // Your code here
    // The ghost has hidden one number...
}`,
        testCases: [
            { input: "[3, 0, 1]", expected: "2" },
            { input: "[9,6,4,2,3,5,7,0,1]", expected: "8" },
            { input: "[0, 1]", expected: "2" }
        ],
        hints: [
            "Use the sum formula: n * (n + 1) / 2",
            "Subtract the sum of array elements from the expected sum",
            "The difference is your missing number!"
        ]
    },
    2: {
        title: "Reverse the Curse",
        difficulty: "EASY",
        description: "Reverse a string to break the ancient curse!",
        problem: `Write a function that reverses a string. The input string is given as an array of characters.

Example:
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]`,
        starterCode: `function reverseString(s) {
    // Your code here
    // Mirror the curse to break it...
}`,
        testCases: [
            { input: '["h","e","l","l","o"]', expected: '["o","l","l","e","h"]' },
            { input: '["H","a","n","n","a","h"]', expected: '["h","a","n","n","a","H"]' }
        ],
        hints: [
            "Use two pointers from both ends",
            "Swap characters while moving towards center",
            "Or use built-in reverse() method"
        ]
    },
    3: {
        title: "Palindrome Detection",
        difficulty: "EASY",
        description: "Detect if a string is a palindrome - reading the same forwards and backwards!",
        problem: `Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example:
Input: "A man, a plan, a canal: Panama"
Output: true

Input: "race a car"
Output: false`,
        starterCode: `function isPalindrome(s) {
    // Your code here
    // Does the curse read the same both ways?
}`,
        testCases: [
            { input: '"A man, a plan, a canal: Panama"', expected: 'true' },
            { input: '"race a car"', expected: 'false' },
            { input: '" "', expected: 'true' }
        ],
        hints: [
            "Remove non-alphanumeric characters first",
            "Convert to lowercase",
            "Compare with its reverse"
        ]
    },
    4: {
        title: "Two Souls, One Target",
        difficulty: "MEDIUM",
        description: "Find two numbers in an array that add up to a specific target!",
        problem: `Given an array of integers and a target, return indices of the two numbers that add up to target.

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9

Input: nums = [3,2,4], target = 6
Output: [1,2]`,
        starterCode: `function twoSum(nums, target) {
    // Your code here
    // Find the two cursed souls...
}`,
        testCases: [
            { input: '[2,7,11,15], 9', expected: '[0,1]' },
            { input: '[3,2,4], 6', expected: '[1,2]' },
            { input: '[3,3], 6', expected: '[0,1]' }
        ],
        hints: [
            "Use a hash map to store seen numbers",
            "For each number, check if target - number exists",
            "Time complexity: O(n)"
        ]
    },
    5: {
        title: "Fibonacci Nightmare",
        difficulty: "MEDIUM",
        description: "Calculate the Nth Fibonacci number - the sequence that haunts mathematicians!",
        problem: `The Fibonacci numbers form a sequence where each number is the sum of the two preceding ones.

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1

Example:
Input: n = 2
Output: 1

Input: n = 4
Output: 3`,
        starterCode: `function fibonacci(n) {
    // Your code here
    // The eternal sequence awaits...
}`,
        testCases: [
            { input: '2', expected: '1' },
            { input: '4', expected: '3' },
            { input: '10', expected: '55' }
        ],
        hints: [
            "Use dynamic programming to avoid recalculation",
            "Or use iterative approach with two variables",
            "Avoid recursive solution for large n"
        ]
    },
    6: {
        title: "Anagram Spirits",
        difficulty: "EASY",
        description: "Determine if two strings are anagrams of each other!",
        problem: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example:
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false`,
        starterCode: `function isAnagram(s, t) {
    // Your code here
    // Are these spirits the same?
}`,
        testCases: [
            { input: '"anagram", "nagaram"', expected: 'true' },
            { input: '"rat", "car"', expected: 'false' }
        ],
        hints: [
            "Sort both strings and compare",
            "Or use a character frequency map",
            "Check if lengths are equal first"
        ]
    },
    7: {
        title: "Haunted Parentheses",
        difficulty: "MEDIUM",
        description: "Check if parentheses are balanced in a string!",
        problem: `Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

Example:
Input: "()"
Output: true

Input: "()[]{}"
Output: true

Input: "(]"
Output: false`,
        starterCode: `function isValid(s) {
    // Your code here
    // Balance the cursed brackets...
}`,
        testCases: [
            { input: '"()"', expected: 'true' },
            { input: '"()[]{}"', expected: 'true' },
            { input: '"(]"', expected: 'false' }
        ],
        hints: [
            "Use a stack data structure",
            "Push opening brackets, pop for closing",
            "Check if closing bracket matches top of stack"
        ]
    },
    8: {
        title: "Maximum Subarray Curse",
        difficulty: "MEDIUM",
        description: "Find the contiguous subarray with the largest sum!",
        problem: `Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6

Input: [1]
Output: 1`,
        starterCode: `function maxSubArray(nums) {
    // Your code here
    // Find the most powerful sequence...
}`,
        testCases: [
            { input: '[-2,1,-3,4,-1,2,1,-5,4]', expected: '6' },
            { input: '[1]', expected: '1' },
            { input: '[5,4,-1,7,8]', expected: '23' }
        ],
        hints: [
            "Use Kadane's Algorithm",
            "Keep track of current sum and max sum",
            "Reset current sum if it becomes negative"
        ]
    },
    9: {
        title: "Binary Tree Haunting",
        difficulty: "HARD",
        description: "Perform inorder traversal of a binary tree!",
        problem: `Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example:
Input: root = [1,null,2,3]
Output: [1,3,2]

Inorder: Left -> Root -> Right`,
        starterCode: `function inorderTraversal(root) {
    // Your code here
    // Traverse the tree of lost souls...
}`,
        testCases: [
            { input: '[1,null,2,3]', expected: '[1,3,2]' },
            { input: '[]', expected: '[]' },
            { input: '[1]', expected: '[1]' }
        ],
        hints: [
            "Use recursion: left subtree, root, right subtree",
            "Or use iterative approach with a stack",
            "Base case: if node is null, return"
        ]
    },
    10: {
        title: "Longest Substring Spell",
        difficulty: "MEDIUM",
        description: "Find the length of the longest substring without repeating characters!",
        problem: `Given a string s, find the length of the longest substring without repeating characters.

Example:
Input: "abcabcbb"
Output: 3
Explanation: "abc" is the longest

Input: "bbbbb"
Output: 1`,
        starterCode: `function lengthOfLongestSubstring(s) {
    // Your code here
    // No repeating souls allowed...
}`,
        testCases: [
            { input: '"abcabcbb"', expected: '3' },
            { input: '"bbbbb"', expected: '1' },
            { input: '"pwwkew"', expected: '3' }
        ],
        hints: [
            "Use sliding window technique",
            "Keep track of characters in a set or map",
            "Move left pointer when duplicate found"
        ]
    },
    11: {
        title: "Merge Sorted Souls",
        difficulty: "EASY",
        description: "Merge two sorted arrays into one sorted array!",
        problem: `You are given two integer arrays nums1 and nums2, sorted in non-decreasing order. Merge them into a single sorted array.

Example:
Input: nums1 = [1,2,3], nums2 = [2,5,6]
Output: [1,2,2,3,5,6]

Input: nums1 = [1], nums2 = []
Output: [1]`,
        starterCode: `function merge(nums1, nums2) {
    // Your code here
    // Unite the sorted souls...
}`,
        testCases: [
            { input: '[1,2,3], [2,5,6]', expected: '[1,2,2,3,5,6]' },
            { input: '[1], []', expected: '[1]' },
            { input: '[], [1]', expected: '[1]' }
        ],
        hints: [
            "Use two pointers, one for each array",
            "Compare elements and add smaller one",
            "Don't forget remaining elements"
        ]
    },
    12: {
        title: "Climbing Stairs of Doom",
        difficulty: "EASY",
        description: "Count the number of ways to climb n stairs (1 or 2 steps at a time)!",
        problem: `You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. How many distinct ways can you climb to the top?

Example:
Input: n = 2
Output: 2
Explanation: 1+1 or 2

Input: n = 3
Output: 3
Explanation: 1+1+1, 1+2, or 2+1`,
        starterCode: `function climbStairs(n) {
    // Your code here
    // How many paths through the darkness?
}`,
        testCases: [
            { input: '2', expected: '2' },
            { input: '3', expected: '3' },
            { input: '5', expected: '8' }
        ],
        hints: [
            "This is actually Fibonacci!",
            "ways(n) = ways(n-1) + ways(n-2)",
            "Use dynamic programming"
        ]
    },
    13: {
        title: "The Final Curse: LRU Cache",
        difficulty: "HARD",
        description: "Implement a Least Recently Used (LRU) cache!",
        problem: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:
- LRUCache(int capacity) Initialize with positive size capacity
- int get(int key) Return the value if exists, otherwise return -1
- void put(int key, int value) Update or insert the value. If cache reaches capacity, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.`,
        starterCode: `class LRUCache {
    constructor(capacity) {
        // Your code here
        // The final curse awaits...
    }
    
    get(key) {
        // Your code here
    }
    
    put(key, value) {
        // Your code here
    }
}`,
        testCases: [
            { input: 'capacity=2, put(1,1), put(2,2), get(1)', expected: '1' },
            { input: 'put(3,3), get(2)', expected: '-1' }
        ],
        hints: [
            "Use a combination of HashMap and Doubly Linked List",
            "HashMap for O(1) access",
            "Linked List for O(1) insertion/deletion"
        ]
    }
};

// Ghost AI Messages
const ghostMessages = [
    "Interesting approach, mortal... 👻",
    "The spirits are watching your every move... 💀",
    "Hmm, are you sure about that logic? 🤔",
    "The curse grows stronger with each attempt... ⚡",
    "I sense a disturbance in your algorithm... 🕸️",
    "Perhaps the hint will guide you... or mislead you! 😈",
    "The darkness whispers secrets of optimization... 🌙",
    "Your code reeks of... potential! 💜"
];

let currentChallenge = null;
let ghostSpeechTimeout = null;

// Open Challenge Modal
function openChallenge(challengeId) {
    currentChallenge = challengeId;
    const challenge = challenges[challengeId];
    
    const modalContent = `
        <h2 style="color: #e0aaff; text-align: center; margin-bottom: 10px;">
            ${challenge.title}
        </h2>
        <p style="color: #ff0054; text-align: center; font-weight: bold; margin-bottom: 20px;">
            DIFFICULTY: ${challenge.difficulty}
        </p>
        <div style="color: #c77dff; margin-bottom: 20px; line-height: 1.8;">
            ${challenge.description}
        </div>
        <div class="code-example">
            <pre>${challenge.problem}</pre>
        </div>
        <h3 style="color: #e0aaff; margin-top: 30px;">Starter Code:</h3>
        <div class="code-example">
            <pre>${challenge.starterCode}</pre>
        </div>
        <h3 style="color: #e0aaff; margin-top: 30px;">Test Cases:</h3>
        <div class="test-cases">
            ${challenge.testCases.map((tc, i) => `
                <div class="test-case">
                    <strong style="color: #9d4edd;">Test ${i + 1}:</strong><br>
                    <span style="color: #c77dff;">Input: ${tc.input}</span><br>
                    <span style="color: #06ffa5;">Expected: ${tc.expected}</span>
                </div>
            `).join('')}
        </div>
        <h3 style="color: #e0aaff; margin-top: 30px;">👻 Ghost Hints:</h3>
        <div class="test-cases">
            ${challenge.hints.map((hint, i) => `
                <div class="test-case">
                    <span style="color: #c77dff;">${i + 1}. ${hint}</span>
                </div>
            `).join('')}
        </div>
        <button class="challenge-btn" style="margin-top: 30px;" onclick="startCoding()">
            Start Coding 💻
        </button>
    `;
    
    document.getElementById('modalContent').innerHTML = modalContent;
    document.getElementById('challengeModal').style.display = 'block';
    
    playSound('ghostWhisper');
    showGhostMessage("You dare challenge number " + challengeId + "? Let's see what you've got! 👻");
}

// Close Challenge Modal
function closeChallenge() {
    document.getElementById('challengeModal').style.display = 'none';
    currentChallenge = null;
}

// Start Coding (redirect to practice page or open code editor)
function startCoding() {
    showGhostMessage("Opening the cursed code editor... Good luck, mortal! 💀");
    playSound('successSound');
    // In a real implementation, this would open a code editor
    setTimeout(() => {
        alert("This would open the code editor in the full implementation!");
    }, 1000);
}

// Toggle Ghost Speech
function toggleGhostSpeech() {
    const bubble = document.getElementById('ghostSpeech');
    const isVisible = bubble.style.display === 'block';
    
    if (isVisible) {
        bubble.style.display = 'none';
    } else {
        const randomMessage = ghostMessages[Math.floor(Math.random() * ghostMessages.length)];
        bubble.textContent = randomMessage;
        bubble.style.display = 'block';
        
        playSound('ghostWhisper');
        
        // Auto-hide after 5 seconds
        clearTimeout(ghostSpeechTimeout);
        ghostSpeechTimeout = setTimeout(() => {
            bubble.style.display = 'none';
        }, 5000);
    }
}

// Show Ghost Message
function showGhostMessage(message) {
    const bubble = document.getElementById('ghostSpeech');
    bubble.textContent = message;
    bubble.style.display = 'block';
    
    clearTimeout(ghostSpeechTimeout);
    ghostSpeechTimeout = setTimeout(() => {
        bubble.style.display = 'none';
    }, 5000);
}

// Play Sound
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.currentTime = 0;
        sound.volume = 0.3;
        sound.play().catch(e => console.log('Sound play failed:', e));
    }
}

// Random ghost appearances
setInterval(() => {
    if (Math.random() < 0.1) {
        const randomMessage = ghostMessages[Math.floor(Math.random() * ghostMessages.length)];
        showGhostMessage(randomMessage);
    }
}, 30000);

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('challengeModal');
    if (event.target === modal) {
        closeChallenge();
    }
}
