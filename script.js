function showImage() {
    const imageContainer = document.getElementById("image-container");
    imageContainer.classList.remove("hidden");
}

function simulateVirus() {
    for (let i = 0; i < 20; i++) {
        const message = document.createElement("div");
        message.className = "virus-message";
        message.innerText = "VÍRUS DETECTADO!";
        document.body.appendChild(message);

        // Posicionar a mensagem em locais aleatórios
        message.style.top = `${Math.random() * window.innerHeight}px`;
        message.style.left = `${Math.random() * window.innerWidth}px`;
    }
}
