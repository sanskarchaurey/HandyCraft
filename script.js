var tl = gsap.timeline({
    repeat: -1
});


tl.to(".images", {
    width: "100%",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2

})

var p1 = gsap.timeline()

p1.from("#nav a ", {
    y: -50,
    duration: 0.8,
    delay: 0.3,
    stagger: 0.3,
    opacity: 0
})

var p2 = gsap.timeline()

p2.from("#navy a ", {
    y: -50,
    duration: 0.8,
    delay: 0.3,
    stagger: 0.3,
    opacity: 0
})

p2.from("#navy i ", {
    y: -50,
    duration: 0.8,
    delay: 0.3,
    stagger: 0.3,
    opacity: 0
})



var count = 0;
var target = 2000;
var duration = 8000;
var step = Math.ceil(target / (duration / 100));

function counter() {
    var element = document.getElementById("count");
    var timer = setInterval(function () {
        count += step;
        element.innerHTML = count;
        if (count >= target) {
            clearInterval(timer);
        }
    }, 100);
}

setTimeout(counter, 1000);


var cont = 0;
var get = 21;
var duration = 10000;
var steps = Math.ceil(get / (duration / 100));

function center() {
    var element = document.getElementById("gint");
    var timer = setInterval(function () {
        cont += steps;
        element.innerHTML = cont;
        if (cont >= get) {
            clearInterval(timer);
        }
    }, 100);
}

setTimeout(center, 1000);


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});
