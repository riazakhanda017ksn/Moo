const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

// Add the active class to the first image by default
imgBtns[0].classList.add('active');

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();

        // Remove the active class from all images
        imgBtns.forEach(btn => btn.classList.remove('active'));

        // Add the active class to the clicked image
        imgItem.classList.add('active');

        // Get the clicked image ID
        imgId = imgItem.dataset.id;

        // Slide the image
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
