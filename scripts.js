// Function to handle "Know More" button
function knowMore() {
    // Scroll to the "About" section
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
    // Optionally, show an alert (you can remove this if it's unnecessary)
    alert('Clicked on Know More!');
}

// Function to handle "Download CV" button
function downloadCV() {
    // Alert showing the action
    alert('Clicked on Download CV!');
    // You can also trigger a file download (if needed) or provide a fallback.
    window.location.href = 'assets/Professional-CV-Resume.pdf';  // Assuming this is the path to your CV file
}
