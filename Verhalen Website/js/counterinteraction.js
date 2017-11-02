/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var counter = document.querySelector('div.readcounter');
var trigger = document.getElementById("counterarticle");

var reveal = function() {
    counter.classList.toggle('readcounteractive');
};

//trigger.addEventListener('mouseover', reveal);
trigger.addEventListener('mousedown', reveal);