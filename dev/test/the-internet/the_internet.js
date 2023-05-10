window.onload = init;

var mainIn;
var subbmitBtn;
var mainOut;
var versionLbl;

var lowerMainIn;

var versionNum;
var versionLet;

function init() {
	mainIn = document.getElementById("mainIn");
	subbmitBtn = document.getElementById("subbmitBtn");
	mainOut = document.getElementById("mainOut");
	versionLbl = document.getElementById("version");
	
	versionNum = "0.0.3";
	versionLet = "Alpha";
	
	setVersion();
	
	subbmitBtn.onclick = subbmitBtnOnClick;
};

function setVersion() { versionLbl.textContent = "Version: " + versionLet + " " + versionNum; };

function setMainOut(text) { mainOut.textContent = text; };

function subbmitBtnOnClick() {
	lowerMainIn = mainIn.value.toLowerCase();
	
	if (lowerMainIn == "hello world") {
		hello_world();
	} else if (lowerMainIn == "вася") {
		vasya();
	} else if (lowerMainIn == "я помню") {
		forget();
	};
	
	mainIn.value = "";
};

function vasya() { setMainOut("Типо пупкин"); };
function hello_world() { setMainOut("Request received"); };
function forget() { setMainOut("а нет уже забыл"); };
