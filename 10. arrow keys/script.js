const element = document.getElementById("movingElement");
let posX = 0;
let posY = 0;

// Event listener for arrow keys
document.addEventListener('keydown', (event) => {
    const step = 10; // Distance the element will move
    switch (event.key) {
        case 'ArrowUp':
            posY -= step;
            break;
        case 'ArrowDown':
            posY += step;
            break;
        case 'ArrowLeft':
            posX -= step;
            break;
        case 'ArrowRight':
            posX += step;
            break;
    }
    
    // Apply the new position
    element.style.left = `${posX}px`;
    element.style.top = `${posY}px`;
});
