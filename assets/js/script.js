const setTheme = (theme) => {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
}
const getTheme = () => {
  const theme = localStorage.getItem('theme');
  theme && setTheme(theme);
}
 
getTheme();