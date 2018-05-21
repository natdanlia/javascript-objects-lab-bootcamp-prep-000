var recipes = { siga: "2 kilo" }


function updateObjectWithKeyAndValue(object, key, value){
  // object[key] = value;
    // return object
  
  Object.assign({}, object, { key: value})
  
    return object;
}