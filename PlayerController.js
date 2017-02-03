#pragma strict

// rigidBody of the player
public var Rb : Rigidbody;

// The target marker (that we "moveTowards")
public var target : Transform;

// Speed of Movement in units per sec
// <-- WAS ORIGINALLY PRIVATE VAR -->
public var speed : float = 4.0;

// For movement 
public var pos : Vector3;

// indicate if a keyboard input can move a piece
// this is when the player is attached/ontop of grid
public var canMove : boolean = true;

// indicate if the player (Marty) has switched on the train or not, starts at false
public var trainSwitched : boolean = false;

// used to always check if the player is on the grid (attached/in the same position)
public var gridTile : GameObject;

// variable to hold bullet prefab that will spwawn whenever Marty has ammo and "shoots"
public var theBullet : GameObject;

// used when checking to see if Marty is close enough to enter DeLorean (if not already inside)
public var theDeLorean : GameObject;

// used when checking to see if Marty is close enough to enter the Cement Truck (if not already inside)
public var theCTruck : GameObject;

// used when checking to see if Marty is close enough to enter the Manure Truck (if not already inside)
public var theMTruck : GameObject;

// the distance between Marty and the DeLorean itself (in units)
public var distanceBetweenD : float;
public var distanceBetweenC : float;
public var distanceBetweenM : float;

// the distance between Marty and a standard vehicle (cement truck/manure truck)
public var distanceBetweenV : float;

// boolean to determine if the player is in a vehicle or not
public var isInVehicle : boolean = false;

// For determining when/where to block and sprite rotation
public var isRight : boolean = false;
public var isLeft : boolean = false;
public var isUp : boolean = false;
public var isDown : boolean = false;

public var enteredBorder : boolean = false;

// used to get the CTruckControllerScript
public var CTruckControllerObj : Transform;

// variable that will hold the reference to the target script (CTruckController)
public var CTruckControllerScript : CTruckController;

// used to get the CTruckControllerScript
public var MTruckControllerObj : Transform;

// variable that will hold the reference to the target script (MTruckController)
public var MTruckControllerScript : MTruckController;

// used to get the DeLoreanControllerScript
public var DControllerObj : Transform;

// variable that will hold the reference to the target script (DeLoreanController)
public var DControllerScript : DeLoreanController;

// use this for pre-initialization
function Awake ()
{

	// get a reference to the target script (DeLoreanController)
	DControllerScript = new DControllerObj.GetComponent (DeLoreanController);
	
	// get a reference to the target script (CTruckController)
	CTruckControllerScript = new CTruckControllerObj.GetComponent (CTruckController);
	
	// get a reference to the target script (MTruckController)
	MTruckControllerScript = new MTruckControllerObj.GetComponent (MTruckController);
	
	// intializes the RigidBody variable that is attached to Marty (player)
	Rb = transform.GetComponent(Rigidbody);

}

// use this for initialization
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
	
	// move right if able (canMove == true) and  flux Capacitor has set isRight == true
	if (isRight && canMove)				// "GetKey" is the auto-fire setting
	{
		
		// Shorthand for writing Vector3(1, 0, 0).
		pos = Vector3.right;
		
		transform.Translate (pos * step);
	
	}
	// move left if able (canMove == true) and flux Capacitor has set isLeft == true
	else if (isLeft && canMove)
	{
		
		// Shorthand for writing Vector3(-1, 0, 0).
		pos = Vector3.left;
		
		transform.Translate (pos * step);
	
	}
	// move up if able (canMove == true) and flux Capacitor has set isUp == true
	else if (isUp && canMove)
	{

		Debug.Log("moving up?");

		// Shorthand for writing Vector3(0, 1, 0).
		pos = Vector3.up;
		
		transform.Translate (pos * step);
	
	}
	// move down if able (canMove == true) and flux Capacitor has set isDown == true
	else if (isDown && canMove)
	{
		
		// Shorthand for writing Vector3(0, -1, 0).
		pos = Vector3.down;
		
		transform.Translate (pos * step);
	
	}
	//  ENTER VEHICLE/DELOREAN
	else if (Input.GetKeyDown (KeyCode.E) && canMove)
	{
	
		// call measure Distance function
		MeasureDistance ();
		
		if (distanceBetweenD <= 2.00)
		{
			
			Debug.Log ("INSIDE DELOREAN");
			
			// ENTER THE DELOREAN IF WITHIN RANGE
			DControllerScript.inVehicle = true;
			
		}
		else if (distanceBetweenC <= 2.00)
		{
		
			Debug.Log ("INSIDE C-TRUCK");
			
			// ENTER THE C-TRUCK IF WITHIN RANGE
			CTruckControllerScript.inVehicle = true;
		
		}
		else if (distanceBetweenM <= 2.00)
		{
		
			Debug.Log ("INSIDE M-TRUCK");
			
			// ENTER THE M-TRUCK IF WITHIN RANGE
			MTruckControllerScript.inVehicle = true;
		
		}
		
		
	
	}
	else if (Input.GetKeyDown (KeyCode.Space) && canMove)
	{
	
		if (isRight)
		{
		
			Debug.Log ("Fire a bullet right");
		
		}
		else if (isLeft)
		{
		
			Debug.Log ("Fire a bullet left");
		
		}
		else if (isUp)
		{
		
			Debug.Log ("Fire a bullet up");
		
		}
		else if (isDown)
		{
		
			Debug.Log ("Fire a bullet down");
		
		}
		
		
	
	}
	else if (Input.GetKeyDown (KeyCode.P) && canMove)
	{
	
		trainSwitched = true;
		
		Debug.Log ("trainSwitched= " + trainSwitched);
	
	}
	
	// if Marty (the player) is inside the DeLorean (Vehicle)
	if (DControllerScript.inVehicle)
	{
	
		// make Marty as fast as the car so when he moves along (inside) it, they go same speed
		speed = 7.0;
		
		// Marty follows the same movements as the Vehicle (following it while inside)
		transform.position = theDeLorean.transform.position;
		
		// he can no longer move
		canMove = false;
	
	}
	// if Marty (the player) is inside the Cement Truck (Vehicle)
	else if (CTruckControllerScript.inVehicle)
	{
	
		// make Marty as fast as the car so when he moves along (inside) it, they go same speed
		speed = 4.5;
		
		// Marty follows the same movements as the Vehicle (following it while inside)
		transform.position = theCTruck.transform.position;
		
		// he can no longer move
		canMove = false;
	
	}
	// if Marty (the player) is inside the Manure Truck (Vehicle)
	else if (MTruckControllerScript.inVehicle)
	{
	
		// make Marty as fast as the car so when he moves along (inside) it, they go same speed
		speed = 4.5;
		
		// Marty follows the same movements as the Vehicle (following it while inside)
		transform.position = theMTruck.transform.position;
		
		// he can no longer move
		canMove = false;
	
	}
	
	// if the DeLorean has already traveled back in time (Marty gets kicked out)
	if (DControllerScript.eighty8MphScript.backInTime)
	{
	
		speed = 4.0;
	
	}
	
}

// Used for Graphical User Interface
function OnGUI ()
{

	if (canMove)
	{

		

	}

}

function OnTriggerEnter (other : Collider)
{

	// If the player is "colliding" (connected) to a 'GridTile' object
	if (other.tag == "GridTile")
	{
	
		
	
	}
	else if (other.tag == "Road")
	{
	
		//Debug.Log ("sup bro? on the road again?");
	
	}
	else if (other.tag == "Border")
	{
	
		enteredBorder = true;
		
		CheckIfBoundary ();
	
	}
	else if (other.tag == "Building")
	{

		enteredBorder = true;

		CheckIfBoundary ();

	}
	
}

function OnTriggerStay (other : Collider)
{

	if (other.tag == "Border")
	{
	
		CheckIfBoundary ();
	
	}
	else if (other.tag == "Building")
	{

		CheckIfBoundary ();

	}

}

function OnTriggerExit (other : Collider)
{

	enteredBorder = false;

}

// Awesome function that checks if the object that this script is attached to has hit 
// a boundary or not, and if it has, it push it a little the other way (blocking it)
function CheckIfBoundary ()
{

	// If we are moving to the right
	if (isRight)
	{
		
		// translate the DeLorean so that it is pushed to left (blocked)
		// left = 0.1 to the left 
		transform.Translate (Vector3 (-0.1f, 0f, 0f));
		
	}
	// If we are moving to the right
	else if (isLeft)
	{
		
		// translate the DeLorean so that it is pushed to right (blocked)
		// right = 0.1 to the right (-0.1)
		transform.Translate (Vector3 (0.1f, 0f, 0f));
			
	}
	// IF we are moving upwards
	else if (isUp)
	{
		
		// translate the DeLorean so that it is pushed down (blocked)
		// down = 0.1 downwards (0.1)
		transform.Translate (Vector3 (0f, -0.1f, 0f));
		
	}
	// If we are moving downwards
	else if (isDown)
	{
			
		// translate the DeLorean so that it is pushed to up (blocked)
		// up = 0.1 upwards
		transform.Translate (Vector3 (0f, 0.1f, 0f));
		
	}

}

public function MeasureDistance ()
{

	// Determines the distance by subtracting the position of the DeLorean by position of Marty
	distanceBetweenD = Vector3.Distance (theDeLorean.transform.position, transform.position);
	distanceBetweenC = Vector3.Distance (theCTruck.transform.position, transform.position);
	distanceBetweenM = Vector3.Distance (theMTruck.transform.position, transform.position);
	
	//Debug.Log ("Distance between DeLorean: " + distanceBetweenD);
	//Debug.Log ("Distance between CTruck: " + distanceBetweenC);
	//Debug.Log ("Distance between MTruck: " + distanceBetweenM); 

}