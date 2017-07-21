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
	var one = 1;
	for (var i = 0; i < results.length; i++) {
		if (results[i] != one) {
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
	var three = 3;
	for (var i = 0; i < happyNumbers.length; i++) {
		if (results.includes(happyNumbers[i])) {
			end++;
		}
		if (end === three) {
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
	var zero = 0;
	var two = 2;
	var four = 4;
	for (var i = 0; i < results.length; i++) {
		if (results[i] % two === zero) {
			end++;
		}
		if (end === four) {
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
	var zero = 0;
	var two = 2;
	var five = 5;
	for (var i = 0; i < results.length; i++) {
		if (results[i] % two != zero) {
			end++;
		}
		if (end === five) {
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
	var one = 1;
	for (var i = 0; i < dice1.length; i++) {
		results.push(Math.floor(Math.random() * dice1[i] + one));

	}
	return results;

/*
To output the winner and the winning hand type. 
*/
function outputWinnerResults(playerScore, playerNumber) {
	var resultsType = ["No hand", "5 Odd Numbers", "4 Even Numbers", "3 Happy Numbers", "Singles"];
	for (var i = 1; i <= playerScore; i++) {
		if (i === playerScore) {
			document.getElementById("results").innerHTML = "Player " + playerNumber + " WON with " 
			+ resultsType[i] + " hand!!";
		}
	}
}

/*
to determine the winner based on the score
*/
function determineWhoWins() {
	var one = 1;
	var two = 2;
	if (playerOneScore > playerTwoScore) {
		outputWinnerResults(playerOneScore, one);
	} else if (playerOneScore < playerTwoScore) {
		outputWinnerResults(playerTwoScore, two);
	} else if (playerOneScore === playerTwoScore) {
		document.getElementById("results").innerHTML = "Its a TIE  round!! "
	}
	playerOneScore = -1;
	playerTwoScore = -1;
}	

/*
The function will run the game from the click of the user
then determine the winner. 
*/
function play() {
	var negativeOne = -1;
	if (playerOneScore !== negativeOne && playerTwoScore !== negativeOne) {
		determineWhoWins();
	} else if (playerOneScore === negativeOne) {
		alert("Player one needs to roll to determine the winner!!");
	} else if (playerTwoScore === negativeOne) {
		alert("Player two needs to roll to determine the winner!!");
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
	var four = 4;
	var three = 3;
	var two = 2;
	var one = 1;
	var zero = 0;

	if(singlesHand(results)) {
		score = four;		
		output = "WOOW You have Singles hand: " + results;
		outputResults(players, output);
		return score;
	} else if (containsThreeHappyNumbers(results)) {
		score = three;
		output = "your hand has 3 happy numbers: " + results;
		outputResults(players, output);
		return score; 
	} else if (evenNumbers(results)) {
		score = two;
		output ="your hand has 4 even numbers: " + results;
		outputResults(players, output);
		return score;
	} else if (oddNumbers(results)) {
		score = one;
		output ="your hand has 5 odd numbers: " + results;
		outputResults(players, output);
		return score;
	} else {
		score = zero;
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