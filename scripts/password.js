const firstPassword = document.querySelector('#pw1');
const secondPassword = document.querySelector('#pw2');
const message = document.querySelector('#message');

secondPassword.addEventListener("focusout", checkPassword);

function checkPassword(){
    if (secondPassword.value != firstPassword.value){
        message.innerHTML = "Passwords are not the same.";
        secondPassword.innerHTML ="";
        secondPassword.focus();
    }else{
        message.innerHTML = "";
    }
    
};