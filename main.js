const shareField = document.querySelector('.share');
const shareMenu = shareField.querySelector('.sharemenu');

if (window.innerWidth >= 860) {
    shareField.addEventListener('click', () => {
        shareMenu.classList.contains('hidden') ?
        shareMenu.classList.replace('hidden', 'active') :
        shareMenu.classList.replace('active', 'hidden');
    });
} else {
    const michelleAppleton = document.querySelector('.photonamedate');
    const credits = document.querySelector('.credits');
    const shareIcon = document.querySelector('.shareicon');

    shareField.addEventListener('click', () => {
        michelleAppleton.classList.contains('hidden') ?
        michelleAppleton.classList.replace('hidden', 'active') :
        michelleAppleton.classList.replace('active', 'hidden');

        credits.classList.contains('credits') ?
        credits.classList.replace('credits', 'creditsactive') :
        credits.classList.replace('creditsactive', 'credits');

        shareMenu.classList.contains('hidden') ?
        shareMenu.classList.replace('hidden', 'active') :
        shareMenu.classList.replace('active', 'hidden');

        shareField.classList.toggle('active');
        shareIcon.classList.toggle('shareiconactive');
    });
}