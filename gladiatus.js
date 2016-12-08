// ==UserScript==
// @name        Gladiatus bot
// @namespace   https://github.com/netsys-it/Bots/blob/master/gladiatus.js
// @description Bot for gladiatus game
// @include     https://s15-sk.gladiatus.gameforge.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1.0.2
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
  animalClass[chooseAnimal()].click();
  return;
}

var skills = {"SILA":0,"ZRUCNOST":1,"OBRATNOST":1,"ZDATNOST":0,"CHARIZMA":3,"INTELIGENCIA":0};

function improveSkill(){
  var btn = document.getElementsByClassName('training_button');
  
  if(btn.length == 6 ){
    btn[skills.ZRUCNOST].click();
  }else if(btn.length == 5 ){
    btn[skills.CHARIZMA].click();
  }else if(btn.length == 4){
    btn[skills.OBRATNOST].click();
  }else if(btn.length == 3){
    btn[skills.SILA].click();  //sila
  }else if(btn.length == 2 ){
    btn[skills.ZDATNOST].click(); 	// zdatnost
  }else if(btn.length == 1){
    btn[skills.INTELIGENCIA].click();  //inteligencia
  }
 return;
}

attackAnimal();
improveSkill();
