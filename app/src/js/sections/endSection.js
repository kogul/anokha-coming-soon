'use strict';
  
var Section = require('../classes/SectionClass');
var THREE = require('three');
var loader = new THREE.ImageLoader();
var TextPanel = require('../objects3D/TextPanelObject3D');
var LookAtField = require('../objects3D/LookAtFieldObject3D');
var endSection = new Section('end');
var Smoke = require('../objects3D/SmokeObject3D');
var TweenLite = require('tweenlite');

var smoke = new Smoke({  
  frontColor: '#4c4c4c',
  backColor: '#ffffff',
  layers: 3,
  data: [
    { positionX : 10.7, positionY: 3.9, positionZ: 17.8, rotationZ: 2.7, scale: 3.9 },
    { positionX : -2.8, positionY: 2.6, positionZ: -11, rotationZ: 0.7, scale: 7.7 },
    { positionX : 13, positionY: 19.5, positionZ: -1.3, rotationZ: 2, scale: 2.7 }
  ]
});
endSection.add(smoke.el);
smokePlaying = true;

  smoke.start();

  smoke.el.visible = true;

var field = new LookAtField({
  count: 50
});

var text = new TextPanel(
  'JOIN US',
  {
    align: 'center',
    style: '',
    size: 75,
    lineSpacing: 40
  }
);
text.el.position.set(-25, 0, 0);
endSection.add(text.el);

var texttag = new TextPanel(
  'ON FEB 22, 23 24',
  {
    align: 'center',
    style: '',
    size: 75,
    lineSpacing: 40
  }
);
texttag.el.position.set(33, 0, 0);
endSection.add(texttag.el);

var webtag = new TextPanel(
  "AIN'T NO PARTY WITHOUT WEB",
  {
    align: 'center',
    style: '',
    size: 30,
    lineSpacing: 40
  }
);
webtag.el.position.set(0, -20, 0);
endSection.add(webtag.el);


function renderText(){
  text.in();
  texttag.in();
  webtag.in();
}
//field.el.position.set(0,0,-30);

endSection.add(field.el);
field.el.visible = false;
TweenLite.to(field.el.rotation, 30, { z:6 , x: 6, y:4, ease: window.Linear.easeNone,
  onComplete: function () {
    //this.restart();
    renderText();
  }
});


endSection.onIn(function () {
     
     field.in();
     field.el.visible = true;
});

endSection.onOut(function (way) {
  field.el.visible = false;
  field.out();
});

var smokePlaying = false;

var smokeStart = function () {
  if (smokePlaying) {
    return false;
  }

  smokePlaying = true;

  smoke.start();

  smoke.el.visible = true;
};

endSection.smokeStop = function () {
  if (!smokePlaying) {
    return false;
  }

  smokePlaying = false;

  smoke.stop();

  smoke.el.visible = false;
};


module.exports = endSection;