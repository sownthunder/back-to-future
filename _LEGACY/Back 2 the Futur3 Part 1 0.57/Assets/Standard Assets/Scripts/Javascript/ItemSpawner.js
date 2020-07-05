#pragma strict

/// PLUTE
/////////////////////////////////////////////////////////////

// variable to hold the GameObjec plute we are going to spawn
public var thePlute : GameObject;

// the overall number of Plutes that will be spawned randomly across the map
// It is just set at 10 right now for a testing phase (will be more when grids 200x200)
// <------ PLUTESOLLECTED HAS TO EQUAL TOTALNUMPLUTES FOR THE PLAYER TO WIN ---->
public var totalPlutesNum : int = 10;

// the WIDTH range that the items will spawn within (randomly less than 40)
// so that it stays on the map
public var rangeWidth : int = 119;

// the HEIGHT range that the items will spawn within (randomly less than 40)
// so that it stays on the map
public var rangeHeight : int = 119;

////////////////////////////////////
/// SOUND FOR "I NEED FUEL"
////////////////////////////////////

// variable used to store the random number (width-wise) that will determine where plute goes
public var rndIntWidth : float;

// variable to determine where plute goes on height-wise grid
public var rndIntHeight : float;

// used for pre-initialization
function Awake ()
{

	///////////////////////////////////////////////////////////////
	// Random.Range												 //
	///////////////////////////////////////////////////////////////
	// public statio function Range (min: float, max: float): float
	// Returns a random float between and min [inclusive] and max
	// [inclusive] (Read Only).

}

// used for initialization
function Start () 
{

	// for loop for completed equal to the value of 'totalPlutesNum'
	for (var i = 0; i < totalPlutesNum; i++)
	{
	
		// set to a random number (1-119)
		rndIntWidth = Random.Range (1, rangeWidth);
		
		// set to a random number (1-119)
		rndIntHeight = Random.Range (1, rangeHeight);
		
		// spawn one of "thePlutes" set at the randomly assigned x and y
		Instantiate (thePlute, Vector3 (rndIntWidth, rndIntHeight, 0), Quaternion.identity);
		
		// DEBUGGY
		Debug.Log ("Plute " + (i + 1) + " test position = " + Vector3 (rndIntWidth, rndIntHeight, 0));
	
	}

}

// called once per frame
function Update () 
{

	

}
