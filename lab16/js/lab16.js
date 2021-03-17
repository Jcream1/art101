/*
 * Author: Jiabin Zhang <jzhan190@ucsc.edu>
 * Created: 16 March
 */

function putText(text){
  $("output").html(text);
}

function API(){
  $.ajax({
      // The URL for the request (from the api docs)
      url: "https://xkcd.now.sh/?comic=latest",
      // The data to send (will be converted to a query string)
      data: {
              // here is where any data required by the api
              //   goes (check the api docs)
              id: 123,
              api_key: "ABC",
            },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
  })

  .done(function(data){
    var textData = JSON.stringify(data);
    var str = "";
    var imageURL = data.img;
    var title = data.title;

    str +="<h1>" + title + "</h1>";
    str += "<img src ='" + imageURL + "'>"
    console.log("This is data:", textData)
    putText(str);
  })

  .fail(function(xhr, status, errorThrown){
    console.log("Failed.");
    putText(errorThrown + " Status:" + status);
  })
}
