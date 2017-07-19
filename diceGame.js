"use strict "

//Global variables 
var playerOneScore = -1;
var playerTwoScore = -1;

function typeOfDice() {
	var dice1 = [4, 6, 8, 10, 12, 20];
	//var dice2 = [4, 6, 8, 10, 12, 20];
	return dice1
}

/*
The function will test if all the numbers 
are ones. 
*/
function singlesHand(results) {
	//var singles = [1, 1, 1, 1, 1, 1,];
	var controler = true; 
	for (var i = 0; i < results.length; i++) {
		if (results[i] != 1) {
			controler = false;
			return controler;
		}
		
	}
	return control; 
}

 /*
The function will test if the results contain 
at least 3 happy numbers. 
 */
function containsThreeHappyNumbers(results) {
	var happyNumbers = [1, 7, 10, 13, 19];
	var end = 0;
	for (var i = 0; i < happyNumbers.length; i++) {
		if (results.includes(happyNumbers[i])) {
			end++;
		}
		if (end === 3) {
			return true;
		}
	}
	return false;

}

/*
The function will test for 4 even numbers. 
*/
function evenNumbers(results) {
	var end = 0;
	for (var i = 0; i < results.length; i++) {
		if (results[i] % 2 === 0) {
			end++;
		}
		if (end === 4) {
			return true;
		}
	} 
	return false; 
} 

/*
The function will test for 5 odd numbers. 
*/
function oddNumbers(results) {
	var end = 0;
	for (var i = 0; i < results.length; i++) {
		if (results[i] % 2 != 0) {
			end++;
		}
		if (end === 5) {
			return true;
		}
	} 
	return false; 
} 

/*
The function will generate random numbers for each dice there is
and score it passed on the results. 
*/
function playerRoll(players) {
	var dice1 = [4, 6, 8, 10, 12, 20];
	var score = 0;
	var output = "";
	var results = []
	for (var i = 0; i < dice1.length; i++) {
		results.push(Math.floor(Math.random() * dice1[i] + 1));

	}
	if(singlesHand(results)) {
		score = 10;
		console.log(players + "WOOW You have Singles hand: " + results);
		return score;
	} else if (containsThreeHappyNumbers(results)) {
		score = 7;
		console.log(players + "you have 3 happy numbers: " + results);
		return score; 
	} else if (evenNumbers(results)) {
		score = 5;
		console.log(players + "you have 4 even numbers: " + results);
		return score;
	} else if (oddNumbers(results)) {
		score = 4;
		console.log(players + "you have 5 odd numbers: " + results);
		return score;
	} else {
		score = 0;
		console.log(players + "you have no hand: " + results);
		return score; 
	}

}

/*
The function will run the game from the click of the user
then determin the winner. 
*/
function play(run) {

	var playerOne = "Player One, ";
	var playerTwo = "Player Two, ";
	if (run.id === "player1") {
		playerOneScore =  playerRoll(playerOne);
		//alert("player 2 turn");
	} else if (run.id === "player2") {
		playerTwoScore = playerRoll(playerTwo);
		//alert("player 1 turn");
	}


	/*
	if (playerOneScore === -1) {
		alert("Player One needs to Roll!!");
	} else if (playerTwoScore === -1) {
		alert("Player Two needs to Roll!!");
	} else*/
	 if (playerOneScore !== -1 && playerTwoScore !== -1) {
		if (playerOneScore > playerTwoScore) {
		console.log("player 1: You won the round with a score of " + playerOneScore);
		console.log("player 2: You lost the round with a score of " + playerTwoScore);
		} else if (playerOneScore < playerTwoScore) {
			console.log("player 2: You won the round with a score of " + playerTwoScore);
			console.log("player 1: You lost the round with a score of " + playerOneScore);

		} else if (playerOneScore === playerTwoScore) {
			console.log("We have a tie round with player 1 score of '" + playerOneScore 
				+ "' and player 2 score of " + playerTwoScore + "'");
		}
		playerOneScore = -1;
		playerTwoScore = -1;
	} else 	if (playerOneScore === -1) {
		alert("Player One needs to Roll!!");
	} else if (playerTwoScore === -1) {
		alert("Player Two needs to Roll!!");
	}

}