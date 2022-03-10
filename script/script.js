
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h4 = document.querySelector("h4");

function changerGradient() {
	body.style.background = "linear-gradient(to left, " + color1.value + ", " 
	+ color2.value +")";
	h4.textContent = body.style.background + ";";
}

color1.addEventListener("input", changerGradient);
color2.addEventListener("input", changerGradient);








