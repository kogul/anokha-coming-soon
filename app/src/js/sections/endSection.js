'use strict';
  
var Section = require('../classes/SectionClass');
var THREE = require('three');
var loader = new THREE.ImageLoader();
var TextPanel = require('../objects3D/TextPanelObject3D');
var LookAtField = require('../objects3D/LookAtFieldObject3D');
var endSection = new Section('end');
var TweenLite = require('tweenlite');


/*loader.load('/app/public/img/logo.png',function(image){
    endSection.add(image);
    image.in();
});*/


 
/*var text = new TextPanel(
  'A N O K H A \n I S \n C O M I N G ',
  {
    align: 'center',
    style: '',
    size: 50,
    lineSpacing: 40
  }
);
text.el.position.z = 10;
endSection.add(text.el);

var text2 = new TextPanel(
  'Bigger and Better than Ever',
  {
    align: 'center',
    style: '',
    size: 30,
    lineSpacing: 40
  }
);
text2.el.position.y = -10;
text2.el.position.z = 10;
endSection.add(text2.el);
*/
var field = new LookAtField({
  count: 50
});
field.el.position.set(0,0,-30);
endSection.add(field.el);
TweenLite.to(field.el.rotation, 30, { y: 2 * Math.PI, z: 2*Math.PI, ease: window.Linear.easeNone,
  onComplete: function () {
    this.restart();
  }
});

endSection.onIn(function () {
/*  text.in();
  text2.in();
*/  field.in();
});

endSection.onOut(function (way) {
  field.el.visible = false;
/*  text.out(way);
*/  field.out();
});

module.exports = endSection;