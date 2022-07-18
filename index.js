function lightTheme(themeButton) {
  if (themeButton.value == "dark") {
    const mainBody = document.getElementById("main");
    mainBody.style.backgroundColor = "black";
    themeButton.textContent = "Light Mode";
    themeButton.value = "light";
  } else {
    const mainBody = document.getElementById("main");
    mainBody.style.backgroundColor = "white";
    themeButton.textContent = "Dark Mode";
    themeButton.value = "dark";
  }
}