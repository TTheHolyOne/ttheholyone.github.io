//Declare variables for cloak here
const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");

//If the window already has title stored in localstorage
if (window.localStorage.hasOwnProperty("title")) {
  document.title = local_title;
}
//Fetch and set from user's input
if (window.localStorage.hasOwnProperty("icon")) {
  document.querySelector("link[rel=icon]").href = local_icon;
}

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











