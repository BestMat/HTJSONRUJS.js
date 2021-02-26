var xmlhttp = new XMLHttpRequest();
var url = "Customers.php";

xmlhttp.onreadystatechange=function() {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this.responseText);
  }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {
  var arr = JSON.parse(response);
  var i;
  var out = "<table>";

  for(i = 0; i < arr.length; i++) {
    out += "<tr><td>" + 
    arr[i].Name +
    "</td><td>" +
    arr[i].City +
    "</td><td>" +
    arr[i].Country +
    "</td></tr>";
  }
  out += "</table>";
  document.getElementById("id01").innerHTML = out;
}
