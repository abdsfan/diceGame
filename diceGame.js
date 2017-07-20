"use strict "

//Global variables 
var playerOneScore = -1;
var playerTwoScore = -1;

/*
The function will test if all the numbers 
are ones. 
*/
function singlesHand(results) {
	var controller = true; 
	for (var i = 0; i < results.length; i++) {
		if (results[i] != 1) {
			controller = false;
			return controller;
		}
		
	}
	return controller; 
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
to generate a random number for every dice in the array 
*/
function randomNumberGenerater() {
	var dice1 = [4, 6, 8, 10, 12, 20];
	var results = [];
	for (var i = 0; i < dice1.length; i++) {
		results.push(Math.floor(Math.random() * dice1[i] + 1));

	}
	return results;
}

/*
to determin the winner based on the score
*/

function determinWhoWins() {
	var resultsType = ["No hand", "5 Odd Numbers", "4 Even Numbers", "3 Happy Numbers", "Singles"]
	if (playerOneScore > playerTwoScore) {
		for (var i = 1; i <= playerOneScore; i++) {
			if (i === playerOneScore) {
				document.getElementById("results").innerHTML = "Player 1 WON with " 
				+ resultsType[i] + " hand!!";
			}
		}
	} else if (playerOneScore < playerTwoScore) {
		for (var i = 1; i <= playerTwoScore; i++) {
			if (i === playerTwoScore) {
				document.getElementById("results").innerHTML = "Player 1 WON with " 
				+ resultsType[i] + " hand!!";
			}
		}

	} else if (playerOneScore === playerTwoScore) {
		document.getElementById("results").innerHTML = "Its a TIE  round!! "
		//console.log("We have a tie round with player 1 score of '" + playerOneScore 
		//	+ "' and player 2 score of " + playerTwoScore + "'");
	}
	playerOneScore = -1;
	playerTwoScore = -1;
}

/*
The function will run the game from the click of the user
then determin the winner. 
*/
function play() {

	if (playerOneScore !== -1 && playerTwoScore !== -1) {
		determinWhoWins();
	} else 	if (playerOneScore === -1) {
		alert("Player One needs to Roll!!");
	} else if (playerTwoScore === -1) {
		alert("Player Two needs to Roll!!");
	}

}

/*
to check which players is playing first and output
the results to the correct box on the webpage 
*/
function outputResults(players, output) {
	var playerOne = "Player One, ";
	var playerTwo = "Player Two, ";
	if (players === playerOne){
		document.getElementById("box1").innerHTML = output;
	} else if (players === playerTwo){
		document.getElementById("box2").innerHTML = output;
	}
}

/*
The function will generate random numbers for each dice there is
and score it passed on the results. 
*/
function playerRoll(players, results) {
	var score = 0;
	var output = "";
	//var results = randomNumberGenerater();

	if(singlesHand(results)) {
		score = 4;		
		output = "WOOW You have Singles hand: " + results;
		outputResults(players, output);
		return score;
	} else if (containsThreeHappyNumbers(results)) {
		score = 3;
		output = "your hand has 3 happy numbers: " + results;
		outputResults(players, output);
		return score; 
	} else if (evenNumbers(results)) {
		score = 2;
		output ="your hand has 4 even numbers: " + results;
		outputResults(players, output);
		return score;
	} else if (oddNumbers(results)) {
		score = 1;
		output ="your hand has 5 odd numbers: " + results;
		outputResults(players, output);
		return score;
	} else {
		score = 0;
		output ="your hand has the lowest hand: " + results;
		outputResults(players, output);
		return score; 
	}

}

/*
it tests which user clicks to play 
*/
	function playerClicks(run) {
	var playerOne = "Player One, ";
	var playerTwo = "Player Two, ";
	var results = 0;
	if (run.id === "player1") {
		results = randomNumberGenerater();
		playerOneScore =  playerRoll(playerOne, results);
	} else if (run.id === "player2") {
		results = randomNumberGenerater();
		playerTwoScore = playerRoll(playerTwo, results);
	}

	play(results);
}