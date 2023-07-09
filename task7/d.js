// Fetch data from the API
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Use reduce function to calculate the total population
    const totalPopulation = data.reduce((accumulator, country) => {
      if (country.hasOwnProperty('population')) {
        return accumulator + country.population;
      } else {
        return accumulator;
      }
    }, 0);

    // Print the total population
    console.log("Total Population:", totalPopulation);
  })
  .catch(error => {
    console.log("Error fetching data:", error);
  });
