document.body.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    document.body.style.setProperty('--x', x + '%');
    document.body.style.setProperty('--y', y + '%');
    document.body.classList.add('smoky');
});
