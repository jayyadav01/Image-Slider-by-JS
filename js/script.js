let box = document.querySelector('.wrapper');
let slides = document.querySelectorAll('.slide');
let img = document.querySelector('img');
counter = 0;

slides.forEach((slide,index) => {
    slide.style.left = `${index*100}%`
})

function previous()
{
    counter--;
    slideImage();
}
function next()
{
    counter++;
    if(counter == 6)
    {
        counter = 0;
    }
    slideImage();
}

let slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter*100}%`;
    })
}