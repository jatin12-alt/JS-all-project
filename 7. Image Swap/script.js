// Select the image element
const image = document.getElementById('image');

// Add a click event listener to the image
image.addEventListener('click', () => {
  // Get the current 'src' attribute of the image
  const currentSrc = image.getAttribute('src');

  // Determine the new image source based on the current source
  const newSrc = currentSrc === 'image1.jpg' ? 'image2.jpg' : 'https://images.unsplash.com/photo-1734255578950-c1b4a1cc6ebb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8';

  // Set the new 'src' attribute to swap the image
  image.setAttribute('src', newSrc);
});
