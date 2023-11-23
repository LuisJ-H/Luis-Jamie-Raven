function sendMessage() {
    var userInput = document.getElementById('user-input');
    var chatMessages = document.getElementById('chat-messages');

    var userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    
    appendMessage("You: " + userMessage, 'user');

   
    setTimeout(function () {
        var botMessage = "Bot: What can i help you with: '" + userMessage + "'";
        appendMessage(botMessage, 'bot');
    }, 500);

    
    userInput.value = "";
}

function appendMessage(message, sender) {
    var chatMessages = document.getElementById('chat-messages');
    var messageElement = document.createElement('div');
    messageElement.className = sender;
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);

   
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
