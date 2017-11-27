'use strict';
  
var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var LookAtField = require('../objects3D/LookAtFieldObject3D');

var endSection = new Section('end');

var text = new TextPanel(
  'A N O K H A \n I S \n C O M I N G ',
  {
    align: 'center',
    style: '',
    size: 50,
    lineSpacing: 40
  }
);
endSection.add(text.el);

var text2 = new TextPanel(
  'BIGGER AND BETTER THAN EVER',
  {
    align: 'center',
    style: '',
    size: 30,
    lineSpacing: 40
  }
);
text2.el.position.y = -10;
endSection.add(text2.el);

var field = new LookAtField({
  count: 50
});
endSection.add(field.el);

endSection.onIn(function () {
  text.in();
  text2.in();
  field.in();
});

endSection.onOut(function (way) {
  text.out(way);
  field.out(way);
});

module.exports = endSection;