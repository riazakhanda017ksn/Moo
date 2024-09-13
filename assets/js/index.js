const showButton = document.getElementById('showButton');
const hiddenText = document.getElementById('hiddenText');

showButton.addEventListener('click', () => {
    hiddenText.classList.toggle('hidden');
    if (hiddenText.classList.contains('hidden')) {
        showButton.textContent = 'Show Text'; 
    } else {
        showButton.textContent = 'Hide Text'; 
    }
});
