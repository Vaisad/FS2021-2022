

// const userInfoOutput = document.getElementById('main');

// const user ={
//     vardas: "Vaidas",
//     pavarde: "Sauklys",
// }
// userInfoOutput.innerHTML = `<h2> User information </h2>
// <p> Vartotojo vardas yra ${user.vardas} , o pavarde ${user['pavarde']}. </p>`;
   
// const x = 50;
//     y = 10;
// const sum = x + y;
//     diff = x - y;
//     multiply = x * y;
//     divide = x / y;
// console.log(x, y, sum, diff, multiply, divide);


//     function number(value){
//             if(value === 1){
//                 return 'Nelyginis';
//             }else if(value === 2){
//                 return 'Lyginis';
//             }else{
//                 return 'Reiskias daugiau negu trys...😊';
//             }
//         }
//         console.log(number(1));
   


// function musicians(grupp){
//         let answer = "";
//         switch(grupp){
//             case 0:
//                 answer = "ne grupe";
//                 break;
//             case 1:
//                 answer = "solo";
//                 break;
//             case 2:
//                 answer = "duetas";
//                 break;
//             case 3:
//                 answer = "trio";
//                 break;
//             case 4:
//                 answer = "kvartetas";
//                 break;
//             default:
//                 answer = "didele grupe";
//                 break;
          
//         }
//             return answer;
//     }
    // console.log(musicians(66));
    // const musicians = 3;
    //     if(musicians <= 0){
    //        console.log('ne grupe');
    //     }else if(musicians === 1){
    //         console.log('solo');
    //     }else if(musicians === 2){
    //         console.log('duetas');
    //     }else if(musicians === 3){
    //         console.log('trio');
    //     }else if(musicians === 4){
    //         console.log('kvartetas');
    //     }else if (musicians > 4){
    //         console.log('didele grupe');
    //     }else{
    //         console.log('ne grupe');
    //     };
        
//  function factorial(n){
//      if(n == 1 || n == 0)
//      return 1;
//      else
//      return n + factorial(n - 1);
//  }
//  console.log(factorial(4));

 //eina per funkcija 4 kai neranda tada eina 3 iesko, kai neranda, 2 iesko, kai neranda 1 iesko ir randa ir tada pliusuodama gryzta iki ketverto
//factorial(4)
//     4 + factorial(3)
//         3 + factorial(2)
//             2 + factorial(1)
//         1 + 2 = 3
//     3 + 3 = 6
// 6 + 4 = 10
 
//-----------------------------kaip rasti ilgiausia zodi sakinyje
//   function longer(champ, contender) {
//     return (contender.length > champ.length) ? contender : champ;
//   }
//   function findLongestWord(str) {
//     let words = str.split(' ');
//     return words.reduce(longer);
//   }
//   console.log(findLongestWord("The quick brown fox jumped over the lazy dogs"));
//   console.assert(findLongestWord("The quick brown fox jumped over the lazy dogs ")== 'jumped');



//   function longestWord(string) {
//     let str = string.split(" ");
//     let longest = 0;
//     let word = null;
//     str.forEach(function(str) {
//         if (longest < str.length) {
//             longest = str.length;
//             word = str;
//         }
//     });
//     return word;
// }
// console.log(longestWord("pride and prejudice"));
//-----------------------------------------------------------

//-----kaip surast ilgiausia ir maziausia
// function findSpecificWord(str, value){
//     if (value == 'max')
//     return str.split(" ").reduce((a, b)=>b.length >= a.length ? b : a)
//     if (value == 'min')
//     return str.split(" ").reduce((a, b)=>a.length <= b.length ? a : b)
// }
// let max = findSpecificWord('Lorem ipsum, dolor sit amet consectetur', 'max');
// let min = findSpecificWord('Lorem ipsum, dolor sit amet consectetur', 'min');
// console.log(max);
// console.log(min);
// console.assert(max == 'consectetur');
// console.assert(min == 'sit');




//-----------kaip sujungti skaicius------------
// function joinString(str) {
//     str = str.toString();
//     let splitString = str.split(",");
//     let joinArray = splitString.join("");
//     return joinArray;
// }
// let a = '1,2,3,4,5';
// let b = '12345';
// console.log(joinString(a));
// console.assert(joinString(('1,2,3,4,5') === (b)));


// function getLaugh (repeat) {
//     let laugh = 'ha';
//     let result = '';
//     for (i = 1; i <= repeat; i++) {
//          result += laugh;
//     }
//     console.log(result);
// }
// getLaugh(8);

// function getLaugh(input) {
//     let laugh = [];
//     for (let i = 1; i <= input; i++) {
//         laugh.push('ha');
//     }
//     laugh.push('!');
//     return laugh.join('');
// }
// console.log(getLaugh(4));






//----      Rast didziausia skaiciu

// let getHighestNumber = (...arr) => {
    
//     let maxNumber = arr[0] || null;
//     for(let i = 0; i < arr.length; i++){
        
//         if(arr[i] > maxNumber){
//             maxNumber = arr[i];
           
//         }
//     }
//     return maxNumber;
// };
// console.log(getHighestNumber(10, 20, 46));
// console.assert(getHighestNumber(34,7,8,55,6,56,7,9,52) == 56);

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      const subArray = arr[i];
      for (let j = 0; j < subArray.length; j++) {
        product *= subArray[j];
      }
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  console.log(multiplyAll(10
    ))
