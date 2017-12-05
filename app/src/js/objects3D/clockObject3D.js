'use strict';

var jQuery = require('jquery');
var THREE = require('three');
var TweenLite = require('tweenlite');

var random = require('../utils/randomUtil');
var yoyo = require('../utils/yoyoUtil');

/**
 * Light beam
 *
 * @class Beam
 * @constructor
 * @param {Object} [options]
 * @param {String} [options.color='#ffffff'] Beam color
 * @param {Number} [options.height=15] Beam expanded height
 * @param {Number} [options.width=2] Beam width
 * @param {Number} [options.cubeSize=0.5] Extremity cube size
 * @param {Number} [options.delay=0] Animations delay
 * @requires jQuery, THREE, TweenLite, random, yoyo
 */
function Clock () {
  //var parameters = jQuery.extend(Beam.defaultOptions, options);
var   segments = 64;
 var group = new THREE.Object3D();
var radius   = 25,
  
    material = new THREE.LineBasicMaterial( { color: 0xffffff } ),
    geometry = new THREE.CircleGeometry( radius, segments );

// Remove center vertex
geometry.vertices.shift();

var circle = new THREE.Line( geometry, material );
var i = 0, radius = [],material=[],geometry=[],circle=[];
for(i=0; i<10; i++ ){
    radius[i] = (20 - (i/10));
    material[i] = new THREE.LineBasicMaterial( { color: 0xdbdbdb } );
    geometry[i] = new THREE.CircleGeometry( radius[i], segments );
    geometry[i].vertices.shift();
    circle[i] = new THREE.Line( geometry[i], material[i] );
    group.add(circle[i]);

}

var geometrySphere = new THREE.SphereGeometry( 0.7 );
var materialSphere = new THREE.MeshBasicMaterial( {color: 0xf80900} );
var sphere = new THREE.Mesh( geometrySphere, materialSphere );
group.add( sphere );


var Linematerial = new THREE.LineBasicMaterial({
  color: 0xf80900,
  linewidth: 10
});
var line =[],hour=[];
for(var i = 0;i<=5;i++){
var geometryLine = new THREE.Geometry();
geometryLine.vertices.push(
  new THREE.Vector3(0.25-(i/10.0), 0, 0 ),
  new THREE.Vector3(0.25-(i/10.0), 18, 0 )
);

 line[i] = new THREE.Line( geometryLine, Linematerial );
 
  group.add(line[i]);
}
for(var i = 0;i<=5;i++){
var geometryLine = new THREE.Geometry();
geometryLine.vertices.push(
  new THREE.Vector3(0.25-(i/10.0), 0, 0 ),
  new THREE.Vector3(0.25-(i/10.0), 9, 0 )
);

 hour[i] = new THREE.Line( geometryLine, Linematerial );
  group.add(hour[i]);
}




  
  this.el = group;

 // var delay = parameters.delay;

  this.in = function () {
    /*TweenLite.to(cache, 1, { y: -5, delay: delay, onUpdate: positionUpdate });*/
   //  TweenLite.to(group.position, 1, { y: 0 });
   for(var i =0; i<line.length; i++){
  TweenLite.to(line[i].rotation, 70, { z: -40*Math.PI, transformOrigin:"50% 50%", ease: window.Linear.easeNone,
  onComplete: function () {
    this.restart();
  }
});
}
for(var i = 0; i<hour.length; i++){
  TweenLite.to(hour[i].rotation, 140, { z: -40*Math.PI,transformOrigin:"50% 50%", ease: window.Linear.easeNone,
  onComplete: function () {
    this.restart();
  }
});
}
  };

  this.out = function (way) {

  
  };

  this.start = function () {
  /*  idleTweens.flare.resume();
    idleTweens.movingflare.resume();
    idleTweens.body.resume();*/
  };

  this.stop = function () {
   /* idleTweens.flare.pause();
    idleTweens.movingflare.pause();
    idleTweens.body.pause();*/
  };
}


module.exports = Clock;