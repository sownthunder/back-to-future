#pragma strict

/////////////////
// Rolls-Royce //
/////////////////

// ROLLS-ROYCE CLASS
////////////////////////////////

// - RANDOMLY SPAWNS ON DIFFERENT SPOT ON MAP
// - CAN ONLY BE "ACTIVATED" BY APPROACHING AS MARTY
// - WITHIN RANGE AND DIALOGUE BOX WILL APPEAR AND
// - PLAYER MUST HIT "YES" AND THEN THIS CLASS ACTIVATES
// ----> rolls royce drives around randomly around the map
// 		and takes out cops as well as Marty if he gets hit
// 		and if Marty gets hit he loses 2 (two) lives!!!!!

// the player (Marty) held within Transform variable to check if "within range"
public var martyMcFly : Transform;

// the distance between this rolls royce and the player (Marty McFly)
public var distanceBetween : float;

// distance the player (Marty) needs to be within this rolls royce to start activating stuff
public var dist : float = 4.0;

// boolean that determines when to start asking the player via GUI whether or not "they want to race"
public var startGUIQuestion : boolean = false;

// used for pre-initialization
function Awake ()
{

	startGUIQuestion = false;

}

// used for initialization
function Start () 
{

	

}

// called once per frame
function Update () 
{

	// If the player (Marty) is within distance of this rolls royce
	if (MeasureDistance () < dist)
	{
	
		// initiate starting asking question via GUI
		// "Do you wanna race?"
		startGUIQuestion = true;
	
	}

}


// Measures the distance between this rolls royce and the player (Marty McFly)
function MeasureDistance () : float
{

	// Determines the distance by subtracting the position of the player (Marty) by position of this rolls royce
	distanceBetween = Vector3.Distance (martyMcFly.transform.position, transform.position);
	
	return distanceBetween;

}

// displays Graphical User Interface features (display, button, textbox, etc)
function OnGUI ()
{

	// if the player (Marty) is within distance and initiated the boolean to start asking the question
	if (startGUIQuestion == true)
	{
	
		GUI.Box (Rect (20, 20, 20, 20), "Wanna race?");
	
	}

}