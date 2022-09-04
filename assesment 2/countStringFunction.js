//this function expected to count string input when it's run
function countString(str) {
  //make obj for tmp data
  var obj = {};
  //loop str by it's index from 0
  for (let i = 0; i < str.length; i++) {
    //push counted result from str data who have same value to var obj with key and value pair
    if ((str.match(new RegExp(str[i], "g"))).length > 1) {
      obj[str[i]] = (str.match(new RegExp(str[i], "g"))).length;
    }
  }
  return obj;
}

//function running command
console.log(countString("afbcadebfaghfba"));