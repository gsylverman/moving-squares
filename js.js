var mic = document.getElementById("mic");
var mic1 = document.getElementById("mic1");
var mic2 = document.getElementById("mic2");
var mic3 = document.getElementById("mic3");
poz = 0;


var ab = function () {
    poz++;
    mic.style.left = (Math.abs(poz)) + "px";
    mic.style.top = (Math.abs(poz)) + "px";
    mic.style.transform = "rotate" + "(" + poz + "deg" + ")";

    mic1.style.left = (Math.abs(poz)) + "px";
    mic1.style.top = 550 - (Math.abs(poz)) + "px";
    mic1.style.transform = "rotate" + "(" + poz + "deg" + ")";

    mic2.style.left = 550 - (Math.abs(poz)) + "px";
    mic2.style.top = (Math.abs(poz)) + "px";
    mic2.style.transform = "rotate" + "(" + poz + "deg" + ")";

    mic3.style.left = 550 - (Math.abs(poz)) + "px";
    mic3.style.top = 550 - (Math.abs(poz)) + "px";
    mic3.style.transform = "rotate" + "(" + poz + "deg" + ")";
    mare.style.background = "rgb" + "(" + poz * Math.random() * 10 + "," + 191 + "," + 255 + ")";

    if (poz >= 550) {
        poz *= -1;
    }
};
function aa() {
    cl = setInterval(ab, 5);
    but.disabled = true;
}

function aa1() {
    clearTimeout(cl);
    but.disabled = false;


}




but = document.getElementById("but");
but.addEventListener("click", aa);
but1 = document.getElementById("but1");
but1.addEventListener("click", aa1);


change = function () {

};

mare = document.getElementById("mare");

bbb = document.getElementById("bbb");
bbb.addEventListener("click", change);


