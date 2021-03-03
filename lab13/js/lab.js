/*
 * Author: Jiabin Zhang <jzhan190@ucsc.edu>
 * Created: 1 March
 */

maxFactors = 3;
outputE1 = document.getElementById("output");
// define variables
function FizzBuzz(maxNums, factorObj) {
  for (var num = 0; num<maxNums; num++){
    var outputStr = "";
    for (var factor in factorObj){
      if (num % factor == 0){
        outputStr += factorObj[factor];
      }
    }
    if (outputStr){
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}

function reportError(str) {
  outputE1.innerHTML = "<div class='error'>" + str + "</div>";
}

function getFactorObj() {
  var factorObj = {};
  for (var factor=0; factor<maxFactors; factor++) {
    numId = "num" + factor;
    textId = "text" + factor;
    numValue = document.getElementById(numId).value;
    textValue = document.getElementById(textId).value;
    console.log(factor + ") num:", numValue, "text:", textValue)
    if (numValue && textValue) {
      factorObj[numValue] = textValue;
    }
  }
  return factorObj;
}

function outputToPage(str) {
  newE1 = document.createElement("p");
  newE1.innerHTML = str;
  outputE1.appendChild(newE1);
}

document.getElementById("submit").addEventListener("click", function() {
  var max = document.getElementById("max").value;
  console.log("max:", max)
  if (! max) {
    reportError("Where you want to stop");
    return;
  }
  var factorObj = getFactorObj();
  console.log("factorObj:", factorObj);
  if (Object.keys(factorObj).length === 0) {
    reportError("At least one factor and text");
    return;
  }
  outputE1.innerHTML = "";
  FizzBuzz(max, factorObj);
  outputE1.classList.add("cols");
})
