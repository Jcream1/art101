/*
 * Author: Jiabin Zhang <jzhan190@ucsc.edu>
 * Created: 24 Febrary
 */

// define variables
// changes
$("button.challenges").click(function(){
  $("#challenges").toggleClass("red");
  $("#challenges").show();
  $("#problems").hide();
  $("#results").hide();
});

// problems
$("button.problems").click(function(){
  $("#problems").toggleClass("green");
  $("#problems").show();
  $("#results").hide();
  $("#challenges").hide();
});

// results
$("button.results").click(function(){
  $("#results").toggleClass("blue");
  $("#results").show();
  $("#challenges").hide();
  $("#problems").hide();
});

// Reset
$("button.reset").click(function(){
  $("#results").show();
  $("#challenges").show();
  $("#problems").show();
});
