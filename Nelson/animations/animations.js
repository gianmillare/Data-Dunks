var TL = gsap.timeline();

// gsap.set(".threePoint", { xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".inair", { xPercent:-35, yPercent:-50, left:"35%", top:"50%"})
// gsap.set(".hoop", {xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".threePoint", {autoAlpha:1, visibility: "visible", xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".threePoint", {autoAlpha:1, visibility: "visible", xPercent:-50, yPercent:-50, left:"50%", top:"50%"})




TL.to("#threePoint", {autoAlpha:1, visibility: "visible", duration: 2.1, x: -100})
  .to("#threePoint", {autoAlpha:0, visbility: "hidden"})
  .to("#inair", {autoAlpha:1, visibility: "visible", duration: 0.8, x: -100})
  .to("#inair", {autoAlpha:0, visbility: "hidden"})
  .to("#hoop", {autoAlpha:1, visibility: "visible", duration: 0.8, x: -100})
  .to("#hoop", {autoAlpha:0, visbility: "hidden"});


TL.to("#launch", {autoAlpha:1, visibility: "visible", duration: 2.8, x: -100})
  .to("#launch", {autoAlpha:0, visbility: "hidden"})
  .to("#air", {autoAlpha:1, visibility: "visible", duration: 1.8, x: -100})
  .to("#air", {autoAlpha:0, visbility: "hidden"})
  .to("#dunk", {autoAlpha:1, visibility: "visible", duration: 3.8, x: -100})
  .to("#dunk", {autoAlpha:0, visbility: "hidden"});


