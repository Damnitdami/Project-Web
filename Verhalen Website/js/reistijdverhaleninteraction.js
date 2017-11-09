/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/ /* global document */

var reisVerhalen = document.querySelector('section.reistijdverhalen');
var trigger = document.getElementById("reisverhalentrigger");
var triggerTwo = document.getElementById("reisverhalentrigger2");
var reisVerhalenInactive = document.querySelector('article.select');
var reisVerhalenInactiveTwo = document.querySelector('article.select2');

var reveal = function() {
    reisVerhalen.classList.toggle('reistijdverhalenactive');
    reisVerhalenInactive.classList.toggle('notselected');
    reisVerhalenInactiveTwo.classList.toggle('notselected');
};

trigger.addEventListener('click', reveal);
triggerTwo.addEventListener('click', reveal);

