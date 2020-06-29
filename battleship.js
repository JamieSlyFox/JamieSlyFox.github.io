var randomLoc1 = Math.floor(Math.random() * 5);
var randomLoc2 = Math.floor(Math.random() * 12);
var randomLoc3 = Math.floor(Math.random() * 19);
var locationShip11 = randomLoc1;
var locationShip12 = locationShip11 + 1;
var locationShip13 = locationShip12 + 1;
var locationShip21 = randomLoc2
var locationShip22 = locationShip21 + 1;
var locationShip23 = locationShip22 + 1;
var locationShip31 = randomLoc3;
var locationShip32 = locationShip31 + 1;
var locationShip33 = locationShip32 + 1;
var location
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var oneSunk = false;
	
while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number from 0-6, 7-13 or 14-20)");
	if (guess < 0 || guess > 20) {
		alert("Please enter a valid cell number!");
	} else {
		guesses = guesses + 1;

		if (guess == locationShip11 || guess == locationShip12 || guess == locationShip13 || guess == locationShip21 || guess == locationShip22 || guess == locationShip23 || guess == locationShip31 || guess == locationShip32 || guess == locationShip33) {
			alert("HIT!");
			hits = hits + 1;
			if(hits == 3 || hits == 6) {
				oneSunk = true;
				alert("You sank one of my battleships!");
			} if(hits == 9) {
				isSunk = true;
				alert("You sank all of my battleships!!");
			}					
		} else {
			alert("MISS");}
	}
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (9/guesses);
alert(stats);
	        
