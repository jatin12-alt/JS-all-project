document.getElementById('sendRequestButton').addEventListener('click', () => {
    const statusMessage = document.getElementById('statusMessage');
  
    // Set initial message
    statusMessage.textContent = "Friend Request sending...";
  
    // Simulate a delay using setTimeout
    setTimeout(() => {
      statusMessage.textContent = "Friend Request sent successfully!";
    }, 3000); // 3-second delay
  });
  