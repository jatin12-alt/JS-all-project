var button = document.querySelector('button');
var btn = document.querySelector('.btn');

button.addEventListener('click', function () {

    button.textContent = 'Request';
    setTimeout(function () {
        button.textContent = 'Follwoing';
        btn.style.display = 'block';

    }, 2000);

});
btn.addEventListener('click', function () {
    btn.style.display = 'none';
    button.textContent = 'Add friend';
});