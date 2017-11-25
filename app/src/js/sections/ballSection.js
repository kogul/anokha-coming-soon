'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var Ball = require('../objects3D/BallObject3D');
var Grid = require('../objects3D/GridObject3D');

var ballSection = new Section('ball');

var ball = new Ball();
ball.el.rotation.z = 2;
ballSection.add(ball.el);

var grid = new Grid({
  step: 5,
  stepsX: 11,
  stepsY: 11,
  loop: true
});
grid.el.rotation.set(1.5, 1, 2);
grid.el.position.x = -20;
ballSection.add(grid.el);

var text = new TextPanel(
  'T H E   B A L L \n R O L L I N G ',
  {
    align: 'left',
    style: '',
    size: 40,
    lineSpacing: 40
  }
);
text.el.position.set(15, 0, 15);
text.el.rotation.y = -0.4;
ballSection.add(text.el);

ball.el.visible = false;
grid.el.visible = false;

ballSection.onIn(function () {
  ball.in();
  grid.in();
  text.in();
});

ballSection.onOut(function (way) {
  text.out(way);
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