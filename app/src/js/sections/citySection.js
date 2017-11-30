'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');

var citySection = new Section('city');

var cse = new TextPanel(
  'C S E\n E C E\n E E E\n M E C H\n C H E M\n A E R O\n C I V I L',
  {
    align: 'left',
    style: '',
    size: 35,
    lineSpacing: 40
  }
);
cse.el.position.set(20,-20,0);
citySection.add(cse.el);

var cs = new TextPanel(
  'A S C O M\n C E N\n C Y B E R    S E C U R I T Y\n M S W\n M A T H S\n S C I E N C E\n E N G L I S H',
  {
    align: 'left',
    style: '',
    size: 35,
    lineSpacing: 40
  }
);
cs.el.position.set(20,20,0);
citySection.add(cs.el);

citySection.onIn(function () {
  cse.in();
  cs.in();
});

citySection.onOut(function (way) {
  cse.out(way);
  cs.out(way);

});

module.exports = citySection;