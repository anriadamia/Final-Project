function passwordmatch(){
    let password1=document.getElementById("SignUpPassword").value;
    let password2=document.getElementById("SignUpRePassword").value;
    
    console.log(password1);
    console.log(password2);

    if(password1=="" || password2=="" || password1!=password2){
        document.getElementById("answer").innerHTML="Passwords don't match. Try Again!";
        document.getElementById("answer").style.color ="#ff0000";
        document.getElementById("SignUpPassword").style.border="1px solid #ff0000";
        document.getElementById("SignUpRePassword").style.border="1px solid #ff0000";
    }
    else{
        document.getElementById("answer").innerHTML="Passwords Match";
        document.getElementById("answer").style.color ="#00ff00";
        document.getElementById("pSignUpPassword").style.border="1px solid #000000";
        document.getElementById("SignUpRePassword").style.border="1px solid #000000";
    }
    }