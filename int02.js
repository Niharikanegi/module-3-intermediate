function truncate(str, maxlength){
    if (str.length > maxlength) {
        result = str.slice(0, maxlength)
        
        return result
        
}}
truncate("What I'd like to tell on this topic is:", 20);

console.log(result)


// let truncate = "What I'd like to tell on this topic is:";
// let result = truncate.slice(0, 20);
// console.log(result)