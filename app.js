const max = prompt("Enter a maximum number");

const random=Math.floor(Math.random()*max)+1;

let guess= prompt("Enter your guess number");

while(true){
  if(guess=="quit"){
    console.log("Uset Quit");
    break;
  }else if(guess==random){
    console.log("your guess Number is correct!your number is",random);
    break;
  }else if(guess< random){
    guess = prompt("Hint:Your guess Number is too small.Try Again!!");
  }else {
    guess = prompt("Hint:Your guess is too large.Try Again!!");
  }
}