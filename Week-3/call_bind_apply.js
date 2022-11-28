// Call Example

function greetingCallExample() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }
  const digvijay = {
    name: 'Digvijay',
    age: 24,
  };
  const arth = {
    name: 'Arht',
    age: 22,
  };
  
  greetingCallExample.call(digvijay);
  
  greetingCallExample.call(arth);
  
  
  
  
  // Bind Example 
  function greeting(lang) {
    console.log(`${lang}: I am ${this.name}`);
  }
  const john = {
    name: 'John'
  };
  const jane = {
    name: 'Jane'
  };
  
  const greetingJohn = greeting.bind(john, 'en');
  greetingJohn();
  const greetingJane = greeting.bind(jane, 'es');
  greetingJane();
  
  // Apply Example
  
  function greet(greetingparam, lang) {
    console.log(lang);
    console.log(`${greetingparam}, I am ${this.name} and I am ${this.age} years old`);
  }
  const johnapply = {
    name: 'John',
    age: 24,
  };
  const janeapply = {
    name: 'Jane',
    age: 22,
  };
  
  greet.apply(johnapply, ['Hi', 'en']);
  
  greet.apply(johnapply, ['Hola', 'es']);

