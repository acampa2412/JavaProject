﻿var span = document.createElement("span");
span.innerHTML = "My Gram";

var div = document.getElementById("Container");

div.appendChild(span);

var loginButton = document.createElement("button");
loginButton.innerHTML = "Log In";

div.appendChild(loginButton);

var signUpButton = document.createElement("button");
signUpButton.innerHTML = "Sign Up";

div.appendChild(signUpButton);

var lineBreak = document.createElement("br");

div.appendChild(lineBreak);

var image1 = document.createElement("span");
image1.innerHTML = "Image 1";

div.appendChild(image1);

var image2 = document.createElement("span");
image2.innerHTML = "Image 2";

div.appendChild(image2);

var image3 = document.createElement("span");
image3.innerHTML = "Image 3";

div.appendChild(image3);

var image4 = document.createElement("span");
image4.innerHTML = "Image 4";

div.appendChild(image4);

var image5 = document.createElement("span");
image5.innerHTML = "Image 5";

div.appendChild(image5);

var lineBreak2 = document.createElement("br");

div.appendChild(lineBreak2);

var about = document.createElement("span");
about.innerHTML = "About";

div.appendChild(about);

var blog = document.createElement("span");
blog.innerHTML = "Blog";

div.appendChild(blog);

var jobs = document.createElement("span");
jobs.innerHTML = "Jobs";

div.appendChild(jobs);

var help = document.createElement("span");
help.innerHTML = "Help";

div.appendChild(help);

var lineBreak3 = document.createElement("br");

div.appendChild(lineBreak3);

var english = document.createElement("span");
english.innerHTML = "English";

div.appendChild(english);

var year = document.createElement("span");
year.innerHTML = "2021";

div.appendChild(year);

var span2 = document.createElement("span");
span2.innerHTML = "My Gram";

div.appendChild(span2);

var aNumber = 2;
var aString = "We learned about strings";
var aBoolean = true;

console.log(aNumber);
console.log(aString);
console.log(aBoolean);

function MultiplyNumbers(x, y) {
    var results = x * y;
    console.log(results);
}
MultiplyNumbers(4, 48);

var myString = "     This is my string to be cut.         ";
var myString2 = myString.trim();
var cut = myString2.substring(0, 4);

console.log(cut);