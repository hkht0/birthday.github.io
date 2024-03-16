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
	}
	else if (text.includes("ball")) {
	  console.log("do something special because text contains ball");
	}
	else {
		document.getElementById("rick").style.visibility = "hidden";
	}
  }