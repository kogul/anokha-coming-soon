'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var Face = require('../objects3D/FaceHpObject3D');
var Strips = require('../objects3D/StripsObject3D');

var faceSection = new Section('face');

var eve = new TextPanel(
  'E V E N T I D E',
  {
    align: 'center',
    style: '',
    size: 55,
    lineSpacing: 40
  }
);
eve.el.position.set(25, 0, 3);
eve.el.rotation.y = -0.4;
faceSection.add(eve.el);

var evetag = new TextPanel(
  'Extravaganza has an address',
  {
    align: 'center',
    style: '',
    size: 25,
    lineSpacing: 40
  }
);
evetag.el.position.set(25, -5, 3);
evetag.el.rotation.y = -0.4;
faceSection.add(evetag.el);

var lum = new TextPanel(
  'L U M I E R E',
  {
    align: 'center',
    style: '',
    size: 55,
    lineSpacing: 40
  }
);
lum.el.position.set(-23, 0, 3);
lum.el.rotation.y = 0.4;
faceSection.add(lum.el);

var lumtag = new TextPanel(
  'Where great minds think aloud',
  {
    align: 'center',
    style: '',
    size: 25,
    lineSpacing: 40
  }
);
lumtag.el.position.set(-23, -5, 3);
lumtag.el.rotation.y = 0.4;
faceSection.add(lumtag.el);

var face = new Face();
face.el.position.z = -8;
face.el.position.y = -5;
face.el.rotation.x = -0.1;
face.el.rotation.z = 0.25;
faceSection.add(face.el);

var strips = new Strips({
  count: 10,
  colors: ['#444444', '#333333', '#222222'],
  rangeY: [-60, 60]
});
faceSection.add(strips.el);

face.el.visible = false;
strips.el.visible = false;

faceSection.onIn(function () {
  face.in();
  //strips.in();
  eve.in();
  evetag.in();
  lum.in();
  lumtag.in();
});

faceSection.onOut(function (way) {
  face.out(way);
  strips.out();
  eve.out();
  lum.out();
});

faceSection.onStart(function () {
  face.start();

  face.el.visible = true;
  strips.el.visible = true;
});

faceSection.onStop(function () {
  face.stop();

  face.el.visible = false;
  strips.el.visible = false;
});

module.exports = faceSection;