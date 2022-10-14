function emailhasbeensenttoyou(){
    document.getElementById("resetpasswordtext").style.display="none"
    document.getElementById("resetpasswordinput").style.display="none"
    document.getElementById("resetpasswordsubmit").style.display="none"
    document.getElementById("closeresetpassword").style.display="none"
    document.getElementById("emailsent").style.display="block"
};

function hideemailhasbeensenttoyou(){
    document.getElementById("emailsent").style.display="none"
    document.getElementById("resetpasswordtext").style.display="block"
    document.getElementById("resetpasswordinput").style.display="block"
    document.getElementById("resetpasswordsubmit").style.display="block"
    document.getElementById("closeresetpassword").style.display="block"
   };

setTimeout("hideemailhasbeensenttoyou()",7000);