const Slide = document.querySelector('.Slide');
const SlideImage = document.querySelectorAll('.Side img');

//button
const Back = document.querySelector('#Back');
const Next = document.querySelector('#Next');

//Counter
let counter = 1;
const size = SlideImage[0].clientWidth;

Slide.style.transform = 'translateX(' + ( -size * counter ) + 'px)';

//button listeners

Next.addEventListener('click',()=>{
    Slide.style.transition = "transfrom 0.4s ease-in-out";
    counter++;
    console.log(counter);
});