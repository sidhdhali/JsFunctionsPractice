
//DRY function

function dry(name) {
  console.log(name + " is DRY.");
}
 
dry("Eric"); 
dry("sid");


//fizzbuzz function

function fizzbuzz(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0)
      console.log( "FizzBuzz");
    else if (i % 3 === 0)
      console.log( "Fizz");
    else if (i % 5 === 0)
       console.log( "Buzz");
    else
     console.log(i);
  }
}

fizzbuzz(10);


function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}

console.log(fibonacci(10)); 

console.log("fibonacci ohne loop::::::");

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(4)); 



