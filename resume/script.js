// ================================
// RESUME JAVASCRIPT
// ================================

// Display a message when the page loads
document.addEventListener("DOMContentLoaded", function () {

    console.log("Virginia Njeri Resume loaded successfully.");

});


// ================================
// PROJECT HOVER EFFECT
// ================================

const projects = document.querySelectorAll(".project");

projects.forEach(function (project) {

    project.addEventListener("mouseenter", function () {
        project.style.cursor = "pointer";
    });

});


// ================================
// PRINT RESUME
// ================================

// You can call this function from the browser console
// or add a button that uses onclick="printResume()"

function printResume() {
    window.print();
}