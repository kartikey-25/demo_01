function passValidator(){
    var pass = document.getElementById('password').value;
    var conf_pass = document.getElementById('Confirm_Password').value;

    var msg = document.getElementById('message');

    
    if(pass == ""){
        msg.innerText = "** Please Enter Password **"
        msg.style.color = "red";
        return false;
    }

    if(pass.length < 8){
        msg.innerText = "** Your Password Length is Small **"
        msg.style.color = "red";
        return false;
    }

    if(pass.length > 20){
        msg.innerText = "** Your Password Length is large **"
        msg.style.color = "red";
        return false;
    }
    

    if(pass == conf_pass){
        msg.innerText = "** PASSWORD MATCH **";
        msg.style.color = "green";
        return false;
    }

    else{
        msg.innerText = "** PASSWORD DON'T MATCH **";
        msg.style.color = "red";
        return false;
    }
}