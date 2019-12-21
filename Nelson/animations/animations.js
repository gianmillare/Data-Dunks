var TL = gsap.timeline();

// gsap.set(".threePoint", { xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".inair", { xPercent:-35, yPercent:-50, left:"35%", top:"50%"})
// gsap.set(".hoop", {xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".threePoint", {autoAlpha:1, visibility: "visible", xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".threePoint", {autoAlpha:1, visibility: "visible", xPercent:-50, yPercent:-50, left:"50%", top:"50%"})

{/* <img class="gif" id="threePoint" src="../midorama-shot.gif" style = "visibility: hidden; position: absolute; top: 55%; left: 70%; height: 200px; width: 300px; margin:0; padding: 0;">
<img class="gif" id="inair" src="../ballflightline.gif" style = "visibility: hidden; position: absolute; top: 55%; left: 50%; height: 200px; width: 300px; margin:0; padding:0;">
<img class="gif" id="hoop" src="../going_through_hoop.gif" style = "visibility: hidden; position: absolute; top: 55%; left: 20%; height: 200px; width: 300px; margin:0; padding:0;">
<img class="gif" id="launch" src="../kagami_launch.gif" style = "visibility: hidden; position: absolute; top: 55%; left: 70%; height: 200px; width: 300px; margin:0; padding: 0;">
<img class="gif" id="air" src="../kagami_air.gif" style = "visibility: hidden; position: absolute; top: 55%; left: 50%; height: 200px; width: 300px; margin:0; padding:0;">
<img class="gif" id="dunk" src="../meteor_jam.gif" style = "visibility: hidden; position: absolute; top: 55%; left: 20%; height: 200px; width: 300px; margin:0; padding:0;">
<img class="gif" id="fThreePoint" src="../fliped_midorima_shot.gif" style = "visibility: hidden; position: absolute; top: 55%; left: 5%; height: 200px; width: 300px; margin:0; padding: 0;">
<img class="gif" id="fInair" src="../flipped_inflight.gif" style = "visibility: hidden; position: absolute; top: 55%; left: 35%; height: 200px; width: 300px; margin:0; padding:0;">
<img class="gif" id="fHoop" src="../flipped_through_hoop.gif" style = "visibility: hidden; position: absolute; top: 55%; left: 60%; height: 200px; width: 300px; margin:0; padding:0;">
<img class="gif" id="fLaunch" src="../flip_kagami_launch.gif" style = "visibility: hidden; position: absolute; top: 55%; left: 5%; height: 200px; width: 300px; margin:0; padding: 0;">
<img class="gif" id="fAir" src="../flip_kagami_air.gif" style = "visibility: hidden; position: absolute; top: 55%; left: 35%; height: 200px; width: 300px; margin:0; padding:0;">
<img class="gif" id="fDunk" src="../flipped_meteor_jam.gif" style = "visibility: hidden; position: absolute; top: 55%; left: 60%; height: 200px; width: 300px; margin:0; padding:0;">
<script src = "../animations/animations.js"></script> */}


// TL.to("#threePoint", {autoAlpha:1, visibility: "visible", duration: 2.1, x: -100})
//   .to("#threePoint", {autoAlpha:0, visbility: "hidden"})
//   .to("#inair", {autoAlpha:1, visibility: "visible", duration: 0.8, x: -100})
//   .to("#inair", {autoAlpha:0, visbility: "hidden"})
//   .to("#hoop", {autoAlpha:1, visibility: "visible", duration: 0.8, x: -100})
//   .to("#hoop", {autoAlpha:0, visbility: "hidden"});

// TL.to("#fThreePoint", {autoAlpha:1, visibility: "visible", duration: 2.1, x: 100})
//   .to("#fThreePoint", {autoAlpha:0, visbility: "hidden"})
//   .to("#fInair", {autoAlpha:1, visibility: "visible", duration: 0.8, x: 100})
//   .to("#fInair", {autoAlpha:0, visbility: "hidden"})
//   .to("#fHoop", {autoAlpha:1, visibility: "visible", duration: 0.8, x: 100})
//   .to("#fHoop", {autoAlpha:0, visbility: "hidden"});


TL.to("#launch", {autoAlpha:1, visibility: "visible", duration: 2.8, x: -100})
  .to("#launch", {autoAlpha:0, visbility: "hidden"})
  .to("#air", {autoAlpha:1, visibility: "visible", duration: 1.8, x: -100})
  .to("#air", {autoAlpha:0, visbility: "hidden"})
  .to("#dunk", {autoAlpha:1, visibility: "visible", duration: 3.8, x: -100})
  .to("#dunk", {autoAlpha:0, visbility: "hidden"});

// TL.to("#fLaunch", {autoAlpha:1, visibility: "visible", duration: 2.8, x: 100})
//   .to("#fLaunch", {autoAlpha:0, visbility: "hidden"})
//   .to("#fAir", {autoAlpha:1, visibility: "visible", duration: 1.8, x: 100})
//   .to("#fAir", {autoAlpha:0, visbility: "hidden"})
//   .to("#fDunk", {autoAlpha:1, visibility: "visible", duration: 3.8, x: 100})
//   .to("#fDunk", {autoAlpha:0, visbility: "hidden"});

