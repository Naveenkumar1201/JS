// click pop up toggle
function toggleDivs() {
    var clickDiv = document.getElementById("clickDiv");
    var contentDiv = document.getElementById("contentDiv");
    var audio = document.getElementById("audioPlayer");
    
    clickDiv.addEventListener('click',()=>{
    
    clickDiv.classList.remove('active')
    clickDiv.classList.add("hidden");
    contentDiv.classList.remove("hidden");
    contentDiv.classList.add("active");

    if( clickDiv.contains('active')){
        audio.play();
    }
    });
    document.addEventListener('click',closeDivs);
}


function closeDivs(event) {
    var clickDiv = document.getElementById("clickDiv");
    var contentDiv = document.getElementById("contentDiv");
    var audio = document.getElementById("audioPlayer");

    // Check if the click is outside the divs
    if (!clickDiv.contains(event.target) && !contentDiv.contains(event.target)) {
        clickDiv.classList.remove("hidden");
        clickDiv.classList.add("active");
        contentDiv.classList.remove("active");
        contentDiv.classList.add("hidden");

        
        // Remove the event listener after hiding the divs
        document.removeEventListener("click", closeDivs);
    }
}