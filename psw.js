function myFunction() {
  var x = document.getElementById("inp");
  var inputText=document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text"
  
    inputText.innerText="HidePassword"
  
  } else {
    x.type = "password";
    inputText.innerText="ShowPassword"
  
  }
} 