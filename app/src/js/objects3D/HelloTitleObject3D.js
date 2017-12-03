'use strict';

var THREE = require('three');
var TweenLite = require('tweenlite');

var SPRITE3D = require('../libs/sprite3DLib');
var HASH = require('../modules/hashModule');

/**
 * Hello title
 *
 * @class Title
 * @constructor
 * @requires THREE, TweenLite, SPRITE3D, HASH
 */
function Title () {
  var path;

  var sprites = {
    none: './app/public/img/anokhawhite-sprite.png',
    /*anokha : './app/public/img/anokha-sprite.png'
    akqa: './app/public/img/sprite-AKQA.png',
    hki: './app/public/img/sprite-HKI.png',
    grouek: './app/public/img/sprite-grouek.png',
    mediamonks: './app/public/img/sprite-mediamonks.png',
    soleilnoir: './app/public/img/sprite-soleilnoir.png',
    thread: './app/public/img/sprite-thread.png',
    ultranoir: './app/public/img/sprite-ultranoir.png'*/
  };

  if (sprites[HASH.hash]) {
    path = sprites[HASH.hash];
  } else {
    path = sprites.none;
  }

  var texture = new THREE.ImageUtils.loadTexture(path);
  texture.flipY = true;

  var sprite = new SPRITE3D.Sprite(texture, {
    horizontal: 8,
    vertical: 2,
    total: 16,
    duration: 300,
    loop: true
  });

  var material = new THREE.MeshBasicMaterial({
    map: texture,
    depthWrite: false,
    depthTest: true,
    transparent: true
  });

  var geometry = new THREE.PlaneGeometry(25, 15);
  var plane = new THREE.Mesh(geometry, material);

  function update () {
    plane.position.y = cache.y;
    material.opacity = cache.opacity;
  }

  var cache = { y: 20, opacity: 0 };
  var inTween = TweenLite.to(cache, 1, { y: 0, opacity: 1, paused: true, onUpdate: update});

  this.el = plane;

  this.in = function () {
    inTween.play();
  };

  this.out = function () {
    inTween.reverse();
  };

  this.start = function () {
    sprite.start();
  };

  this.stop = function () {
    sprite.stop();
  };
}

module.exports = Title;