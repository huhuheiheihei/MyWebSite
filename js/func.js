var draaiSnelheidX = 75;
var draaiSnelheidY = 55;

function beweeg(xPos, yPos) {
	var winHoogte = window.innerHeight / 6;
	var winBreedte = window.innerWidth / 2;
	
	document.getElementById("info").style.setProperty("--mouseX", (xPos - winBreedte) / draaiSnelheidX + "deg"); // verander "/" naar *, + of - en je kan het object draaien.
	document.getElementById("info").style.setProperty("--mouseY", (yPos - winHoogte) / -draaiSnelheidY + "deg"); // verander "/" naar *, + of - en je kan het object draaien.
}

document.addEventListener("mousemove", function(e) {
	beweeg(e.clientX, e.clientY);
});

document.addEventListener("touchmove", function(e) {
	e.preventDefault();
	var touch = e.targetTouches[0];
	if (touch) {
		beweeg(touch.pageX, touch.pageY);
	}
});