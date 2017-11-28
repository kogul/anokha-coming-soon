'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var Galaxy = require('../objects3D/GalaxyObject3D');

var galaxySection = new Section('galaxy');

var galaxy = new Galaxy();
galaxy.el.rotation.x = -1;
galaxy.el.position.set(0,0,-25);
galaxySection.add(galaxy.el);

galaxy.el.visible = false;

var text = new TextPanel(
  'W E B,   M U L T I M E D I A   A N D   D O C U M E N T A T I O N',
  {
    align: 'center',
    style: '',
    size: 40,
    lineSpacing: 40
  }
);
text.el.position.set(0, 0, 0);
galaxySection.add(text.el);

galaxySection.onIn(function (way) {
  galaxy.in(way);
  text.in();
});

galaxySection.onOut(function (way) {
  galaxy.out(way);
  text.out(way);
});

galaxySection.onStart(function () {
  galaxy.start();

  galaxy.el.visible = true;
});

galaxySection.onStop(function () {
  galaxy.stop();

  galaxy.el.visible = false;
});

module.exports = galaxySection;