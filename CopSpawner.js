#pragma strict

///////////////////////////////////////////////////
//
// Set it up so that if the player does not get rid of all cops/enemies
// **** WITHIN A CERTAIN AMOUNT OF TIME *****
// then another wave of cops is spawned
// thus, creating more problems for the player
//
//////////////////////////////////////////////////

// police officer prefabs that will be spawned into the game through this script
public var enemyCop1 : GameObject;
public var enemyCop2 : GameObject;
public var enemyCop3 : GameObject;

public var enemyCop4 : GameObject;
public var enemyCop5 : GameObject;
public var enemyCop6 : GameObject;

public var enemyCop7 : GameObject;
public var enemyCop8 : GameObject;

// the WIDTH that each of the police officers will be within
public var rangeWidth : int = 119;

// the HEIGHT that each of the police officers will be within
public var rangeHeight : int = 119;

public var rndIntWidth : float;

public var rndIntHeight : float;

// used to count to 30 seconds and 'spawn' new waves
public var waveTimer : float = 0;

// used to count how many extra waves have been called
public var totalWaveNum : int = 0;

// used for pre-initialization
function Awake ()
{

	

}

// used for initialization
function Start () 
{

	// For loop to spawn the first 8 police officers at random locations
	for (var i = 0; i < 8; i++)
	{
	
		// set to a random number (1-119)
		rndIntWidth = Random.Range (1, rangeWidth);
		
		// set to a random number (1-119)
		rndIntHeight = Random.Range (1, rangeHeight);
		
		// spawn one of "enemyCops" set at the randomly assigned x and y
		Instantiate (enemyCop1, Vector3 (rndIntWidth, rndIntHeight, 0), Quaternion.identity);
	
	}

}

// called once per frame
function Update () 
{

	// increment "waveTimer" by 1 (one)
	waveTimer = waveTimer + Time.fixedDeltaTime;
	
	//Debug.Log ("CopSpawner -- Wave Time = " + waveTimer);
	
	// when waveTimer reaches 30 seconds
	if (waveTimer >= 30)
	{
	
		Debug.Log ("NEW WAAAVE!");
	
		// reset waveTimer
		waveTimer = 0;
	
	}

}