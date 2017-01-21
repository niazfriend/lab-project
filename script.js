var firstName = document.getElementById("firstname").value;
var lastName = document.getElementById("lastname").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

function userValidate() {
    if(firstName === !isNaN() ){
        alert("please write values in alphabet");
    }
    if(!isNaN() === lastName){
        alert("its not a number fill it alphabet");
    }
    if(email.indexOf('@') === -1 || (email.lastIndexOf('.') === -1)){
        return false;
        alert("missing in emails")
    }
    if(password.length !== 8 && (password === "") && (password === " ")){
        alert("please password give in 8 characters!");
    }
    else{
       var users = {
           fName: firstName.value,
           lName: lastName.value,
           eAddress: email,
       }
       storeData();
    }
    
}
function storeData(){
 var storing = localStorage.setItem("users", users); 
}
console.log(storeData());
console.log(userValidate());