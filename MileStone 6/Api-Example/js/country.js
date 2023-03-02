const load_country=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}
load_country();

const displayCountry=countries=>{
    const countriesDiv=document.getElementById('all-countries');
    // for(const country of countries){
    //     console.log(country);
    // }
    // console.log(countries);
    countries.forEach(country => {
        console.log(country.cca2);
        const country_div=document.createElement('div');
        country_div.classList.add('country');
        country_div.innerHTML=`
        <h3>Name:${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</P>
        <button onclick="LoadCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesDiv.appendChild(country_div);

    });

}

const LoadCountryDetails=code=>{
    const url=`https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>showCountryDetail(data[0]));
}

const showCountryDetail=country=>{
    const detail_container1=document.getElementById('detail_container');
    console.log(country.name.common);
    detail_container1.innerHTML=`
    <h3>Name: ${country.name.common}</h3>
    <img src="${country.flags.png}">
    `
}