window.onload=function(){
  document.getElementById('backgroundMode').addEventListener('change', modeChange, false);
  mapInfo();
}

function mapInfo() {
  maptilersdk.config.apiKey = config.MAPTILER_API_KEY;
  const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element to render the map
    style: maptilersdk.MapStyle.OUTDOOR,
    center: [-73.935242, 40.730610], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
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