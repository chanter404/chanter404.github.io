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
	if (mainIn.value.toLowerCase() == "hello there") {
		hello_there();
	} else if (mainIn.value.toLowerCase() == "выпей чая и не ссы") {
		vasek();
	};
};

function vasek() {
	mainIn.value = "";
	mainOut.textContent = "все";
};

function hello_there() {
	mainIn.value = "";
	mainOut.textContent = "Hi, man!";
};
