let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMessages = new WeakSet();
  console.log(readMessages);
  // two messages have been read
  readMessages.add(messages[0]);
  readMessages.add(messages[1]);

  console.log(readMessages);
  // readMessages has 2 elements
  
  // ...let's read the first message again!
  readMessages.add(messages[0]);
  // readMessages still has 2 unique elements
  
  // answer: was the message[0] read?
  console.log("Read message 0: " + readMessages.has(messages[0])); // true
  
  console.log(messages.shift());

let visitedset = new WeakSet()

  let emp1 = {
    "name": "Niharika",
     "city" : "Auckland",
     "occupation" : "student"
 
 }
 
 let emp2 = {"name": "Sarthak",
 "city" : "Wellington",
 "occupation" : "Student"
 
 }
 
 let emp3 = {"name": "Manas",
 "city" : "Christchurch",
 "occupation" : "student"
 
 }

 visitedset.add (emp1, 60);
 visitedset.add (emp2, 70);
 visitedset.add (emp3, 90);

 console.log(visitedset.has(emp1))
