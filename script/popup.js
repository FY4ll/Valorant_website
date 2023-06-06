function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(hidePopup, 60000); // Affiche le popup pendant 1 minute (60 000 millisecondes)
}

function hidePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
    setTimeout(showPopup, 30000); // Réaffiche le popup toutes les 1 minute (60 000 millisecondes)
}