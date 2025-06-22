// Set your secret code here
const SECRET_CODE = "143"; // Change this to your desired code

function checkCode() {
    const input = document.getElementById('codeInput').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (input === SECRET_CODE) {
        document.getElementById('lockScreen').style.display = 'none';
        document.getElementById('mainContent').classList.add('show');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Incorrect code. Try again! 💔';
        document.getElementById('codeInput').value = '';
    }
}

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    envelope.classList.add('opening');
    
    setTimeout(() => {
        letter.classList.add('show');
    }, 600);
}

function closeLetter() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    letter.classList.remove('show');
    
    setTimeout(() => {
        envelope.classList.remove('opening');
    }, 300);
}

function showMessage(message) {
    const messageDiv = document.getElementById('loveMessage');
    messageDiv.textContent = message;
    messageDiv.classList.add('show');
    
    setTimeout(() => {
        messageDiv.classList.remove('show');
    }, 3000);
}

// Allow Enter key to submit code
document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('codeInput');
    if (codeInput) {
        codeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkCode();
            }
        });
    }
});

// Add some random floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = ['💖', '💕', '💗', '💝'][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 6 + 's';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000);