#pragma strict

var mudaCena0:boolean;
var mudaCena1:boolean;
var mudaCena2:boolean;

function Start () {
	mudaCena0=false;
	mudaCena1=false;
	mudaCena2=false;
}

function Update () {
	mudaCena0=Input.GetKey("0");
	mudaCena1=Input.GetKey("1");
	mudaCena2=Input.GetKey("2");

	if(mudaCena0){ Application.LoadLevel(0);}
	if(mudaCena1){ Application.LoadLevel(1);}
	if(mudaCena2){ Application.LoadLevel(2);}
}