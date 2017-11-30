'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var Wave = require('../objects3D/WaveObject3D');

var waveSection = new Section('wave');

var wave = new Wave();
waveSection.add(wave.el);

var text = new TextPanel(
  'F I N A N C E\n\nReserve Bank of Anokha',
  {
    align: 'center',
    style: '',
    size: 40,
    lineSpacing: 40
  }
);
text.el.position.y = 10;
text.el.position.x = -20;
waveSection.add(text.el);

var text1 = new TextPanel(
  "F O O D   S T A L L S\n\nWhat's a party without cake",
  {
    align: 'center',
    style: '',
    size: 40,
    lineSpacing: 40
  }
);
text1.el.position.y = 10;
text1.el.position.x = 20;
waveSection.add(text1.el);

wave.el.visible = false;

waveSection.onIn(function (way) {
  text.in();
  text1.in();
  wave.in(way);
});

waveSection.onOut(function (way) {
  text.out(way);
  text1.out(way);
  wave.out(way);
});

waveSection.onStart(function () {
  wave.start();

  wave.el.visible = true;
});

waveSection.onStop(function () {
  wave.stop();

  wave.el.visible = false;
});

module.exports = waveSection;