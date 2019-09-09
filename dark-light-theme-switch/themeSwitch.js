"use strict";


let darkStyleFileName = "style-dark.css";




// On page load, check if flag exists in `sessionStorage`. If yes (redirection
// from another page), set theme to "dark". If no (fresh load), do nothing -
// i.e., load "light"/default theme by default.
(function() {
    if (sessionStorage.darkTheme!==undefined) {
        addDarkStyle();
        setButtonText("Light");
    }   
})();




// Set theme based on the text in the switch button.
// If theme is changed, update button text and change flag in `sessionStoarge`
// accordingly.
function switchTheme() {
    let switchBtn = document.getElementById('switchBtn');
    if (switchBtn.innerText=="Dark") {
        addDarkStyle();
        setButtonText("Light");
        sessionStorage.setItem('darkTheme', true);
    } else if (switchBtn.innerText=="Light") {
        removeDarkStyle();
        setButtonText("Dark");
        sessionStorage.removeItem('darkTheme');
    }
}




// Create a new <link> tag for dark theme styles and append it to document
// head, so "light"/default theme styles are overridden.
function addDarkStyle() {
    let style = document.createElement('link');
    style.rel = "stylesheet";
    style.href = darkStyleFileName;
    document.head.appendChild(style);
}




// Remove <link> tag for "dark" theme, so existing "light"/default styles
// are applied again.
function removeDarkStyle() {
    let arg = "link[rel='stylesheet'][href='" + darkStyleFileName + "']";
    let darkStyle = document.head.querySelector(arg);
    darkStyle.remove();
}




// Update button text by putting the name of the theme that is currently not
// applied to the page.
function setButtonText(otherThemeName) {
    let switchBtn = document.getElementById('switchBtn');
    switchBtn.innerText = otherThemeName;
}