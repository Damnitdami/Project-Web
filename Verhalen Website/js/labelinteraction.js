/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/ /* global document */

var label = document.querySelector('div.label');
var trigger = document.getElementById("labeledarticle");

var reveal = function() {
    label.classList.toggle('labelactive');
};

trigger.addEventListener('mousedown', reveal);