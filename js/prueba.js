let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let box = document.querySelector('.box');

let degrees = 0;

prev.addEventListener('click', function(){
    degrees -= 45; // Cambié el signo para que rote hacia la izquierda
    box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
});

next.addEventListener('click', function(){
    degrees += 45; // Mantiene el signo para rotar hacia la derecha
    box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
});
