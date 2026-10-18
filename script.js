// the function to calculate the user's recommended job is calcAnswers(answers) also answers is an arr btw dont fuck it up

const quizbutton = document.getElementById("enterquiz");
const aboutbutton = document.getElementById("enterabout");
const navigatebackbuttons = document.querySelectorAll(".navigateback");

const homepagediv = document.getElementById("homepage");
const aboutpagediv = document.getElementById("aboutpage");
const quizpagediv = document.getElementById("quizpage");


const questions = document.querySelectorAll("#quizpage .questions");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("questionCounter");

function showpage(page) {
  quizpagediv.style.display = "none";
  aboutpagediv.style.display = "none";
  homepagediv.style.display = "none";
  page.style.display = "block";
}

quizbutton.addEventListener("click", function() {
  showpage(quizpagediv);
})

aboutbutton.addEventListener("click", function() {
  showpage(aboutpagediv);
})

navigatebackbuttons.forEach(function(button) {
  button.addEventListener("click", function() {
    showpage(homepagediv);
  });
});


let currentQuestion = 0;

function calcAnswers(answers) { // i couldnt come up with a better algorithm so we're doing manual labor :) have fun doing ts i wish yal the best of luck
  let score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // this array contains all the scores for each job. for the order, refer to index.html. for the questions value, refer to the gg docs file.
  // DO COMPARISON BULLCRAP HERE
  const result = score.every(element => element <= 1);
  // IF: no score is over 2, reccomend the user to keep exploring IT to see what they like best
  // IF: no score is over 1, IT isnt for them
  // IF: two or more scores are over 2, pick either the highest one, or if there is a tie, pick random or pick first (its lazy asf ik but bro idgaf)
}

function showQuestion(index) {
  questions.forEach(function(question, i) {
    question.style.display = i === index ? "block" : "none";
  });

  counter.textContent = `${index + 1} / ${questions.length}`;
  prevBtn.disabled = index === 0;
  nextBtn.textContent =
    index === questions.length - 1 ? "Hoàn thành" : "Câu tiếp";
}

prevBtn.addEventListener("click", function() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
});

nextBtn.addEventListener("click", function() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    alert("Bạn đã hoàn thành bài trắc nghiệm!");
    // get all radio buttons answers (a, b, c, d, null) into one big array
    const answers= []
    for (let i = 1; i <= 10; i++) {
      const selected = document.querySelector(
        `input[name="q${i}radio"]:checked`
      ); // loop and attach a querySelector to the radios
      answers.push(selected ? selected.value : null); // if no answer chosen, return null
    }
    calcAnswers(answers)
  }
});

showQuestion(currentQuestion);
