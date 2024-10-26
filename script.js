const secretCode = "hei"; // Replace with your actual code

function checkCode() {
    const userInput = document.getElementById('code-input').value;
    const message = document.getElementById('message');
    
    if (userInput === secretCode) {
        document.getElementById('code-entry').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        message.textContent = "Incorrect code. Please try again.";
    }
}
