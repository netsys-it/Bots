// ==UserScript==
// @name        Bitefight adventure bot
// @namespace   danoplaskur@centrum.sk
// @description Bot for bitefight
// @include     http://s14.sk.bitefight.gameforge.com/city/adventure/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
// @version     3
// @grant       none
// ==/UserScript==


//Spent all money to clan
setTimeout(function(){
	//var x = $(".gold")[2].innerHTML.split(' ')[6];
	//$("th input")[0].value=x;
  //$(".btn")[1].click();
},2000);
// Empty array
var chooses = [];
var btn = document.getElementsByClassName('btn'); 
// Add chooses to array
for(i=0;i<btn.length;i++){
	chooses.push(btn[i].innerHTML);
}
// Set to adventure url
window.location.href = "http://s14.sk.bitefight.gameforge.com/city/adventure/";
//Choose decision if array contains else random decision
if(getHealth() > 5000){
	if(getHealth() > 10000){
		if(chooses.includes("Pokračovať (3 AB)")){
			btn[chooses.indexOf("Pokračovať (3 AB)")].click();
		}else if(chooses.includes("Pokračovať")){
			btn[chooses.indexOf("Pokračovať")].click();
		}else if(chooses.includes("Vyrabovať")){
			btn[chooses.indexOf("Vyrabovať")].click();
		}else if(chooses.includes("Zožrať")){
			btn[chooses.indexOf("Zožrať")].click();
		}else if(chooses.includes("Vhodiť mincu")){
			btn[chooses.indexOf("Vhodiť mincu")].click();
		}else if(chooses.includes("Vstúpiť do lesa")){
			btn[chooses.indexOf("Vstúpiť do lesa")].click();
		}else if(chooses.includes("Vstúpiť do jaskyne")){
			btn[chooses.indexOf("Vstúpiť do jaskyne")].click();
		}else if(chooses.includes("Zostať na tomto mieste")){
			btn[chooses.indexOf("Zostať na tomto mieste")].click();
		}else if(chooses.includes("Eskortovať")){
			btn[chooses.indexOf("Eskortovať")].click();
		}else if(chooses.includes("Čeliť protivníkovi")){
			btn[chooses.indexOf("Čeliť protivníkovi")].click();
		}else if(chooses.includes("Zaútočiť")){
			btn[chooses.indexOf("Zaútočiť")].click();
		}else if(chooses.includes("Nájsť lepšiu cestu")){
			btn[chooses.indexOf("Nájsť lepšiu cestu")].click();
		}else if(chooses.includes("Hľadať šťastie v nešťastí")){
			btn[chooses.indexOf("Hľadať šťastie v nešťastí")].click();
		}else if(chooses.includes("Vzdorovať")){
			btn[chooses.indexOf("Vzdorovať")].click();
		}else{
				btn[Math.floor((Math.random() * btn.length) + 1)].click();
		}
	}else{
		if(chooses.includes("Pokračovať")){
			btn[chooses.indexOf("Pokračovať")].click();
		}else if(chooses.includes("Vhodiť mincu")){
			btn[chooses.indexOf("Vhodiť mincu")].click();
		}else if(chooses.includes("Pozorovať")){
			btn[chooses.indexOf("Pozorovať")].click();
		}else if(chooses.includes("Zožrať")){
			btn[chooses.indexOf("Zožrať")].click();
		}else if(chooses.includes("Vstúpiť do lesa")){
			btn[chooses.indexOf("Vstúpiť do lesa")].click();
		}else if(chooses.includes("Vstúpiť do jaskyne")){
			btn[chooses.indexOf("Vstúpiť do jaskyne")].click();
		}else if(chooses.includes("Zostať na tomto mieste")){
			btn[chooses.indexOf("Zostať na tomto mieste")].click();
		}else if(chooses.includes("Špehovať")){
			btn[chooses.indexOf("Špehovať")].click();
		}else if(chooses.includes("Schovať sa")){
			btn[chooses.indexOf("Schovať sa")].click();
		}else if(chooses.includes("Zavraždiť")){
			btn[chooses.indexOf("Zavraždiť")].click();
		}else if(chooses.includes("Nájsť lepšiu cestu")){
			btn[chooses.indexOf("Nájsť lepšiu cestu")].click();
		}else if(chooses.includes("Hľadať šťastie v nešťastí")){
			btn[chooses.indexOf("Hľadať šťastie v nešťastí")].click();
		}else if(chooses.includes("Vzdorovať")){
			btn[chooses.indexOf("Vzdorovať")].click();
		}else{
				btn[Math.floor((Math.random() * btn.length) + 1)].click();
		}
	}
}
// Get health
function getHealth(){
	return parseInt(document.getElementsByClassName('gold')[0].innerHTML.split(";")[14].split("&")[0]*1000);
}
