function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username=="admin" && password=="user"){
        alert("Login successful!");
        window.open("https://www.google.com","_self");
    }
    else if(username=="usermehedi" && password=="mama"){
        alert("Login successful!");
        alert("Welcome Ahmed Hasan!");
        window.open("https://www.google.com","_self");
    }
    else{
        alert("Incorrect Login");
        alert("Please collect your username and password");
    }
}
