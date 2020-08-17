

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answerIndicatorContainer = document.querySelector(".answer-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");


let questionCounter = 0;
let currentQuestion;
let availableQuestion = [];
let availableOptions = [];
let correctAnswer = 0;
let attempt = 0;


function setAvailableQuestion(){
	const totalQuestion = quiz.length;
	for(let i=0; i<totalQuestion; i++){
		availableQuestion.push(quiz[i])
	}
}

function getNewQuestion(){
	questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

	const questionIndex = availableQuestion[Math.floor(Math.random() * availableQuestion.length)]
	currentQuestion = questionIndex;
	questionText.innerHTML = currentQuestion.q;
	const index1 = availableQuestion.indexOf(questionIndex);
	availableQuestion.splice(index1,1)
	
	const optionlen = currentQuestion.options.length
	for(let i=0; i<optionlen; i++){
		availableOptions.push(i)
	}
	optionContainer.innerHTML = '';
	let animationDelay = 0.15;

	for(let i=0; i<optionlen; i++){
		const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
		const index2 = availableOptions.indexOf(optonIndex);
		availableOptions.splice(index2,1)
		// console.log(optonIndex)
		// console.log(availableOptions)
		const option = document.createElement("div");
		option.innerHTML = currentQuestion.options[optonIndex];
		option.id = optonIndex;
		option.style.animationDelay  = animationDelay + 's';
		animationDelay = animationDelay + 0.15;
		option.className = "option";
		optionContainer.appendChild(option)
		option.setAttribute("onclick","getResult(this)")
	}

	questionCounter++; 

}

function getResult(element){
	// const id = element.id;
	const id = parseInt(element.id);
	console.log(typeof id)
	if(id === currentQuestion.answer){
		element.classList.add("correct");
		// add the indicator to correct mark
		updateAnswerIndicator("correct")
		correctAnswer++;
		// console.log("correct:" + correctAnswer)

	}
	else{
		element.classList.add("wrong");
		// add the indicator to wrong mark
		updateAnswerIndicator("wrong")

		const optionlen = optionContainer.children.length;
		for(let i= 0; i<optionlen; i++){
			if(parseInt(optionContainer.children[i].id) === currentQuestion.answer ){
				optionContainer.children[i].classList.add("correct");
			}
		}
		
	}
	attempt++;
	unclickableOptions();

}

function unclickableOptions(){
	const optionlen = optionContainer.children.length;
	for(let i=0 ; i<optionlen; i++){
		optionContainer.children[i].classList.add("already-answered");
		}

}

function answerIndicator(){
	answerIndicatorContainer.innerHTML = '';
	const totalQuestion = quiz.length;
	for(let i=0; i<totalQuestion; i++){
		const indicator = document.createElement("div");
		answerIndicatorContainer.appendChild(indicator)
	}
}
function updateAnswerIndicator(markType){
	answerIndicatorContainer.children[questionCounter-1].classList.add(markType)

}

function next(){
	if(questionCounter === quiz.length){
		// console.log("quiz over");
		quizOver();
	}
	else{
		getNewQuestion();
	}
}

function quizOver(){
	quizBox.classList.add("hide");
	resultBox.classList.remove("hide");
	quizResult();
}

function quizResult(){
	resultBox.querySelector(".total-question").innerHTML = quiz.length;
	resultBox.querySelector(".total-attempt").innerHTML = attempt;
	resultBox.querySelector(".total-correct").innerHTML = correctAnswer;
	resultBox.querySelector(".total-wrong").innerHTML =  attempt - correctAnswer;
	const percentage = (correctAnswer/quiz.length)*100
	resultBox.querySelector(".total-percentage").innerHTML = percentage.toFixed(2) + "%";
	resultBox.querySelector(".total-score").innerHTML = correctAnswer +" / " + quiz.length;

}

function resetQuiz(){
	questionCounter = 0;
	correctAnswer = 0;
	attempt = 0;

}

function tryAgainQuiz(){
	//hide the result Box
	resultBox.classList.add("hide");
	// show the result Box
	resultBox.classList.remove("hide");
	resetQuiz();
	startQuiz();
}
function goToHome(){
	//hide  result Box
	resultBox.classList.add("hide");
	//show home box
	homeBox.classList.remove("hide");
	resetQuiz();

}


// ### STARTING POINT ###


function startQuiz(){

	//hide home box
	homeBox.classList.add("hide");	
	//show quiz box
	quizBox.classList.remove("hide");
	//first we will set all question in availableQuestion Array
	setAvailableQuestion();
	//second we will call getNewQuestion(); function
	getNewQuestion();
	//to create indicator of answers
	answerIndicator();

}

window.onload = function(){
	homeBox.querySelector(".total_question").innerHTML = quiz.length;
}
