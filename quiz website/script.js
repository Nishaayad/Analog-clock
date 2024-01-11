const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgain= document.querySelector('.tryAgain-btn');
const goHomeBtn= document.querySelector('.goHome-btn');


startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
};
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
};
continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore();
};

tryAgain.onclick = () => {
   quizBox.classList.add('active');
   nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

 questionCount = 0;
 questionNumb = 1;
 userScore = 0;
 showQuestions(questionCount);
 questionCounter(questionNumb);

 headerScore();
};


goHomeBtn.onclick = () => {
   quizSection.classList.remove('active');
   nextBtn.classList.remove('active');
   resultBox.classList.remove('active');

 questionCount = 0;
 questionNumb = 1;
 userScore = 0;
 showQuestions(questionCount);
 questionCounter(questionNumb);

};


let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);
        
        nextBtn.classList.remove('active');
    }
     else {
        showResultBox();
    }
};

const optionList = document.querySelector('.options-list');

function showQuestions(index) {
    const questionText = document.querySelector('.questions-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = '';
    for (let i = 0; i < questions[index].options.length; i++) {
        optionTag += `<div class="options"><span>${questions[index].options[i]}</span></div>`;
    }

    optionList.innerHTML = optionTag;

    const options = document.querySelectorAll('.options');
    for (let i = 0; i < options.length; i++) {
        options[i].setAttribute('onclick', 'optionSelected(this)');
    }
}
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let alloptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    } else {
        answer.classList.add('incorrect');
        for (let i = 0; i < alloptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].classList.add('correct');
            }
        }
    }

    for (let i = 0; i < alloptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}




function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
	const headerScoreText = document.querySelector('.header-score');
	headerScoreText.textContent = `Score: ${userScore}/ ${questions.length}`;
}

function showResultBox(){
	quizBox.classList.remove('active');
	resultBox.classList.add('active');
 
    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = 0;
    let progressEndValue = (userScore / questions.length)*100;
    let speed = 20;

    let progress = setInterval(() => {
    	progressStartValue++;
    	
        progressValue.textContent =`${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg);`
    	if(progressStartValue == progressEndValue){
    		clearInterval(progress);
    	}
    } ,speed);
}












