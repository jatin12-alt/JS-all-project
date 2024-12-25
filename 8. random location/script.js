// Select the button and play area
const addInsectButton = document.getElementById('addInsect');
const playArea = document.getElementById('playArea');

// Array of insect image sources
const insects = [
    'https://imgs.search.brave.com/OZxtuw3DpU8kDTd6vrsQbyJVa4zULoNSUJVL2QfhSOw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/NC9Dcmlja2V0LUlu/c2VjdC5wbmc',
    'https://imgs.search.brave.com/_xbJFb-AqqAISvm_GRvMWECMF0UY6ZzZRVfVkesS7aw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTYvUmVk/LUxhZHlidWctSW5z/ZWN0LVBORy1GaWxl/LnBuZw',
    'https://imgs.search.brave.com/EaVK15AN5KRQYCCpO8V8AeYDl992Xk7uYUovlXLBSEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NS9JbnNlY3QucG5n',
    'https://imgs.search.brave.com/DdPumfYNeDNi1Q_vUAVq_pUjqULOFFaJAc_cWPbaxAg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEvQnV0/dGVyZmx5LVBORy1U/cmFuc3BhcmVudC1J/bWFnZXMucG5n',
];

// Function to generate a random number within a range
function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

// Function to add a random insect
function addRandomInsect() {
    // Create an img element
    const insect = document.createElement('img');
    insect.classList.add('insect');

    // Set a random insect image
    const randomInsect = insects[Math.floor(Math.random() * insects.length)];
    insect.setAttribute('src', randomInsect);

    // Set random position
    const x = getRandomPosition(playArea.offsetWidth - 50); // 50 = insect size
    const y = getRandomPosition(playArea.offsetHeight - 50);
    insect.style.left = `${x}px`;
    insect.style.top = `${y}px`;

    // Append the insect to the play area
    playArea.appendChild(insect);

    // Optionally, remove insect on click
    insect.addEventListener('click', () => {
        insect.remove();
    });
}

// Event listener for button
addInsectButton.addEventListener('click', addRandomInsect);
