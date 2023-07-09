fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countries = data;
    const countryUsingUSD = countries.find(country => {
      return country.currencies && country.currencies.USD;
    });

    if (countryUsingUSD) {
      console.log('Country using US Dollars:', countryUsingUSD.name.common);
    } else {
      console.log('No country found that uses US Dollars.');
    }
  })
  .catch(error => {
    console.log('Error:', error);
  });
