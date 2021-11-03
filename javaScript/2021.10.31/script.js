
    




//   function nextInLine(arr, item) {
//     // Your code here
//     arr.push(item);
//     return arr.shift(); 
//   }
  
//   var testArr = [1,2,3,4,5];
  
//   console.log("Before: " + JSON.stringify(testArr));
//   console.log(nextInLine(testArr, 6));
//   console.log("After: " + JSON.stringify(testArr));

//   function nextLine(arr1, item1){
//       arr1.push(item1);
//       return arr1.shift();
//   }
//   let testArr1 = [ 1, 2, 3, 4, 5];
//   console.log(JSON.stringify(testArr1))
//   console.log(nextLine(testArr1, 6))
//   console.log(JSON.stringify(testArr1))

// function trueOrFalse(wasThatTrue) {
//     // Only change code below this line
//   if(wasThatTrue){
//     return 'Yes, that was true';
//   }
//     return 'No, that was false';
//   }

//     // Only change code above this line
  
//   trueOrFalse(true);
//   trueOrFalse(false);
//   console.log(trueOrFalse(false));

//   function testEqual(val) {
//     if (val == 12) {
        
//       return "Equal";
//     }
//     return "Not Equal";
//   }
  
//   console.log(testEqual(12));

// function compareEquality(a, b) {
//     if (a === b) { // Change this line
//       return "Equal";
//     }
//     return "Not Equal";
//   }
//   console.log(compareEquality(10, "10"));

//   function testNotEqual(val) {
//     if (val != 99) { // Change this line
//       return "Not Equal";
//     }
//     return "Equal";
//   }
//   console.log(testNotEqual(12));
  
// function testGreaterThan(val) {
//     if (val > 100) {  // Change this line
//       return "Over 100";
//     }
  
//     if (val > 10 ) {  // Change this line
//       return "Over 10";
//     }
  
//     return "10 or Under";
//   }
  
//   console.log(testGreaterThan(1));
  
// function testLessThan(val){
//     if(val < 25){
//       return 'Under 25';
//     }
//     if(val < 55){
//       return 'Under 55';
//     }
//     return '55 or Over';
//   }
//   console.log(testLessThan(60));

testLessOrEqual(10);
function testLessOrEqual(val){
  if(val <= 12){
    return 'Smaller Than or Equal to 12';
  }
  if(val <= 24){
    return 'Smaller Than or Equal to 24';
  }
  return 'More Than 24';
}
console.log(testLessOrEqual(11));












