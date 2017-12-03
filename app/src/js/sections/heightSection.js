'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var HeightMap = require('../objects3D/HeightMapObject3D');

var heightSection = new Section('height');

var heightMap = new HeightMap({
  horizontal: true,
  vertical: false,
  plane: false,
  points: false,
  maps: [
    { name: 'A', url: './app/public/img/speaker.jpg' },
    { name: 'O', url: './app/public/img/mic+3.1.jpg' },
    /*{ name: 'B', url: './app/public/img/mic+3.2.jpg' },*/
  ]
});
heightMap.el.position.z = -10;
heightMap.el.rotation.y = -0.6;
heightSection.add(heightMap.el);

var comm = new TextPanel(
  ' C O M M U N I C A T I O N',
  {
    align: 'center',
    style: '',
    size: 60,
    lineSpacing: 40,
  }
);
comm.el.position.set(-19, 0, 0);
heightSection.add(comm.el);

var commtag = new TextPanel(
  ' Where the wordsmiths reside',
  {
    align: 'center',
    style: '',
    size: 30,
    lineSpacing: 40,
  }
);
commtag.el.position.set(-19,-8, 0);
heightSection.add(commtag.el);


var pr = new TextPanel(
  ' P U B L I C \n   R E L A T I O N S',
  {
    align: 'center',
    style: '',
    size: 60,
    lineSpacing: 40,
  }
);
pr.el.position.set(25, 0, 0);
heightSection.add(pr.el);

var prtag = new TextPanel(
  'Expanding the network',
  {
    align: 'center',
    style: '',
    size: 30,
    lineSpacing: 40,
  }
);
prtag.el.position.set(25, -8, 0);
heightSection.add(prtag.el);

heightMap.el.visible = false;

heightSection.onIn(function () {
  comm.in();
  commtag.in();
  pr.in();
  prtag.in();
});

heightSection.onOut(function (way) {
  
  pr.out(way);
});

heightSection.onStart(function () {
  if (!heightMap.ready) {
    return false;
  }

  heightMap.start();
});

heightSection.onStop(function () {
  if (!heightMap.ready) {
    return false;
  }

  heightMap.stop();
});

heightSection.show = function () {
  heightMap.el.visible = true;
};

heightSection.hide = function () {
  heightMap.el.visible = false;
};

module.exports = heightSection;