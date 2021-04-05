const quizData = [
	{
		question: "How ols is Chines wal ?",
		a: "10",
		b: "17",
		c: "26",
		d: "110",
		correct: "c",
	},
	{
		question: "what is the most used programming language in 2021 ?",
		a: "java",
		b: "C",
		c: "python",
		d: "javaScript",
		correct: "d",
	},
	{
		question: "who is the president of US ?",
		a: "Florin",
		b: "Adrian",
		c: "Donald Trump",
		d: "Ivan",
		correct: "c",
	},
	{
		question: "what is the python language speciality ?",
		a: "interpret",
		b: "basic to use",
		c: "it is first language",
		d: "other",
		correct: "a",
	},
	{
		question: "how said i am spanish in french ?",
		a: "je mange",
		b: "je suis espagnol",
		c: "pas du tout",
		d: "je suis francais",
		correct: "b",
	}
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getSelected() {
	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener("click", () => {
	//check to see the answer
	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
 		} else {
 			quiz.innerHTML = `
 			<h2>
 				You answered correctly at ${score}/${quizData.length} questions
 			</h2> 
 			<button onclick="location.reload()">Reload</button>`;
 		}
	}
});
