/*
 * Author: Jiabin Zhang <jzhan190@ucsc.edu>
 * Created: 1 January
 */

// sortUserName - a function
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

// Output
document.writeln("Ok, I've fixed your name: ",
  sortUserName(), "</br>");
