"use strict";
var date

var date = new Date(2028, 2, 28);

var format = (date.getMonth() + 1).toString().padStart(2, "0") + "/"
    + date.getDate() + "/";

console.log(date);
document.write(date.toLocaleString("zh-HK"))