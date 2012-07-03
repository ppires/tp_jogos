//#pragma strict

var clicando:boolean;
var podeInteragir:boolean;

function Start () {
	rigidbody.useGravity=false;
	podeInteragir=true;
	clicando=false;
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
}

function FixedUpdate() {				//Um update da física do objeto (rigidbody)
   if(clicando) {
   		//A componente velocidadeY(pra cima) será -100*seno(angulo-inclinação)
   		//A componente velocidade
		rigidbody.velocity=Vector3(-(Mathf.Sin(transform.eulerAngles.y*Mathf.Deg2Rad))*100,(Mathf.Sin(transform.eulerAngles.x*Mathf.Deg2Rad))*100,-(Mathf.Cos(transform.eulerAngles.x*Mathf.Deg2Rad))*100);

		rigidbody.useGravity=true;
		podeInteragir=false;
		clicando=false;
	}
}

function OnCollisionEnter(){
    print("Pregou!!!");
	rigidbody.useGravity=false;
    rigidbody.velocity=Vector3(0,0,0);
    rigidbody.inertiaTensor = Vector3(0,0,0);
    rigidbody.angularVelocity = Vector3(0,0,0);
}