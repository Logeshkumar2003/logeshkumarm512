const jsonData = {
    "name": "logesh",
    "age": 20,
    "city": "Coimbatore"
  };


//====================================================================================================
  

  // Using for...in loop
  console.log("Using for...in loop:");
  for (let key in jsonData) {
    console.log(key + ": " + jsonData[key]);
  }


//====================================================================================================


  // Using for...of loop (requires converting object to iterable)
  console.log("\nUsing for...of loop:");
  const entries = Object.entries(jsonData);
  for (let [key, value] of entries) {
    console.log(key + ": " + value);
  }


//====================================================================================================
  
  // Using forEach loop (requires converting object to array)
  console.log("\nUsing forEach loop:");
  const dataArray = Object.entries(jsonData);
  dataArray.forEach(([key, value]) => {
    console.log(key + ": " + value);
  });

//====================================================================================================

  
  // Using for loop with Object.keys()
  console.log("\nUsing for loop with Object.keys():");
  const keys = Object.keys(jsonData);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(key + ": " + jsonData[key]);
  }


//====================================================================================================
  