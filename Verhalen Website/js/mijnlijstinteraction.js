/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/ /* global document */

var button = document.querySelector('button.mijnlijst');

var reveal = function() {
    if (button.className === "mijnlijst") {
        button.className = "mijnlijstactive";
        button.innerHTML="opgeslagen";
        } 
    
    else if (button.className === "mijnlijstactive") {
        button.className = "mijnlijst";
        button.innerHTML="mijn lijst"; 
    }
};

button.addEventListener('click', reveal);