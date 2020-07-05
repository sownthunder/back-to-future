#pragma strict

// rigidBody of the vehicle
public var Rb : Rigidbody;

// cement GameObject that will be created when space bar is hit (cyan cube)
public var cement : GameObject;

// Speed of Movement in units per sec
private var speed : float = 4.5;

// For movement 
public var pos : Vector3;

// indicate if the player is inside this vehicle or not
public var inVehicle : boolean = false;

// For determining when/where to block and sprite rotation
public var isRight : boolean = false;
public var isLeft : boolean = false;
public var isUp : boolean = false;
public var isDown : boolean = false;

// Object that has the SpriteRender attached to it
public var sRendererObj : Transform;

// Sprite Renderer (Renders/displays the sprites)
public var sRenderer : SpriteRenderer;

// For switching the Sprite (Vechiles's direction) each time a different key is pressed
public var spriteLeft : Sprite;
public var spriteRight : Sprite;
public var spriteUp : Sprite;
public var spriteDown : Sprite;

// used for pre-initialization
function Awake ()
{

	// intializes the RigidBody variable that is attached to Vehicle (CTruck)
	Rb = transform.GetComponent(Rigidbody);

}

// used for initialization
function Start () 
{

	// Take the initial position
	pos = transform.position;

}

// called once per frame
function Update () 
{

	// The step size is equal to speed times frame time.
	var step = speed * Time.deltaTime;
	
	// move right if able (canMove == true) and key is pressed
	if (Input.GetKey (KeyCode.RightArrow) && inVehicle)
	{
		
		// Shorthand for writing Vector3(1, 0, 0).
		pos = Vector3.right;
		
		// move DeLorean (or vehicle whatever)
		transform.Translate (pos * step);
	
	}
	// move left if able (canMove == true) and key is pressed
	else if (Input.GetKey(KeyCode.LeftArrow) && inVehicle)
	{
	
		// Shorthand for writing Vector3(-1, 0, 0).
		pos = Vector3.left;
		
		transform.Translate (pos * step);
	
	}
	// move up if able (canMove == true) and key is pressed
	else if (Input.GetKey (KeyCode.UpArrow) && inVehicle)
	{
	
		// Shorthand for writing Vector3(0, 1, 0).
		pos = Vector3.up;
			
		transform.Translate (pos * step);
	
	}
	// move down if able (canMove == true) and key is pressed
	else if (Input.GetKey (KeyCode.DownArrow) && inVehicle)
	{
	
		// Shorthand for writing Vector3(0, -1, 0).
		pos = Vector3.down;
		
		transform.Translate (pos * step);
		
	}
	else if (Input.GetKeyUp (KeyCode.Space) && inVehicle)
	{
	
		Debug.Log ("spawn cement");
		
		Instantiate (cement, new Vector3 (transform.position.x, transform.position.y, -0.01f), Quaternion.identity);


	
	}

}

function OnTriggerEnter (other : Collider)
{

	// vehicle is colliding with player
	if (other.tag == "Player")
	{
	
		// the player is in the vehicle
		//inVehicle = true;
	
	}

}

function OnTriggerExit (other : Collider)
{

	// vehicle is no longer colliding with player
	if (other.tag == "Player")
	{
	
		//inVehicle = false;
	
	}

}