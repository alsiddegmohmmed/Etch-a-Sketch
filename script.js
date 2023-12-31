let color = "black";

document.addEventListener("DOMContentLoaded", function() {
    creatBoard(16);
    let btn_popup = document.querySelector('#pop-up');
    btn_popup.addEventListener("click", function() {
        let size = getSize(); 
        creatBoard(size); 
    })    
   
});


function creatBoard(size) {
    let board = document.querySelector(".board"); 
   
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = "repeat(16, 1fr)";
    let numDev = size * size; 
    for(let i = 0; i <numDev; i++ ) {
        let div = document.createElement("div"); 
        div.addEventListener( "mouseover", colorDiv) 
        board.insertAdjacentElement("beforeend", div); 
        
    }
};


function getSize () {
    let input = prompt("what will be the size of the board?");
    let message= document.querySelector("#message");
    if (input =="") {
        message.innerHTML= "Please provide a number"; 

        
    } else if (input < 0 || input > 100) {
        message.innerHTML = "Provide a number between 1 and 100"; 

    } else {
        message.innerHTML = "Now you can play!";
        return input; 
    }
}



function colorDiv() {
if(color == "random") {
    this.style.backgroundColor =  `hsl(${Math.random() * 360}, 100%, 50%)`
} else {
    this.style.backgroundColor = "black";

}

}


function setColor(colorChoice) {
  color = colorChoice;
}






function restBoard () {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}
