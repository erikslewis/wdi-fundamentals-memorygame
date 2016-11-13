



var cardOne = "queen";
var cardtwo = "queen";
var cardthree = "king";
var cardfour = "king";

var gameBoard = document.getElementById("game-board");



cards = ['cardOne','cardtwo','cardthree','cardfour'];


for (i = 0; i < cards.length; i++){
	var x = document.createElement("div");
	x.className="card";
	gameBoard.appendChild(x);

}

var createCards = cards.filter(function(x) {
  for (i = 0; i < cards.length; i++)
  if (x[i]['cardOne'] === cardtwo || x[i]['cardthree'] === cardfour) {
      return cards[i];
  }
})



	 
  
// 

/*if (cardOne === cardtwo) {
alert ("You found a match!");
} 
else { 
alert("sorry try again!");
}
if (cardthree === cardfour) {
alert("You found a match!");
}
else {
alert("sorry try again!");
}	*/


