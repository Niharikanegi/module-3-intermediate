let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

uniquearray = [];

    for (let i=0 ; i < values.length; i++){

        if (!uniquearray.includes(values[i])){

            uniquearray.push(values[i])
            
           
        }
    }
        
    console.log(uniquearray)

// function unique(arr) {
//     let result = [];
  
//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }
  
//     return result;
//   } 

//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
            
//         console.log(unique(strings))
        
  

