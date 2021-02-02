/*
 * Author: Jiabin Zhang <jzhan190@ucsc.edu>
 * Created: 1 January
 */

// Define Variables
myTransport = ["Porsche", " bike", " bus"];

myMainRide = {
    make: "Porsche",
    model: "Boxster",
    color: "Silver",
    year: 2003,
    age: function(){
        return 2021 - age;
    }
}

// output
document.writeln("Transpotions I use: ", myTransport,"</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
