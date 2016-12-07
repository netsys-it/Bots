// ==UserScript==
// @name        Gladiatus bot
// @namespace   https://github.com/netsys-it/Bots/blob/master/gladiatus.js
// @description Bot for gladiatus game
// @include     https://s15-sk.gladiatus.gameforge.com/*
// @version     1
// @grant       none
// ==/UserScript==
var animalClass = document.getElementsByClassName('expedition_button');
var animals = {"POTKAN":0,"RYS":1,"VLK":2,"MEDVED":3};
var naVypravu = document.getElementsByClassName('cooldown_bar_text')[0];

function getLvl(){
 return parseInt(document.getElementById('header_values_level').innerHTML);
}

function chooseAnimal(){
 if(getLvl() < 3){
    return animals.POTKAN;
 }
 else if(getLvl() > 2 && getLvl() < 6){
    return animals.RYS;
 }
 else if(getLvl() > 5 && getLvl() < 9){
    return animals.VLK;
 }
 else{
    return animals.MEDVED; 
 }
}

function attackAnimal(){
 //document.getElementsByClassName('cooldown_bar_link')[0].click();
 animalClass[chooseAnimal()].click(); 
}

function checkTime(){
  var end_timer;
  var timer = setInterval(function(){
    end_timer = document.getElementById('cooldown_bar_fill_expedition').innerHTML;
    if(end_timer === "Na výpravu"){
      clearInterval(timer);
      attackAnimal();
    }else{
      console.log(end_timer);
    }
  },1000);
}

checkTime();
