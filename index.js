window.onload=function(){
  document.getElementById('backgroundMode').addEventListener('change', modeChange, false);
}

function modeChange() {
  let modeChanged = document.getElementById('backgroundMode').checked;

  const mainBody = document.getElementById("main");
  const introSection = document.getElementById("intro");
  const projectsSection = document.getElementById("projects");
  const randomSection = document.getElementById("randomPics");

  if (modeChanged) {    
    mainBody.style.backgroundColor = "#41444B";

    introSection.style.backgroundColor = "#9c837b";
    // introSection.style.color = "";

    projectsSection.style.backgroundColor = "#41444B";
    // projectSection.style.color = "";

    randomSection.style.backgroundColor = "#8586a6";
    // randomSection.style.color = "";
  } else {
    const mainBody = document.getElementById("main");
    mainBody.style.backgroundColor = "#f8f8f8";

    introSection.style.backgroundColor = "#f5d5cb";
    // introSection.style.color = "";

    projectsSection.style.backgroundColor = "#f8f8f8";
    // projectSection.style.color = "";

    randomSection.style.backgroundColor = "#d5d6ea";
    // randomSection.style.color = "";
  }
}