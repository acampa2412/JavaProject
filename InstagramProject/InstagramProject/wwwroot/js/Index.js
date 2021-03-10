"use strict";

var myBirthday = new Date(1993, 2, 28);
var myGirlfriendBirthday = new Date(1995, 5, 26);

if (myBirthday > myGirlfriendBirthday) {
    document.write("My birthday is greater than her birthday.");
}
else if (myBirthday == myGirlfriendBirthday) {
    document.write("We were born the same day.")
}
else {
    document.write("My girlfriend's birthday is greater.");
}