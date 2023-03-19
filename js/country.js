const loadCountry = ()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => displayCountry(data))
};
const displayCountry = countries =>{
console.log(countries[0]);
const countryHTML = countries.map(country =>getCountry(country));
const container = document.getElementById("container");
container.innerHTML = countryHTML.join(' ');
};

const getCountry = country =>{
return `
<div>
<div class="card w-48 h-52 bg-base-100 shadow-xl image-full">
  <figure><img src="${country.flags.png}" alt="flags" /></figure>
  <div class="card-body">
    <h2 class="card-title">${country.name.common}</h2>
    <p>Capital: ${country.capital}</p>
    <div class="card-actions justify-end">
    </div>
  </div>
</div>
</div>
`
};
loadCountry();