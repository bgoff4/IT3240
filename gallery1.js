// Array to hold the preloaded images
const images = [];

// Function to preload images
function preloadImages() {
    const imagePaths = [
        'banner1.jpg',
        'banner2.jpg',
        'banner3.jpg',
        'Jax.jpeg'
    ];

    for (let i = 0; i < imagePaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagePaths[i];
    }

    // Preload banner images separately
    const bannerImagePaths = [
        'banner1.jpg',
        'jax.jpeg',
        'banner2.jpg',
        'banner3.jpg'
    ];

    for (let i = 0; i < bannerImagePaths.length; i++) {
        images.push(new Image());
        images[images.length - 1].src = bannerImagePaths[i];
    }
}

// Function to add roll-over functionality
function addRolloverEffect() {
    const galleryItems = document.querySelectorAll('.gallery img');

    galleryItems.forEach((item, index) => {
        // Store the original image source
        const originalSrc = item.src;

        // Change the image source on mouse over
        item.addEventListener('mouseover', () => {
            item.src = images[index].src;
        });

        // Revert to the original image source on mouse out
        item.addEventListener('mouseout', () => {
            item.src = originalSrc;
        });
    });
}

// Function to cycle the homepage banner
function cycleBanner() {
    const bannerImages = document.querySelectorAll('#bannerImages img');
    let currentIndex = 0;

    setInterval(() => {
        bannerImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % bannerImages.length;
        bannerImages[currentIndex].src = images[4 + currentIndex].src; // Use preloaded images
        bannerImages[currentIndex].classList.add('active');
    }, 10000); // Change image every 10 seconds
}

// Function to handle page load
function onPageLoad() {
    preloadImages();
    addRolloverEffect();
    cycleBanner();
}

// Preload images and add roll-over effect when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', onPageLoad);
