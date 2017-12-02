'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var Rocks = require('../objects3D/RocksObject3D');

var rocksSection = new Section('rocks');

var rocks = new Rocks();
rocksSection.add(rocks.el);

var reg = new TextPanel(
  'R E G I S T R A T I O N',
  {
    align: 'center',
    style: '',
    size: 60,
    lineSpacing: 40
  }
);
reg.el.position.set(23, 0, 0);
rocksSection.add(reg.el);
reg.out('down');

var regtag = new TextPanel(
  'Admit One',
  {
    align: 'center',
    style: '',
    size: 30,
    lineSpacing: 40
  }
);
regtag.el.position.set(23, -5, 0);
rocksSection.add(regtag.el);
regtag.out('down');


var tran = new TextPanel(
  "T R A S P O R T A T I O N",
  {
    align: 'center',
    style: '',
    size: 60,
    lineSpacing: 40
  }
);
tran.el.position.set(-23, 0, 0);
rocksSection.add(tran.el);
tran.out('down');

var trantag = new TextPanel(
  "You'll never walk alone",
  {
    align: 'center',
    style: '',
    size: 30,
    lineSpacing: 40
  }
);
trantag.el.position.set(-23, -5, 0);
rocksSection.add(trantag.el);
trantag.out('down');

var sec = new TextPanel(
  'S E C U R I T Y',
  {
    align: 'center',
    style: '',
    size: 60,
    lineSpacing: 40
  }
);
sec.el.position.set(0, -8, 0);
rocksSection.add(sec.el);
sec.out('down');

var sectag = new TextPanel(
  'Our watch has just begun',
  {
    align: 'center',
    style: '',
    size: 30,
    lineSpacing: 40
  }
);
sectag.el.position.set(0, -13, 0);
rocksSection.add(sectag.el);
sectag.out('down');

rocks.el.visible = false;

rocksSection.onIn(function () {
  reg.in();
  regtag.in();
  rocks.in();
  tran.in();
  trantag.in();
  sec.in();
  sectag.in()
});

rocksSection.onOut(function (way) {
  reg.out('down');
  rocks.out(way);
  tran.out(way);
  sec.out(way);
});

rocksSection.onStart(function () {
  rocks.start();
});

rocksSection.onStop(function () {
  rocks.stop();
});

rocksSection.show = function () {
  rocks.el.visible = true;
};

rocksSection.hide = function () {
  rocks.el.visible = false;
};

module.exports = rocksSection;