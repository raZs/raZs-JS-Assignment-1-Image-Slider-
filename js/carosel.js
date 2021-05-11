const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');


//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform ='translatex(' +(-size * counter) + 'px)';

//Button List

prevBtn.addEventListener('click' ,()=>{
   // if (counter<=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--
    carouselSlide.style.transform ='translatex(' +(-size * counter) + 'px)';

});

nextBtn.addEventListener('click' ,()=>{
   // if(counter>= carouselImages -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++
    carouselSlide.style.transform ='translatex(' +(-size * counter) + 'px)';

});


// carouselSlide.addEventListener('transitioned',()=> {

//     if (carouselImages[counter].id ==='lastClone'){
//         carouselSlide.style.transition ="none";
//         counter = carouselImages.length - 2 ; 
//         carouselSlide.style.transform = 'translateX ( ' + (-size*counter) +' px ) ';

//     }



//     if (carouselImages[counter].id ==='firstClone'){
//         carouselSlide.style.transition ="none";
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = 'translateX(' + (-size*counter) +'px)';
        
//     }
    
// });








