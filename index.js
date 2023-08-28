const btn = document.querySelector('button'); // Replace 'button' with the actual selector for your button element

btn.addEventListener('click', () => {
    const boxElement = document.querySelector('.box'); // Use '.box' for a class or '#box' for an ID
    if (boxElement) {
        boxElement.style.display = 'block';
        btn.style.display = 'none';
    }
});
