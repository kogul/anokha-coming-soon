'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');

var GravityGrid = require('../objects3D/GravityGridObject3D');

var gravitySection = new Section('gravity');

var grid = new GravityGrid({
  linesColor: '#666666'
});
grid.el.position.z = 0;
grid.el.position.x = -1;
gravitySection.add(grid.el);

grid.el.visible = false;

var text1 = new TextPanel(
  "F U N   S T A L L S\nWe're all about the adrenaline",
  {
    align: 'center',
    style: '',
    size: 40,
    lineSpacing: 40
  }
);
text1.el.position.y = 10;
text1.el.position.x = -23;
gravitySection.add(text1.el);

var text = new TextPanel(
  'H O S P I T A L I T Y\nBed, bath and beyond',
  {
    align: 'center',
    style: '',
    size: 40,
    lineSpacing: 40
  }
);
text.el.position.y = 10;
text.el.position.x = 23;
gravitySection.add(text.el);

var text2 = new TextPanel(
  'P R I Z E   H A N D L I N G\nAppreciation is better shown than told',
  {
    align: 'center',
    style: '',
    size: 40,
    lineSpacing: 40
  }
);
text2.el.position.y = -12;
text2.el.position.x = 0;
gravitySection.add(text2.el);

gravitySection.onIn(function () {
  grid.in();
  text.in();
  text1.in();
  text2.in();
});

gravitySection.onOut(function () {
  grid.out();
  text.out(way);
  text1.out(way);
  text2.out(way);
});

gravitySection.onStart(function () {
  grid.start();
});

gravitySection.onStop(function () {
  grid.stop();
});

gravitySection.show = function () {
  grid.el.visible = true;
};

gravitySection.hide = function () {
  grid.el.visible = false;
};

module.exports = gravitySection;