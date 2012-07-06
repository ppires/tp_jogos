#pragma strict

var clicando:boolean;
var podeInteragir:boolean;
var cameraTransform:Transform;
var horaLancamento:float;
var relogio:float;

function Start () {
	rigidbody.useGravity=false;
	podeInteragir=true;
	clicando=false;
	horaLancamento=99999;
	relogio=0;
}

function Update(){
	if(podeInteragir){ clicando=Input.GetKey("space");}
/*
	// Slowly rotate the object around its X axis at 2 degree/second.
	if (Input.GetKey ("up"))
    	transform.Rotate(2*Vector3.left*Time.deltaTime);
	if (Input.GetKey ("down"))
		transform.Rotate(-2*Vector3.left*Time.deltaTime);
	
	// Slowly rotate the object around its Y axis at 2 degree/second.
	if (Input.GetKey ("left"))
    	transform.Rotate(2*Vector3.up*Time.deltaTime);
	if (Input.GetKey ("right")) transform.Rotate(-2*Vector3.up*Time.deltaTime);
*/
	//Mostra a angulação em cada eixo
//		print("graus X = " + transform.eulerAngles.x);
//   	print("graus Y = " + transform.eulerAngles.y);
//   	print("graus Z = " + transform.eulerAngles.z);
	relogio=Time.time;
	if((relogio-horaLancamento)>7){
		Application.LoadLevel(2);
	}
}

function FixedUpdate() {				//Um update da física do objeto (rigidbody)
   if(clicando) {
   		horaLancamento=Time.time;
   		//A componente velocidadeY(pra cima) será -100*seno(angulo-inclinação)
   		//A componente velocidade
		rigidbody.velocity=Vector3(-(Mathf.Sin(transform.eulerAngles.y*Mathf.Deg2Rad))*100,(Mathf.Sin(transform.eulerAngles.x*Mathf.Deg2Rad))*100,-(Mathf.Cos(transform.eulerAngles.x*Mathf.Deg2Rad))*100);

		rigidbody.useGravity=true;
		podeInteragir=false;
		clicando=false;
		
//		Camera.current = Camera.main;
		cameraTransform = Camera.main.transform;
		cameraTransform.parent = transform;
		cameraTransform.localPosition = Vector3.up*5 + Vector3.forward*20;

//		cameraTransform.LookAt(transform);
	}
}

function OnCollisionEnter(){
	horaLancamento=Time.time;
    print("Pregou!!!");
	rigidbody.useGravity=false;
    rigidbody.velocity=Vector3(0,0,0);
    rigidbody.inertiaTensor = Vector3(0,0,0);
    rigidbody.angularVelocity = Vector3(0,0,0);
}