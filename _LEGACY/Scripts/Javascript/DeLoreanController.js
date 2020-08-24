#pragma strict

/////////////////////////
// DeLorean Controller //
/////////////////////////

// rigidBody of the vehicle
public var Rb : Rigidbody;

// Speed of Movement in units per sec
public var speed : float = 7.0;

// For movement 
public var pos : Vector3;

// indicate if the player is inside this vehicle or not
public var inVehicle : boolean = false;

// If the DeLorean has traveled back in time or not (so Marty can't re enter)
//public var hasTraveled : boolean = false;

// For determining when/where to block and sprite rotation
public var isRight : boolean = false;
public var isLeft : boolean = false;
public var isUp : boolean = false;
public var isDown : boolean = false;

// Object that has the SpriteRender attached to it
public var sRendererObj : Transform;

// Sprite Renderer (Renders/displays the sprites)
public var sRenderer : SpriteRenderer;

// For switching the Sprite (DeLorean's direction) each time a different key is pressed
public var spriteLeft : Sprite;
public var spriteRight : Sprite;
public var spriteUp : Sprite;
public var spriteDown : Sprite;

// temporary and to be used to determine whether or not the player is going to start losing damage
public var enteredBorder : boolean = false;

/////////////////////////////////////////////////////////////
// <--- IMPORTANT PLUTE VARIABLES ---> 

// the number of plutes the player (DeLorean) has collected so far
public var plutesCollected : int = 0;

// # of plutes needed to to start fluxing (record enemy and DeLorean movements)
public var plutesToFlux : int = 2;

// # of plutes needed to time travel (turn time circuits on)
public var plutesToTravel : int = 2;

// determines whether or not the plutes have been, or will be used, to travel through time
public var usePlutesTravel : boolean = false;

// HAS THE PLAYER (MARTY/DELOREAN) COLLECTED ALL OF THE PLUTES? IF SO! YOU WIN!
public var winCondition : boolean = false;

//////////////////////////////////////////////////////////////

// the WIDTH range that the items will spawn within (randomly less than 40)
// so that it stays on the map
public var rangeWidth : int = 119;

// the HEIGHT range that the items will spawn within (randomly less than 40)
// so that it stays on the map
public var rangeHeight : int = 119;

// variable used to store the random number (width-wise) that will determine where plute goes
public var rndIntWidth : float;

// variable to determine where plute goes on height-wise grid
public var rndIntHeight : float;

//////////////////////////////////////////////////////////////

// used to get eighty8Mph script
public var eighty8MphObj : Transform;

// variable that will hold the reference to the target script (Eighty8Mph)
public var eighty8MphScript : Eighty8Mph;

// used to get itemSpawner script
public var itemSpawnerObj : Transform;

// variable that will hold the refernce to the target script (ItemSpawner)
public var itemSpawnerScript : ItemSpawner; 

// used to get enemy88s (and copies) script
public var enemy88sObj : Transform;
public var enemy88s2Obj : Transform;
public var enemy88s3Obj : Transform;

public var enemy88s4Obj : Transform;
public var enemy88s5Obj : Transform;
public var enemy88s6Obj : Transform;

public var enemy88s7Obj : Transform;
public var enemy88s8Obj : Transform;

//////////////////////////////////////////////////////////////////////////////

// variable that will hold the reference to the target script (Enemy88s)
// and more if we are using more than one police officer (which we are)
public var enemy88sScript : Enemy88s;
public var enemy88s2Script : Enemy88s;
public var enemy88s3Script : Enemy88s;

public var enemy88s4Script : Enemy88s;
public var enemy88s5Script : Enemy88s;
public var enemy88s6Script : Enemy88s;

public var enemy88s7Script : Enemy88s;
public var enemy88s8Script : Enemy88s;

//////////////////////////////////////////////////////////////////////////

// Used in moving copy to position before time travel, etc
public var enemyCop1 : Transform;
public var enemyCop2 : Transform;
public var enemyCop3 : Transform;

// IF THE GAME IS ON HARD DIFFIULTY
public var enemyCop4 : Transform;
public var enemyCop5 : Transform;
public var enemyCop6 : Transform;

// BECAUSE BLAKE ASKED
public var enemyCop7 : Transform;
public var enemyCop8 : Transform;

/////////////////////////////////////////////////////////////////////////

// variable that will hold the prefab of an enemyCop that will be used 
public var nextEnemyCop : GameObject;

/////////////////////////////////////////////////////////////////////////

// Used for pre-initialization
function Awake ()
{

	// get a reference to the target script (Eighty8Mph)
	eighty8MphScript = new eighty8MphObj.GetComponent (Eighty8Mph);
	
	// get a reference to the target script (ItemSpawner)
	itemSpawnerScript = new itemSpawnerObj.GetComponent (ItemSpawner);
	
	// get a reference to the target script and copies (Enemy88s)
	enemy88sScript = new enemy88sObj.GetComponent (Enemy88s);
	enemy88s2Script = new enemy88s2Obj.GetComponent (Enemy88s);
	enemy88s3Script = new enemy88s3Obj.GetComponent (Enemy88s);
	
	enemy88s4Script = new enemy88s4Obj.GetComponent (Enemy88s);
	enemy88s5Script = new enemy88s5Obj.GetComponent (Enemy88s);
	enemy88s6Script = new enemy88s6Obj.GetComponent (Enemy88s);
	
	enemy88s7Script = new enemy88s7Obj.GetComponent (Enemy88s);
	enemy88s8Script = new enemy88s8Obj.GetComponent (Enemy88s);
	
	// Intialize and set a reference to the Sprite Renderer that is attached to the same object as this script
	sRenderer = sRendererObj.GetComponent (SpriteRenderer);

	// intializes the RigidBody variable that is attached to Marty (player)
	Rb = transform.GetComponent(Rigidbody);

}

// use this for initialization
function Start () 
{

	// Take the initial position
	pos = transform.position;
	
	// for loop that iterates 8 times (for the number of cops)
	// and changes each of their locations to a random position
	for (var i = 0; i < 8; i++)
	{
	
		// set to a random number (1-119)
		rndIntWidth = Random.Range (1, rangeWidth);
		
		// set to a random number (1-119)
		rndIntHeight = Random.Range (1, rangeHeight);
		
		switch (i)
		{
		case 0:
			enemyCop1.position = Vector3 (rndIntWidth, rndIntHeight, 0);
			break;
		case 1:
			enemyCop2.position = Vector3 (rndIntWidth, rndIntHeight, 0);
			break;
		case 2:
			enemyCop3.position = Vector3 (rndIntWidth, rndIntHeight, 0);
			break;
		case 3: 
			enemyCop4.position = Vector3 (rndIntWidth, rndIntHeight, 0);
			break;
		case 4:
			enemyCop5.position = Vector3 (rndIntWidth, rndIntHeight, 0);
			break;
		case 5:
			enemyCop6.position = Vector3 (rndIntWidth, rndIntHeight, 0);
			break;
		case 6:
			enemyCop7.position = Vector3 (rndIntWidth, rndIntHeight, 0);
			break;
		case 7:
			enemyCop8.position = Vector3 (rndIntWidth, rndIntHeight, 0);
			break;
		}
	
	}

}

// called once per frame
function Update () 
{

	// The step size is equal to speed times frame time.
	var step = speed * Time.deltaTime;
	
	// If the DeLorean is "fluxing" (recording movements to re-create)
	if (eighty8MphScript.isFluxing && enemy88sScript.isFluxing)
	{
	
		// "push" current position of DeLorean onto Array
		// ***** the -0.05 is for the Z position and so that it can be seen above the board *****
		// ^^^ GOT RID OF THIS BECAUSE SPRITE RENDERER STICKS OUT OF BOARD AND WE WANT ACTUAL CUBE TO BE INVISIBLE
		eighty8MphScript.arr.Push (Vector3(transform.position.x, transform.position.y, 0f));
		
		/////////////////////////////////////////////////////////////// SPRITE TEST ///////////////
		
		// push whatever sprite is currently being project by DeLorean onto the spriteArray
		eighty8MphScript.spriteArr.Push (sRenderer.sprite);
		
		//Debug.Log ("Sprite?=?: " + sRenderer.sprite);
		
		//////////////////////////////////////////////////////////////////////////////////////////
		
		// "push" current position of the enemy cop onto Array (in its own script (enemy88s))
		// the -0.05 is for the Z position and so that it can be seen above the board
		enemy88sScript.copArr.Push (Vector3(enemyCop1.transform.position.x, enemyCop1.transform.position.y, -0.5));
		enemy88s2Script.copArr.Push (Vector3(enemyCop2.transform.position.x, enemyCop2.transform.position.y, -0.5));
		enemy88s3Script.copArr.Push (Vector3(enemyCop3.transform.position.x, enemyCop3.transform.position.y, -0.5));
		
		enemy88s4Script.copArr.Push (Vector3(enemyCop4.transform.position.x, enemyCop4.transform.position.y, -0.5));
		enemy88s5Script.copArr.Push (Vector3(enemyCop5.transform.position.x, enemyCop5.transform.position.y, -0.5));
		enemy88s6Script.copArr.Push (Vector3(enemyCop6.transform.position.x, enemyCop6.transform.position.y, -0.5)); 
		
		enemy88s7Script.copArr.Push (Vector3(enemyCop7.transform.position.x, enemyCop7.transform.position.y, -0.5));
		enemy88s8Script.copArr.Push (Vector3(enemyCop8.transform.position.x, enemyCop8.transform.position.y, -0.5));
	
	}

    ////////////////////////////////////////////////////////////////////////////////////////////
    // -- (DELOREAN) PC INPUT BELOW -- <><><><><><><><><><><><><><><><><><><><><><><><><><><><>
    ////////////////////////////////////////////////////////////////////////////////////////////

    // CHANGE IT SO THAT EACH IF STATEMENT IS CHECK TO SEE IF 'isRight', 'isLeft', etc is within the if statement
    // *EXAMPLE 
    // if (isRight && inVehicle)


	// move right if able (canMove == true) and key is pressed
	// If (Input.GetKey (KeyCode.RightArrow) && inVehicle)
	if (isRight && inVehicle)
	{
		
		// we are moving right
		// isRight = true; (already set to true)
		
		// Shorthand for writing Vector3(1, 0, 0).
		pos = Vector3.right;
		
		sRenderer.sprite = spriteRight;
		
		// move DeLorean (or vehicle whatever)
		transform.Translate (pos * step);
	
	}
	// move left if able (canMove == true) and key is pressed
	// else if (Input.GetKey(KeyCode.LeftArrow) && inVehicle)
	else if (isLeft && inVehicle)
	{
	
		// We are moving left
		// isLeft = true; (already set to true)
	
		// Shorthand for writing Vector3(-1, 0, 0).
		pos = Vector3.left;
		
		sRenderer.sprite = spriteLeft;
		
		transform.Translate (pos * step);
	
	}
	// move up if able (canMove == true) and key is pressed
	// else if (Input.GetKey (KeyCode.UpArrow) && inVehicle)
	else if (isUp && inVehicle)
	{
	
		// We are moving up
		// isUp = true; (already set to true)
		
		// Shorthand for writing Vector3(0, 1, 0).
		pos = Vector3.up;
		
		sRenderer.sprite = spriteUp;
			
		transform.Translate (pos * step);
	
	}
	// move down if able (canMove == true) and key is pressed
	// else if (Input.GetKey (KeyCode.DownArrow) && inVehicle)
	else if (isDown && inVehicle)
	{
	
		// WE are moving down
		// isDown = true; (already set to true)
	
		// Shorthand for writing Vector3(0, -1, 0).
		pos = Vector3.down;
		
		sRenderer.sprite = spriteDown;
		
		transform.Translate (pos * step);
		
	}
	// Turn on Flux Capacitor (start recording movement)
	// **** ONLY ALLOWED IF YOU HAVE THE REQUIRED NUMBER OF PLUTES *****
	else if (Input.GetKeyDown (KeyCode.F) && inVehicle && (plutesCollected >= plutesToTravel))
	{
		
		// use the plutes to start up flux capacitor
		// (subtract the two that you just used)
		plutesCollected = plutesCollected - plutesToTravel;
		
		// Does value change when we start to time Travel
		//Debug.Log ("collectd plute # = " + plutesCollected);
		
		// fluxCapacitor IN OTHER SCRIPT is on as well
		eighty8MphScript.isFluxing = true;
		
		enemy88sScript.isFluxing = true;
		enemy88s2Script.isFluxing = true;
		enemy88s3Script.isFluxing = true;
		
		enemy88s4Script.isFluxing = true;
		enemy88s5Script.isFluxing = true;
		enemy88s6Script.isFluxing = true;
		
		enemy88s7Script.isFluxing = true;
		enemy88s8Script.isFluxing = true;
		
	}
	// If flux is fluxing, turn on Time Circuits (Travel through time)
	//else if (Input.GetKeyDown (KeyCode.T) && eighty8MphScript.isFluxing 
	//&& enemy88sScript.isFluxing && inVehicle)
	else if (Input.GetKeyDown (KeyCode.T) && eighty8MphScript.isFluxing 
	&& enemy88sScript.isFluxing && inVehicle && (plutesCollected >= plutesToTravel))
	{
		
		// SET COPS "BEING ACTIVE" TO FALSE, SO THEY DISAPPEAR AND
		// MAKE IT APPEAR THAT WE WENT BACKWARDS IN TIME
		////// <-------- > BEGIN TEST <---->
		enemyCop1.gameObject.SetActive (false);
		enemyCop2.gameObject.SetActive (false);
		enemyCop3.gameObject.SetActive (false);
		
		//Debug.Log ("EnemyCop 1-3 gonezo");
		
		enemyCop4.gameObject.SetActive (false);
		enemyCop5.gameObject.SetActive (false);
		enemyCop6.gameObject.SetActive (false);
		
		Debug.Log ("EnemyCop 4-6 gonezo");
		
		enemyCop7.gameObject.SetActive (false);
		enemyCop8.gameObject.SetActive (false);
		///// ------> END TEST ////
		
		// use the plutes to start up time Circuits
		// (subtract the two that you just used)
		plutesCollected = plutesCollected - plutesToTravel;
		
		////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////// STOP FLUXING ////////////////////////////
		// stop fluxing / stop recording movements
		eighty8MphScript.isFluxing = false;
		
		// stop fluxing for the cop (as well as others too)
		enemy88sScript.isFluxing = false;
		enemy88s2Script.isFluxing = false;
		enemy88s3Script.isFluxing = false;
		
		enemy88s4Script.isFluxing = false;
		enemy88s5Script.isFluxing = false;
		enemy88s6Script.isFluxing = false;
		
		enemy88s7Script.isFluxing = false;
		enemy88s8Script.isFluxing = false;
		
		////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////// START TIME TRAVELLING ///////////////////
		
		// intitiate "time travel" / start looping through and re-creating movements
		eighty8MphScript.timeCircuitsOn = true;
		
		// initiate for cop as well (as well as others too)
		enemy88sScript.timeCircuitsOn = true;
		enemy88s2Script.timeCircuitsOn = true;
		enemy88s3Script.timeCircuitsOn = true;
		
		enemy88s4Script.timeCircuitsOn = true;
		enemy88s5Script.timeCircuitsOn = true;
		enemy88s6Script.timeCircuitsOn = true;
		
		enemy88s7Script.timeCircuitsOn = true;
		enemy88s8Script.timeCircuitsOn = true;
		
		////////////////////////////////////////////////////////////////////////////////////////////
		
		// set 'originalDeLoreanPosition' in the eighty8Mph script to be the same as the DeLorean's 
		// current position, so that when the DeLoreanClone is enabled in that script, it will be there
		eighty8MphScript.originalDeLoreanPosition = transform.position;
		
		// same as above but for cop (and others)
		enemy88sScript.originalEnemyPosition = enemyCop1.transform.position;
		enemy88s2Script.originalEnemyPosition = enemyCop2.transform.position;
		enemy88s3Script.originalEnemyPosition = enemyCop3.transform.position;
		
		enemy88s4Script.originalEnemyPosition = enemyCop4.transform.position;
		enemy88s5Script.originalEnemyPosition = enemyCop5.transform.position;
		enemy88s6Script.originalEnemyPosition = enemyCop6.transform.position;
		
		enemy88s7Script.originalEnemyPosition = enemyCop7.transform.position;
		enemy88s8Script.originalEnemyPosition = enemyCop8.transform.position;
	
	}
	// else.... if none of these are being pressed
	else
	{
	
		// no directional movement is being made
		// (set all directions to false)
		isRight = false;
		isLeft = false;
		isUp = false;
		isDown = false;
	
	}
	
	/*
	// If the number one cop has traveled through time (meaning they all have)
	if (enemy88sScript.hasTraveled)
	{
		
		// set all cops to be true again because the array has been traveresed 
		enemyCop1.gameObject.SetActive (true);
		enemyCop2.gameObject.SetActive (true);
		enemyCop3.gameObject.SetActive (true);
			
		enemyCop4.gameObject.SetActive (true);
		enemyCop5.gameObject.SetActive (true);
		enemyCop6.gameObject.SetActive (true);
			
		enemyCop7.gameObject.SetActive (true);
		enemyCop8.gameObject.SetActive (true);
		
	}
	*/

}

function OnTriggerEnter (other : Collider)
{
	
	// vehicle is colliding with player
	if (other.tag == "Player")
	{
	
		// the player is in the vehicle
		//inVehicle = true;
	
	}
	// if the DeLorean starts to drive over grass
	else if (other.tag == "Grass")
	{
	
		// we lower the speed because Grasss slows it down
		speed = 5.0;
	
	}
	else if (other.tag == "Border")
	{
		
		enteredBorder = true;
		
		// we stop movement because thats the edge of the level (boundary)
		CheckIfBoundary ();
		
	}
	else if (other.tag == "Building")
	{

		// ******** TESTING TO SEE IF THIS CODE DOES ANYTHING ***********
		// enteredBorder = true;

		// we stop movement because unfortunately the DeLorean isn't magical enough to go through buildings
		//CheckIfBoundary ();

	}
	else if (other.tag == "Plute")
	{
		
		// Destroys GAMEOBJECT!!!!
		Destroy (other.gameObject);
		
		// spawn another plute (so there is always 10
		////////////////////////////////////////////////////////////
		
		// set a random width (within grid)
		var rndIntWidth : int = Random.Range (2, 119);
		
		// set a random height (within grid)
		var rndIntHeight : int = Random.Range (2, 119);
		
		// spawn object with the newly created random coords
		Instantiate (itemSpawnerScript.thePlute, Vector3 (rndIntWidth, rndIntHeight, 0), Quaternion.identity);
		
		////////////////////////////////////////////////////////////
		
		// increment 'plutesCollected' in ItemSpawner script because
		// we have indeed collected a plute
		plutesCollected++;
		
		// if the player has collected 10 plutes (the win condition)
		if (plutesCollected == itemSpawnerScript.totalPlutesNum)
		{
		
			winCondition = true;
		
		}
		
		// Display total plutes we have collected
		//Debug.Log ("collectd plute# = " + plutesCollected);
		
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

	// vehicle is no longer colliding with player
	if (other.tag == "Player")
	{
	
		//inVehicle = false;
	
	}
	
	// if the DeLorean stops driving over grass
	if (other.tag == "Grass")
	{
	
		// return speed to normal because it is no longer on grass
		speed = 7.0;
	
	}
	if (other.tag == "Border")
	{
	
		enteredBorder = false;
	
	}

}

function DestroyGameObjectWithTag (tag : String)
{

	// variable set up as the GameObject with the tag we specified
	var objectTag = GameObject.FindGameObjectsWithTag (tag) as GameObject;
	
	// Destroy object
	Destroy (objectTag);

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