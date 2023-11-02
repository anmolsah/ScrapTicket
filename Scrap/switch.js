
// const searchBar = document.querySelector('.search-bar');
// const trainmanSearch = document.querySelector('.trainman-search');
// const changeButtons = document.querySelectorAll('.change-button');

// changeButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         if (searchBar.style.display === 'none' || searchBar.style.display === '') {
//             searchBar.style.display = 'block';
//             trainmanSearch.style.display = 'none';
//         } else {
//             searchBar.style.display = 'none';
//             trainmanSearch.style.display = 'block';
//         }
//     });
// });

let currentSlide = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.slide');
    
    if (currentSlide < slides.length - 1) {
        slides[currentSlide].classList.remove('current-slide');
        currentSlide++;
        slides[currentSlide].classList.add('current-slide');
    } else {
        // Loop back to the first slide when the last one is reached.
        slides[currentSlide].classList.remove('current-slide');
        currentSlide = 0;
        slides[currentSlide].classList.add('current-slide');
    }
}
// Handle the social media icons click event
document.querySelectorAll('.contact-icon').forEach((icon) => {
    icon.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default behavior of the link
        // Get the link URL from the href attribute
        const linkURL = icon.getAttribute('href');
        // Open the link in a new tab
        window.open(linkURL, '_blank');
    });
});


document.querySelector('a[href="#about-section"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior

    const aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#contact-section"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior

    const contactSection = document.getElementById('contact-section');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});
