const imageSlider = document.querySelector('.slider');
const allImages = document.querySelectorAll('.slider img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = allImages[1].clientWidth;

imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= allImages.length - 1)
        return;
    imageSlider.style.transition = "transform 1s ease-in-out";
    counter++;
    imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0)
        return;
    imageSlider.style.transition = "transform 1s ease-in-out";
    counter--;
    imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

imageSlider.addEventListener('transitionend', () => {
    if (allImages[counter].id === 'lastClone') {
        imageSlider.style.transform = "none";
        counter = allImages.length - 2;
        imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (allImages[counter].id === 'firstClone') {
        imageSlider.style.transform = "none";
        counter = allImages.length - counter;
        imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});