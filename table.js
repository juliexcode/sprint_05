async function render() {
  try {
    let response = await fetch("https://restcountries.com/v3.1/region/europe");

    let data = await response.json();
    console.log(data);

    let result = "";

    for (pays in data) {
      let air = data[pays].area.toLocaleString("en-US");
      let pop = data[pays].population.toLocaleString("en-US");
      result += `<tr><td class="fw-bold"> ${data[pays].name.official}</td>
       <td class="text-end"> ${air}</td> 
       <td class="text-end"> ${pop}</td>
       <td> ${data[pays].capital}</td></tr>`;
    }
    document.getElementById("tableau").innerHTML = result;
  } catch (e) {
    console.log(e);
  }
}
render();
