/*
 * Author: Jiabin Zhang <jzhan190@ucsc.edu>
 * Created: 1 January
 */

// define variables
var outputEl = document.getElementById("output");
outputEl.style.color = "blue";
var new1El = document.createElement("p");
new1El.innerHTML = "This is newElement1";
new1El.style.fontSize = "25px";
var new2El = document.createElement("h1");
new2El.innerHTML = "This is newElement2";
new2El.style.fontSize = "30px";
document.body.appendChild(new1El);
document.body.appendChild(new2El);
