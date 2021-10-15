gsap.to('#leg-1', { duration: 0.15, y: -4, repeat: -1, yoyo: true, ease: 'linear' })
gsap.to('#leg-2', { duration: 0.15, y: -4, repeat: -1, yoyo: true, ease: 'linear', delay: 0.15 })

trex.addEventListener('click', () => {
    gsap.timeline()
        .to('#trex', { duration: 0.5, y: -80, ease: 'linear'})
        .to('#trex', { duration: 0.5, y:   0, ease: 'linear'});
})
