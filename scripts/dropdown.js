const content = document.querySelector('.content');
const contentEls = document.querySelectorAll('.content h2, .content p, .contact *');
const linkBoxes = document.querySelectorAll('.content .box');
const dropBtn = document.querySelector('#display');
const openIcn = document.querySelector('#open');
const closeIcn = document.querySelector('#close');
let state = 'closed';


dropBtn.addEventListener('click', () => {
    console.log('fired');
    if (state === 'closed') {
        openIcn.style.transition = 'transform 1s';
        openIcn.style.transform = 'scale(0)';
        closeIcn.style.transition = 'transform 1s';
        closeIcn.style.transform = 'scale(1)';
        content.style.transition = `transform 0.5s ease-in`
        content.style.transform = 'translateY(0%) scaleY(1)';
        contentEls.forEach((element, index) => {
            if (element.style.animation) {
                element.style.animation = '';
            }
            else {
                element.style.animation = `scrollFade 0.5s ease forwards ${index / 10 + 0.2}s`;
            }
        });
        linkBoxes.forEach((box, index) => {
            if (box.style.animation) {
                box.style.animation = '';
            }
            else {
                box.style.animation = `scrollFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        state = 'open';
    }
    else {
        closeIcn.style.transition = 'transform 1s';
        closeIcn.style.transform = 'scale(0)';
        openIcn.style.transition = 'transform 1s';
        openIcn.style.transform = 'scale(1)';
        content.style.transition = `transform 0.5s ease-in-out`;
        content.style.transform = 'translateY(-50%) scaleY(0)';
        contentEls.forEach((element, index) => {
                element.style.animation = '';
        });
        linkBoxes.forEach((box, index) => {
                box.style.animation = '';
        });
        state = 'closed';
    }
});