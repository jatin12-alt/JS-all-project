 var body = document.querySelector('body');
 var cursor = document.querySelector('.cursor');
 var h1 = document.querySelector('h1');
 var p = document.querySelector('p');
var button = document.querySelector('button');
 body.addEventListener('mousemove', function(e) {
   cursor.style.left = e.clientX + 'px';
   cursor.style.top = e.clientY + 'px';
 });

 h1.addEventListener('mouseenter', function(e) {
    cursor.style.scale = '2'
    // h1.style.color = 'white';
 });
 h1.addEventListener('mouseleave', function(e) {
    cursor.style.scale = '1'
    // h1.style.color = 'black';

 });

h1.addEventListener('click', function(e) {
    body.style.backgroundColor = 'white';
    h1.style.display = 'none';
    cursor.style.display = 'none';
    button.style.display = 'block';
    p.style.display = 'block';

 });
