const quizbutton = document.getElementById("enterquiz");
const aboutbutton = document.getElementById("enterabout");
const navigatebackbutton = document.getElemenyById("navigateback");

const homepagediv = document.getElementById("homepage");
const aboutpagediv = document.getElementById("aboutpage");
const quizpagediv = document.getElementById("quizpage");

quizbutton.addEventListener("click", function() {
  if (quizpagediv.style.display === "none") {
    quizpagediv.style.display = "block";
    aboutpagediv.style.display = "none";
    homepagediv.style.display = "none";
  } else {
    quizpagediv.style.display = "none";
  }
})


aboutbutton.addEventListener("click", function() {
  if (aboutpagediv.style.display === "none") {
    quizpagediv.style.display = "none";
    aboutpagediv.style.display = "block";
    homepagediv.style.display = "none";
  } else {
    aboutpagediv.style.display = "none";
  }
})


navigatebackbutton.addEventListener("click", function() {
  if (homepagediv.style.display === "none") {
    quizpagediv.style.display = "none";
    aboutpagediv.style.display = "none";
    homepagediv.style.display = "block";
  } else {
    homepagediv.style.display = "none";
  }
})
