// ============================================
// CHALLENGES PAGE - CHALLENGE INTERACTIONS
// ============================================

function attemptChallenge(challengeNumber) {
    // Show notification
    const messages = [
        "Challenge accepted! The ghost watches...",
        "Brave soul... Let's see if you can solve this.",
        "The curse awaits your solution...",
        "Your coding skills will be tested...",
        "The ghost prepares the challenge..."
    ];

    const message = messages[Math.floor(Math.random() * messages.length)];
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'ghost-message show';
    notification.textContent = `Challenge ${challengeNumber}: ${message}`;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.zIndex = '2000';
    document.body.appendChild(notification);

    // Play sound
    const whisperSound = document.getElementById('whisperSound');
    if (whisperSound) {
        whisperSound.currentTime = 0;
        whisperSound.play().catch(e => console.log('Audio play failed:', e));
    }

    // Shake effect
    document.body.classList.add('shake');
    setTimeout(() => {
        document.body.classList.remove('shake');
    }, 500);

    // Remove notification
    setTimeout(() => {
        notification.remove();
    }, 3000);

    // In a real app, this would navigate to the challenge page
    setTimeout(() => {
        alert(`Challenge ${challengeNumber} would open here!\n\nIn a full implementation, this would:\n- Open a dedicated challenge page\n- Load the specific problem\n- Provide a code editor\n- Test your solution\n\nFor now, try the Coding Practice page!`);
    }, 1000);
}

// Add hover effects to challenge cards
document.addEventListener('DOMContentLoaded', () => {
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
});
