window.onload = init;

var mainIn;
var subbmitBtn;
var mainOut;

function init() {
	mainIn = document.getElementById("mainIn");
	subbmitBtn = document.getElementById("subbmitBtn");
	mainOut = document.getElementById("mainOut");
	
	subbmitBtn.onclick = subbmitBtnOnClick;
};

function subbmitBtnOnClick() {
	if (mainIn.value.toLowerCase() == "hello world") {
		hello_world();
	} else if (mainIn.value.toLowerCase() == "вася") {
		vasya();
	};
};

function vasya() {
	mainIn.value = "";
	mainOut.textContent = "Типо пупкин";
};

function hello_world() {
	mainIn.value = "";
	mainOut.textContent = "Request received";
};
