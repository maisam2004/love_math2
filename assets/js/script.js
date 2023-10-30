// wait page load
// get dom elements  and buttons event listener
document.addEventListener("DOMContentLoaded",function(){
    let buttons = document.getElementsByTagName('button');
    for(let button of buttons){
        button.addEventListener('click',function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit");
            }else{
                let gameType = this.getAttribute("data-type");
                alert (`You Clicked ${gameType}`);
            }
        });
    }
})

function runGame(){

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