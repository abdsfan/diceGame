"use strict "

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
The function will test if at least 3 numbers are even numbers.
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
The function will go through the results 
and test if all the numbers are divisable by 3. 
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

function highestLastNumber(results) {

	for (var i = results.length - 1; i >= 0; i--) {
	}
}

function playerRoll() {
	var dice1 = [4, 6, 8, 10, 12, 20];
	var score = 0;
	var output = "";
	var results = []
	for (var i = 0; i < dice1.length; i++) {
		results.push(Math.floor(Math.random() * dice1[i] + 1));

	}
	if(singlesHand(results)) {
		score = 10;
		console.log("WOOW You have Singles hand: " + results);
		return score;
		//output = "WOOW you have Singles hand: " + results + ", You scored: " + score;
		//console.log("WOOW you have Singles hand! " + results);
	} else if (containsThreeHappyNumbers(results)) {
		score = 7;
		console.log("you have 3 happy numbers: " + results);
		return score; 
		//output = "you have 3 happy numbers: " + results + ", You scored: " + score;
		//console.log("you have 3 happy numbers " + results);
	} else if (evenNumbers(results)) {
		score = 5;
		console.log("you have 4 even numbers: " + results);
		return score;
		//output = "you have 4 even numbers: " + results + ", You scored: " + score;
		//console.log("you have 4 even numbers " + results);
	} else if (oddNumbers(results)) {
		score = 4;
		console.log("you have 5 odd numbers: " + results);
		return score;
		//output = "you have 5 odd numbers: " + results + ", You scored: " + score;
		//console.log("you have 5 odd numbers " + results);
	} else {
		score = 0;
		console.log("you have no hand: " + results);
		return score; 
		//output = "you have no hand: " + results + ", You scored: " + score;
		//console.log("your numbers are not divisalbe by 2 " + results);
		//console.log("your hand is not singles hand " + results);

	}

}

function play(run) {

	if (run.id === "player1" ) {
		playerOneScore =  playerRoll();
	} else if (run.id === "player2") {
		playerTwoScore = playerRoll();
	}

	if (playerOneScore === -1 && playerTwoScore === -1) {
		return;
	} else if (playerOneScore === -1 || playerTwoScore === -1) {
		alert("Next player's turn");
	} else if (playerOneScore !== -1 && playerTwoScore !== -1) {
		if (playerOneScore > playerTwoScore) {
		console.log("player 1: You won the round with score of " + playerOneScore);
		console.log("player 2: You lost the round with score of " + playerTwoScore);
		} else if (playerOneScore < playerTwoScore) {
			console.log("player 2: You won the round with score of " + playerTwoScore);
			console.log("player 1: You lost the round with score of " + playerOneScore);

		} else if (playerOneScore === playerTwoScore) {
			console.log("We have a tie round with player 1 score of " + playerOneScore 
				+ " and player 2 score of" + playerTwoScore);
		}
	}
}