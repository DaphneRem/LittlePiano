// *********************** SOUNDS ********************** //

var dO = document.getElementById("do");
var re = document.getElementById("re");
var mi = document.getElementById("mi");
var fa = document.getElementById("fa");
var sol = document.getElementById("sol");
var la = document.getElementById("la");
var si = document.getElementById("si");
var dO2 = document.getElementById("do2");


dO.onclick = function() {
    var audioElement = document.createElement('audio');
  	audioElement.setAttribute('src', './notes/do.wav');
  	audioElement.play();
};

re.onclick = function() {
    var audioElement = document.createElement('audio');
  	audioElement.setAttribute('src', './notes/re.wav');
  	audioElement.play();
};

mi.onclick = function() {
    var audioElement = document.createElement('audio');
  	audioElement.setAttribute('src', './notes/mi.wav');
  	audioElement.play();
};

fa.onclick = function() {
    var audioElement = document.createElement('audio');
  	audioElement.setAttribute('src', './notes/fa.wav');
  	audioElement.play();
};

sol.onclick = function() {
    var audioElement = document.createElement('audio');
  	audioElement.setAttribute('src', './notes/sol.wav');
  	audioElement.play();
};

la.onclick = function() {
    var audioElement = document.createElement('audio');
  	audioElement.setAttribute('src', './notes/la.wav');
  	audioElement.play();
};
si.onclick = function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './notes/si.mp3');
    audioElement.play();
};
dO2.onclick = function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './notes/do2.wav');
    audioElement.play();
};


// *********************** Change la couleur à chaque click *5 ********************** //


var notes = document.getElementsByClassName("notes");

Array.prototype.forEach.call(notes, function(box) {

 function colors() {

   if (box.style.backgroundColor == "white") {
      box.style.backgroundColor = "rgb(186, 142, 128)" // #BA8E80 (beige)
    }
    else if (box.style.backgroundColor == "rgb(186, 142, 128)"){ 
      box.style.backgroundColor = "rgb(237, 105, 63)"     // #ED693F (orange)
    }
    else if (box.style.backgroundColor == "rgb(237, 105, 63)"){ 
      box.style.backgroundColor = "rgb(135, 90, 98)"     // #875A62 (marron)
    }
    else if (box.style.backgroundColor == "rgb(135, 90, 98)"){ 
      box.style.backgroundColor = "rgb(106, 148, 100)"    // #6A9464 (vert)
    }
    else if (box.style.backgroundColor == "rgb(106, 148, 100)"){ 
      box.style.backgroundColor = "rgb(144, 186, 105)"    // #90BA69 (vert clair)
    }
   else {
    box.style.backgroundColor = "white"
   };
 }

 box.addEventListener("click", colors);
});


// *********************** Change une seule couleur au click ********************** //

// var notes = document.getElementsByClassName("notes");

// Array.prototype.forEach.call(notes, function(box) {

//   box.onclick = function() {
//     box.style.backgroundColor = "red";
// }
// });

