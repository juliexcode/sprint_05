async function render(){
    let rep = await fetch('https://restcountries.com/v3.1/region/europe');
    let data= await rep.json();
   
      console.log(data)

    
    let result="";

    for(pays in data){
        let air= data[pays].area.toLocaleString('en-US');
        let pop=data[pays].population.toLocaleString('en-US')
       result+= `<tr><td class="h5"> ${data[pays].name.official}</td>
       <td> ${air}</td> 
       <td> ${pop}</td>
       <td> ${data[pays].capital}</td></tr>` 
    }
    document.getElementById("tableau").innerHTML=result;
}
render();