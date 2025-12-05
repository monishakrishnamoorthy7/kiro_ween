// Haunted Algorithms - Matrix Theme with Working Visualizations
let currentAlgorithm = 'bubbleSort';
let visualizationArray = [];
let isRunning = false;
let isPaused = false;
let animationSpeed = 500;
let comparisonsCount = 0;
let swapsCount = 0;

// Algorithm code templates
const codeTemplates = {
    bubbleSort: `// Bubble Sort Algorithm
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = 
                [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}`,
    quickSort: `// Quick Sort Algorithm
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}`,
    binarySearch: `// Binary Search Algorithm
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}`,
    mergeSort: `// Merge Sort Algorithm
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}`
};

// Ghost AI Messages
const ghostMessages = {
    bubbleSort: {
        intro: "Bubble Sort... Watch as elements rise like spirits! 👻",
        hints: [
            "Compare adjacent elements and swap if needed...",
            "The largest element bubbles to the end first...",
            "Time Complexity: O(n²) - Not the fastest, but easy to understand!"
        ]
    },
    quickSort: {
        intro: "Quick Sort - The lightning-fast divide and conquer! ⚡",
        hints: [
            "Choose a pivot and partition the array...",
            "Elements smaller than pivot go left, larger go right...",
            "Time Complexity: O(n log n) - Much faster!"
        ]
    },
    binarySearch: {
        intro: "Binary Search - Cut your search space in half! 🔍",
        hints: [
            "Array must be sorted first...",
            "Check the middle element...",
            "Time Complexity: O(log n) - Super fast!"
        ]
    },
    mergeSort: {
        intro: "Merge Sort - Divide, conquer, and merge! 🔀",
        hints: [
            "Divide array into halves recursively...",
            "Merge sorted halves back together...",
            "Time Complexity: O(n log n) - Stable and efficient!"
        ]
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    generateNewArray();
    updateGhostMessage(ghostMessages[currentAlgorithm].intro);
    
    // Speed slider
    document.getElementById('speedSlider').addEventListener('input', function(e) {
        animationSpeed = 1000 - (e.target.value * 90);
    });
});

// Select Algorithm
function selectAlgorithm(algo) {
    currentAlgorithm = algo;
    resetVisualization();
    
    // Update active state
    document.querySelectorAll('.algo-card').forEach(card => card.classList.remove('active'));
    event.target.closest('.algo-card').classList.add('active');
    
    // Update code editor
    document.getElementById('codeEditor').value = codeTemplates[algo];
    
    // Update ghost message
    updateGhostMessage(ghostMessages[algo].intro);
    
    // Update complexity
    const complexities = {
        bubbleSort: 'O(n²)',
        quickSort: 'O(n log n)',
        binarySearch: 'O(log n)',
        mergeSort: 'O(n log n)'
    };
    document.getElementById('complexity').textContent = complexities[algo];
    
    playSound('ghostWhisper');
}

// Update Ghost Message
function updateGhostMessage(text) {
    const messageEl = document.getElementById('ghostMessage');
    messageEl.innerHTML = `<p>${text}</p>`;
}

// Request Hint
function requestHint() {
    const hints = ghostMessages[currentAlgorithm].hints;
    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    updateGhostMessage(`💀 HINT: ${randomHint}`);
    playSound('ghostWhisper');
}

// Generate New Array
function generateNewArray() {
    visualizationArray = [];
    for (let i = 0; i < 10; i++) {
        visualizationArray.push(Math.floor(Math.random() * 100) + 10);
    }
    renderArray();
}

// Render Array
function renderArray(comparing = [], sorted = []) {
    const canvas = document.getElementById('vizCanvas');
    canvas.innerHTML = '';
    
    visualizationArray.forEach((value, index) => {
        const element = document.createElement('div');
        element.className = 'array-element';
        element.textContent = value;
        element.style.height = `${value * 3}px`;
        element.style.width = '50px';
        
        if (comparing.includes(index)) {
            element.classList.add('comparing');
        }
        if (sorted.includes(index)) {
            element.classList.add('sorted');
        }
        
        canvas.appendChild(element);
    });
}

// Start Visualization
async function startVisualization() {
    if (isRunning) return;
    
    isRunning = true;
    isPaused = false;
    comparisonsCount = 0;
    swapsCount = 0;
    
    updateGhostMessage(`Executing ${currentAlgorithm}... Watch closely! 👻`);
    
    switch(currentAlgorithm) {
        case 'bubbleSort':
            await bubbleSortVisualization();
            break;
        case 'quickSort':
            await quickSortVisualization(0, visualizationArray.length - 1);
            break;
        case 'binarySearch':
            await binarySearchVisualization();
            break;
        case 'mergeSort':
            await mergeSortVisualization();
            break;
    }
    
    if (!isPaused) {
        updateGhostMessage("Algorithm complete! The souls are now ordered... 💀✨");
        playSound('completeSound');
    }
    
    isRunning = false;
}

// Bubble Sort Visualization
async function bubbleSortVisualization() {
    const n = visualizationArray.length;
    const sorted = [];
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (!isRunning || isPaused) return;
            
            comparisonsCount++;
            document.getElementById('comparisons').textContent = comparisonsCount;
            
            renderArray([j, j + 1], sorted);
            await sleep(animationSpeed);
            
            if (visualizationArray[j] > visualizationArray[j + 1]) {
                [visualizationArray[j], visualizationArray[j + 1]] = 
                [visualizationArray[j + 1], visualizationArray[j]];
                
                swapsCount++;
                document.getElementById('swaps').textContent = swapsCount;
                playSound('swapSound');
            }
        }
        sorted.push(n - i - 1);
    }
    sorted.push(0);
    renderArray([], sorted);
}

// Quick Sort Visualization
async function quickSortVisualization(low, high) {
    if (low < high && isRunning && !isPaused) {
        const pi = await partition(low, high);
        await quickSortVisualization(low, pi - 1);
        await quickSortVisualization(pi + 1, high);
    }
}

async function partition(low, high) {
    const pivot = visualizationArray[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (!isRunning || isPaused) return i + 1;
        
        comparisonsCount++;
        document.getElementById('comparisons').textContent = comparisonsCount;
        
        renderArray([j, high], []);
        await sleep(animationSpeed);
        
        if (visualizationArray[j] < pivot) {
            i++;
            [visualizationArray[i], visualizationArray[j]] = 
            [visualizationArray[j], visualizationArray[i]];
            
            swapsCount++;
            document.getElementById('swaps').textContent = swapsCount;
            playSound('swapSound');
        }
    }
    
    [visualizationArray[i + 1], visualizationArray[high]] = 
    [visualizationArray[high], visualizationArray[i + 1]];
    
    swapsCount++;
    document.getElementById('swaps').textContent = swapsCount;
    
    return i + 1;
}

// Binary Search Visualization
async function binarySearchVisualization() {
    visualizationArray.sort((a, b) => a - b);
    renderArray();
    await sleep(1000);
    
    const target = visualizationArray[Math.floor(Math.random() * visualizationArray.length)];
    updateGhostMessage(`Searching for: ${target}... 🔍`);
    
    let left = 0;
    let right = visualizationArray.length - 1;
    
    while (left <= right && isRunning && !isPaused) {
        const mid = Math.floor((left + right) / 2);
        
        comparisonsCount++;
        document.getElementById('comparisons').textContent = comparisonsCount;
        
        renderArray([mid], []);
        await sleep(animationSpeed);
        
        if (visualizationArray[mid] === target) {
            renderArray([], [mid]);
            updateGhostMessage(`Found at position ${mid}! 💀✨`);
            playSound('completeSound');
            return;
        }
        
        if (visualizationArray[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

// Merge Sort Visualization
async function mergeSortVisualization() {
    updateGhostMessage("Merge Sort visualization coming soon! 🔀");
    await sleep(1000);
}

// Pause Visualization
function pauseVisualization() {
    isPaused = !isPaused;
    updateGhostMessage(isPaused ? "Paused... ⏸️" : "Resuming... ▶️");
}

// Reset Visualization
function resetVisualization() {
    isRunning = false;
    isPaused = false;
    comparisonsCount = 0;
    swapsCount = 0;
    
    document.getElementById('comparisons').textContent = '0';
    document.getElementById('swaps').textContent = '0';
    
    generateNewArray();
    updateGhostMessage(ghostMessages[currentAlgorithm].intro);
}

// Run Code
function runCode() {
    const code = document.getElementById('codeEditor').value;
    try {
        eval(code);
        updateGhostMessage("Code executed successfully! ✅");
        playSound('completeSound');
    } catch (error) {
        updateGhostMessage(`Error: ${error.message} ❌`);
        playSound('errorSound');
    }
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

// Sleep utility
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
