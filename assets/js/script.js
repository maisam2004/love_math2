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
                alert (`You Clicked ${gameType}`);
            }
        });
    }
})

/**
 * The main game "loop ",clalled when the script is first loaded
 * and after user's answer has been processed
 */
function runGame(){
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

};


function checkAnswer(){

};
function calculateCorrectAnswer(){

};
function incrementScore(){

};
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

};
function displaySubtractQuestion(){

};
function displayMultiQuestion(){

};