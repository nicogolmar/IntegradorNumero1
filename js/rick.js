let urlRick=`https://rickandmortyapi.com/api/character`;


const GetCards=async(url)=>{
    const response=await fetch(url)
    const results=await response.json();
    dataCards(results.results)
    console.log(results)
    
   }

GetCards(urlRick);




const dataCards= async (data)=>{
   let body=``;
   
   for(let index of data){
    const resp=await fetch(index.url);
    const resul= await resp.json();
    
    body+=`
    <div class="container">
    <div class="card" data-tilt="">
    <div class="card-img"><img  src="${resul.image}"/>
    <h2 class="cards-name">${resul.name}</h2>
    </div>
    </div>
    </div>

    
    `
      
}
document.getElementById("rick").innerHTML = body;
    }

    