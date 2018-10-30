let images = document.querySelectorAll('img');
// let arrows = document.querySelectorAll('div > span');
let lArrow = document.querySelector('span.lArrow');
let rArrow = document.querySelector('span.rArrow');
let score = 0;


rArrow.addEventListener('click', (ev) => {
    score++;
    if (score === images.length) {
        score = 0;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translate(${score * -100}%, 0)`;
    }
});

lArrow.addEventListener('click', (ev) => {
    score--;
    if (score < 0) {
        score = images.length -1;
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translate(${score * -100}%, 0)`;
    }
});
