function slider (){
    const slides = document.querySelectorAll('.offer__slide'),
    sliderPrev = document.querySelector('.offer__slider-prev'),
    sliderNext = document.querySelector('.offer__slider-next'),
    current = document.querySelector('#current'),
    total = document.querySelector('#total'),
    sliderParent = document.querySelector('.offer__slider-counter');    

    total.textContent = slides.length;
    if(slides.length<10){
        total.textContent = `0${slides.length}`;
    }else{
        total.textContent = slides.length;
    }

    let int = 0;

   

function hideSlides() {
    slides.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });
}

function showSlides(i) {
    slides[i].classList.add('show');
    slides[i].classList.remove('hide');
    if(i<9){
        current.textContent = `0${i+1}`;
    }else if(i<0||i>total.length){
        i=0;
    }else{
        current.textContent = i+1;
    }
   

}
hideSlides();
showSlides(int);

sliderPrev.addEventListener('click', ()=>{
    int--;
    if(int<0){
        int = slides.length-1;     
     }
    hideSlides();
    showSlides(int);
});


sliderNext.addEventListener('click', ()=>{
   int++;
   if(int == slides.length){
       int = 0;
   }
    hideSlides();
    showSlides(int);
});
}
export default slider;