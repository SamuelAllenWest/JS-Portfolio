//Generate Random Number within a range
//Give user ability to guess
//If they guess wrong, ask again! 
//If they guess right, tell them they won!

function guessGame(){
    //Math.floor rounds the number down
    const ranNum = 1+ Math.floor(Math.random()*4);
    console.log(ranNum);

    //Define changing user input outside loop if we want to mutate it outside the loop
    let userInput; 

    while(true){
        userInput = prompt(`Guess a number from 1 to 5!`);

        /*if(userInput==ranNum){alert(`Congratulations! You guessed correctly! The number is ${ranNum}!`);break;}
        else if(userInput > ranNum){
            alert(`Nope! Too high, guess again!`);}
        else if(userInput < ranNum){
            alert(`Nope! Too low, guess again!`);}
        else{alert(`That's not right. Try again with a number 1-5!`)}*/

        switch(true){
            case (userInput>ranNum): alert(`Too high, guess lower!`);break;
            case (userInput<ranNum): alert(`Too low, guess higher!`);break;
            case (userInput==ranNum): alert(`You guessed right, it is ${ranNum}!`);break;
            default: alert(`That's not it, try again with a number 1-5!`);break;
        }
        if(userInput==ranNum){break;}


    }
    
    return ranNum; 
}

guessGame();