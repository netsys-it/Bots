// ==UserScript==
// @name        BFA
// @namespace   danoplaskur@centrum.sk
// @description Bitefight addventure bot
// @include     http://s14.sk.bitefight.gameforge.com/city/adventure/*
// @version     1
// @grant       none
// ==/UserScript==
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
if(getHealth() >= 10000){
	if(chooses.includes("Začať dobrodružstvo")){
		btn[chooses.indexOf("Začať dobrodružstvo")].click();
	}else if(chooses.includes("Pokračovať (3 AB)")){
		btn[chooses.indexOf("Pokračovať (3 AB)")].click();
	}else if(chooses.includes("Pokračovať")){
		btn[chooses.indexOf("Pokračovať")].click();
	}else if(chooses.includes("Vyrabovať mesto")){
		btn[chooses.indexOf("Vyrabovať mesto")].click();
	}else if(chooses.includes("Vyrabovať")){
		btn[chooses.indexOf("Vyrabovať")].click();
	}else if(chooses.includes("Zožrať")){
		btn[chooses.indexOf("Zožrať")].click();
	}else if(chooses.includes("Eskortovať")){
		btn[chooses.indexOf("Eskortovať")].click();
	}else if(chooses.includes("Čeliť protivníkovi") && getHealth() >= 10000){
		btn[chooses.indexOf("Čeliť protivníkovi")].click();
	}else if(chooses.includes("Zaútočiť") && getHealth() >= 10000){
		btn[chooses.indexOf("Zaútočiť")].click();
	}else if(chooses.includes("Nájsť lepšiu cestu")){
		btn[chooses.indexOf("Nájsť lepšiu cestu")].click();
	}else if(chooses.includes("Hľadať šťastie v nešťastí")){
		btn[chooses.indexOf("Hľadať šťastie v nešťastí")].click();
	}else if(chooses.includes("Vzdorovať")){
		btn[chooses.indexOf("Vzdorovať")].click();
	}else{
		if(getHealth() >= 10000){
			btn[Math.floor((Math.random() * btn.length) + 1)].click();
		}
	}
}
// Get health
function getHealth(){
	return parseInt(document.getElementsByClassName('gold')[0].innerHTML.split(";")[14].split("&")[0]*1000);
}
