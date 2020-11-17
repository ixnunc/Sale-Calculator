// variables for input values

const base = document.querySelector('#base');
const custom = document.querySelector('#custom');
const total = document.querySelector('#total');

// functions to calculate total cost

document.querySelector('#c15').addEventListener('click', () => {
	total.value = (base.value * .85).toFixed(2);
});

document.querySelector('#c25').addEventListener('click', () => {
	total.value = (base.value * .75).toFixed(2);
});

document.querySelector('#c45').addEventListener('click', () => {
	total.value = (base.value * .55).toFixed(2);
});

document.querySelector('#c65').addEventListener('click', () => {
	total.value = (base.value * .35).toFixed(2);
});

// conditional to return empty value if custom input is empty
document.querySelector('.equals').addEventListener('click', () => {
	if (custom.value > 0) {
		total.value = (base.value - (base.value * custom.value/100)).toFixed(2);
	} else {
		total.value = '';
	}
});

// clear button to start over
document.querySelector('#clear').addEventListener('click', () => {
	base.value = '';
	custom.value = '';
	total.value = '';
});
