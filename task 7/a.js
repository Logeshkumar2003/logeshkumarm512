fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Filter countries from Asia continent
    const asiaCountries = data.filter((country) =>
      country.region.includes("Asia")
    );

    // Print the names of the countries
    asiaCountries.forEach((country) => console.log(country.name.common));
  })
  .catch((error) => console.log("Error:", error));
