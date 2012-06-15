//#pragma strict

var clicando:boolean;
var podeInteragir:boolean;

function Start () {
	rigidbody.useGravity=false;
	podeInteragir=true;
}

function Update(){
	if(podeInteragir){ clicando=Input.GetKey("space");}
	else{ clicando=false;}
	if (Input.GetKey ("up"))    // Slowly rotate the object around its X axis at 1 degree/second.
    	transform.Rotate(2*Vector3.right*Time.deltaTime);
	if (Input.GetKey ("down")) transform.Rotate(-2*Vector3.right*Time.deltaTime);
}

function FixedUpdate() {				//Um update da física do objeto (rigidbody)
   if(clicando) {
   		//A componente velocidadeY será -100*seno(angulo-inclinação)
		rigidbody.velocity=Vector3(0,-(Mathf.Sin(transform.eulerAngles.x*Mathf.Deg2Rad))*100,-100);
		rigidbody.useGravity=true;
		podeInteragir=false;
	}
}

function OnCollisionEnter(){
    print("Pregou!!!");
	rigidbody.useGravity=false;
    rigidbody.velocity=Vector3(0,0,0);
}