//This is what I tried to write for the newmessage.html:
<script>
    var messageform = document.getElementById("msgform");
    messageform.addEventListener("submit", 
    function(){
            //This is only printed if i send the same message two times??
            console.log("form submitted!");
            //make a div where a message will be displayed that the form was subitted, append div to form
            var msgDiv = document.createElement("div");
            msgDiv.innerHTML = "<p>Your message has been added to the <a href='guestbook.html'>guestbook</a>.</p>";
            messageform.append(msgDiv);
            //The next line is logged...
            console.log("a");
            //PROBLEM: After this point the browser keeps waiting and loading for something??
            //Also it's not resetting the form after submitting anymore like before...
          }); 
      </script>

//
function parseFormData() {
  //if i>1 add "," in the beginning (separates json objects)
  //Trying to parse form data into json with double quotes below
  var newdata = ('{"username": ' + '"' + username + '"' + ', "country": ' + '"' + country + '"' + '", message": ' + '"' + message + '"}');
  console.log(newdata.toString());
}