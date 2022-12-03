function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

  let powerCalc = new Calculator();
// let result4 = powerCalc.calculate("2 + 3");
// let result5 = powerCalc.calculate("10 - 7")
// console.log( result4 ); // 8
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result5 = powerCalc.calculate("2 + 3");
console.log( result5 ); // 8
// let result = powerCalc.calculate("2 ** 3");
// console.log( result ); // 8
let result2 = powerCalc.calculate("4 * 8");
console.log( result2 );