const superhero = document.getElementById('text');
const btn = document.getElementById('btn');
const add = document.getElementById('add');

const superHeroResult = document.getElementById("superHeroResult");

let superheros=[];



function searchSuper(){
   const name = superhero.value;
   superHeroData(name);
}
async function superHeroData(name){
try{
 
  const response = await fetch(
         `https://www.superheroapi.com/api.php/1628132770683309/search/${name}`
  ); 
  const data = await  response.json();
  console.log(data);
   
superheros = data.results;
 localStorage.setItem('superheros',JSON.stringify(data.results))
  for(let index=0 ; index < data.results.length; index++){
   callSuperHeros(data.results[index]);  
  }
 
 //  if(data.response=='error'){
 //      throw new Error();
 // }
 
 }
  catch{
          console.log('sorry superhero not found');
 
          }
          superhero.value="";
 }
  
function callSuperHeros(data , index){
     const create = document.createElement('div');
         
           create.id = index;
           create.onclick = (event)=>{
               handleSuperheroClick(event);
           }
          
          create.innerHTML = `<h1>${data.name}</h1>
                             <img src="${data.image.url}" height="300" >
                                          `    
                                      create.classList.add("superherosty");                                
             add.appendChild(create);
             console.log(add);
                    }

function handleSuperheroClick(event){
 const superheros =json.parse(localStorage.getItem('superhero')) || [];
   const index = event.target.id;
   window.open("superhero.html");
   setTimeout((superheros,index)=>{
    renderSuperheroDetails(superheros[index]);
   },2000)
}

function renderSuperheroDetails(data){
   let div = document.createElement('div');
   div.innerHTML = `
   <h1>${data.name}</h1>
   <img src="${data.image.url}" />  `
   
   superHeroResult.appendChild(div);
}
    
btn.addEventListener("click",searchSuper);


