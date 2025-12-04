// ============================================
// HAUNTED CODELAB - MAIN SCRIPT
// Global effects and interactions
// ============================================

// Audio elements
const bgMusic = document.getElementById('bgMusic');
const typingSound = document.getElementById('typingSound');
const whisperSound = document.getElementById('whisperSound');
const musicToggle = document.getElementById('musicToggle');

// Music state
let musicPlaying = false;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 3000);

    // Static transition effect
    triggerStaticTransition();

    // Setup cursor trail
    setupCursorTrail();

    // Setup music toggle
    setupMusicToggle();

    // Random ghost messages
    startRandomGhostMessages();

    // Random screen shake
    startRandomScreenShake();

    // Easter egg: type "help"
    setupHelpEasterEgg();

    // Play typing sound on text input
    setupTypingSounds();
});

// Static transition effect
function triggerStaticTransition() {
    const staticTransition = document.getElementById('staticTransition');
    if (staticTransition) {
        staticTransition.style.opacity = '1';
        setTimeout(() => {
            staticTransition.style.opacity = '0';
        }, 300);
    }
}

// Music toggle
function setupMusicToggle() {
    if (musicToggle && bgMusic) {
        musicToggle.addEventListener('click', () => {
            if (musicPlaying) {
                bgMusic.pause();
                musicToggle.textContent = '🔇';
                musicToggle.classList.add('muted');
                musicPlaying = false;
            } else {
                bgMusic.play().catch(e => console.log('Audio play failed:', e));
                musicToggle.textContent = '🔊';
                musicToggle.classList.remove('muted');
                musicPlaying = true;
            }
        });
    }
}

// Cursor trail effect
function setupCursorTrail() {
    const canvas = document.getElementById('cursorCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const maxParticles = 50;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    document.addEventListener('mousemove', (e) => {
        particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 5 + 2,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            life: 1
        });

        if (particles.length > maxParticles) {
            particles.shift();
        }
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.life -= 0.02;
            particle.size *= 0.95;

            if (particle.life <= 0) {
                particles.splice(index, 1);
            }

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 0, 64, ${particle.life})`;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// Random ghost messages
function startRandomGhostMessages() {
    const messages = [
        "I'm watching you...",
        "Your code is weak...",
        "The ghost sees all...",
        "Can you feel the curse?",
        "Debug your fears...",
        "The terminal remembers...",
        "Type 'help' if you dare..."
    ];

    setInterval(() => {
        if (Math.random() < 0.1) {
            showGhostMessage(messages[Math.floor(Math.random() * messages.length)]);
        }
    }, 15000);
}

function showGhostMessage(message) {
    const ghostMessage = document.getElementById('ghostMessage');
    if (ghostMessage) {
        ghostMessage.textContent = message;
        ghostMessage.classList.add('show');
        playSound(whisperSound);

        setTimeout(() => {
            ghostMessage.classList.remove('show');
        }, 3000);
    }
}

// Random screen shake
function startRandomScreenShake() {
    setInterval(() => {
        if (Math.random() < 0.05) {
            document.body.classList.add('shake');
            setTimeout(() => {
                document.body.classList.remove('shake');
            }, 500);
        }
    }, 20000);
}

// Easter egg: type "help"
function setupHelpEasterEgg() {
    let typedText = '';
    const targetWord = 'help';

    document.addEventListener('keypress', (e) => {
        typedText += e.key.toLowerCase();
        
        if (typedText.length > targetWord.length) {
            typedText = typedText.slice(-targetWord.length);
        }

        if (typedText === targetWord) {
            showGhostMessage("You summoned me! The ghost is here...");
            document.body.classList.add('shake');
            setTimeout(() => {
                document.body.classList.remove('shake');
            }, 500);
            typedText = '';
        }
    });
}

// Typing sounds
function setupTypingSounds() {
    const textInputs = document.querySelectorAll('input[type="text"], textarea');
    
    textInputs.forEach(input => {
        input.addEventListener('keydown', () => {
            if (typingSound && Math.random() < 0.3) {
                playSound(typingSound);
            }
        });
    });
}

// Play sound helper
function playSound(audio) {
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log('Audio play failed:', e));
    }
}

// Utility: Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'ghost-message show';
    notification.textContent = message;
    notification.style.background = type === 'error' ? 'rgba(255, 0, 64, 0.9)' : 'rgba(157, 78, 221, 0.9)';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}
