'use strict';

var TweenLite = require('tweenlite');

var TextPanel = require('../objects3D/TextPanelObject3D');

var Section = require('../classes/SectionClass');

var City = require('../objects3D/CityObject3D');

var citySection = new Section('city');

var city = new City();
city.addGroup({
  name: 'shanghai',
  objs: {
    ground: './app/public/3D/shanghai-grounds.js',
    buildings: './app/public/3D/shanghai-buildings.js',
    towers: './app/public/3D/shanghai-towers.js'
  },
  outline: {
    ground: {
      offset: 0.2,
      solid: true
    }
  }
});

// city.el.rotation.y = Math.PI / 6;
city.el.rotation.y = 0;
city.el.rotation.z = Math.PI / 16;
city.el.position.set(5, -10, 0);
citySection.add(city.el);
city.showGroup('shanghai');

TweenLite.to(city.el.rotation, 30, { y: 2 * Math.PI, ease: window.Linear.easeNone,
  onComplete: function () {
    this.restart();
  }
});

var text = new TextPanel(
  'E V E N T I D E',
  {
    align: 'center',
    style: '',
    size: 50,
    lineSpacing: 40
  }
);
citySection.add(text.el);

citySection.onIn(function () {
  text.in();
});

citySection.onOut(function (way) {
  text.out(way);

});

citySection.onStart(function (way) {
    //text.in();
});

citySection.onStop(function (way) {

});

module.exports = citySection;