#pragma strict

// Rigidbody of the CloneCop (Enemy, just cloned because "it is back in time")
public var Rb : Rigidbody;

// variable that holds the gameobejct this script will be attached to
// so that it can be destroyed if hit by a train, etc
public var theObject : GameObject;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// the transform of the police officer that is specifically attached to this script 
public var myTransform : Transform;

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// <-------------------------- *-*-*-*-*- THIS SCRIPT CONTROLS WHAT THE POLICE OFFICER DOES "IN THE PAST"

// HAVE A NUMBER SPECIFICALLY FOR THE COP CLONE CONTROLLER (THIS) SCRIPT 
// SO THAT YOU CAN DETERMINE HOW MANY COPS STOPPED MOVING IN THE PAST VS THE PRESENT

// COPS THAT ARE STOPPED IN THE PAST ARE WORTH MORE POINTS (YOU STOPPED THE CLONE/PAST COP FROM CHASING YOUR PAST SELF)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Used for pre-initialization
function Awake ()
{

	// set the variable of 'myTransform' to be that of the transform attached to this script (cop)
	myTransform = transform;
	
	// initializes the Rigidbody variable that is attached to the CloneCop (enemy)
	Rb = transform.GetComponent(Rigidbody);

}

// Used for initialization
function Start () 
{

	

}

// Called once per frame
function Update () 
{

	

}

function OnTriggerEnter (other : Collider)
{

	// If this cloned cop (past-self) hits the train, IT DIES BABAY!
	if (other.tag == "Train")
	{
		
		Debug.Log ("MONEY SHOT!----TrAaAaAiiinnn!!!");
		Destroy (theObject);
	
	}
	else if (other.tag == "Cement")
	{
	
		Debug.Log ("CEEEMEMMMENET!");
	
	}
	else if (other.tag == "Manure")
	{
	
		Debug.Log ("Manure!");
	
	}
	else if (other.tag == "Player")
	{
	
		//Destroy (theObject);
		Debug.Log ("BROKE SPACE TIME CONTINUEM YOU DUMB FUCK!");
	
	}


}