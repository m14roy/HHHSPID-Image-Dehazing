$(function(){
  $(".grid-item .sliders").twentytwenty({
    before_label:"Input",
    after_label:"Result",
  });
});

var slideIndex = 1;
var prevIndex = 1;
var slideIndex_synth = 1;
var prevIndex_synth = 1;
var slideIndex_abl = 1;
var prevIndex_abl = 1;

showDivsreal(slideIndex);

function displaycirclereal(n){
	var i;
	var mybuttons = document.getElementsByClassName("circlebutton");
	mybuttons[prevIndex-1].style.background="none";
	prevIndex=n;
	mybuttons[n-1].style.background="grey";
}

function plusDivsreal(n) {
  showDivsreal(slideIndex += n);
}

function showDivsreal(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  displaycirclereal(slideIndex);
}

function currentDivreal(n) {
  showDivsreal(slideIndex = n);
  displaycirclereal(slideIndex=n);
}



showDivsynth(slideIndex_synth);
showsynthIPGT(synth_IPGT);


function displaycirclesynth(n){
	var i;
	var mybuttons = document.getElementsByClassName("circlebuttonsynth");
	mybuttons[prevIndex_synth-1].style.background="none";
	prevIndex_synth=n;
	mybuttons[n-1].style.background="grey";
}

function displayIPGTsynth(n){
	var mybuttons= document.getElementsByClassName("syntheticnavbuttonIPGTcomm")
	mybuttons[1-n].style.background="grey";
  mybuttons[1-n].style.color="black";
	mybuttons[n].style.background="black";
  mybuttons[1-n].style.color="white";
}

function plusDivssynth(n) {
  showDivsynth(slideIndex_synth += n);
}

function showDivsynth(n) {
  var i;
  //document.write(slideIndex_synth);
  var x = document.getElementsByClassName("mySlides_Synthetic_outer");
  if (n > x.length) {slideIndex_synth = 1}
  if (n < 1) {slideIndex_synth = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  //document.write(n+" "+slideIndex_synth)
  x[slideIndex_synth-1].style.display = "block";
  
  displaycirclesynth(slideIndex_synth);
  showsynthIPGT(0);
}

function currentDivsynth(n) {
  showDivsynth(slideIndex_synth = n);
  displaycirclesynth(slideIndex_synth=n);
}


function showsynthIPGT(n){
  var x = document.getElementsByClassName("mySlides_Synthetic_outer");
  x[slideIndex_synth-1].getElementsByClassName("compareinputgt")[1-n].style.display="none";
  x[slideIndex_synth-1].getElementsByClassName("compareinputgt")[n].style.display="block";
  displayIPGTsynth(n);
}







showDivsabl(slideIndex_abl);

function displaycircleabl(n){
	var i;
	var mybuttons = document.getElementsByClassName("circlebuttonabl");
	mybuttons[prevIndex_abl-1].style.background="none";
	prevIndex_abl=n;
	mybuttons[n-1].style.background="grey";
}

function plusDivsabl(n) {
  showDivsabl(slideIndex_abl += n);
}

function showDivsabl(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesabl");
  if (n > x.length) {slideIndex_abl = 1}
  if (n < 1) {slideIndex_abl = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex_abl-1].style.display = "block";
  displaycircleabl(slideIndex_abl);
}

function currentDivabl(n) {
  showDivsabl(slideIndex_abl = n);
  displaycircleabl(slideIndex_abl=n);
}