/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/ /* global document */

var counter = document.querySelector('div.readcounter');
var trigger = document.getElementById("counterarticle");

var reveal = function() {
    counter.classList.toggle('readcounteractive');
};

trigger.addEventListener('mouseenter', reveal);
trigger.addEventListener('mouseleave', reveal);
//window.addEventListener('scroll', reveal); 
//Doet helemaal raar