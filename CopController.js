#pragma strict

///////////////////
// CopController //
///////////////////

// Rigidbody of the Cop (Enemy)
public var Rb : Rigidbody;

// The Player (used for cheapo, super gay, typical AI tactics (cops only chase DeLorean)
//public var theDeLorean : GameObject;

// The distance between THIS OFFICER and the DeLorean (cops only chase the DeLorean)
public var distanceBetween : float;

// The step size is equal to speed times frame time.
public var step : float;

// Speed of Movement in Units per second
private var speed : float = 5.0;

// target transform that the Cop is going to follow when within distance (will be following The Delorean)
public var target : Transform;

// the transform of the police officer that is specifically attached to this script 
public var myTransform : Transform;

// the number of importance this police office is compared to the rest
public var precedenceNum : int;

// the REQUIRED DISTANCE that the Cop and the DeLorean have to be within to initiate "pursuit"
public var dist : float = 10.0f;

// private var to determine whether or not the cop is moving (in pursuit)
public var moving : boolean = false;

// var to determine whether or not the cop is still in pursuit (possibly stopped by hitting object, another cop, etc)
// this is initially set to false, because the cop will start off by standing still
// ****** SET THIS TO PRIVATE AND GET A SETTER/GETTER?? *******
public var stillPursuiting : boolean = false;

// var to determine whether or not this officer is waiting for another officer so they dont collide
public var isWaiting : boolean = false;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// For movement
public var pos : Vector3;

// For determining when/where to block and sprite rotation
public var isRight : boolean = false;
public var isLeft : boolean = false;
public var isUp : boolean = false;
public var isDown : boolean = false;

// For switching the Sprite (Enemy's direction) each time a different key is pressed
public var spriteLeft : Sprite;
public var spriteRight : Sprite;
public var spriteUp : Sprite;
public var spriteDown : Sprite;

// get 'FluxCapacitor' Script
public var theFluxCapacitor : FluxCapacitor;

// use this for pre-initialization
function Awake ()
{
	
	// set the variable of 'myTransform' to be that of the transform attached to this script (cop)
	myTransform = transform;
	
	// intializes the RigidBody variable that is attached to Cop (enemy)
	Rb = transform.GetComponent(Rigidbody);

	// get and set FluxCapacitor
	theFluxCapacitor = GameObject.FindWithTag("Flux").GetComponent(FluxCapacitor);
	
}

// use this for initialization
function Start () 
{

	if (myTransform.gameObject.CompareTag ("Cop1"))
	{
	
		// set precedence to 1
		precedenceNum = 1;
	
	}
	else if (myTransform.gameObject.CompareTag ("Cop2"))
	{
	
		// set precedence to 2
		precedenceNum = 2;
	
	}
	else if (myTransform.gameObject.CompareTag ("Cop3"))
	{
	
		// set precedence to 3
		precedenceNum = 3;
	
	}
	else if (myTransform.gameObject.CompareTag ("Cop4"))
	{
	
		// set precedence to 4
		precedenceNum = 4;
	
	}
	else if (myTransform.gameObject.CompareTag ("Cop5"))
	{
	
		// set precedence to 5
		precedenceNum = 5;
	
	}
	else if (myTransform.gameObject.CompareTag ("Cop6"))
	{
	
		// set precedence 6
		precedenceNum = 6;
	
	}
	else if (myTransform.gameObject.CompareTag ("Cop7"))
	{
	
		// Set precedence to 7
		precedenceNum = 7;
	
	}
	else if (myTransform.gameObject.CompareTag ("Cop8"))
	{
	
		// set precedence to 8
		precedenceNum = 8;
	
	}
	
	// Take the initial position
	pos = transform.position;
	
}

// called once per frame
function Update () 
{
	
	// The step size is equal to speed times frame time.
	step = speed * Time.deltaTime;
	
	// if this police officer is waiting (isWaiting == true)
	if (isWaiting)
	{
		
		// stop him from moving
		stillPursuiting = false;
	
	}
	
	// If this police officer is not moving and the "MeasuredDistance" is less than the REQUIRED DISTANCE
	/////////////////////////////////////////////////////////////////////////////////////////////////////
	//// ALSO CHECK IF THE COP IS TOUCHING ANOTHER COP (SO THEY DONT JUST STACK ONTOP OF EACHOTHER)
	/////////////////////////////////////////////////////////////////////////////////////////////////////
	if (!moving && MeasureDistance () < dist)
	{
	
		// set that the cop is "stillPursuiting"
		stillPursuiting = true;
		
		InPursuit ();
	
	}
	
}

function OnTriggerEnter (other : Collider)
{

	
	if (other.tag == "Cop1")
	{
	
		// if precedenceNum of this office is higher than 1
		// the lower tha precedence number, the higher the precedence
		if (precedenceNum > 1)
		{
		
			isWaiting = true;
		
		}
	
	}
	else if (other.tag == "Cop2")
	{
	
		// if precedenceNum of this office is higher than 2
		// the lower tha precedence number, the higher the precedence
		if (precedenceNum > 2)
		{
		
			isWaiting = true;
		
		}
	
	}
	else if (other.tag == "Cop3")
	{
	
		// if precedenceNum of this office is higher than 3
		// the lower tha precedence number, the higher the precedence
		if (precedenceNum > 3)
		{
		
			isWaiting = true;
		
		}
	
	}
	else if (other.tag == "Cop4")
	{
	
		// if precedenceNum of this office is higher than 4
		// the lower tha precedence number, the higher the precedence
		if (precedenceNum > 4)
		{
		
			isWaiting = true;
		
		}
	
	}
	else if (other.tag == "Cop5")
	{
	
		// if precedenceNum of this office is higher than 5
		// the lower tha precedence number, the higher the precedence
		if (precedenceNum > 5)
		{
		
			isWaiting = true;
		
		}
	
	}
	else if (other.tag == "Cop6")
	{
	
		// if precedenceNum of this office is higher than 6
		// the lower tha precedence number, the higher the precedence
		if (precedenceNum > 6)
		{
		
			isWaiting = true;
		
		}
	
	}
	else if (other.tag == "Cop7")
	{
	
		// if precedenceNum of this office is higher than 7
		// the lower tha precedence number, the higher the precedence
		if (precedenceNum > 7)
		{
		
			isWaiting = true;
		
		}
	
	}
	else if (other.tag == "Cop8")
	{
	
		// if precedenceNum of this office is higher than 8
		// the lower tha precedence number, the higher the precedence
		if (precedenceNum > 8)
		{
		
			isWaiting = true;
		
		}
	
	}
	// if the cops starts to hit the border
	else if (other.tag == "Border")
	{
	
		CheckIfBoundary ();
	
	}
	// IF the Cop starts to travel ontop of grass
	else if (other.tag == "Grass")
	{
	
		// We lower the cops speed because grass should slow him down
		speed = 3.0;
	
	}
	else if (other.tag == "Building")
	{
	
		// STOP MOVEMENT COMPLETELY BECAUSE OBVIOUSLY THE COP HAS HIT A BUILDING AND SHOULD STOP
		moving = false;
	
	}
	else if (other.tag == "Cement")
	{
	
		// CEMENTER SHOULD BE NUMBERED
		Debug.Log ("CEEEMEMMMENET!");
		speed = 1.0;
	
	}
	else if (other.tag == "Manure")
	{
	
		Debug.Log ("Manure! SLOoooooOOOw down!");
		speed = 3.0;
	
	}
	else if (other.tag == "Train")
	{

		// ??? cop gets destroyed because they got blown up by the train ???
		Destroy (this.gameObject); 

	}

}

function OnTriggerExit (other : Collider)
{

	
	// if the cop is leaving another cop
	if (other.tag == "Cop1" || other.tag == "Cop2" ||
		other.tag == "Cop3" || other.tag == "Cop4" ||
		other.tag == "Cop5" || other.tag == "Cop6" ||
		other.tag == "Cop7" || other.tag == "Cop8")
	{
	
		// set it so the police officer is no longer waiting
		isWaiting = false;
		
		// let the police officer continue pursuing the DeLorean
		// we set this because "isWaiting" is no longer true, but 
		// we need to reverse what "isWaiting" did, which is....
		//stillPursuiting = true;
	
	}
	// If the cop finally ges off the grass
	else if (other.tag == "Grass")
	{
		
		// we return the speed back to normal
		speed = 5.0;
	
	}

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

function MeasureDistance () : float 
{

	// Determines the distance by subtracting the position of the DeLorean by position of this cop
	distanceBetween = Vector3.Distance (target.transform.position, transform.position);
	
	return distanceBetween;
	
	//Debug.Log ("Distance between: " + distanceBetween);

}

function InPursuit () 
{
	
	moving = true;
	
	// CHANGE DIRECTION //
	//var targetDir = target.position - transform.position;
	
	// while the position of this COP is not the same as the position of the target (DeLorean)
	// AS WELL AS: the variable "stillPursuiting" == true (the flockingManager hasn't stopped it yet)
	while ((transform.position != target.position) && stillPursuiting)
	{
	
		// the position of this police officer will start to become "in a state of MOVING TOWARDS" the target
		transform.position = Vector3.MoveTowards (transform.position, target.position, speed * Time.deltaTime);

		////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// dont know exactly what this is doing here, but it should be code that makes the cop rotate towards (look at) the DeLorean
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		// var relativePos = target.transform.position - transform.position;

		var rotation = Quaternion.LookRotation (target.transform.position - transform.position, transform.TransformDirection(Vector3.up)); 

		transform.rotation = new Quaternion (0, 0, rotation.z, rotation.w);

		// transform.rotation = rotation;

		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		// if the cops position is the same as the players
		if (transform.position == target.position) 
		{

			// make that baby shake
			Handheld.Vibrate();

			// lose 10 health?
			theFluxCapacitor.DeLoreanHealth = theFluxCapacitor.DeLoreanHealth - 10;

			// break out of the loop?
			break;

		}
		
		// CHANGE DIRECTION //
		//var newDir = Vector3.RotateTowards (transform.up, targetDir, step, 0.0);
		
		// CHANGE DIRECTION //
		//Debug.DrawRay (transform.position, newDir, Color.red);
		
		// CHANGE DIRECTION //
		// Move our position a step closer to the target
		//transform.rotation = Quaternion.LookRotation (newDir);
		
		yield;
	
	}
	
	yield WaitForSeconds (1.3);
	
	// while this police officer's position is not (0,0,0) AND THIS IS AFTER THE COP REACHES THE DELOREAN (same positions)
	/*while (transform.localPosition != Vector3.zero)
	{

		// Cop catches player
		
		//Debug.Log ("caught by DA POLICIA!");
		
		// start moving towards the point of (0, 0, 0) which why? theres no god damn point
		//transform.localPosition = Vector3.MoveTowards (transform.localPosition, Vector3.zero, speed * Time.deltaTime);
		
		yield;
	
	}*/
	
	moving = false;

}

