document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn");
    const clickerText = document.getElementById("clicker");
    const downloadText = document.getElementById("down");
    const progressBar = document.getElementById("progress");
    const percentText = document.getElementById("percent");
    
    let progress = 0;
    let downloading = false;

    button.addEventListener("click", () => {
        if (downloading) return; // Prevent multiple clicks
        
        downloading = true;
        clickerText.textContent = "Downloading";
        downloadText.textContent = "Downloading";

        const interval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(interval);
                clickerText.textContent = "Completed";
                downloadText.textContent = "Completed";
                button.disabled = true;
            } else {
                progress += 5; // Increase progress
                progressBar.style.width = `${progress}%`;
                percentText.textContent = `${progress}%`;
            }
        }, 300);
    });
});
