// ============================================
// HAUNTED CODELAB - PREMIUM HORROR THEME
// Cursed Terminal + Paranormal Effects
// ============================================

// Audio elements
const bgMusic = document.getElementById('bgMusic');
const whisperSound = document.getElementById('whisperSound');
const musicToggle = document.getElementById('musicToggle');

// State - Check localStorage for global mute state
let musicPlaying = false;
let allAudioMuted = localStorage.getItem('hauntedCodeLabMuted') === 'true';
let ghostMessageTimeout = null;

// Set audio volumes - mild continuous horror ambiance
if (bgMusic) {
    bgMusic.volume = 0.25; // Mild volume for continuous play
    bgMusic.loop = true;
    bgMusic.preload = 'auto';
    bgMusic.muted = allAudioMuted; // Apply saved mute state
}
if (whisperSound) {
    whisperSound.volume = 0.15;
    whisperSound.muted = allAudioMuted; // Apply saved mute state
}

// Update music toggle button based on saved state
if (musicToggle && allAudioMuted) {
    musicToggle.classList.add('muted');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen and start music
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
        
        // Auto-start background music after loading (if not muted)
        if (bgMusic && !allAudioMuted) {
            bgMusic.play().catch(e => {
                console.log('Auto-play blocked, waiting for user interaction');
                // If auto-play is blocked, start on first interaction
                const startOnInteraction = () => {
                    if (!musicPlaying && !allAudioMuted) {
                        bgMusic.play().catch(err => console.log('Audio blocked:', err));
                        musicPlaying = true;
                    }
                };
                document.addEventListener('click', startOnInteraction, { once: true });
                document.addEventListener('keydown', startOnInteraction, { once: true });
            });
            musicPlaying = true;
        } else if (allAudioMuted) {
            console.log('Audio muted globally - respecting user preference');
        }
    }, 3000);

    // Initialize all effects
    initTypewriter();
    initFloatingParticles();
    initCursorTrail();
    initMusicToggle();
    initStatCounter();
    initGhostMessages();
    initScreenShake();
    initEasterEggs();
    initGlitchEffects();
    initGhostModal();
});

// ============================================
// TYPEWRITER EFFECT
// ============================================
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriterText');
    if (!typewriterElement) return;

    const text = "Survive the Ghost by Solving Code";
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    setTimeout(type, 500);
}

// ============================================
// FLOATING PARTICLES
// ============================================
function initFloatingParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;

    const particleCount = window.innerWidth < 768 ? 20 : 40;

    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const startX = Math.random() * window.innerWidth;
    const delay = Math.random() * 15;
    const duration = 15 + Math.random() * 10;
    
    particle.style.left = startX + 'px';
    particle.style.animationDelay = delay + 's';
    particle.style.animationDuration = duration + 's';
    
    const colors = ['#00ff41', '#9d4edd', '#00fff9'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
    
    container.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
        createParticle(container);
    }, (duration + delay) * 1000);
}

// ============================================
// CURSOR TRAIL
// ============================================
function initCursorTrail() {
    const canvas = document.getElementById('cursorCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const maxParticles = window.innerWidth < 768 ? 30 : 60;

    // Custom cursor
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 6 + 3,
            speedX: (Math.random() - 0.5) * 3,
            speedY: (Math.random() - 0.5) * 3,
            life: 1,
            color: Math.random() > 0.5 ? '#ff0040' : '#9d4edd'
        });

        if (particles.length > maxParticles) {
            particles.shift();
        }
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw cursor
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 65, 0.6)';
        ctx.fill();
        ctx.strokeStyle = '#00ff41';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw particles
        particles.forEach((particle, index) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.life -= 0.015;
            particle.size *= 0.96;

            if (particle.life <= 0) {
                particles.splice(index, 1);
                return;
            }

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            
            const r = particle.color === '#ff0040' ? 255 : 157;
            const g = particle.color === '#ff0040' ? 0 : 78;
            const b = particle.color === '#ff0040' ? 64 : 221;
            
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.life})`;
            ctx.shadowBlur = 15;
            ctx.shadowColor = particle.color;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// ============================================
// MUSIC TOGGLE
// ============================================
function initMusicToggle() {
    if (!musicToggle) return;

    // Toggle button
    musicToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        
        if (allAudioMuted) {
            // Unmute all
            allAudioMuted = false;
            localStorage.setItem('hauntedCodeLabMuted', 'false'); // Save to localStorage
            
            if (bgMusic) {
                bgMusic.muted = false;
                bgMusic.volume = 0.25; // Mild continuous volume
                bgMusic.play().catch(e => console.log('Audio blocked:', e));
            }
            if (whisperSound) {
                whisperSound.muted = false;
                whisperSound.volume = 0.15;
            }
            
            musicToggle.classList.remove('muted');
            musicPlaying = true;
            
            console.log('🔊 Audio unmuted globally - will apply to all pages');
        } else {
            // Mute all
            allAudioMuted = true;
            localStorage.setItem('hauntedCodeLabMuted', 'true'); // Save to localStorage
            
            if (bgMusic) {
                bgMusic.pause();
                bgMusic.muted = true;
            }
            if (whisperSound) {
                whisperSound.pause();
                whisperSound.muted = true;
            }
            
            musicToggle.classList.add('muted');
            musicPlaying = false;
            
            console.log('🔇 Audio muted globally - will apply to all pages');
        }
    });
}

// ============================================
// STAT COUNTER ANIMATION
// ============================================
function initStatCounter() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// ============================================
// GHOST MESSAGES
// ============================================
function initGhostMessages() {
    const messages = [
        "I'm watching you...",
        "Your code is cursed...",
        "The ghost sees all...",
        "Can you feel the darkness?",
        "Debug your fears...",
        "The terminal remembers...",
        "Type 'ghost' if you dare...",
        "Your syntax is haunted...",
        "The curse grows stronger...",
        "Beware the midnight hour..."
    ];

    // Random ghost messages
    setInterval(() => {
        if (Math.random() < 0.15) {
            const message = messages[Math.floor(Math.random() * messages.length)];
            showGhostMessage(message);
        }
    }, 20000);
}

function showGhostMessage(message) {
    const ghostMessage = document.getElementById('ghostMessage');
    if (!ghostMessage) return;

    const textElement = ghostMessage.querySelector('.ghost-message-text');
    if (textElement) {
        textElement.textContent = message;
    } else {
        ghostMessage.textContent = message;
    }

    ghostMessage.classList.add('show');
    playSound(whisperSound);

    if (ghostMessageTimeout) {
        clearTimeout(ghostMessageTimeout);
    }

    ghostMessageTimeout = setTimeout(() => {
        ghostMessage.classList.remove('show');
    }, 4000);
}

// ============================================
// SCREEN SHAKE
// ============================================
function initScreenShake() {
    // Random screen shakes
    setInterval(() => {
        if (Math.random() < 0.08) {
            triggerScreenShake();
        }
    }, 25000);
}

function triggerScreenShake() {
    document.body.classList.add('shake');
    setTimeout(() => {
        document.body.classList.remove('shake');
    }, 500);
}

// ============================================
// EASTER EGGS
// ============================================
function initEasterEggs() {
    let typedText = '';
    const easterEggs = {
        'help': "The ghost cannot help you now...",
        'ghost': "You summoned me! Prepare for the curse...",
        'curse': "The curse is eternal...",
        'debug': "Debugging the paranormal...",
        'haunted': "This place is forever haunted..."
    };

    document.addEventListener('keypress', (e) => {
        typedText += e.key.toLowerCase();
        
        if (typedText.length > 10) {
            typedText = typedText.slice(-10);
        }

        Object.keys(easterEggs).forEach(keyword => {
            if (typedText.includes(keyword)) {
                showGhostModal(easterEggs[keyword]);
                triggerScreenShake();
                triggerStaticGlitch();
                typedText = '';
            }
        });
    });
}

// ============================================
// GLITCH EFFECTS
// ============================================
function initGlitchEffects() {
    // Random glitch on CTA cards
    const ctaCards = document.querySelectorAll('.cta-card');
    
    ctaCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (Math.random() < 0.3) {
                triggerStaticGlitch();
            }
        });
    });

    // Random title glitch
    setInterval(() => {
        if (Math.random() < 0.1) {
            const title = document.querySelector('.glitch-title');
            if (title) {
                title.style.animation = 'none';
                setTimeout(() => {
                    title.style.animation = '';
                }, 100);
            }
        }
    }, 15000);
}

function triggerStaticGlitch() {
    const staticTransition = document.getElementById('staticTransition');
    if (staticTransition) {
        staticTransition.classList.add('active');
        setTimeout(() => {
            staticTransition.classList.remove('active');
        }, 300);
    }
}

// ============================================
// GHOST MODAL
// ============================================
function initGhostModal() {
    const modal = document.getElementById('ghostModal');
    const closeBtn = modal?.querySelector('.ghost-modal-close');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.classList.remove('no-scroll');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.classList.remove('no-scroll');
            }
        });
    }
}

function showGhostModal(message) {
    const modal = document.getElementById('ghostModal');
    if (!modal) return;

    const textElement = modal.querySelector('.ghost-modal-text');
    if (textElement) {
        textElement.textContent = message;
    }

    modal.classList.add('show');
    document.body.classList.add('no-scroll');
    playSound(whisperSound);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function playSound(audio) {
    if (audio && !allAudioMuted) {
        audio.currentTime = 0;
        audio.volume = audio === bgMusic ? 0.25 : 0.15; // Mild volumes
        audio.play().catch(e => console.log('Audio blocked:', e));
    }
}

// Export for use in other pages
window.HauntedCodeLab = {
    showGhostMessage,
    showGhostModal,
    triggerScreenShake,
    triggerStaticGlitch,
    playSound
};
