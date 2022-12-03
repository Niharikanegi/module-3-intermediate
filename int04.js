// let string = "border-left-width"
// let newword = [];
// function camelize(string){
//     let seperator = ".";
//     array1 = string.split(seperator);
//     let result = ucFirst(array1);
//     return result
// }

// function ucFirst(array1){
//     for (let i=0; i<array1.length ; i++){
//         if(i===0){
//             newword.push(array1[i])
//         continue ;
//     }newword.push(array1[i][0].toUpperCase()+array1[i].substring(1))
    
//     } 
//     return newword.join("");
// }

// console.log(newword)





let x="border-left-width"

function z(r) {
    return r.replace(/\W+(.)/g, function(y, x)
     {
          return x.toUpperCase();
      });
  }

console.log(z (x));
console.log(z("JavaScript exercises"));
console.log(z("background-color"))
console.log(z("list-style-image"))
console.log(z("-webkit-transition"))


// camelize = function camelize(str) {
//     return str.replace(/\W+(.)/g, function(match, chr)
//      {
//           return chr.toUpperCase();
//       });
//   }

// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));