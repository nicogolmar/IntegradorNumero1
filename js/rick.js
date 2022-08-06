const urlRick=`https://rickandmortyapi.com/api/character/${id}`;
fetch(urlRick)
  .then((response) => response.json())
  .then((rick) => showRick(rick));


function fetchRick(id){
    fetch(urlRick)
    .then((response) =>response.json())
    .then((data)=>{createCharacter(data);
        })
}



function fetchRicks(number){
    for(let i=1 ;i<=number;i++)
    {
        fetchRick(i);
    }
}



function showRick(rick)
{
    let body = ``;
        for(let i = 1 ; i<10;i++){
            
        
  
    body +=` 
       
       <div class="rick">
       
          <p><b>Id:</b> ${rick.id}</p>
          <p><img src="${rick.image}" ></b> </p>
         
       
       </div>
       
       `;
    }
  document.getElementById("rick").innerHTML = body;
}


