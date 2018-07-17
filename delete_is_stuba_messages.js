// ==UserScript==
// @name         Clean is.stuba.sk messages
// @namespace    dano.plaskur@gmail.com
// @version      0.1
// @description  free up space
// @author       Daniel Plaskur
// @match        https://is.stuba.sk/*
// @grant        none
// ==/UserScript==

(function() {
    document.getElementsByName("menu_akce")[0].value = "vymazat";
    document.getElementsByName("oznac_vse")[0].click();
    document.getElementsByName("provest_akci")[0].click();
    //location.reload();
})();
