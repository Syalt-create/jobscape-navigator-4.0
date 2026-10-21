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
const answers = [];


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

  let to_string = Array(13).fill("");
  to_string[software_dev] = "software_dev";
  to_string[cybersecurity] = "cybersecurity";
  to_string[uiux_dev] = "uiux_dev";
  to_string[not_interested] = "not_interested";
  to_string[ai] = "ai";
  to_string[embedded_iot_robotics] = "embedded_iot_robotics";
  to_string[cloud_devops] = "cloud_devops";
  to_string[business_analysis] = "business_analysis";
  to_string[qa_testing] = "qa_testing";
  to_string[data_science] = "data_science";
  to_string[network_sysadmin] = "network_sysadmin";
  to_string[network_iot] = "network_iot";
  to_string[project_management] = "project_management";
  

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
  
  let mscore = 0;
  let index_ = -1;
	for (let i = 0; i < 13; i++) {
    if (score[i] > mscore){
      mscore = score[i];
      index_ = i;
    }
  }
  console.log(to_string[index_]);
}


function showQuestion(index) {
  questions.forEach(function(question, i) {
    question.style.display = i === index ? "block" : "none";
  });

  counter.textContent = `${index + 1} / ${questions.length}`;
  prevBtn.disabled = index === 0;
  nextBtn.textContent =
    index === questions.length - 1 ? "Hoàn thành" : "Câu tiếp";

  // Restore the previously selected answer when returning to a question.
  const savedAnswer = answers[index];
  const radios = document.querySelectorAll(
    `input[name="q${index + 1}radio"]`
  );

  radios.forEach(function(radio) {
    radio.checked = radio.value === savedAnswer;
  });
}

prevBtn.addEventListener("click", function() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
});

nextBtn.addEventListener("click", function() {
  const selected = document.querySelector(
    `input[name="q${currentQuestion + 1}radio"]:checked`
  );

  if (!selected) {
    alert("Vui lòng chọn một đáp án!");
    return;
  }

  answers[currentQuestion] = selected.value;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    alert("Bạn đã hoàn thành bài trắc nghiệm!");
    calcAnswers(answers);
  }
});

showQuestion(currentQuestion);
