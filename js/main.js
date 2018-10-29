let lArrow = document.querySelector('.lArrow');
let rArrow = document.querySelector('.rArrow');
let images = document.querySelectorAll('img');
let count = 0;


rArrow.addEventListener('click', () => {
    for (let i = 0; i < images.length; i++) {
        images[i].style.transform=`translateX(100)`;
    }                
})

lArrow.addEventListener('click', () => {
    for (let i = 0; i < images.length; i++) {
        images[i].style.transform=`translateX(-100)`;
    }                
})
