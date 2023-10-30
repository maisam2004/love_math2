// wait page load
// get dom elements  and buttons event listener
document.addEventListener("DOMContentLoaded",function(){
    let buttons = document.getElementsByTagName('button');
    for(let button of buttons){ //loop through buttons in page 
        button.addEventListener('click',function(){ // add event listener to each button
            if(this.getAttribute("data-type") === "submit"){ // check data-type attribue for submit
                checkAnswer();
            }else{
                let gameType = this.getAttribute("data-type"); // to alert diplay button clicked data type
                runGame(gameType);
            }
        });
    }
    runGame("addition");//defualt function to run 
})

/**
 * The main game "loop ",clalled when the script is first loaded
 * and after user's answer has been processed
 */
function runGame(gameType){
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

    if(gameType === "addition"){
        displayAdditionQuestion(num1,num2);
    }else if(gameType === "multi"){
        displayMultiQuestion(num1,num2);
    }else if(gameType === "subtract"){
        displaySubtractQuestion(num1,num2);
    }else{
        alert("unknown game type");
        throw `unknown game type: ${gameType}.abborting`;
    }

};

/**
 * checks the answer against the first element
 * then returned calculator answer array
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calanswer =calculateCorrectAnswer();
    let isCorrect = calanswer[0] === userAnswer;

    if(isCorrect){
        
        alert("Hey you got it right :)")
        incrementScore();
    }else{
        incrementWrongAnswer();
        alert(`Awww .. You answered ${userAnswer},"but correct answer was ${calanswer[0]}`);
    }
    runGame(calanswer[1])
};

/** *
 * get the operands and the oprator(plus ,minus ...etc)
 * directly from the Dome, and returns the correct answer.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById('operator').innerText;
    if(operator === "+"){
        return [operand1 + operand2,"addition"];
    }else if(operator === "X"){
        return [operand1 * operand2,"multi"];
    }else{
        alert("unImplemeneted operator ",operator);
        throw  `unimplemented operator ${operator}`;
    }

};
/**
 * Gets the current score from the Dom and increment by 1
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
};
function incrementWrongAnswer(){
    let oldWrongScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldWrongScore;

}
function displayAdditionQuestion(num1,num2){
 document.getElementById("operand1").textContent = num1;
 document.getElementById("operand2").textContent = num2;
 document.getElementById("operator").textContent = "+";


};
function displaySubtractQuestion(num1,num2){
    document.getElementById("operand1").textContent = num1;
    document.getElementById("operand2").textContent = num2;
    document.getElementById("operator").textContent = "-";


};
function displayMultiQuestion(num1,num2){
    document.getElementById("operand1").textContent = num1;
    document.getElementById("operand2").textContent = num2;
    document.getElementById("operator").textContent = "X";


};