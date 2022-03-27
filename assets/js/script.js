


// Theme Setter
const setTheme = (theme) => {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
}
const getTheme = () => {
  const theme = localStorage.getItem('theme');
  theme && setTheme(theme);
}

getTheme();


// Classroom hide
window.addEventListener(
    'keydown',
    function(e) {
        if (e.key == '`') {
            window.open(
				"https://classroom.google.com/"
            )
        }
    },
    false
)























