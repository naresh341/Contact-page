let contactForm = document.getElementById("contactForm");
let successMessage=document.getElementById("successMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let firstName=document.getElementById("firstName").value.trim()
    let lastName=document.getElementById("lastName").value.trim()
    let email=document.getElementById("email").value.trim()
    let queryType=document.querySelector("input[name='query']:checked")
    let message=document.getElementById("message").value.trim()
let consent=document.getElementById("consent").checked
let error=document.querySelectorAll(".error")
isValid=true;

if(firstName==""){
    isValid=false
    error[0].style.display="block";
    error[0].style.border=" var(--Red)";
}
else{
    error[0].style.display="none"
    error[0].style.border="1px solid var(--medium-grey)";
}
if(lastName==""){
    isValid=false
    error[1].style.display="block";
    error[1].style.border='1px solid var("--Red")';
}
else{
    error[1].style.display="none"
    error[1].style.border='1px solid var("--medium-grey")';
}
if(!isValidEmail(email)){
isValid=false
error[2].style.display="block";
error[2].style.border='1px solid var("--Red")';
}
else{
    error[2].style.display="none"
    error[2].style.border='1px solid var("--medium-grey")';
}

if(!queryType){
    isValid=false
    error[3].style.display="block";
}
else{
    error[3].style.display="none"
}
if(message==""){
    isValid=false
    error[4].style.display="block";
    error[4].style.display='1px solid var("--Red")';
}
else{
    error[4].style.display="none"
    error[4].style.display='1px solid var("--medium-grey")';
}
if(!consent){
    isValid=false
    error[5].style.display="block";
    error[5].style.border='1px solid var("--Red")';
}
else{
    error[5].style.display="none"
    error[5].style.border='1px solid var("--medium-grey")';
}

if(isValid){
    successMessage.classList.add("active")
    // contactForm.reset()
}




})
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}