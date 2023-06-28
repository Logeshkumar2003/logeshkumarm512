function compareJSONObjects(obj1, obj2) {
    // Check if both objects are of type object
    if (!Object.prototype.hasOwnProperty.call(obj1, "constructor") ||
      !Object.prototype.hasOwnProperty.call(obj2, "constructor") ||
      obj1.constructor !== Object || obj2.constructor !== Object) {
      return false;
    }
  
    // Get the set of properties for each object
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
  
    // Compare the sets of properties
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
  
    for (const key of obj1Keys) {
      if (!obj2Keys.includes(key)) {
        return false;
      }
  
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  const obj1 = {
    name: "person1",
    age: 5
  };
  
  const obj2 = {
    age: 5,
    name: "person2"
  };
  
  const result = compareJSONObjects(obj1, obj2);
  
  console.log(result); // true
  