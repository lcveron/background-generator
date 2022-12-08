var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("radBgBtn");




function setGradient(event) {
	console.log(event);
	// if(color1v === "" && color2v === ""){
	// 	console.log("click");
	// }
	
	color1v = color1.value;
	color2v = color2.value;
	
	if(event.type === "click"){
		color1v = "#"+Math.floor(Math.random()*16777215).toString(16);
		color2v = "#"+Math.floor(Math.random()*16777215).toString(16);
	}

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1v
	+ ", " 
	+ color2v 
	+ ")";

	css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setGradient);

document.addEventListener('DOMContentLoaded', setGradient);


//console.log(btn);


/*function setRandomGradient() {
	//console.log("click");
	
	console.log(randomColor1 + " - " + randomColor2);
	body.style.background = 
	"linear-gradient(to right, #" 
	+ randomColor1
	+ ", #" 
	+randomColor2 
	+ ")";

	css.textContent = body.style.background + ";";
}

btn.addEventListener("click", setRandomGradient);*/


//window.addEventListener('load', fn);