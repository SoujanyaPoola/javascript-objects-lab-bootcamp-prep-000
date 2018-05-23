
  const recipes = {veg: 'milk'}
  

function updateObjectWithKeyAndValue(ob, key, value){
  var newObj = Object.assign({}, ob);
  newObj[key] = value ;
  return newObj;
  
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value ;
  return object;
  
}
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object);
  delete newObj.key;
  
}