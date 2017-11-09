/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/ /* global document */

var voorgrondImage = document.querySelector('img.verberg');
var button = document.getElementById("verbergbutton");

var verbergen = function() {
    voorgrondImage.classList.toggle('verbergactive');
};

button.addEventListener('click', verbergen);