// ==UserScript==
// @name         tribalwars.co.uk
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Daniel Plaskúr
// @match        https://uk34.tribalwars.co.uk/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var DEBUG = false
    var i, max;
    var iron = [];
    var send = document.getElementsByClassName('farm_icon farm_icon_a');
    var disabled = document.getElementsByClassName('farm_icon_disabled start_locked farm_icon farm_icon_a');
    var resources = document.getElementsByClassName('res');
    var rnd = Math.floor(Math.random() * 100) + 53;

    if(DEBUG){
        console.log("[VARIABLES]");
        console.log("send: "+send);
        console.log("disabled: "+disabled);
        console.log("resources: "+resources);
        console.log("rnd: "+rnd);
        console.log("[END]");
    }

    if(!disabled[0]){
        for(i=5;i<resources.length;i+=3){
            iron.push(parseInt(resources[i].innerHTML));
        }
        if(DEBUG){
            console.log("iron: "+iron);
        }
        for(i=0;i < iron.length; i++){
            max = Math.max.apply(Math, iron);
            send[iron.indexOf(max) + 1].click();
            if(DEBUG){
                console.log("max: "+iron);
                console.log("send["+iron.indexOf(max) + 1+"]");
            }
            location.reload();
        }
    }
    i=0;
    setInterval(function() {
        if(DEBUG){
            console.log("[setInterval]");
            console.log("Time: "+i);
            console.log("Random time: "+rnd);
            console.log("[END]");
        }
        if(i++ == rnd){
            i = 0;
            location.reload();
        }
    }, 1000);

})();
