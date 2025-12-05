// About Page - Feature Navigation with Sound Effects

function navigateWithSound(url) {
    // Play click sound
    const clickSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    clickSound.volume = 0.3;
    clickSound.play().catch(e => console.log('Sound play failed:', e));
    
    // Navigate after short delay
    setTimeout(() => {
        window.location.href = url;
    }, 200);
}

// Add hover sound effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.matrix-feature-card');
    const hoverSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2482/2482-preview.mp3');
    hoverSound.volume = 0.15;
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(e => console.log('Hover sound failed:', e));
        });
        
        // Add glow effect on hover
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 60px rgba(0, 255, 65, 0.6)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
});
