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

function calcAnswers(answers) {
  let score = Array(13).fill(0);

  const software_dev = 0;
  const cybersecurity = 1;
  const uiux_dev = 2;
  const not_interested = 3;
  const ai = 4;
  const embedded_iot_robotics = 5;
  const cloud_devops = 6;
  const business_analysis = 7;
  const qa_testing = 8;
  const data_science = 9;
  const network_sysadmin = 10;
  const network_iot = 11;
  const project_management = 12;

  const a_ans = [
		[software_dev],
		[ai],
		[business_analysis, project_management],
		[data_science],
		[cybersecurity],
		[embedded_iot_robotics],
		[qa_testing, cybersecurity],
		[ai],
		[uiux_dev],
		[software_dev, cybersecurity, ai, data_science,
		 embedded_iot_robotics, cloud_devops, network_sysadmin]
  ];

  const b_ans = [
		[cybersecurity],
		[embedded_iot_robotics],
		[qa_testing],
		[software_dev],
		[network_sysadmin],
		[network_iot],
		[uiux_dev],
		[network_sysadmin],
		[business_analysis],
		[uiux_dev, business_analysis, project_management]
  ];

  const c_ans = [
		[uiux_dev],
		[cloud_devops],
		[uiux_dev],
		[business_analysis],
		[cloud_devops],
		[software_dev],
		[software_dev, ai, data_science],
		[cloud_devops],
		[software_dev],
		[not_interested]
  ];

  for (let i = 0; i < 10; i++) {
		switch (answers[i]) {
		  case "a":
		    if (Array.isArray(a_ans[i])) {
		      for (let j = 0; j < a_ans[i].length; j++) {
		        score[a_ans[i][j]]++;
		      }
		    } else {
		      score[a_ans[i]]++;
		    }
		    break;

		  case "b":
		    if (Array.isArray(b_ans[i])) {
		      for (let j = 0; j < b_ans[i].length; j++) {
		        score[b_ans[i][j]]++;
		      }
		    } else {
		      score[b_ans[i]]++;
		    }
		    break;

		  case "c":
		    if (Array.isArray(c_ans[i])) {
		      for (let j = 0; j < c_ans[i].length; j++) {
		        score[c_ans[i][j]]++;
		      }
		    } else {
		      score[c_ans[i]]++;
		    }
		    break;

		  case "d":
		  default:
		    score[not_interested]++;
		    break;
		}
  }               
  const result = score.every(element => element <= 1);
	const nghe = score.filter(function over3(score) { return score >= 3 } )
	const reccomended = nghe[0]
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
      answers.push(selected ? selected.value : "-1"); // if no answer chosen, return null
    }
    calcAnswers(answers)
  }
});

showQuestion(currentQuestion);
