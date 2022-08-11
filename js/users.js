const urlUsers = "https://jsonplaceholder.typicode.com/users";

fetch(urlUsers)
  .then((response) => response.json())
  .then((user) => showUser(user));

function showUser(user)
{
let body = ``;

  for (let i = 0; i < user.length; i++) {
    body += ` 
       
    <div class="container">
    <div class="card">
      <div class="circle">
         <h2><b>Id:</b> ${user[i].id}</h2>
      </div> 
      <div class="content"> 
         <p><b>Email:</b> ${user[i].email}</p>
         <p><b>Phone:</b> ${user[i].phone}</p>
         <p><b>Street:</b> ${user[i].address.street}</p>
         <p><b>Suite:</b> ${user[i].address.suite}</p>
         <p><b>Company Name:</b> ${user[i].company.name}</p>
       
      </div>
      </div>
      </div>
       `;
  }
  document.getElementById("users").innerHTML = body;
}




