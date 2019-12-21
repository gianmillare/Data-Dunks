

// gsap.set(".threePoint", { xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".inair", { xPercent:-35, yPercent:-50, left:"35%", top:"50%"})
// gsap.set(".hoop", {xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".threePoint", {autoAlpha:1, visibility: "visible", xPercent:-50, yPercent:-50, left:"50%", top:"50%"})
// gsap.set(".threePoint", {autoAlpha:1, visibility: "visible", xPercent:-50, yPercent:-50, left:"50%", top:"50%"})


// function animation() {
// var data = [{"BPM": "15.6", "3P":"125", "2P":"400"}, {"BPM": "11.7", "3P":"250", "2P": "225"}];
var timeLine = gsap.timeline();

// if (data[0].BPM > data[1].BPM){
//   if(data[0]["3P"]>data[0]["2P"]){

  //   timeLine.to("#fThreePoint", {autoAlpha:1, visibility: "visible", position: "static", duration: 2.1, x: 100})
  //     .to("#fThreePoint", {autoAlpha:0, visbility: "hidden", position: "absolute"})
  //     .to("#fInair", {autoAlpha:1, visibility: "visible", position: "static", duration: 0.8, x: 100})
  //     .to("#fInair", {autoAlpha:0, visbility: "hidden", position: "absolute"})
  //     .to("#fHoop", {autoAlpha:1, visibility: "visible", position: "static", duration: 0.8, x: 100})
  //     .to("#fHoop", {autoAlpha:0, visbility: "hidden", position: "absolute"});
  // } else {

    timeLine.to("#fLaunch", {autoAlpha:1, visibility: "visible", position: "static", duration: 2.8, x: 100})
      .to("#fLaunch", {autoAlpha:0, visbility: "hidden", position: "absolute"})
      .to("#fAir", {autoAlpha:1, visibility: "visible" , position: "static", duration: 1.8, x: 100})
      .to("#fAir", {autoAlpha:0, visbility: "hidden", position: "absolute"})
      .to("#fDunk", {autoAlpha:1, visibility: "visible", position: "static", duration: 3.8, x: 100})
      .to("#fDunk", {autoAlpha:0, visbility: "hidden", position: "absolute"});
//   }
// } else {
  // if (data[1]["3P"]>data[1]["3P"]){
  //   timeLine.to("#threePoint", {autoAlpha:1, visibility: "visible", position: "static", duration: 2.1, x: -100})
  //     .to("#threePoint", {autoAlpha:0, visbility: "hidden", position: "absolute"})
  //     .to("#inair", {autoAlpha:1, visibility: "visible", position: "static", duration: 0.8, x: -100})
  //     .to("#inair", {autoAlpha:0, visbility: "hidden", position: "absolute"})
  //     .to("#hoop", {autoAlpha:1, visibility: "visible", position: "static", duration: 0.8, x: -100})
  //     .to("#hoop", {autoAlpha:0, visbility: "hidden", position: "absolute"});
  // } else {

//     timeLine.to("#launch", {autoAlpha:1, visibility: "visible", position: "static", duration: 2.8, x: -100})
//       .to("#launch", {autoAlpha:0, visbility: "hidden", position: "absolute"})
//       .to("#air", {autoAlpha:1, visibility: "visible", position: "static", duration: 1.8, x: -100})
//       .to("#air", {autoAlpha:0, visbility: "hidden", position: "absolute"})
//       .to("#dunk", {autoAlpha:1, visibility: "visible", position: "static", duration: 3.8, x: -100})
//       .to("#dunk", {autoAlpha:0, visbility: "hidden", position: "absolute"});
//   }
// }
// }



