// const mauvaisadresse = "https://restcountri1es.com/v3.1/region/europe";
const bonneadresse = "https://restcountries.com/v3.1/region/europe";

async function render(adresseapi) {
  // console.log("adressevis√©: ", adresseapi);
  try {
    let response = await fetch(adresseapi);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      console.log("c'est ok!");
      let result = "";
      for (pays in data) {
        result += `<li> ${data[pays].name.official} </li>`;
      }
      document.getElementById("list").innerHTML = result;
      let btn = document.createElement("button");
      let text = document.createTextNode("Refresh list");
      btn.appendChild(text);
      btn.classList = "btn btn-outline-dark btn-warning";
      document.getElementById("raf").textContent = "";
      document.getElementById("raf").appendChild(btn);
      btn.addEventListener("click", function () {
        render(bonneadresse);
      });
    }
  } catch (e) {
    console.error(e);
    console.log("dans le catch");
    let btn = document.createElement("button");
    let text = document.createTextNode("Refresh list");
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
