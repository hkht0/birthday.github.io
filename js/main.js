const btnDarkMode = document.querySelector('.dark-mode-btn')

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
}

if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
	btnDarkMode.classList.remove('dark-mode-btn--active')
	document.body.classList.remove('dark')
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
	const newColorScheme = event.matches ? "dark" : "light";

	if (newColorScheme === 'dark') {
		btnDarkMode.classList.add('dark-mode-btn--active')
		document.body.classList.add('dark')
		localStorage.setItem('darkMode', 'dark')
	} else {
		btnDarkMode.classList.remove('dark-mode-btn--active')
		document.body.classList.remove('dark')
		localStorage.setItem('darkMode', 'light')
	}
})


// Включение ночного режима по кнопке

btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle('dark-mode-btn--active')
	const isDark = document.body.classList.toggle('dark');

	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
	} else {
		localStorage.setItem('darkMode', 'light')
	}
}

var prevScrollpos = window.window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
	
	
  } else if(currentScrollPos < 15){
	document.getElementById("nav").style.top = "0";
  }else {
    document.getElementById("nav").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

window.scroll = function() {
    if ($(this).scrollTop() == 0) {
		document.getElementById("nav").style.top = "0";

    }
};


function doSomething() {
	var text = document.getElementById("myInput").value;
  
	if (text.includes("apple")) {
		document.getElementById("rick").style.visibility = "visible";
		document.getElementById("error").style.visibility = "hidden";
														
	}else if (text.includes("ball")) {
		error.innerHTML = `<p>еще раз...</p>
		<input placeholder="Ввевиде пароль с опроса" type="text" id="myInput" onsubmit="doSomething">
	<button id='accept' class="content-list__btn" onclick="doSomething()">Check</button>
	`;
		document.getElementById("error").style.visibility = "visible";
	}
	else {
		error.innerHTML = `<p>еще раз</p>
		<input placeholder="Ввевиде пароль с опроса" type="text" id="myInput" onsubmit="doSomething">
	<button class="content-list__btn" onclick="doSomething()">Check</button>
	`;
		document.getElementById("error").style.visibility = "visible";
		}
  }

 

	const quizData = [
    {
      question: "Дата начала отношений:",
      options: ["когда-то", "вчера", "9.01.2023", "10.01.2023"],
      answer: "9.01.2023"
    },
    {
      question: "Мой любимый цвет:",
      options: ["зеленый", "красный", "розовый", "не знаю"],
      answer: "зеленый"
    },
    {
		question: "в каком году был 2025 год",
		options: ["в 2025", "вчера", "в след году", "не було"],
		answer: "не було"
	},
	{
		question: "Любимая марка машин у твоего отца",
		options: ["bugatti", "range rover", "BMW\u2665", "не знаю"],
		answer: "BMW\u2665"
	},
    {
		question: "What is the largest planet in our solar system?",
		options: ["Jupiter", "Saturn", "Mars", "Earth"],
		answer: "Jupiter"
	},
	{
		question: "What is the largest planet in our solar system?",
		options: ["Jupiter", "Saturn", "Mars", "Earth"],
		answer: "Jupiter"
	},
   
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    if (score<6){
		quiz.innerHTML = `
		<p>Правильных ответов: ${score}/${quizData.length}</p>
		<h1>как-то мало нужно хотя-бы все</h1>
      <button id='reload' onClick="window.location.reload();">Reload</button>
	  
    `;
	}else{
		quiz.innerHTML = `
      <h1>Опрос успешно пройден!</h1>
      <p>Правильных ответов: ${score}/${quizData.length}</p>
	  <p>Пароль: </p>`
	  error.innerHTML = `
	  <input placeholder="Ввевиде пароль с опроса" type="text" id="myInput" onsubmit="doSomething">
	<button class="content-list__btn" onclick="doSomething()">Check</button>
    `;
	}
	
  }
  
  showQuestion();

  if(document.getElementById('reload').clicked == true)
  {
	window.location.reload()
  }