function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})








function canvas(){
  const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./frames00007.png
./frames00010.png
./frames00013.png
./frames00016.png
./frames00019.png
./frames00022.png
./frames00025.png
./frames00028.png
./frames00031.png
./frames00034.png
./frames00037.png
./frames00040.png
./frames00043.png
./frames00046.png
./frames00049.png
./frames00052.png
./frames00055.png
./frames00058.png
./frames00061.png
./frames00064.png
./frames00067.png
./frames00070.png
./frames00073.png
./frames00076.png
./frames00079.png
./frames00082.png
./frames00085.png
./frames00088.png
./frames00091.png
./frames00094.png
./frames00097.png
./frames00100.png
./frames00103.png
./frames00106.png
./frames00109.png
./frames00112.png
./frames00115.png
./frames00118.png
./frames00121.png
./frames00124.png
./frames00127.png
./frames00130.png
./frames00133.png
./frames00136.png
./frames00139.png
./frames00142.png
./frames00145.png
./frames00148.png
./frames00151.png
./frames00154.png
./frames00157.png
./frames00160.png
./frames00163.png
./frames00166.png
./frames00169.png
./frames00172.png
./frames00175.png
./frames00178.png
./frames00181.png
./frames00184.png
./frames00187.png
./frames00190.png
./frames00193.png
./frames00196.png
./frames00199.png
./frames00202.png
`;
return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page3`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page3",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas()







var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})



gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})








function canvas1(){
  const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./bridges00004.png
./bridges00007.png
./bridges00010.png
./bridges00013.png
./bridges00016.png
./bridges00019.png
./bridges00022.png
./bridges00025.png
./bridges00028.png
./bridges00031.png
./bridges00034.png
./bridges00037.png
./bridges00040.png
./bridges00043.png
./bridges00046.png
./bridges00049.png
./bridges00052.png
./bridges00055.png
./bridges00058.png
./bridges00061.png
./bridges00064.png
./bridges00067.png
./bridges00070.png
./bridges00073.png
./bridges00076.png
./bridges00079.png
./bridges00082.png
./bridges00085.png
./bridges00088.png
./bridges00091.png
./bridges00094.png
./bridges00097.png
./bridges00100.png
./bridges00103.png
./bridges00106.png
./bridges00109.png
./bridges00112.png
./bridges00115.png
./bridges00118.png
./bridges00121.png
./bridges00124.png
./bridges00127.png
./bridges00130.png
./bridges00133.png
./bridges00136.png
./bridges00139.png
./bridges00142.png
./bridges00145.png
./bridges00148.png
./bridges00151.png
./bridges00154.png
./bridges00157.png
./bridges00160.png
./bridges00163.png
./bridges00166.png
./bridges00169.png
./bridges00172.png
./bridges00175.png
./bridges00178.png
./bridges00181.png
./bridges00184.png
./bridges00187.png
./bridges00190.png
./bridges00193.png
./bridges00196.png
./bridges00199.png
./bridges00202.png
`;
return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page5`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page5",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas1()




var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})



gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})





function canvas2(){
  const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
build img1.webp
build img2.webp
build img3.webp
build img4.webp
build img5.webp
build img6.webp
build img7.webp
build img8.webp
build img9.webp
build img10.webp
build img11.webp
build img12.webp
build img13.webp
build img14.webp
build img15.webp
build img16.webp
build img17.webp
build img18.webp
build img19.webp
build img20.webp
build img21.webp
build img22.webp
build img23.webp
build img24.webp
build img25.webp
build img26.webp
build img27.webp
build img28.webp
build img29.webp
build img30.webp
build img31.webp
build img32.webp
build img33.webp
build img34.webp
build img35.webp
build img36.webp
build img37.webp
build img38.webp
build img39.webp
build img40.webp
build img41.webp
build img42.webp
build img43.webp
build img45.webp
build img46.webp
build img47.webp
build img48.webp
build img49.webp
build img50.webp
build img51.webp
build img52.webp
build img53.webp
build img54.webp
build img55.webp
build img56.webp
build img57.webp
build img58.webp
build img59.webp
build img60.webp
build img61.webp
build img62.webp
build img63.webp
build img64.webp
build img65.webp
build img66.webp
build img67.webp
build img68.webp
build img69.webp
build img70.webp
build img71.webp
build img72.webp
build img73.webp
build img74.webp
build img75.webp
build img76.webp
build img77.webp
build img78.webp
build img79.webp
build img80.webp
build img81.webp
build img82.webp
build img83.webp
build img84.webp
build img85.webp
build img86.webp
build img87.webp
build img88.webp
build img89.webp
build img90.webp
build img91.webp
build img92.webp
build img93.webp
build img94.webp
build img95.webp
build img96.webp
build img97.webp
build img98.webp
build img99.webp
build img100.webp
build img101.webp
build img102.webp
build img103.webp
build img104.webp
build img105.webp
build img106.webp
build img107.webp
build img108.webp
build img109.webp
build img110.webp
build img111.webp
build img112.webp
build img113.webp
build img114.webp
build img115.webp
build img116.webp
build img117.webp
build img118.webp
build img119.webp
build img120.webp
build img121.webp
build img122.webp
build img123.webp
build img124.webp
build img125.webp
build img126.webp
build img127.webp
build img128.webp
build img129.webp
build img130.webp
build img131.webp
build img132.webp
build img133.webp
build img134.webp
build img135.webp
build img136.webp


`;
return data.split("\n")[index];
}

const frameCount = 136;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page7`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page7",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas2()




gsap.to(".page7-cir",{
  scrollTrigger:{
    trigger:`.page7-cir`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  scale:1.5
})


gsap.to(".page7-cir-inner",{
  scrollTrigger:{
    trigger:`.page7-cir-inner`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
   backgroundColor : `#0a3bce91`,
})




