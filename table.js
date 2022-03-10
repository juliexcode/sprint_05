// const mauvaisadresse = "https://restcountri1es.com/v3.1/region/europe";
// const bonneadresse = "https://restcountries.com/v3.1/region/europe";

async function render() {
  // console.log("adressevisé: ", adresseapi);
  try {
    let response = await fetch("https://restcountries.com/v3.1/region/europe");
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      console.log("c'est ok!");
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
      let btn = document.createElement("button");
      let text = document.createTextNode("Refresh table");
      btn.appendChild(text);
      btn.classList = "btn btn-outline-dark btn-warning";
      document.getElementById("raf").textContent = "";
      document.getElementById("raf").appendChild(btn);
      btn.addEventListener("click", function () {
        render();
      });
    }
  } catch (e) {
    console.error(e);
    console.log("dans le catch");
    let btn = document.createElement("button");
    let text = document.createTextNode("Refresh table");
    btn.appendChild(text);
    btn.classList = "btn btn-outline-dark btn-warning";
    document.getElementById("raf").textContent = "";
    document.getElementById("raf").appendChild(btn);
    btn.addEventListener("click", function () {
      render();
    });
  }
}
render();
