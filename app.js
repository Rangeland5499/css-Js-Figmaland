const contactForm = document.querySelector("#contactForm")
contactForm.addEventListener("submit", submitHandler)
function submitHandler(event) {
    event.preventDefault();
   

    var contactName = document.getElementById('name1');
    var contactEmail = document.getElementById('email');
    var contactMessage = document.getElementById('message');
    
  
    if(contactName.value===""){
        document.getElementById("errorname").innerHTML="skriv dit navn"
        contactName.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
    

    if(contactEmail.value===""){
        document.getElementById("erroremail").innerHTML="skriv din e-mail"
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }

    if(contactMessage.value===""){
        document.getElementById("errormsg").innerHTML="Du skal udfylde formularen"
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
        window.location.href = "https://www.captain-design.com/";
    
   
}




