 
    let body = ` 
       
    <form action="#" method="post">

    <label for="name" >Name</label>
    <input type="text" name="name"required="true">
    <label for="lastname">Lastname</label>
    <input type="text" name="lastname"required="true">
    <label for="email">Email</label>
    <input type="email" name="email"required="true">
    <label for="msg">Mensaje</label>
    <textarea name="msg" required="true"></textarea>
    <button type="submit">Send</button>
</form>

          
       
       `;
  
  document.getElementById("form").innerHTML = body;

