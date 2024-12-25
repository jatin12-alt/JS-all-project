var circle = document.querySelector('#circle');
var buttom = document.querySelector('button');

var rem = 1;
var icon = document.querySelector('#icon1');
buttom.addEventListener('click', function () {
    if (rem == 1) {
        circle.style.backgroundColor = 'yellow';
        rem = 0;
        buttom.textContent = 'OFF';
    }
    else {
        circle.style.backgroundColor = '#333';
        rem = 1;
        buttom.textContent = `ON`
    }
});