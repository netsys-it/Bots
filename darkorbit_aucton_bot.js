// ==UserScript==
// @name        Darkorbit auction bot
// @namespace   http://int10.darkorbit.bigpoint.com/*
// @description Bot for darkorbit auction
// @include     http://int10.darkorbit.bigpoint.com/indexInternal.es?action=internalAuction
// @version     1
// @grant       none
// ==/UserScript==
var collumns = document.getElementsByClassName('auction_item_name_col');
var btn_place_bid = document.getElementById('auction_place_bid');
var LGFMAX = 15000000;
var LGF = 37;
var debug = true;
/**
* Start program
**/
setTimeout(function (){
  var myBet = checkUser(LGF);
  if(debug){
    console.log("[MYBET]"+myBet);
  }
  if(!myBet && getMax(LGF) <= LGFMAX){
    if(debug){
      console.log("[BET][Place bet]-"+getMax(LGF));
    }
    placeBet(LGF);
  }else{
    if(debug){
      console.log("[BET][Check bet]-"+getMax(LGF));
    }
    checkTime();
  }
},10000);
/**
* Place bet in auction
**/
function placeBet(possition){
  if(debug){
    console.log("[ITEM]["+(possition-1)+"]-"+collumns[possition-1].innerHTML.replace(/\ /g,'').replace(/\n/g,''));
  }
  collumns[possition-1].click();
  btn_place_bid.click();
  setTimeout(function(){
    window.location.href = "indexInternal.es?action=internalAuction";
  },2000);
}
/**
* Function for get highest bet in auction
**/
function getMax(possition){
  var max = parseFloat(document.getElementsByClassName('auction_item_current')[possition].innerHTML.replace(/\ /g,'').replace(/\./g,''));
  if(debug){
    console.log("[MAX]["+possition+"]-"+max);
  }
  return max;
}
/**
* Function for check if is me in auction bet
**/
function checkUser(possition){
  var user = document.getElementsByClassName('auction_item_highest')[possition].innerHTML;
  if(debug){
    console.log("[USER]["+possition+"]-"+user.replace(/\ /g,'').replace(/\n/g,''));
  }
  return user.indexOf('FЭДЯ') !== -1 ? true : false;
}
/**
* Function for check auction time
**/
function checkTime(){
  var end_timer;
  var timer = setInterval(function(){
    end_timer = document.getElementsByClassName('countdown_item')[0].innerHTML;
    if(debug){
      console.log(end_timer);
    }
    if(end_timer === "00:25"){
      if(debug){
        console.log("[TIME]");
      }
      window.location.href = "indexInternal.es?action=internalAuction";
      clearInterval(timer);
    }
  },1000);
}
