const spinBtn = document.querySelector('#spinBtn');
const spinIcn = document.querySelector('#start');
const stopIcn = document.querySelector('#stop');
let state = 'nospin';


spinBtn.addEventListener('click', () => {
    if (state === 'nospin') {
        document.body.style.backgroundImage = "url('images/graphics/scircle.png')";
        spinIcn.style.transition = 'transform 1s';
        spinIcn.style.transform = 'scaleY(0)';
        stopIcn.style.transition = 'transform 1s';
        stopIcn.style.transform = 'scaleX(1)';
        state = 'spin';
    }
    else {
        document.body.style.backgroundImage = "url('images/graphics/transcircle.svg')";
        spinIcn.style.transition = 'transform 1s';
        spinIcn.style.transform = 'scaleY(1)';
        stopIcn.style.transition = 'transform 1s';
        stopIcn.style.transform = 'scaleX(0)';
        state = 'nospin';
    }
});