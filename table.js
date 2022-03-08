// const mauvaisadresse = "https://restcountri1es.com/v3.1/region/europe";
const bonneadresse = "https://restcountries.com/v3.1/region/europe";

async function render(adresseapi) {
  console.log("adressevisé: ", adresseapi);
  try {
    let response = await fetch(adresseapi);
    if (response.ok) {
      let data = await response.json();
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
      let text = document.createTextNode("Rafraîchir le tableau");
      btn.appendChild(text);
      btn.classList = "btn btn-outline-dark btn-warning";
      document.getElementById("raf").textContent = "";
      document.getElementById("raf").appendChild(btn);
      btn.addEventListener("click", function () {
        render(bonneadresse);
        window.location.reload();
      });
    }
  } catch (e) {
    console.error(e);
    console.log("dans le catch");
    let btn = document.createElement("button");
    let text = document.createTextNode("Rafraîchir le tableau");
    btn.appendChild(text);
    btn.classList = "btn btn-outline-dark btn-warning";
    document.getElementById("raf").textContent = "";
    document.getElementById("raf").appendChild(btn);
    btn.addEventListener("click", function () {
      render(bonneadresse);
    });
  }
}
render(bonneadresse);
