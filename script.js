document.addEventListener('DOMContentLoaded', () => {
    // Get the button element
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Define the scroll threshold (in pixels) for when the button should appear
    const scrollThreshold = 300;

    // Function to show or hide the button based on scroll position
    const scrollFunction = () => {
        // Check if the vertical scroll position is greater than the threshold
        if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // Attach the scroll event listener to the window
    window.onscroll = scrollFunction;

    // Function to handle the click event (scroll to the top smoothly)
    const topFunction = () => {
        // Use smooth scrolling for a better user experience
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Attach the click event listener to the button
    backToTopBtn.addEventListener('click', topFunction);
});


