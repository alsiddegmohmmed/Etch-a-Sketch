document.addEventListener("DOMContentLoaded", function() {
    creatBoard(16);
   
});


function creatBoard(size) {
    let board = document.querySelector(".board"); 
   
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = "repeat(16, 1fr)";
    let numDev = size * size; 
    for(let i = 0; i <numDev; i++ ) {
        let div = document.createElement("div"); 
        div.style.backgroundColor= "yellow";
        board.insertAdjacentElement('beforeend', div)
    }
};