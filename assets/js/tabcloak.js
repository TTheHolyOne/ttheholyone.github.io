
let options = JSON.parse(localStorage.getItem("settings")) || {
  title: "HolyMods",
  icon: "https://holymods.dev/assets/images/icon.png"
}

document.getElementById("text").value = options.title;
document.getElementById("icon").value = options.icon;
  
const originalTitle = document.title;
const originalIcon = document.querySelector("link[rel='icon']").href;
  
document.addEventListener("visibilitychange", ()  => {
  if (document.hidden) {
    document.title = options.title;
    document.querySelector("link[rel='icon']").href = options.icon;
  } else {
    document.title = originalTitle;
    document.querySelector("link[rel='icon']").href = originalIcon;
  }
});

function update () {
  options.title = document.getElementById("text").value;
  options.icon = document.getElementById("icon").value;
  localStorage.setItem("settings", JSON.stringify(options));
  location.reload();
}function reset () {
  options.title = originalTitle;
  options.icon = originalIcon;
  localStorage.setItem("settings", JSON.stringify(options));
  location.reload();
}