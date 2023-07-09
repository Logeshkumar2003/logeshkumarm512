fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries with a population of less than 2 lakhs
    const filteredCountries = data.filter(country => country.population < 200000);

    // Print the names of the filtered countries
    filteredCountries.forEach(country => {
      console.log(country.name.common);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
