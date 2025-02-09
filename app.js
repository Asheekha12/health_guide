function sendQuery() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return; // Prevent empty input

    // Display user query in the chat window
    document.getElementById('chat-window').innerHTML += `
        <div class="user-query">${userInput}</div>
    `;
    
    // Clear the input field
    document.getElementById('user-input').value = "";

    // Predefined responses for the chatbot
    let chatbotResponse = "I am here to help you with PCOS-related questions.";
    if (userInput.toLowerCase().includes("symptoms")) {
        chatbotResponse = "Common symptoms of PCOS include irregular periods, acne, and excessive hair growth.";
    } else if (userInput.toLowerCase().includes("treatment")) {
        chatbotResponse = "Treatments include lifestyle changes, medication like Metformin, and sometimes surgery.";
    }

    // Display chatbot response
    document.getElementById('chat-window').innerHTML += `
        <div class="chatbot-response">${chatbotResponse}</div>
    `;

    // Scroll chat window to the bottom
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
