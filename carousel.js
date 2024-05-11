let cstate = 1;
const tcs = document.getElementById("textCarousel").style;
const ts0 = document.getElementById("text0").style;
const ts1 = document.getElementById("text1").style;
const ts2 = document.getElementById("text2").style;
const ts3 = document.getElementById("text3").style;
const ts4 = document.getElementById("text4").style;

const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");

ts0.opacity = 0.2;
ts2.opacity = 0.2;
ts3.opacity = 0.2;
ts4.opacity = 0.2;

function cstateFF() {
  if (cstate < 3) {
    cstate++;
  } else {
    cstate = 1;
  }
  if (cstate == 1) {
    video1.currentTime = 0;
    video1.play();
    video1.classList.add("active");
    video2.classList.remove("active");
    video3.classList.remove("active");

    tcs.transitionDuration = "0s";
    tcs.marginLeft = 0;
    tcs.clipPath = "polygon(0% 0%,60% 0%,60% 100%,0% 100%)";

    window.setTimeout(() => {
      tcs.transitionDuration = "1s";
      tcs.marginLeft = "calc(-100% - 48px)";
    }, 10);
    ts0.opacity = 0.2;
    ts1.opacity = 1;
    ts2.opacity = 0.2;
    ts3.opacity = 0.2;
  } else if (cstate == 2) {
    video2.currentTime = 0;
    video2.play();
    video1.classList.remove("active");
    video2.classList.add("active");
    video3.classList.remove("active");

    tcs.marginLeft = "calc(-200% - (48px * 2))";
    tcs.clipPath = "polygon(20% 0%,80% 0%,80% 100%,20% 100%)";
    ts2.opacity = 1;
    ts1.opacity = 0.2;
    ts4.opacity = 0.2;
    ts3.opacity = 0.2;
  } else {
    video3.currentTime = 0;
    video3.play();
    video1.classList.remove("active");
    video2.classList.remove("active");
    video3.classList.add("active");

    tcs.marginLeft = "calc(-300% - (48px * 3))";
    tcs.clipPath = "polygon(40% 0%,100% 0%,100% 100%,40% 100%)";
    ts3.opacity = 1;
    ts0.opacity = 1;
    ts2.opacity = 0.2;
    ts1.opacity = 0.2;
  }

  console.log("Carousel state: " + cstate);
}

function cstateBack() {
  if (cstate > 1) {
    cstate--;
  } else {
    cstate = 3;
  }
  if (cstate == 1) {
    video1.currentTime = 0;
    video1.play();
    video1.classList.add("active");
    video2.classList.remove("active");
    video3.classList.remove("active");

    tcs.marginLeft = "calc(-100% - 48px)";
    tcs.clipPath = "polygon(0% 0%,60% 0%,60% 100%,0% 100%)";

    ts1.opacity = 1;
    ts4.opacity = 1;
    ts2.opacity = 0.2;
    ts3.opacity = 0.2;
  } else if (cstate == 2) {
    video2.currentTime = 0;
    video2.play();
    video1.classList.remove("active");
    video2.classList.add("active");
    video3.classList.remove("active");

    tcs.marginLeft = "calc(-200% - (48px * 2))";
    tcs.clipPath = "polygon(20% 0%,80% 0%,80% 100%,20% 100%)";

    ts2.opacity = 1;
    ts1.opacity = 0.2;
    ts3.opacity = 0.2;
  } else {
    video3.currentTime = 0;
    video3.play();
    video1.classList.remove("active");
    video2.classList.remove("active");
    video3.classList.add("active");

    tcs.transitionDuration = "0s";
    tcs.marginLeft = "calc(-400% - (48px * 4))";
    tcs.clipPath = "polygon(40% 0%,100% 0%,100% 100%,40% 100%)";

    window.setTimeout(() => {
      tcs.transitionDuration = "1s";
      tcs.marginLeft = "calc(-300% - (48px * 3))";
    }, 10);

    ts3.opacity = 1;
    ts2.opacity = 0.2;
    ts1.opacity = 0.2;
    ts4.opacity = 0.2;
  }

  console.log("Carousel state: " + cstate);
}
