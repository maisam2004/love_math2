// wait page load
// get dom elements  and buttons event listener
document.addEventListener("DOMContentLoaded",function(){
    let buttons = document.getElementsByTagName('button');
    for(let button of buttons){ //loop through buttons in page 
        button.addEventListener('click',function(){ // add event listener to each button
            if(this.getAttribute("data-type") === "submit"){ // check data-type attribue for submit
                alert("You clicked Submit");
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
    }else{
        alert("unknown game type");
        throw `unknown game type: ${gameType}.abborting`;
    }

};


function checkAnswer(){

};
function calculateCorrectAnswer(){

};
function incrementScore(){

};
function incrementWrongAnswer(){

}
function displayAdditionQuestion(operand1,operand2){
 document.getElementById("operand1").textContent = operand1;
 document.getElementById("operand2").textContent = operand2;
 document.getElementById("operator").textContent = "+";


};
function displaySubtractQuestion(operand1,operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";


};
function displayMultiQuestion(operand1,operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "X";


};