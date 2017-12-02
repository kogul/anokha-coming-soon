'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var Smoke = require('../objects3D/SmokeObject3D');
var Neon = require('../objects3D/NeonObject3D');

var neonsSection = new Section('neons');

var smoke = new Smoke({
  planesNumber: 3,
  frontColor: '#4c4c4c',
  backColor: '#ffffff',
  data: [
    { positionX : -2.5, positionY: -18.8, positionZ: -6, rotationZ: 2.7, scale: 8.5 },
    { positionX : -11.1, positionY: 10.3, positionZ: -10.4, rotationZ: 1.4, scale: 5.8 },
    { positionX : -15.1, positionY: -5.9, positionZ: -19.2, rotationZ: 1.6, scale: 7.4 }
  ]
});
neonsSection.add(smoke.el);

var neonA = new Neon();

var neonB = new Neon();
neonB.el.position.set(0, 0, -5);
neonB.el.rotation.z = 2;

var neonC = new Neon();
neonC.el.position.set(0, 13, -5);
neonC.el.rotation.z = 2;

var neonD = new Neon();
neonD.el.position.set(0, -13, -5);
neonD.el.rotation.z = 2;

neonsSection.add(neonA.el);
neonsSection.add(neonB.el);
neonsSection.add(neonC.el);
neonsSection.add(neonD.el);

neonA.el.visible = false;
neonB.el.visible = false;
neonC.el.visible = false;
neonD.el.visible = false;
smoke.el.visible = false;

var pnr = new TextPanel(
  " P L A N N I N G \n A N D \n R E S O U R C E S",
  {
    align: 'center',
    style: '',
    size: 50,
    lineSpacing: 40
  }
);
pnr.el.position.set(-25, 0, 0);
pnr.el.rotation.y = 0.5;
neonsSection.add(pnr.el);

var pnrtag = new TextPanel(
  "Ideate . Plan . Execute",
  {
    align: 'center',
    style: '',
    size: 30,
    lineSpacing: 40
  }
);
pnrtag.el.position.set(-25,-10, 0);
pnrtag.el.rotation.y = 0;
neonsSection.add(pnrtag.el);

var cr = new TextPanel(
  " C O R P O R A T E    R E L A T I O N S",
  {
    align: 'center',
    style: '',
    size: 50,
    lineSpacing: 40
  }
);
cr.el.position.set(25, 2, 0);
cr.el.rotation.y = 0.2;
neonsSection.add(cr.el);


var crtag = new TextPanel(
  "A great negotiation can work miracles",
  {
    align: 'center',
    style: '',
    size: 30,
    lineSpacing: 40
  }
);
crtag.el.position.set(20,-2, 0);
crtag.el.rotation.y = 0;
neonsSection.add(crtag.el);


neonsSection.onStart(function () {
  neonA.start();
  neonB.start();
  neonC.start();
  neonD.start();

  pnr.in();
  cr.in();
  pnrtag.in();
  crtag.in();

  neonA.el.visible = true;
  neonB.el.visible = true;
  neonC.el.visible = true;
  neonD.el.visible = true;
});

neonsSection.onStop(function () {
  neonA.stop();
  neonB.stop();
  neonC.stop();
  neonD.stop();

  pnr.out(way);
  cr.out(way);
  pnrtag.out(way);
  crtag.out(way);

  neonA.el.visible = false;
  neonB.el.visible = false;
  neonC.el.visible = false;
  neonD.el.visible = false;
});

var smokePlaying = false;

neonsSection.smokeStart = function () {
  if (smokePlaying) {
    return false;
  }

  smokePlaying = true;

  smoke.start();

  smoke.el.visible = true;
};

neonsSection.smokeStop = function () {
  if (!smokePlaying) {
    return false;
  }

  smokePlaying = false;

  smoke.stop();

  smoke.el.visible = false;
};

module.exports = neonsSection;