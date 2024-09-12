// default: light
// if user switched manually: user selected theme
// the setting is stored in the local storage
const btn = document.querySelector("#toggle-theme");

const lightThemeName = "light";
const darkThemeName = "dark";
const themeKeyName = "theme";

let currentTheme = localStorage.getItem(themeKeyName);

// default: light
if (typeof currentTheme === "undefined") {
  currentTheme = lightThemeName;
}

function toggleTheme() {
  if (currentTheme == lightThemeName) {
    // switch to dark
    document.body.classList.remove(lightThemeName);
    document.body.classList.add(darkThemeName);
    currentTheme = darkThemeName;
  } else {
    // switch do light
    document.body.classList.remove(darkThemeName);
    document.body.classList.add(lightThemeName);
    currentTheme = lightThemeName;
  }

  localStorage.setItem(themeKeyName, currentTheme);
}

toggleTheme();

btn.addEventListener("click", function () {
  console.log("broo");

  toggleTheme(currentTheme);
});
