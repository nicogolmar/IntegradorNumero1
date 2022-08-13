

function obtenerDatos(){
    let nameUser;   
    let lastName;
    let email;
    let msg;    
nameUser=document.getElementById('nameUser').value;
lastName=document.getElementById('lastName').value;
email=document.getElementById('email').value;
msg=document.getElementById('msg').value;

if(nameUser!="" && lastName !="" && email!="" && msg!="" && email.includes('@')) {


    console.log(`Name: ${nameUser}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Mensaje: ${msg}`);
    
    
}

else{
    console.log("Invalid Inform")
}



}




