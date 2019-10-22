var currentView = 1;
const sleep = (milliseconds) => {
return new Promise(resolve => setTimeout(resolve, milliseconds))
}

window.onload = () => {

    var leftArrows = document.getElementsByClassName("leftArrow");
    var rightArrows = document.getElementsByClassName("rightArrow");
    var hamburger = document.getElementById("hamburger");

    for(let i=0; i<leftArrows.length;i++) {leftArrows.item(i).addEventListener("click", slideRight);}
    for(let i=0; i<rightArrows.length;i++){rightArrows.item(i).addEventListener("click", slideLeft);}
    hamburger.addEventListener("click", navToggle);
    document.getElementById("github").addEventListener("click", () => window.location.href = "https://www.github.com/bmw2621");
    document.getElementById("linkedin").addEventListener("click", () => window.location.href = "https://www.linkedin.com/in/benjamin-m-winchester");
    document.getElementById("twitter").addEventListener("click", () => window.location.href = "https://twitter.com/b_m_winchester");
    document.getElementById("codepen").addEventListener("click", () => window.location.href = "https://codepen.io/bmw2621/");
    document.getElementById("eegg").addEventListener("dblclick", () => document.documentElement.setAttribute('class', 'rotateme'))
}

function slideRight() {
    var blogDiv = document.getElementById("blog");
    var mainDiv = document.getElementById("main");
    var projectsDiv = document.getElementById("projects");

    if(currentView === 1){
      console.log(currentView);
      projectsDiv.classList.remove("isLeft")
      projectsDiv.classList.add("isCenter")
      mainDiv.classList.remove("isCenter");
      mainDiv.classList.add("isRight");
      sleep(500).then(() => {
        mainDiv.classList.add("isHidden")
      });
      currentView--;
      console.log("Slide -> " + currentView)
    } else if(currentView === 2) {
      mainDiv.classList.remove("isLeft")
      mainDiv.classList.add("isCenter")
      blogDiv.classList.remove("isCenter");
      blogDiv.classList.add("isRight");
      sleep(500).then(() => {
        blogDiv.classList.add("isHidden")
      });
      currentView--;
      console.log("Slide -> " + currentView)
    }
}

function slideLeft() {
    var blogDiv = document.getElementById("blog");
    var mainDiv = document.getElementById("main");
    var projectsDiv = document.getElementById("projects");

    if(currentView === 0){
      console.log(currentView)
      projectsDiv.classList.remove("isCenter");
      projectsDiv.classList.add("isLeft");
      mainDiv.classList.add("isCenter");
      mainDiv.classList.remove("isRight");
      mainDiv.classList.remove("isHidden");
      currentView++;
      console.log("Slide -> " + currentView)
    } else if(currentView === 1) {
      console.log(currentView)
      blogDiv.classList.remove("isRight");
      blogDiv.classList.remove("isHidden")
      blogDiv.classList.add("isCenter")
      mainDiv.classList.remove("isCenter");
      mainDiv.classList.add("isLeft");
      currentView++;
      console.log("Slide -> " + currentView)
    }    
}

function navToggle() {
  var nav = document.getElementById("nav");
  nav.classList.contains("isHiddenTop") ? nav.classList.remove("isHiddenTop") : nav.classList.add("isHiddenTop");
}
