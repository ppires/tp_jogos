#pragma strict

function Start () {

}

function Update () {
	// Slowly rotate the object around its X axis at 2 degree/second.
	if (Input.GetKey ("up"))
    	transform.Rotate(2*Vector3.left*Time.deltaTime);
	if (Input.GetKey ("down"))
		transform.Rotate(-2*Vector3.left*Time.deltaTime);
	
	// Slowly rotate the object around its Y axis at 2 degree/second.
	if (Input.GetKey ("left"))
    	transform.Rotate(2*Vector3.down*Time.deltaTime);
	if (Input.GetKey ("right"))
		transform.Rotate(-2*Vector3.down*Time.deltaTime);
}