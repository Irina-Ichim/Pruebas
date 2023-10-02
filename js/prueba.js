let degrees = 0;
let box = document.querySelector('.box');

document.querySelector('.prev').addEventListener('click', function(){
    degrees += 45;
    box.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
});

document.querySelector('.next').addEventListener('click', function(){
    degrees += 45;
    box.style = `transform: perspective(1000px) rotateY(${degrees}deg)`;
});