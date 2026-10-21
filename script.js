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
  // DO COMPARISON BULLCRAP HERE (DONE by qk)
  const a = "a";
  const b = "b";
  const c = "c";
  const d = "d"; // qk: i accidetally wrote these bullshit switch cases but im so fucking lazy to fix them so this'll do lmao have fun
  const result = score.every(element => element <= 1);
  switch (answers[1]) {
    case a:
      score[1] += 1;
      break;
    case b:
      score[4] += 1;
      break;
    case c:
      score[8] += 1;
      break;
  }
  switch (answers[2]) {
    case a:
      score[2] += 1;
      break;
    case b:
      score[9] += 1;
      break;
    case c:
      score[6] += 1;
      break;
  }  
  switch (answers[3]) {
    case a:
      score[10] += 1;
      break;
    case b:
      score[7] += 1;
      break;
    case c:
      score[8] += 1;
      break;
  }
  switch (answers[4]) {
    case a:
      score[3] += 1;
      break;
    case b:
      score[1] += 1;
      break;
    case c:
      score[10] += 1;
      break;
  }
  switch (answers[5]) {
    case a:
      score[4] += 1;
      break;
    case b:
      score[5] += 1;
      break;
    case c:
      score[6] += 1;
      break;
  }
  switch (answers[6]) {
    case a:
      score[9] += 1;
      break;
    case b:
      score[9] += 1;
      score[6] += 1;
      break;
  }
  switch (answers[7]) {
    case a:
      score[7] += 1;
      score[4] += 1;
      break;
    case b:
      score[8] += 1;
      break;
    case c:
      score[2] += 1;
      score[3] += 1;
      break;
  }
  switch (answers[8]) {
    case a:
      score[2] += 1;
      break;
    case b:
      score[5] += 1;
      break;
    case c:
      score[6] += 1;
      break;
  }
  switch (answers[9]) {
    case a:
      score[8] += 1;
      break;
    case b:
      score[10] += 1;
      break;
    case c:
      score[1] += 1;
      break;
  }
  switch (answers[10]) {
    case a:
      score[1] += 1;
    case b:
      score[8] += 1;
  } //HOLY SHIT IM DONE
  const reccomend_high = answers // vibe coded bs to filter if meets condition and take index
    .map((value, index) => ({ value, index }))
    .filter(item => item.value >= 3)
    .map(item => item.index + 1);
  const reccomend = answers
    .map((value, index) => ({ value, index }))
    .filter(item => item.value > 1)
    .map(item => item.index + 1); // test this shit i swear to god i have no idea what i just wrote
  console.log(reccomend_high);
  console.log(reccomend);
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
