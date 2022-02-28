

// fetch("https://restcountries.com/v2/regionalbloc/eu")
//  .then(resp=>resp.json())
//  .then(region =>console.log(region))
 
async function render(){
    let rep = await fetch('https://restcountries.com/v3.1/region/europe');
    let data= await rep.json();
     console.log(data)

    
    let result="";

    for(pays in data){
       result+= `<li> ${data[pays].name.official} </li>` 
    }
    document.getElementById("list").innerHTML=result;
}
render();
    
