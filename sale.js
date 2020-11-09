	// functions to calculate total
function calc15() {
	document.getElementById("total").value = document.getElementById("base").value * .85;
}

function calc25() {
	document.getElementById("total").value = document.getElementById("base").value * .75;
}

function calc45() {
	document.getElementById("total").value = document.getElementById("base").value * .55;
}

function calc65() {
	document.getElementById("total").value = document.getElementById("base").value * .35;
}
	// function converts user input to sale value
function calcsale() {
	document.getElementById("total").value = document.getElementById("base").value * (100-(document.getElementById("sale_input").value))/100;
}

	// resets variables so user can enter different values; assigned to clear button
function clears() {
	document.getElementById("total").value = "";
	document.getElementById("base").value = "";
	document.getElementById("sale_input").value = "";
}
