
// main === js

function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "BaBi@143"){
        x.type = "text";
    }
    else{
        x.type = "BaBi@143";
    }
}

function validate(){
    var password = document.getElementById("pass");

    if(password.value === "BaBi@143"){
                window.location.replace("main.html");
            // location="valentine.html"
            return false; 
    }else if (password.value == "") {
        swal ( "Oops" ,  "Enter Password!" ,  "info" )
    }
    else{
        swal ( "Opps" ,  "Worng Password!" ,  "error" )
    }
}

