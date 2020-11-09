	// setting variables to workable values
let base = 0;
let total = 0;
let sale = (100 - (document.getElementById("sale_input").value))/100;


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

function calcsale() {
	document.getElementById("total").value = document.getElementById("base").value * sale;
}

	// resets variables so user can enter different values; assigned to clear button
function clear() {
	
}