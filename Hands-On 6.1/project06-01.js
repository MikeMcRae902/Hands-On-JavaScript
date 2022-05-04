"use strict";

/* JavaScript 7th Edition
Chapter 6
Project 06-01
Project to validate a form used for setting up a new account
Author: Mike McRae, W0224278
Date: 03.05.2022
Filename: project06-01.js
*/

var submitButton=document.getElementById('submitButton');
var pwd;
var pwd2;
var regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm;
submitButton.addEventListener('click',function(){
pwd=document.getElementById('pwd').value;
pwd2=document.getElementById('pwd2').value;
var test=!regex.test(pwd);
if(test||pwd.length<8){
console.log('here')
event.preventDefault();
alert("Your password must be at least 8 characters with at least one letter and one number");
}

else if(pwd!=pwd2){
event.preventDefault();
alert("Your passwords must match");
}
})