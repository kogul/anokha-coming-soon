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
    { name: 'A', url: './app/public/img/heightMap-A.jpg' },
    { name: 'B', url: './app/public/img/heightMap-B.jpg' },
    { name: 'O', url: './app/public/img/heightMap-O.jpg' }
  ]
});
heightMap.el.position.z = -10;
heightMap.el.rotation.y = -0.6;
heightSection.add(heightMap.el);

var comm = new TextPanel(
  ' C O M M U N I C A T I O N\nWhere the wordsmiths reside',
  {
    align: 'center',
    style: '',
    size: 30,
    lineSpacing: 40,
  }
);
comm.el.position.set(-25, 8, 0);
heightSection.add(comm.el);

var pr = new TextPanel(
  ' P U B L I C   R E L A T I O N S\nExpanding the network',
  {
    align: 'center',
    style: '',
    size: 30,
    lineSpacing: 40,
  }
);
pr.el.position.set(-25, -8, 0);
heightSection.add(pr.el);

heightMap.el.visible = false;

heightSection.onIn(function () {
  comm.in();
  pr.in();
});

heightSection.onOut(function (way) {
  text.out(way);
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