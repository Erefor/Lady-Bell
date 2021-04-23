const eventosBtn = document.getElementById('eventosBtn');
const xvBtn = document.getElementById('xvBtn');
const retratosBtn = document.getElementById('retratosBtn');
const eventosCarousel = document.getElementById('eventosCarousel');
const retratosCarousel = document.getElementById('retratosCarousel');
const videoXv = document.getElementById('videoXv');
eventosBtn.addEventListener('click', function(){
    if(eventosCarousel.style.display === 'none'){
        retratosCarousel.style.display = 'none';
        videoXv.style.display = 'none';
        eventosCarousel.style.display = 'block';
    }else{
        eventosCarousel.style.display = 'none'
    }
});
xvBtn.addEventListener('click', function(){
    if(videoXv.style.display === 'none'){
        retratosCarousel.style.display = 'none';
        eventosCarousel.style.display = 'none';
        videoXv.style.display = 'block';
    }else{
        videoXv.style.display = 'none'
    }
});
retratosBtn.addEventListener('click', function(){
    if(retratosCarousel.style.display === 'none'){
        videoXv.style.display = 'none';
        eventosCarousel.style.display = 'none';
        retratosCarousel.style.display = 'block';
        
    }else{
        eventosCarousel.style.display = 'none';
        retratosCarousel.style.display = 'none';
        videoXv.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        indicators: true,
        fullWidth: true,
        padding : 100,
        dist : 4500
    });
});
