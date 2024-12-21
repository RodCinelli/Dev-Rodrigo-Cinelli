function openVideoModal(videoId) {
    const modal = document.getElementById('videoModal');
    modal.style.display = "block";
}

// Fecha o modal quando clicar no X
document.querySelector('.close').onclick = function() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('projectVideo');
    modal.style.display = "none";
    video.pause();
}

// Fecha o modal quando clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('projectVideo');
    if (event.target == modal) {
        modal.style.display = "none";
        video.pause();
    }
}