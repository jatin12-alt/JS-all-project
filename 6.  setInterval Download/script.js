document.getElementById('startDownload').addEventListener('click', () => {
    const progressBar = document.getElementById('progress');
    const progressText = document.getElementById('progressText');
    let progress = 0;
  
    // Disable the button while downloading
    const button = document.getElementById('startDownload');
    button.disabled = true;
  
    // Start a setInterval to simulate the download
    const interval = setInterval(() => {
      progress += 1; // Increase progress by 5% per interval
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `Progress: ${progress}%`;
  
      // Stop the interval when progress reaches 100%
      if (progress >= 100) {
        clearInterval(interval);
        progressText.textContent = "Download Complete!";
        button.disabled = false; // Re-enable the button
      }
    }, 100); // Update every 200ms
  });
  