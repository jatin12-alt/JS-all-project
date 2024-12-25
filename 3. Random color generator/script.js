var btn = document.querySelector('button');
var box = document.querySelector('.box');

btn.addEventListener('click', function () {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)

    box.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});