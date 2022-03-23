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


//Change tabTitle
const changeTabTitle = () => {
    const newtitle = document.getElementById("userinput");
    if (newtitle.value == ""){ //check if the input is blank when they submit
        window.localStorage.removeItem("title");
        window.document.title = "HolyMods"
    } else {
        window.localStorage.setItem("title", newtitle.value);
        window.document.title = newtitle.value; //Set window's title to userinput
    }
    newtitle.value = ""; //clear input
};

//Change the tabIcon
const changeTabIcon = () => {
    const newfavicon = document.getElementById("userinput");
    if (validURL(newfavicon.value)){
        document.head.querySelector("link[rel=icon]").href = newfavicon.value;
        window.localStorage.setItem("icon", newfavicon.value);
    } else {
    }
    newfavicon.value = ""; //clear input
};



//Clears Tab Icon and Title
const resetTabSettings = () => {
    let items = ["icon", "title"];
    items.forEach(item =>
    window.localStorage.removeItem(item));
    window.location.reload();
};

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
)//Declare variables for cloak here
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
