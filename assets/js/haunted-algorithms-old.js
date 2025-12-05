// Haunted Algorithms - Ghost AI Implementation
let currentAlgorithm = null;
let visualizationArray = [];
let isRunning = false;
let isPaused = false;
let animationSpeed = 500;
let comparisonsCount = 0;
let swapsCount = 0;

// Ghost AI Messages
const ghostMessages = {
    bubbleSort: {
        intro: "Ah, the Bubble Sort of Souls... Watch as spirits rise to their rightful place, one haunting swap at a time. 👻",
        hints: [
            "Compare adjacent souls and swap if they're in the wrong order...",
            "The largest soul will bubble up to the end first, like a rising specter...",
            "Each pass through the array is like a ghost passing through walls..."
        ],
        complexity: "O(n²)"
    },
    quickSort: {
        intro: "The Quick Sort Curse! A divide-and-conquer spell that splits souls at lightning speed. ⚡",
        hints: [
            "Choose a pivot soul - it will be the anchor of your dark ritual...",
            "Partition the souls: lesser ones to the left, greater to the right...",
            "Recursively curse each partition until all souls are ordered..."
        ],
        complexity: "O(n log n)"
    },
    binarySearch: {
        intro: "Binary Search through the Nightmare Realm... Cut your search space in half with each ghostly step. 🔍",
        hints: [
            "The array must be sorted, like souls lined up for judgment...",
            "Check the middle soul - is your target greater or lesser?",
            "Eliminate half the souls with each comparison, narrowing your hunt..."
        ],
        complexity: "O(log n)"
    },
    dfs: {
        intro: "Depth-First Search through the Web of Darkness... Explore each path to its terrifying end. 🕸️",
        hints: [
            "Dive deep into one path before exploring others, like descending into an abyss...",
            "Use a stack to remember where you've been, marking visited souls...",
            "Backtrack when you hit a dead end, returning to haunt other paths..."
        ],
        complexity: "O(V+E)"
    },
    bfs: {
        intro: "Breadth-First Search - The Wave of Terror spreads level by level... 🌊",
        hints: [
            "Explore all neighbors before going deeper, like a spreading curse...",
            "Use a queue to process souls in the order they were discovered...",
            "Perfect for finding the shortest path through the haunted maze..."
        ],
        complexity: "O(V+E)"
    },
    dijkstra: {
        intro: "Dijkstra's Haunted Path Algorithm... Find the shortest route through cursed lands. 🗺️",
        hints: [
            "Start from your origin, marking distances to all souls as infinity...",
            "Always visit the unvisited soul with the smallest known distance...",
            "Update distances to neighbors, finding the least cursed path..."
        ],
        complexity: "O(V²)"
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    generateNewArray();
    updateGhostMessage("Select an algorithm to begin your journey into darkness...");
    
    // Speed slider
    document.getElementById('speedSlider').addEventListener('input', function(e) {
        animationSpeed = 1000 - (e.target.value * 90);
    });
});

// Select Algorithm
function selectAlgorithm(algo) {
    currentAlgorithm = algo;
    resetVisualization();
    
    const message = ghostMessages[algo];
    updateGhostMessage(message.intro);
    document.getElementById('complexity').textContent = message.complexity;
    
    playSound('ghostWhisper');
    
    // Generate appropriate visualization
    if (algo === 'dfs' || algo === 'bfs') {
        generateGraph();
    } else if (algo === 'dijkstra') {
        generateWeightedGraph();
    } else {
        generateNewArray();
    }
}

// Update Ghost Message with typing effect
function updateGhostMessage(text) {
    const messageEl = document.getElementById('ghostMessage');
    messageEl.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            messageEl.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        } else {
            messageEl.innerHTML += '<span class="ghost-typing">_</span>';
        }
    }
    
    typeWriter();
}

// Request Hint
function requestHint() {
    if (!currentAlgorithm) {
        updateGhostMessage("Choose an algorithm first, mortal... 💀");
        playSound('errorSound');
        return;
    }
    
    const hints = ghostMessages[currentAlgorithm].hints;
    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    
    document.getElementById('ghostHint').style.display = 'block';
    document.getElementById('hintText').textContent = randomHint;
    
    playSound('ghostWhisper');
    
    // Hide hint after 10 seconds
    setTimeout(() => {
        document.getElementById('ghostHint').style.display = 'none';
    }, 10000);
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
    if (!currentAlgorithm) {
        updateGhostMessage("Select an algorithm first, foolish mortal! 💀");
        playSound('errorSound');
        return;
    }
    
    if (isRunning) return;
    
    isRunning = true;
    isPaused = false;
    comparisonsCount = 0;
    swapsCount = 0;
    
    updateGhostMessage(`Initiating ${currentAlgorithm}... The spirits are awakening! 👻`);
    
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
        case 'dfs':
            await dfsVisualization();
            break;
        case 'bfs':
            await bfsVisualization();
            break;
        case 'dijkstra':
            await dijkstraVisualization();
            break;
    }
    
    if (!isPaused) {
        updateGhostMessage("The ritual is complete! The souls are now at peace... for now. 💀✨");
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
                // Swap
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
    // First sort the array
    visualizationArray.sort((a, b) => a - b);
    renderArray();
    await sleep(1000);
    
    const target = visualizationArray[Math.floor(Math.random() * visualizationArray.length)];
    updateGhostMessage(`Searching for the cursed number: ${target}... 🔍`);
    
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
            updateGhostMessage(`Found the cursed soul at position ${mid}! 💀✨`);
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

// Generate Graph for DFS/BFS
function generateGraph() {
    const canvas = document.getElementById('vizCanvas');
    canvas.innerHTML = '<div style="color: #e0aaff; text-align: center; padding: 50px;">Graph visualization coming soon... 🕸️</div>';
}

// Generate Weighted Graph for Dijkstra
function generateWeightedGraph() {
    const canvas = document.getElementById('vizCanvas');
    canvas.innerHTML = '<div style="color: #e0aaff; text-align: center; padding: 50px;">Weighted graph visualization coming soon... 🗺️</div>';
}

// DFS Visualization (placeholder)
async function dfsVisualization() {
    updateGhostMessage("DFS through the darkness... Coming soon! 🕸️");
}

// BFS Visualization (placeholder)
async function bfsVisualization() {
    updateGhostMessage("BFS wave of terror... Coming soon! 🌊");
}

// Dijkstra Visualization (placeholder)
async function dijkstraVisualization() {
    updateGhostMessage("Finding the shortest haunted path... Coming soon! 🗺️");
}

// Pause Visualization
function pauseVisualization() {
    isPaused = !isPaused;
    if (isPaused) {
        updateGhostMessage("The ritual is paused... The spirits wait in limbo. ⏸️");
    } else {
        updateGhostMessage("Resuming the dark ceremony... ▶️");
    }
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
    
    if (currentAlgorithm) {
        updateGhostMessage(ghostMessages[currentAlgorithm].intro);
    }
}

// Play Sound Effect
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

// Ghost AI Random Comments
const ghostComments = [
    "Fascinating... the souls are aligning...",
    "I sense a disturbance in the algorithm...",
    "The complexity grows darker...",
    "Ah yes, just as the ancient texts foretold...",
    "The spirits approve of your progress...",
    "Beware! The worst case approaches...",
    "Excellent... the recursion deepens..."
];

// Random ghost comments during visualization
setInterval(() => {
    if (isRunning && !isPaused && Math.random() < 0.1) {
        const comment = ghostComments[Math.floor(Math.random() * ghostComments.length)];
        console.log(`👻 Ghost AI: ${comment}`);
    }
}, 3000);
