// This is the JavaScript code that defines the variables and the functions for the web pages

// These are the variables that you can customize to change the content and the appearance of the web pages
var question = "Will you be my sunflower?"; // This is the variable that holds the question on the first page
var option1 = "Ofcourse baby"; // This is the variable that holds the first option for the answer
var option2 = "I already am my love"; // This is the variable that holds the second option for the answer
var message = "Happy Rose Day my Sunflower :>"; // This is the variable that holds the message on the second page
var animation = "animation.gif"; // This is the variable that holds the name of the animation file on the second page
var backgroundColor = "yellow"; // This is the variable that holds the background color of the second page

// This is the function that gets the elements by their class name and sets their inner text to the corresponding variables
function setElements() {
  document.getElementsByClassName("question")[0].innerText = question;
  document.getElementsByClassName("option")[0].innerText = option1;
  document.getElementsByClassName("option")[1].innerText = option2;
}

// This is the function that creates a new window and writes the HTML code for the second web page
function goToNextPage() {
  var newWindow = window.open("", "_blank"); // This is the variable that holds the new window object
  // This is the variable that holds the HTML code for the second web page
  var html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Rose Day</title>
      <style>
        /* This is the style for the body that sets the background-color, margin, and display properties */
        body {
          background-color: ${backgroundColor};
          margin: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        /* This is the style for the message that sets the font-size, font-weight, color, and text-shadow properties */
        .message {
          font-size: 5em;
          font-weight: bold;
          color: white;
          text-shadow: 2px 2px 4px black;
        }

        /* This is the style for the animation that sets the width, height, and margin properties */
        .animation {
          width: 50%;
          height: 50%;
          margin: 2em;
        }
      </style>
    </head>
    <body>
      <!-- This is the heading tag that displays the message -->
      <h1 class="message">${message}</h1>
      <!-- This is the image tag that displays the animation -->
      <img src="${animation}" alt="Animation" class="animation">
    </body>
    </html>
  `;
  newWindow.document.write(html); // This is the method that writes the HTML code to the new window
}

// This is the event listener that calls the setElements function when the window is loaded
window.addEventListener("load", setElements);