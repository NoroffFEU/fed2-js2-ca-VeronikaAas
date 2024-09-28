export function displayMessage(message) {
    const existingMessage = document.querySelector(".message");
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message");
    messageContainer.innerText = message;

    document.body.appendChild(messageContainer);
}