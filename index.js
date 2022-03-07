async function render() {
  try {
    let rep = await fetch("https://restcountries.com/v3.1/region/europe");
    let data = await rep.json();

    console.log(data);

    let result = "";

    for (pays in data) {
      result += `<li> ${data[pays].name.official} </li>`;
    }
    document.getElementById("list").innerHTML = result;
  } catch (e) {
    console.log(e);
  }
}
render();
