function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username=="admin" && password=="user"){
        alert("Login successful!");
        window.open("https://www.google.com","_self");
    }
    else if(username=="user" && password=="test"){
        alert("Login successful!");
        window.open("https://www.google.com","_self");
    }
    else{
        alert("Incorrect Login");
        alert("Please collect your username and password");
    }
}