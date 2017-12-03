
'use strict';

var Section = require('../classes/SectionClass');
var TextPanel = require('../objects3D/TextPanelObject3D');
var Smoke = require('../objects3D/SmokeObject3D');
var citySection = new Section('city');

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
citySection.add(smoke.el);
smokePlaying = true;

  smoke.start();

  smoke.el.visible = true;

var techTitle =  new TextPanel(
  'TECHNICAL DEPARTMENTS',
  {
    align: 'center',
    style: '',
    size: 75,
    lineSpacing: 40
  }
);
techTitle.el.position.set(0,15,5);
citySection.add(techTitle.el);
techTitle.in();

var cse = new TextPanel(
  'C S E\n E C E\n E E E\n M E C H\n C H E M\n A E R O\n C I V I L',
  {
    align: 'center',
    style: '',
    size: 45,
    lineSpacing: 40
  }
);
cse.el.position.set(-15,-5,5);
citySection.add(cse.el);
cse.in();

var cs = new TextPanel(
  'A S C O M\n C E N\n C Y B E R    S E C U R I T Y\n M S W\n M A T H S\n S C I E N C E\n E N G L I S H',
  {
    align: 'center',
    style: '',
    size: 45,
    lineSpacing: 40
  }
);
cs.el.position.set(15,-5,0);
citySection.add(cs.el);
cs.in();

citySection.onIn(function (way) {

});

citySection.onOut(function (way) {

});

citySection.onStart(function (way) {

});

citySection.onStop(function (way) {

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

citySection.smokeStop = function () {
  if (!smokePlaying) {
    return false;
  }

  smokePlaying = false;

  smoke.stop();

  smoke.el.visible = false;
};


module.exports = citySection;
