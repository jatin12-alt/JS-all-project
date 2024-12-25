// Select all color buttons
const buttons = document.querySelectorAll('.color-button');

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the color from the button's data-color attribute
    const color = button.getAttribute('data-color');
    // Change the body's background color
    document.body.style.backgroundColor = color;
  });
});
