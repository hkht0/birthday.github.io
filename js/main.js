const btnDarkMode = document.querySelector('.dark-mode-btn')

// 1.Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
}

//2. проверка темной темы в LocalStorage
if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add('dark-mode-btn--active')
	document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
	btnDarkMode.classList.remove('dark-mode-btn--active')
	document.body.classList.remove('dark')
}

// 3. Если меняются системные настройки, меняем тему
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
	
	
  } else if(currentScrollPos < 30){
	document.getElementById("nav").style.top = "0";
  }else {
    document.getElementById("nav").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

$(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
		document.getElementById("nav").style.top = "0";

    }
});