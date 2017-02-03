#pragma strict

// index of the array (while traversing and moving train)
public var index : int = 1;

// To be used to know where to reset the train object
public var originalTrainPosition : Vector3;

// the train GameObject that will be set active and not etc
public var theTrain: GameObject;

// the step size is equal to speed times frame time.
public var step : float;

// 
public var trainTimer : float = 10;

// speed of movement in units per second
public var speed : float = 3.5;

// used for movement
public var pos : Vector3;

// for determining whether or not the train is moving (originally set to false)
public var isMoving : boolean = false;

// for determining if the player (Marty) has hit the TrainSwitch or not (set to false at first)
public var switchHit : boolean = false;

// For determining when/where to block and sprite rotation
public var isRight : boolean = false;
public var isLeft : boolean = false;
public var isUp : boolean = false;
public var isDown : boolean = false;

// array to hold the movements that the train will make (if spawned by Marty)
public var trainArr : Array;

// Used for pre-initialization
function Awake ()
{

	trainArr = new Array();

}

// Used for initialization
function Start () 
{
	
	// Sets the variable so that the train can be reset to the correct position
	originalTrainPosition = theTrain.transform.position;

}

// called once per frame
function Update () 
{
	
	trainTimer = trainTimer - Time.fixedDeltaTime;
	//Debug.Log ("trainTimer : " + trainTimer);

	// The step size is equal to speed times frame time.
	step = speed * Time.deltaTime;
	
	// hit the backspace button to see if the train array completed correctly
	/*if (Input.GetKeyDown (KeyCode.Backspace))
	{
	
		if (switchHit == false)
			switchHit = true;
			theTrain.SetActive (true);
	
	}*/
	
	// If the time has counted down and is either at or less than zero
	if (trainTimer <= 0)
	{
	
		switchHit = true;
		theTrain.SetActive (true);
	
	}
	
	// IF THE TRAIN IS NOT MOVING AND THE SWITCH HAS BEEN HIT
	if (!isMoving && switchHit)
	{
		
		// start moving around the track
		TravelTrack ();
	
	}
	
}

// 
function TravelTrack ()
{

	// while index is still traversing through array (less than the length of entries)
	if (index < trainArr.length)
	{
		
		// move from current position to next position saved in array
		theTrain.transform.position = Vector3.MoveTowards (theTrain.transform.position, trainArr[index], step);
			
		// if we've reached the destination (the next position saved in array)
		if (theTrain.transform.position == trainArr[index])
		{
			
			// we increase the index so we start moving to next position saved in array
			index++;
		
		}
	
	}
	// and if we have reached end of array
	else
	{
	
		// turn the switch back to false
		switchHit = false;
		
		// reset trainTimer
		trainTimer = 10.0;
		
		Debug.Log ("switchHit == falsO!");
		theTrain.SetActive (false);
		
		// set the train to its position in the station (even if it is already there the first time)
		theTrain.transform.position = originalTrainPosition;
		
		// reset index
		index = 1;
	
	}

}
