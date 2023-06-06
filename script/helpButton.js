function showMessage() {
    var message = document.getElementById('message');
    var messageText = document.getElementById('message-text');

    if (isMobileDevice()) {
        messageText.textContent = "Swiper à gauche ou à droite pour changer les ranks";
    } else {
        messageText.textContent = "Utiliser les flèche gauche et droite pour changer les ranks";
    }

    message.style.display = 'block';
}

function hideMessage() {
    var message = document.getElementById('message');
    message.style.display = 'none';
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
