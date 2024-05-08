let state = 1;
const h1containerStyle = document.getElementById("h1container").style;
const h11 = document.getElementById("h11");
const h12 = document.getElementById("h12");
h1containerStyle.height = h11.toString() + "px";

const bg22color = "rgba(90, 63, 255, 0.53)";
const bg32color = "rgba(21, 91, 196, 0.24)";
const bg42color = "#E991521C";

let bg1style = document.getElementById("bg1").style;
let bg2style = document.getElementById("bg2").style;
let bg3style = document.getElementById("bg3").style;
let bg4style = document.getElementById("bg4").style;

let h11style = document.getElementById("h11").style;
let h12style = document.getElementById("h12").style;

let buttonstyle = document.querySelector("button").style;
const b1style = document.getElementById("button1").style;
const b2style = document.getElementById("button2").style;

function colorChange() {
  if (state == 1) {
    bg1style.width = "60%";
    bg1style.height = "50%";
    bg1style.transform = "translate(0px,-110px)";
    bg1style.background = "rgba(44, 0, 170, 0.6)";

    bg2style.width = "70%";
    bg2style.height = "60%";
    // bg2style.top =
    //   "calc(50% - " +
    //   document.getElementById("bg2").offsetHeight / 2 +
    //   "px + 30px)";
    // bg2style.left =
    //   "calc(50% - " +
    //   document.getElementById("bg2").offsetWidth / 2 +
    //   "px -100px)";
    bg2style.transform = "translate(0,20px) rotate(-15deg)";
    bg2style.background = "rgba(255, 46, 0, 0.32)";

    bg3style.width = "40%";
    bg3style.height = "35%";
    bg3style.transform = "translate(-200px,0px) rotate(-10deg)";
    bg3style.background = "rgba(255, 50,75, 0.48)";

    bg4style.width = "40%";
    bg4style.height = "35%";
    bg4style.transform = "translate(100px,0px)";
    bg4style.background = "rgba(255, 132, 44, 0.5)";

    h11style.opacity = 1;
    h11style.height = "auto";
    h11style.filter = "blur(0px)";

    h12style.opacity = 0;
    h12style.height = 0;
    h12style.filter = "blur(24px)";

    h1containerStyle.height = h11.offsetHeight.toString() + "px";

    b2style.zIndex = 11;
    b2style.opacity = 0;
    // b2style.filter = "blur(12px)";

    b1style.opacity = 1;
    // b1style.filter = "blur(0px)";

    state++;
  } else {
    // state 2
    bg1style.width = "40%";
    bg1style.height = "50%";
    bg1style.transform = "translate(-100px,50px)";
    bg1style.background = "rgba(21, 91, 196, 0.24)";

    bg2style.width = "40%";
    bg2style.height = "40%";
    bg2style.transform = "translate(100px,50px) rotate(-15deg)";
    bg2style.background = "rgba(90, 63, 255, 0.53)";

    bg3style.width = "65%";
    bg3style.height = "55%";
    bg3style.transform = "translate(160px,75px) rotate(-15deg)";
    bg3style.background = "rgba(90, 63, 255, 0.53)";

    bg4style.width = "40%";
    bg4style.height = "20%";
    bg4style.transform = "translate(-20px,-180px)";
    bg4style.background = "rgba(232, 145, 82, 0.11)";

    h11style.opacity = 0;
    h11style.height = 0;
    h11style.filter = "blur(24px)";

    h12style.height = "auto";
    h12style.opacity = 1;
    h12style.filter = "blur(0px)";

    h1containerStyle.height = h12.offsetHeight.toString() + "px";

    b2style.zIndex = 11;
    b2style.opacity = 1;
    // b2style.filter = "blur(0px)";

    b1style.opacity = 0;
    // b1style.filter = "blur(12px)";

    state = 1;
  }
  console.log(state);
}
colorChange();
state = 2;
