// JavaScript Document 
//const bubList = document.getElementById("bubbles");

function scrollBottom() {window.scrollBy(0, 999999);}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", scrollBottom, false)
else if (window.attachEvent) window.attachEvent("onload", scrollBottom);
//new bubble

//let bubListItem = document.createElement('li');
//bubListItem.getElementById = 'addmore';



var cucumantal = 1;
var chipsantal = 1;
var havreantal = 1;
var hvedetoastantal = 1;
var kyllingebrystantal = 1;
var milkantal = 1;
var meatantal = 1;
var butterantal = 1;
var yogurtantal = 1;
 
var cucumantalEl = document.getElementById('cucumantal');
var chipsantalEl = document.getElementById('chipsantal');
var havreantalEl = document.getElementById('havreantal');
var hvedetoastantalEl = document.getElementById('hvedeantal');
var  kyllingebrystantalEl = document.getElementById('kyllingantal');
var milkantalEl = document.getElementById('milkantal');
var meatantalEl = document.getElementById('meatantal');
var butterantalEl = document.getElementById('butterantal');
var yogurtantalEl = document.getElementById('yogurtantal');




document.getElementById('chipsstk').innerHTML = chipsantal + " " + "stk" ;
document.getElementById('cucumstk').innerHTML = cucumantal + " " + "stk" ;
document.getElementById('meatstk').innerHTML = meatantal + " " + "stk" ;
document.getElementById('havrestk').innerHTML = havreantal + " " + "stk" ;
document.getElementById('milkstk').innerHTML = milkantal + " " + "stk" ;


const cucumoutput =document.getElementById('cucumstk');

//agurk counter
function cucumplus() {
  cucumantal++;
  cucumantalEl.value = cucumantal;
}

function cucumminus() {
  if (cucumantal > 1)
  cucumantal--;
  cucumantalEl.value = cucumantal;
}



//chips counter

function chipsplus() {
  chipsantal++;
  chipsantalEl.value = chipsantal;
}

function chipsminus() {
  if (chipsantal > 1)
  chipsantal--;
  chipsantalEl.value = chipsantal;
}


function hvedeplus() {
  hvedetoastantal++;
  hvedetoastantalEl.value = hvedetoastantal;
}

function hvedeminus() {
  if (hvedetoastantal > 1)
  hvedetoastantal--;
  hvedetoastantalEl.value = hvedetoastantal;
}
function kyllingplus() {
  kyllingebrystantal++;
  kyllingebrystantalEl.value = kyllingebrystantal;
}

function kyllingminus() {
  if (kyllingebrystantal > 1)
  kyllingebrystantal--;
  kyllingebrystantalEl.value = kyllingebrystantal;
}

function milkplus() {
  milkantal++;
  milkantalEl.value = milkantal;
}

function milkminus() {
  if (milkantal > 1)
  milkantal--;
  milkantalEl.value = milkantal;
}


function meatplus() {
  meatantal++;
  meatantalEl.value = meatantal;
}

function meatminus() {
  if (meatantal > 1)
  meatantal--;
  meatantalEl.value = meatantal;
}

function butterplus() {
  butterantal++;
  butterantalEl.value = butterantal;
}

function butterminus() {
  if (butterantal > 1)
  butterantal--;
  butterantalEl.value = butterantal;
}


function yogurtplus() {
  yogurtantal++;
  yogurtantalEl.value = yogurtantal;
}

function yogurtminus() {
  if (yogurtantal > 1)
  yogurtantal--;
  yogurtantalEl.value = yogurtantal;
}

const key = cucumantalEl.value;


for (let i = 0; i < localStorage.length; i++){
	const key = localStorage.key(i);
	const value = localStorage.getItem(key);
	
	cucumoutput.innerHTML += key , value;
}

//bubList.prepend(bubListItem);