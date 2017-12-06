'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var Ball = require('../objects3D/BallObject3D');
var Grid = require('../objects3D/GridObject3D');

var ballSection = new Section('ball');

var ball = new Ball();

/*ball.el.rotation.z = 2;
*/ballSection.add(ball.el);

var grid = new Grid({
  step: 5,
  stepsX: 11,
  stepsY: 11,
  loop: true
});
grid.el.rotation.set(1.5, 1, 2);
grid.el.position.x = -20;
ballSection.add(grid.el);

var text1 = new TextPanel(
  'T H E  ',
  {
    align: 'center',
    style: '',
    size: 120,
    lineSpacing: 40
  }
);
text1.el.position.set(-25, 0, 0);
text1.el.rotation.y = 1;
ballSection.add(text1.el);

var text2 = new TextPanel(
  'S T A G E ',
  {
    align: 'center',
    style: '',
    size: 100,
    lineSpacing: 40
  }
);
text2.el.position.set(25, 0, 0);
text2.el.rotation.y = -1 ;
ballSection.add(text2.el);

var text3 = new TextPanel(
  'O N   F I R E ',
  {
    align: 'center',
    style: '',
    size: 100,
    lineSpacing: 20
  }
);
text3.el.position.set(0, -20, 0);
text3.el.rotation.y = 0;
ballSection.add(text3.el);

ball.el.visible = false;
grid.el.visible = false;

ballSection.onIn(function () {
  ball.in();
  grid.in();
  text1.in();
  text2.in();
  text3.in();
});

ballSection.onOut(function (way) {
  text1.out(way);
  text2.out(way);
  text3.out(way);
  grid.out(way);

  if (way === 'up') {
    ball.out();
  }
});

ballSection.onStart(function () {
  ball.start();
  grid.start();

  ball.el.visible = true;
  grid.el.visible = true;
});

ballSection.onStop(function () {
  ball.stop();
  grid.stop();

  ball.el.visible = false;
  grid.el.visible = false;
});

module.exports = ballSection;