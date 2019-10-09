var currentView = 1;

window.onload = () => {
        
    var leftArrow = document.getElementById("leftArrow");
    var rightArrow = document.getElementById("rightArrow");
    

    leftArrow.addEventListener("click", slideRight);
    rightArrow.addEventListener("click", slideLeft);
}

function slideRight() {
    var blogDiv = document.getElementById("blog");
    var mainDiv = document.getElementById("main");
    var projectsDiv = document.getElementById("projects");

    if(currentView === 1){
        mainDiv.style.left = "100%";
        projectsDiv.style.left = "0%";
        blogDiv.style.left = "200%";
        currentView--;
    } else if(currentView === 2) {
        mainDiv.style.left = "0%";
        projectsDiv.style.left = "-100%";
        blogDiv.style.left = "100%";
        currentView--
    }
}

function slideLeft() {
    var blogDiv = document.getElementById("blog");
    var mainDiv = document.getElementById("main");
    var projectsDiv = document.getElementById("projects");

    if(currentView === 0){
        mainDiv.style.left = "0%";
        projectsDiv.style.left = "-100%";
        blogDiv.style.left = "100%";
        currentView++;
    } else if(currentView === 1) {
        mainDiv.style.left = "-100%";
        projectsDiv.style.left = "-200%";
        blogDiv.style.left = "0%";
        currentView++
    }
}