function WhatMakes() {
  var audio = document.getElementById("myAudio");
  audio.play();
}

function pause() {
  var audio = document.getElementById("myAudio");
  audio.pause(); 
}

function Fight() {
  var audio = document.getElementById("myAudio1");
  audio.play(); 
}

function pause1() {
  var audio = document.getElementById("myAudio1");
  audio.pause(); 
}

function Perfect() {
  var audio = document.getElementById("myAudio2");
  audio.play(); 
}

function pause2() {
  var audio = document.getElementById("myAudio2");
  audio.pause(); 
}

function Party() {
  var audio = document.getElementById("myAudio3");
  audio.play(); 
}

function pause3() {
  var audio = document.getElementById("myAudio3");
  audio.pause(); 
}

setTimeout(function(){var med = document.getElementsByClassName("media"); var i; for(i in med) { med[i].pause(); } }, 0  * 60 * 1000);

var seconds = 60;
   function secondPassed() {
   var minutes = Math.round((seconds - 30)/60);
   var remainingSeconds = seconds % 60;
   if (remainingSeconds < 10) {
      remainingSeconds = "0" + remainingSeconds; 
   }
   document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
   if (seconds == 0) {
    clearInterval(countdownTimer);
    window.location='index.html';
   } else {
    seconds--;
   }
   }
   var countdownTimer = setInterval('secondPassed()', 1000); 