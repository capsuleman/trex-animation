const trex = document.getElementById("trex");

trex.addEventListener('click', () => {
    trex.classList.add('jump');

    setTimeout(() => {
        trex.classList.remove('jump');
    }, 600)
})
