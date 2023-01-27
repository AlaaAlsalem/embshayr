/*// Select the slider element and the buttons
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Set the initial slide index to 0 (first slide)
let slideIndex = 0;

// Function to show the next slide
function nextSlide() {
    // Move the slider to the left by 100% of the slider width
    slider.style.transform = 'translateX(-' + (slideIndex + 1) * 100 + '%)';
    slideIndex++;

    // If the last slide is reached, reset the slide index to 0
    if (slideIndex === slider.children.length) {
        slideIndex = 0;
    }
}

// Function to show the previous slide
function prevSlide() {
    // Move the slider to the right by 100% of the slider width
    slider.style.transform = 'translateX(-' + (slideIndex - 1) * 100 + '%)';
    slideIndex--;

    // If the first slide is reached, set the slide index to the last slide
    if (slideIndex < 0) {
        slideIndex = slider.children.length - 1;
    }
}

// Add event listeners to the buttons to call the next/prev slide functions when clicked
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

/*/// Add setInterval function to move to the next slide every 5 seconds


/** */



// Get the container element that holds the images
const slider = document.querySelector('.slider');

// Get all the images inside the container
const images = slider.querySelectorAll('img');

// Set the current image index to 0
let currentIndex = 0;

// Show the current image
images[currentIndex].style.display = 'block';

// Create a function to handle the next button click
function next() {
    // Hide the current image
    images[currentIndex].style.display = 'none';

    // Update the current index
    currentIndex = (currentIndex + 1) % images.length;

    // Show the next image
    images[currentIndex].style.display = 'block';
}

// Create a function to handle the previous button click
function prev() {
    // Hide the current image
    images[currentIndex].style.display = 'none';

    // Update the current index
    currentIndex = (currentIndex - 1 + images.length) % images.length;

    // Show the previous image
    images[currentIndex].style.display = 'block';
}

// Get the next and previous buttons
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Add click event listeners to the buttons
nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);


/*** */








setInterval(nextSlide, 5000);
