var recipes = { siga: "2 kilo" }


function updateObjectWithKeyAndValue(object, key, value){
  // object[key] = value;
    // return object
  
  object.assign({}, object, { key: value})
  
    return object;
}