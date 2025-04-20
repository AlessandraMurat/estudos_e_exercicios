
var card = document.getElementById('card')
card.style.display = 'none'

function search() {
    card.style.display = 'block'
  let country = document.getElementById("country").value;

  let finalURL = `https://restcountries.com/v3.1/name/${country}?fullText=true`;

  fetch(finalURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

        let capital = document.getElementById('capital')
        let continent = document.getElementById('continent')
        let population = document.getElementById('population')
        let name_country = document.getElementById('name_country')
        let flag = document.getElementById('flag')
    
        name_country.innerHTML = country;
        continent.innerHTML = data[0].continents[0];
        population.innerHTML = data[0].population;
        capital.innerHTML = data[0].capital[0];
        flag.src = data[0].flags.svg
    });


   

}
