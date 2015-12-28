<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js" type="text/javascript"></script>

var tl = new TimelineMax();
tl.to("g, path, circle, rect", 18, {transformOrigin:"50% 50%", ease:Linear.easeNone});

rotate(".climacon_componentWrap-sun",12);
rotate(".climacon_componentWrap-snowflake",36);
scale(".climacon_iconWrap-sun .climacon_component-stroke_sunSpoke:nth-child(odd)", 0);
scale(".climacon_iconWrap-sun .climacon_component-stroke_sunSpoke:nth-child(even)", 4.5);
scale(".climacon_iconWrap-sunFill .climacon_component-stroke_sunSpoke:nth-child(odd)", 0);
scale(".climacon_iconWrap-sunFill .climacon_component-stroke_sunSpoke:nth-child(even)", 4.5);
scale(".climacon_componentWrap-sun_cloud .climacon_componentWrap_sunSpoke .climacon_component-stroke_sunSpoke:nth-child(odd)", 0);
scale(".climacon_componentWrap-sun_cloud .climacon_componentWrap_sunSpoke .climacon_component-stroke_sunSpoke:nth-child(even)", 4.5);
scale(".climacon_componentWrap-sunriseAlt .climacon_component-stroke_sunSpoke:nth-child(odd)", 0);
scale(".climacon_componentWrap-sunriseAlt .climacon_component-stroke_sunSpoke:nth-child(even)", 4.5);

translate(".climacon_componentWrap-wind", 0, 1, 5, false);
translate(".climacon_component-stroke_tornadoLine:nth-child(1)", 0, 4, 4, false);
translate(".climacon_component-stroke_tornadoLine:nth-child(2)", 0, 4, 2, false);
translate(".climacon_component-stroke_tornadoLine:nth-child(3)", 0, 4, 8, false);
translate(".climacon_component-stroke_tornadoLine:nth-child(4)", 0, 4, 6, false);
translate(".climacon_component-stroke_tornadoLine:nth-child(5)", 0, 4, 10, false);
translate(".climacon_component-stroke_tornadoLine:nth-child(6)", 0, 4, 6, false);
drizzleFall(".climacon_component-stroke_drizzle", 0, true);
drizzleFall(".climacon_component-stroke_drizzle:nth-child(1)", 0, true);
drizzleFall(".climacon_component-stroke_drizzle:nth-child(2)", 0.6, true);
drizzleFall(".climacon_component-stroke_drizzle:nth-child(3)", 1.2, true);

rainFall(".climacon_component-stroke_rain", 0);
rainFall(".climacon_component-stroke_rain:nth-child(n+4)", 1);
hailMove(".climacon_component-stroke_hailAlt:nth-child(1)", 0, 0.3, -0.6); //hailLeft
hailMove(".climacon_component-stroke_hailAlt:nth-child(2)", 0.16667, -0.15, 0.3); //hailMiddle2
hailMove(".climacon_component-stroke_hailAlt:nth-child(3)", 0.33333, -0.3, 0.6); //hailRight
hailMove(".climacon_component-stroke_hailAlt:nth-child(4)", 0.5, 0.3, -0.6); //hailLeft
hailMove(".climacon_component-stroke_hailAlt:nth-child(5)", 0.66667, 0.15, -0.3); //hailMiddle
hailMove(".climacon_component-stroke_hailAlt:nth-child(6)", 0.83333, -0.3, 0.6); //hailRight

snowFall(".climacon_component-stroke_snow:nth-child(1)", 0);
snowFall(".climacon_component-stroke_snow:nth-child(2)", 3);
snowFall(".climacon_component-stroke_snow:nth-child(3)", 6);
snowFall(".climacon_wrapperComponent-snowAlt", 0);
snowFall(".climacon_componentWrap-snowAlt", 0);

translate(".climacon_component-stroke_fogLine:nth-child(odd)", 0, 18, 2.5, true);
translate(".climacon_component-stroke_fogLine:nth-child(even)", 9, 18, 2.5, true);
translate(".climacon_component-stroke_fogLine:nth-child(odd)", 0, 18, 2.5, true);
translate(".climacon_component-stroke_fogLine:nth-child(even)", 9, 18, 2.5, true);

fillOpacityLightning(".climacon_component-stroke_lightning", 18);

translateArrow(".climacon_component-stroke_arrow-up", 4.5, -2, -5);  //up
translateArrow(".climacon_component-stroke_arrow-down", 4.5, 2, 5);  //down

translateSunrise(".climacon_componentWrap-sunriseAlt", 9, 0, -16);
translateSunset(".climacon_componentWrap-sunsetAlt", 18, -16, -4);


function rotate(elem,speed){
  TweenMax.to(elem, speed, {rotation:360, transformOrigin:"50% 50%", repeat:-1, ease:Linear.easeNone});
}

function scale(elem, delay){
  var tlm=new TimelineMax({repeat:-1, delay:delay, yoyo: true, ease: Linear.easeNone });
  tlm.fromTo(elem, 3, {scale:1}, {scale:0.5});
}

function translate(elem, delay, speed, x, opacity){
  var tlm=new TimelineMax({repeat:-1, delay:delay, yoyo: true, ease: Sine.easeInOut });
  tlm.to(elem, speed, {x:x}, {x:-x}, {x:0});
  if(opacity)
    tlm.fromTo(elem, speed/3, {opacity:0.5}, {opacity:1, repeat:1, yoyo:true, ease:Linear.easeNone}, 0);
}

function drizzleFall(elem, delay){
  var tl = new TimelineMax({repeat:-1, delay:delay});
  tl.fromTo(elem, 1, {y:0}, {y:21, ease:Power1.easeIn})
    .fromTo(elem, 0.5, {opacity:0}, {opacity:1, repeat:1, yoyo:true, ease:Linear.easeNone}, 0);
}

function drizzleFallnew(elem, delay, opacity){
  var tlm=new TimelineMax({repeat:-1, delay:delay, repeatDelay:0, yoyo: false, ease: Sine.easeIn });

  var tw1 = TweenMax.to(elem, .5, {y:0, opacity:0, ease: Linear.easeNone});
  var tw2 = TweenMax.to(elem, .5, {y:10, opacity:1, ease: Linear.easeNone});
  var tw3 = TweenMax.to(elem, .5, {y:20, opacity:0, ease: Linear.easeNone});

  tlm.add(tw1).add(tw2).add(tw3);
  var tltween = tl.tweenFromTo(0, tlm.duration());
}

function rainFall(elem, delay) {
  var tl = new TimelineMax({repeat:-1, delay:delay});
  tl.fromTo(elem, 2, {y:0}, {y:14, ease:Power1.easeIn})
    .fromTo(elem, 1, {opacity:0}, {opacity:1, repeat:1, yoyo:true, ease:Linear.easeNone}, 0);
}

function fillOpacity2(elem, delay) {
  var tlm=new TimelineMax({repeat:-1, delay:delay, repeatDelay:0, yoyo: false, ease: Sine.easeIn });
  tlm.from(elem, .5, {opacity:0 })
  .to(elem, .5, {opacity:1 })
  .to(elem, .5, {opacity:0 });
}

function hailMove(elem, delay, start_x, increment) {
  var tlm=new TimelineMax({repeat:-1, delay:delay });
  var x=start_x,
  y_arr = [17.5,17.5,16.40333,15.32396,14.27891,13.28466,12.35688,11.51021,10.75801,10.11213,9.58276,9.17826,8.90499,8.76727,8.76727,8.90499,9.17826,9.58276,10.11213,10.75801,11.51021,12.35688,13.28466,14.27891,15.32396,16.40333];

  for(var i = 0; i < y_arr.length; i++) {
      tlm.to(elem, 1/y_arr.length, {y:y_arr[i], x:x, ease:Power1.easeIn});
      x += increment;
  }
  tlm.fromTo(elem, 0.33, {opacity:0}, {opacity:1, repeat:1, yoyo:true, ease:Linear.easeNone}, 0);
}

function snowFall(elem, delay) {
  var tlm=new TimelineMax({repeat:-1, delay:delay });
  var y=0,
  x_arr = [0, 0.75349, 1.44133, 2.06119, 2.61124, 3.09017, 3.49718, 3.83201, 4.09491, 4.28661, 4.40839, 4.46197, 4.44956, 4.37381, 4.23782, 4.04508, 3.79948, 3.50523, 3.16689, 2.78933, 2.37764, 1.93717, 1.47343, 0.99211, 0.49901, 0, -0.49901, -0.99211, -1.47343, -1.93717, -2.37764, -2.78933, -3.16689, -3.50523, -3.79948, -4.04508, -4.23782, -4.37381, -4.44956, -4.46197, -4.40839, -4.28661, -4.09491, -3.83201, -3.49718, -3.09017, -2.61124, -2.06119, -1.44133, -0.75349, 0]

  for(var i = 0; i < x_arr.length; i++) {
      tlm.to(elem, 9/x_arr.length, {y:y, x:x_arr[i], ease:Power1.easeIn});
      y += 0.35;
  }
  tlm.fromTo(elem, 3, {opacity:0}, {opacity:1, repeat:1, yoyo:true, ease:Linear.easeNone}, 0);
}

function fillOpacityLightning(elem, speed) {
  var tlm=new TimelineMax({repeat:-1, delay:0, yoyo: false, ease: Sine.easeOut });

  tlm.from(elem, speed*0.01, {opacity:0 })
  .to(elem, speed*0.06, {opacity:1 })
  .to(elem, speed*0.43, {opacity:0 })
  .to(elem, speed*0.01, {opacity:0 })
  .to(elem, speed*0.02, {opacity:1 })
  .to(elem, speed*0.01, {opacity:0 })
  .to(elem, speed*0.06, {opacity:1 })
  .to(elem, speed*0.4, {opacity:0 })
  .to(elem, speed*0, {opacity:0 });
}

function translateArrow(elem, speed, from, to){
  var tlm=new TimelineMax({repeat:-1, delay:0 });
  tlm.fromTo(elem, speed, {y:from}, {y:to});
  tlm.fromTo(elem, speed/3, {opacity:0}, {opacity:1, repeat:1, yoyo:true, ease:Linear.easeNone}, 0);
}

function translateSunrise(elem, speed, from, to){
  var tlm=new TimelineMax({repeat:0, delay:0, yoyo: false, ease:Linear.easeNone });

  tlm.from(elem, speed*0.25, {y:from })
  .to(elem, speed*0.75, {y:to });
  tlm.fromTo(elem, speed, {opacity:0}, {opacity:1, yoyo:true, ease:Linear.easeNone}, 0);
}

function translateSunset(elem, speed, from, to){
  var tlm=new TimelineMax({repeat:0, delay:0, yoyo: false, ease:Linear.easeNone });

  tlm.from(elem, speed*0.25, {y:from })
  .to(elem, speed*0.75, {y:to });
}
