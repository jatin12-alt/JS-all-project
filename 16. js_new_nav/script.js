var home = document.querySelector(".newnav");
var contectus = document.querySelector(".contectus");
var resume = document.querySelector(".resume");
var works = document.querySelector(".works");
var gmail = document.querySelector("#i1")
var cursor = document.querySelector("#i2")

var nav1 = document.querySelector(".nav1");
var nav2 = document.querySelector(".nav2");
var nav3 = document.querySelector(".nav3");
var nav4 = document.querySelector(".nav4");
var leftnav = document.querySelector("#leftnav")
 
var close = document.querySelector(".close");
var main = document.querySelector(".main");
var nnn = document.querySelector(".nnn");


var flag = 1;
var flag2 = 1;
var flag3 = 1;
var flag4 = 1;
var flag5 = 1;

function click() {
    home.addEventListener("click", function () {
        nav2.style.display = 'none'
        nav3.style.display = 'none'
        nav4.style.display = 'none'
        leftnav.style.display = 'none';

        if (flag === 1) {
            nnn.style.display = 'block'
            nav1.style.display = 'block'
            flag = 2;
        } else {
            nav1.style.display = 'none';
            nnn.style.display = 'none'

            flag = 1;
        }
    });
    contectus.addEventListener("click", function () {
        nav1.style.display = 'none'
        nav3.style.display = 'none'
        nav4.style.display = 'none'
        leftnav.style.display = 'none';

        if (flag2 === 1) {
            nnn.style.display = 'block'
            nav2.style.display = 'block'
            flag2 = 2;
        } else {
            nav2.style.display = 'none';
            nnn.style.display = 'none'

            flag2 = 1;
        }
    });
    resume.addEventListener("click", function () {
        nav1.style.display = 'none'
        nav2.style.display = 'none'
        nav4.style.display = 'none'
        leftnav.style.display = 'none';

        if (flag3 === 1) {
            nnn.style.display = 'block'
            nav3.style.display = 'block'
            flag3 = 2;
        } else {
            nav3.style.display = 'none';
            nnn.style.display = 'none'

            flag3 = 1;
        }
    });
    works.addEventListener("click", function () {
        nav1.style.display = 'none'
        nav2.style.display = 'none'
        nav3.style.display = 'none'
        leftnav.style.display = 'none';


        if (flag4 === 1) {
            nnn.style.display = 'block'
            nav4.style.display = 'block'
            flag4 = 2;
        } else {
            nav4.style.display = 'none';
            nnn.style.display = 'none'

            flag4 = 1;
        }
    });
    gmail.addEventListener("click", function () {
        nav1.style.display = 'none'
        nav2.style.display = 'none'
        nav3.style.display = 'none'
        nav4.style.display = 'none'
        console.log("h")

        if (flag5 === 1) {
            leftnav.style.display = 'block'
            nnn.style.display = 'block'
            flag5 = 2;
        } else {
            leftnav.style.display = 'none';
            nnn.style.display = 'none'

            flag5 = 1;
        }
    });
    cursor.addEventListener("click", function(){
        


    });
    
}
click()

close.addEventListener("click", function () {
    nav1.style.display = 'none';
    nav2.style.display = 'none';
    nav3.style.display = 'none';
    nav4.style.display = 'none';
    nnn.style.display = 'none';
    leftnav.style.display = 'none';
    flag = 1;
    flag2 = 1;
    flag3 = 1;
    flag4 = 1;
    flag5 = 1;

});

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

loaderAnimation()