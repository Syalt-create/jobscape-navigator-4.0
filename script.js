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
  }
});

showQuestion(currentQuestion);
