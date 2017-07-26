// The player will have a limited amount of time to finish the quiz.

// Set a time length for countdown timer
var questionTimer = 5;
var questionTimerId;
//vars for my answers to tally
var correct = 0;
var incorrect = 0;

//a way for me to start the timer and question process
$("#start").on("click", begin)



//This function is to start the timer and list the questions
function begin() {
    questionTimerId = setInterval(decrement, 1000);
$("#start-message").html('<h3>' + 'Here we go!!' + '</h3>');
    //Question 1
	// $("#question1").html('<p>'+'Which of the following are not members of the "Fantastic Four?"' + '</p>');
	// $("#answer1a").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer1" value="false">' + 'The Thing' + '</label>' + '</div>');
	// $("#answer1b").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer1" value="false">' + 'Mr Fantastic' + '</label>' + '</div>');
	// $("#answer1c").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer1" value="false">' + 'The Human Torch' + '</label>' + '</div>');
	// $("#answer1d").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer1" value="true">' + 'Dr Doom' + '</label>' + '</div>');
	
	
	// //Question 2
	// $("#question2").html('<p>'+'Which of the following is NOT a power Spiderman received when bitten by a radioactive spider in the original Marvel comic book series?"' + '</p>');
	// $("#answer2a").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer2" value="false">' + 'Super Strength' + '</label>' + '</div>');
	// $("#answer2b").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer2" value="false">' + 'Capable of crawling on walls and ceilings' + '</label>' + '</div>');
	// $("#answer2c").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer2" value="false">' + 'Spider Sense' + '</label>' + '</div>');
	// $("#answer2d").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer2" value="true">' + 'Shoots webbing from his wrists' + '</label>' + '</div>');
	
	// //Question 3
	// $("#question3").html('<p>'+'Which of these villains is NOT an enemy of Batman?' + '</p>');
	// $("#answer3a").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer3" value="false">' + 'The Joker' + '</label>' + '</div>');
	// $("#answer3b").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer3" value="false">' + "Ra's Al Chul" + '</label>' + '</div>');
	// $("#answer3c").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer3" value="false">' + 'The Penguin' + '</label>' + '</div>');
	// $("#answer3d").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer3" value="true">' + 'Brainiac' + '</label>' + '</div>');
	
	// //Question 4
	// $("#question4").html('<p>'+'Which of these characters have NOT been called "The Flash" in DC Comics?' + '</p>');
	// $("#answer4a").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer4" value="false">' + 'Wally West' + '</label>' + '</div>');
	// $("#answer4b").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer4" value="false">' + 'Barry Allen' + '</label>' + '</div>');
	// $("#answer4c").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer4" value="false">' + 'Jay Garrick' + '</label>' + '</div>');
	// $("#answer4d").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer4" value="true">' + 'Hal Jordan' + '</label>' + '</div>');
	
	// //Question 5
	// $("#question5").html('<p>'+"In X-Men comics, Professor X's half-brother , Cain Marko, is also known as..." + '</p>');
	// $("#answer4a").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer5" value="false">' + 'Killer Croc' + '</label>' + '</div>');
	// $("#answer4b").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer5" value="true">' + 'The Juggernaut' + '</label>' + '</div>');
	// $("#answer4c").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer5" value="false">' + 'Magneto' + '</label>' + '</div>');
	// $("#answer4d").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer5" value="false">' + 'Sabretooth' + '</label>' + '</div>');
	
	// //Question 6
	// $("#question6").html('<p>'+"What, classically, was the weakness of the Green Lantern's ring?" + '</p>');
	// $("#answer6a").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer6" value="false">' + 'Kryptonite' + '</label>' + '</div>');
	// $("#answer6b").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer6" value="true">' + 'The Color Yellow' + '</label>' + '</div>');
	// $("#answer6c").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer6" value="false">' + 'Lead' + '</label>' + '</div>');
	// $("#answer6d").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer6" value="false">' + 'water' + '</label>' + '</div>');
	
	// //Question 7
	// $("#question7").html('<p>'+'Millionaire Bruce Wayne is the alter ego of...?' + '</p>');
	// $("#answer7a").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer7" value="false">' + 'Spiderman' + '</label>' + '</div>');
	// $("#answer7b").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer7" value="false">' + 'Supeman' + '</label>' + '</div>');
	// $("#answer7c").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer7" value="false">' + 'The Green Lantern' + '</label>' + '</div>');
	// $("#answer7d").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer7" value="true">' + 'Batman' + '</label>' + '</div>');
	
	// //Question 8
	// $("#question8").html('<p>'+'Which of these was not an original Avenger?' + '</p>');
	// $("#answer8a").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer8" value="false">' + 'Captain America' + '</label>' + '</div>');
	// $("#answer8b").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer8" value="false">' + 'Wasp' + '</label>' + '</div>');
	// $("#answer8c").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer8" value="true">' + 'Daredevil' + '</label>' + '</div>');
	// $("#answer8d").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer8" value="false">' + 'Thor' + '</label>' + '</div>');
	
	// //Question 9
	// $("#question9").html('<p>'+'Which of these villains are not a regular enemy of the X-Men?' + '</p>');
	// $("#answer9a").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer9" value="false">' + 'Magnetp' + '</label>' + '</div>');
	// $("#answer9b").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer9" value="false">' + 'The Juggernaut' + '</label>' + '</div>');
	// $("#answer9c").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer9" value="false">' + 'Lady Deathstroke' + '</label>' + '</div>');
	// $("#answer9d").html('<div class="radio answers">'+ '<label>' + '<input type="radio" name="answer9" value="true">' + 'Ultron' + '</label>' + '</div>');
	
	//Question 10
	$("#question10").html('<p>'+'What magic word(s) did young Billy Batson utter to turn into Captain Marvel? ' + '</p>');
	$("#answer10a").html('<div class="radio answers">'+ '<label>' + '<input type="radio" id="ans10a" name="answer10" value="true">' + 'Shazam' + '</label>' + '</div>');
	$("#answer10b").html('<div class="radio answers">'+ '<label>' + '<input type="radio" id="ans10b" name="answer10" value="false">' + 'Presto' + '</label>' + '</div>');
	$("#answer10c").html('<div class="radio answers">'+ '<label>' + '<input type="radio" id="ans10c" name="answer10" value="false">' + 'Captain Marvel' + '</label>' + '</div>');
	$("#answer10d").html('<div class="radio answers">'+ '<label>' + '<input type="radio" id="ans10d" name="answer10" value="false">' + 'Abracadabra' + '</label>' + '</div>');
	

$(document).on("click", "input[type=radio]", function() {
	console.log("hello");
	// console.log("hello");
	// ************ WE WERE MISSING THIS SMALL CODE. WE HAVE TO STORE THE VALUE SOMEWHERE IN THE VARIABLE.
	// ************ BASED ON THAT VARIABLE WE CAN SET OUR CONDITION.
	// BUT THIS CODE IS ONLY FOR THIS QUESTION YOU HAVE TO MODIFY IT ACCORDING TO OTHER QUESTIONS
	var ans = $('input[name=answer10]:checked').val(); 
	console.log(ans);
    
    //if ($("input[id=ans10a]:checked")) {
    if (ans === "true") {
    
    	correct++;
    	console.log(correct);
     }else {
     	incorrect++;
     	console.log(incorrect);
    }

 
 
});





}

// score();
//function to collect the answers and add them to correct or incorrect
// function score() {
	
// 	var result = $(".answers").val();
// 	console.log(result);
// 	if (result == "true") {
// 		correct++;
// 		console.log(correct);

// 	}else if (result == "false") {
// 		incorrect++;
// 		console.log(incorrect);
// 	}
// 	console.log(result);
// }

function decrement() {
    questionTimer--;
    $("#countdown-display").html('<h1>' + 'Time Remaining: 00:' + questionTimer + ' Seconds' + '</h1>');
    if (questionTimer === 0) {
        stop();
    }
}

function stop() {
    clearInterval(questionTimerId);
    $("#countdown-display").html('<h1>' + 'Times up!!!' + '</h1>');
    $("#countdown-display").append('<h3>' + 'correct answers: ' + correct + '</h3>' + '<br>' + '<h3>' + 'incorrect answers: ' + incorrect + '</h3>');
    $("#start-message").html('<h3>' + ' ' + '</h3>');
    $("#instruction-start").html('<h2>' + ' ' + '</h2>');
    
}


// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.