// Configuration
const CONFIG = {
    correctCodes: ['love', 'kjærlighet', 'sebastian'],
    heartInterval: 800,
    heartLifetime: 8000,
    errorDisplayTime: 3000
};

// Modal content for each feature
const modalContents = {
    loveLetters: `
        <h2>💌 Kjærlighetsbrev</h2>
        <p>Min kjære Sebastian,</p>
        <p>Hver dag med deg er som en ny side i vår kjærlighetshistorie. Du gjør livet mitt komplett med ditt smil, din latter, og din kjærlighet.</p>
        <p>Du er ikke bare min kjæreste, du er min beste venn og min fremtid. ❤️</p>
    `,
    memories: `
        <h2>📸 Våre Minner</h2>
        <p>🌅 Vår første date - magisk</p>
        <p>🎭 Da vi lo til vi gråt</p>
        <p>🌙 Sene netter med dype samtaler</p>
        <p>🎉 Feiringer av små og store øyeblikk</p>
        <p>Hvert minne med deg er en skatt jeg bærer i hjertet.</p>
    `,
    playlist: `
        <h2>🎵 Vår Spilleliste</h2>
        <p>🎶 Sanger som får meg til å tenke på deg:</p>
        <p>💕 "Perfect" - Ed Sheeran</p>
        <p>💕 "All of Me" - John Legend</p>
        <p>💕 "Thinking Out Loud" - Ed Sheeran</p>
        <p>💕 "A Thousand Years" - Christina Perri</p>
        <p>Hver melodi blir vakkere når jeg tenker på deg.</p>
    `,
    promises: `
        <h2>💝 Mine Løfter Til Deg</h2>
        <p>💖 Jeg lover å elske deg hver dag</p>
        <p>🤗 Jeg lover å støtte deg i alt</p>
        <p>😊 Jeg lover å få deg til å smile</p>
        <p>🛡️ Jeg lover å beskytte hjertet ditt</p>
        <p>🌟 Jeg lover å gjøre drømmene dine til virkelighet</p>
        <p>Du fortjener alt det beste i verden, og det vil jeg gi deg.</p>
    `,
    future: `
        <h2>🌟 Vår Fremtid</h2>
        <p>🏠 Et koselig hjem fylt med kjærlighet</p>
        <p>✈️ Reiser til nye steder sammen</p>
        <p>🎊 Å feire alle livets milepæler</p>
        <p>👨‍👩‍👧‍👦 Kanskje en familie en dag</p>
        <p>🌅 Å bli gamle sammen</p>
        <p>Med deg ser fremtiden bare lysere og lysere ut.</p>
    `,
    reasons: `
        <h2>💖 Hvorfor Jeg Elsker Deg</h2>
        <p>😊 Ditt vakre smil lyser opp dagen min</p>
        <p>🧠 Din intelligens og visdom</p>
        <p>❤️ Ditt snille og omsorgsfulle hjerte</p>
        <p>😂 Måten du får meg til å le på</p>
        <p>🤗 Hvordan du alltid er der for meg</p>
        <p>🌟 Du gjør meg til en bedre person</p>
        <p>Listen er uendelig, for min kjærlighet til deg er det også.</p>
    `
};

// Heart Animation Functions
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '♥';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    const heartsContainer = document.getElementById('heartsContainer');
    if (heartsContainer) {
        heartsContainer.appendChild(heart);
    }

    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
        }
    }, CONFIG.heartLifetime);
}

function startHeartAnimation() {
    setInterval(createHeart, CONFIG.heartInterval);
}

// Authentication Functions
function checkCode() {
    const codeInput = document.getElementById('codeInput');
    const code = codeInput.value.toLowerCase().trim();
    
    if (CONFIG.correctCodes.includes(code)) {
        showValentinePage();
    } else {
        showError();
    }
}

function showValentinePage() {
    const loginPage = document.getElementById('loginPage');
    const valentinePage = document.getElementById('valentinePage');
    
    loginPage.style.display = 'none';
    valentinePage.style.display = 'block';
    valentinePage.style.animation = 'slideIn 1s ease-out forwards';
}

function showError() {
    const errorMessage = document.getElementById('errorMessage');
    const codeInput = document.getElementById('codeInput');
    
    errorMessage.classList.add('show');
    codeInput.style.animation = 'shake 0.5s ease-in-out';
    
    setTimeout(() => {
        errorMessage.classList.remove('show');
        codeInput.style.animation = '';
    }, CONFIG.errorDisplayTime);
}

// Navigation Functions
function goBack() {
    const loginPage = document.getElementById('loginPage');
    const valentinePage = document.getElementById('valentinePage');
    const codeInput = document.getElementById('codeInput');
    
    valentinePage.style.display = 'none';
    loginPage.style.display = 'block';
    codeInput.value = '';
}

// Modal Functions
function showModal(feature) {
    const modal = document.getElementById('featureModal');
    const modalContent = document.getElementById('modalContent');
    
    if (modalContents[feature]) {
        modalContent.innerHTML = modalContents[feature];
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('featureModal');
    modal.style.display = 'none';
}

// Event Listeners
function setupEventListeners() {
    // Enter key support for code input
    const codeInput = document.getElementById('codeInput');
    if (codeInput) {
        codeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkCode();
            }
        });
    }

    // Close modal when clicking outside
    const modal = document.getElementById('featureModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Initialization
function init() {
    setupEventListeners();
    startHeartAnimation();
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);