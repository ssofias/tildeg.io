// Secret code - change this to your desired code
const SECRET_CODE = "iloveyou";

// Screen elements
const loginScreen = document.getElementById('login-screen');
const mainScreen = document.getElementById('main-screen');
const letterScreen = document.getElementById('letter-screen');
const secretCodeInput = document.getElementById('secret-code');
const errorMessage = document.getElementById('error-message');

// Add enter key functionality to the input
secretCodeInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkCode();
    }
});

// Focus on input when page loads
window.addEventListener('load', function() {
    secretCodeInput.focus();
});

function checkCode() {
    const enteredCode = secretCodeInput.value.toLowerCase().trim();
    
    if (enteredCode === '') {
        showError('Please enter the secret code');
        return;
    }
    
    if (enteredCode === SECRET_CODE.toLowerCase()) {
        // Correct code - transition to main screen
        hideError();
        transitionToScreen(mainScreen);
    } else {
        // Wrong code
        showError('Wrong code! Try again ❤️');
        secretCodeInput.value = '';
        secretCodeInput.focus();
        
        // Add shake animation to input
        secretCodeInput.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            secretCodeInput.style.animation = '';
        }, 500);
    }
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.opacity = '1';
}

function hideError() {
    errorMessage.style.opacity = '0';
}

function transitionToScreen(targetScreen) {
    // Hide current active screen
    const currentScreen = document.querySelector('.screen.active');
    currentScreen.classList.remove('active');
    
    // Show target screen after a short delay
    setTimeout(() => {
        targetScreen.classList.add('active');
    }, 300);
}

function openEnvelope() {
    // Add opening animation to envelope
    const envelope = document.getElementById('envelope');
    envelope.style.transform = 'scale(1.2) rotateY(180deg)';
    envelope.style.opacity = '0.5';
    
    // Transition to letter screen after animation
    setTimeout(() => {
        transitionToScreen(letterScreen);
        
        // Reset envelope state
        setTimeout(() => {
            envelope.style.transform = '';
            envelope.style.opacity = '';
        }, 600);
    }, 600);
}

function goBack() {
    transitionToScreen(mainScreen);
}

// Add CSS for shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 20%, 40%, 60%, 80%, 100% {
            transform: translateX(0);
        }
        10%, 30%, 50%, 70%, 90% {
            transform: translateX(-10px);
        }
    }
`;
document.head.appendChild(style);

// Add some romantic particle effects
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = '1.5rem';
    heart.style.color = 'rgba(255, 182, 193, 0.8)';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '-1';
    heart.style.transition = 'all 8s linear';
    
    document.body.appendChild(heart);
    
    // Animate the heart
    setTimeout(() => {
        heart.style.top = '-50px';
        heart.style.transform = 'translateX(' + (Math.random() * 200 - 100) + 'px) rotate(360deg)';
        heart.style.opacity = '0';
    }, 100);
    
    // Remove the heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 8000);
}

// Create floating hearts periodically when on main or letter screen
setInterval(() => {
    if (mainScreen.classList.contains('active') || letterScreen.classList.contains('active')) {
        if (Math.random() < 0.3) { // 30% chance every interval
            createFloatingHeart();
        }
    }
}, 2000);

// Add some sparkle effects when hovering over the envelope
const envelope = document.getElementById('envelope');
if (envelope) {
    envelope.addEventListener('mouseenter', function() {
        createSparkles(this);
    });
}

function createSparkles(element) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.fontSize = '1rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '10';
            sparkle.style.transition = 'all 1s ease-out';
            
            element.style.position = 'relative';
            element.appendChild(sparkle);
            
            // Animate sparkle
            setTimeout(() => {
                sparkle.style.transform = 'translateY(-30px) scale(0)';
                sparkle.style.opacity = '0';
            }, 100);
            
            // Remove sparkle
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1100);
        }, i * 100);
    }
}