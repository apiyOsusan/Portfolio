// Function to handle "Know More" button
function knowMore() {
    // Scroll to the "About" section
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
    // Optionally, show an alert (you can remove this if it's unnecessary)
    alert('Clicked on Know More!');
}
