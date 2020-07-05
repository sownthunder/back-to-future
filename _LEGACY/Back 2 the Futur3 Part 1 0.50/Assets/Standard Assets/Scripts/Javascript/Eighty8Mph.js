#pragma strict

// index into the array at the destination
public var index = 1;

// the distance between theTestDeLorean and whatever object is sent through the object
public var distanceBetween : float;

// timer for how long the original (first/past) DeLorean was moving around for (used to compare)
public var originalDeLoreanTimer : float = 0;

// the timer that will start counting as soon as the (FluxCapacitor) TIME-CIRCUITS are on
public var theDeLoreanTimer : float = 0;

// the point in which game starts recording DeLorean 
// movements that will be replayed once the player "time travels"
public var isFluxing : boolean = false;

// flux capacitor must be on in order to turn time circuits on
// then travels the player back in time and has clone do old movements
public var timeCircuitsOn : boolean = false;

// boolean that is used when the player has turned TimeCircuitsOn 
// and the DeLoreanClone needs to be moved around accordingly
public var backInTime : boolean = false;

// boolean that is used when the player is within range and the time travel array has ended 
// (meaning that the player is technically back in the present)
//public var backWithinRange : boolean = false;

// test
public var martyTransform : Transform;

// Original position of the deLorean (FOR WHEN IT TRAVELS BACK IN TIME)
// To be used in knowing where to start (set) the DeLoreanClone
public var originalDeLoreanPosition : Vector3;

// Current position of the deLorean
public var currentDeLoreanPosition : Vector3;

// The DeLorean that Marty is currently in
public var theTestDeLorean : GameObject;

// The clone (future) DeLorean as a GameObject
public var theDeLoreanClone : GameObject;

// boolean used to instantiate the clone DeLorean only one time 
public var isDeLoreanCloneSet : boolean = false;

// Object that has the SpriteRenderer componenent attached to it
public var sRendererObj : Transform;

// Sprite Renderer (renders/display the sprites);
public var sRenderer : SpriteRenderer;

// our test array to hold the movements (in Vector3)
public var arr : Array;

// our array to hold the sprites as the DeLorean makes movements (to be "re-played" on the clone when it is back in time)
public var spriteArr : Array;

// variable to control time taken to travel between points
var duration : float = 1.0;

// use this for pre-initialization
function Awake ()
{

	// initiate the main array (movements)
	arr = new Array ();
	
	// initiate the sprite array
	spriteArr = new Array ();
	
	// Intialize and set a reference to the Sprite Renderer that is attached to the same object as this script
	sRenderer = sRendererObj.GetComponent (SpriteRenderer);

}

// use this for initialization
function Start () 
{

	

}

// called once per frame
function Update () 
{
	
	// If the DeLorean is Fluxing (isFluxing == true)...
	if (isFluxing)
	{
	
		// Increase the time by a second
		theDeLoreanTimer = theDeLoreanTimer + Time.fixedDeltaTime;
	
	}
	
	// if you are initiating time travel (timeCircuitsOn == true)
	if (timeCircuitsOn)
	{
	
		// set to false right away so this doesn't get called again (in update function)
		timeCircuitsOn = false;
	
		// set the timer for clone DeLorean to be the same amount as previous time travel "sequence"
		originalDeLoreanTimer = theDeLoreanTimer;
		
		// reset timer to start to be used again
		theDeLoreanTimer = 0;
		
		// start the loop which starts displaying the "past" DeLorean by setting backInTime to be true
		backInTime = true;
		
		//Debug.Log ("Titties McGee, set me free");
	
	}
	
	// if you are already in the past (backInTime == true)
	// then we start moving the old DeLorean according to the array of Vector3
	if (backInTime)
	{
		
		// if the DeLorean clone has not been set 
		// this is the first time we are starting "past movement
		// isDeLoreanCloneSet is initially set to false
		if (isDeLoreanCloneSet == false)
		{
		
			// set it so that this is the only time this IF statement is called
			// which also means the first time that the "past" is occuring for this object
			isDeLoreanCloneSet = true;
			
			// move the DeLoreanClone while it is still inactive to the same position
			// as the "past" DeLorean when it started recording movements for time travel
			theDeLoreanClone.transform.position = originalDeLoreanPosition;
			
			// MAKE IT SO THE SPRITE OF THE DELOREANCLONE STICKS OUTWARDS TOWARDS THE CAMERA AND IS VISIBILE
			
			// Disabled testDeLorean (the one that is now the future DeLorean)
			theTestDeLorean.SetActive (false);
			
			// enabled theDeLoreanClone
			theDeLoreanClone.SetActive (true);
			
		}
		
		/*
		// if the Enemy clone has not been set 
		// this is the first time we are starting "past movement
		// isEnemyCloneSet is initially set to false
		if (isEnemyCloneSet == false)
		{
		
			// set it so that this is the only time this IF statement is called
			// which also means the first time that the "past" is occuring for this object
			isEnemyCloneSet = true;
			
			// move the EnemyClone while it is still inactive to the same position
			// as the "past" Enemy when it started recording movements for time travel
			theEnemyClone.transform.position = originalEnemyPosition;
			
			// MAKE IT SO THE SPRITE OF THE DELOREANCLONE STICKS OUTWARDS TOWARDS THE CAMERA AND IS VISIBILE
			
			// enabled theEnemyClone
			theEnemyClone.SetActive (true);
		
		}*/
		
		// if we are still going through the array (positions)
		if (index < arr.length)
		{
		
			// Move from the previous position in the array to the next over time
			theDeLoreanClone.transform.position = Vector3.Lerp (arr[index - 1], arr[index], Time.time);
			
			//////////////////////////////////////////////////////////////////////////////////////////////////////
			////// SET IT UP SO THE DELOREAN CHANGES SPRITE BASED ON CURRENT SPRITE BEING LOOKED AT WITHIN ARRAY
			//////////////////////////////////////////////////////////////////////////////////////////////////////
			
			// set sprite Renderer of the clone to whatever sprite is at index within array
			sRenderer.sprite = spriteArr[index]; 
			
			//////////////////////////////////////////////////////////////////////////////////////////////////////
		
			// If we've reached the destination, move to the next one
			// **************** FOR BOTH DELOREAN AND COP ***************************
			if (theDeLoreanClone.transform.position == arr[index])
			{
		
				// increment index
				index++;
		
			}
		
		}
		// else if we are at the end of the array (positions)
		else
		{
		
			// go back to your time zone
			backInTime = false;
			
			// !?!?! - reset it all - ???!?!
			//////////////////////////////////////////////////////////
			arr.Clear ();
			arr = new Array ();
			
			spriteArr.Clear ();
			spriteArr = new Array ();
			
			index = 1;
			originalDeLoreanTimer = 0;
			theDeLoreanTimer = 0;
			isDeLoreanCloneSet = false;
			
			// calls the MeasureDistance (aGameObject : Transform) function
			// AND if the measured distance between Marty McFly and theTestDeLorean
			// is less than or equal to 2, then
			if ((MeasureDistance (martyTransform)) <= 2.0f)
			{
			
				Debug.Log ("Looks like you ain't a slacker");
			
			}
			else
			{
			
				Debug.Log ("YOU ARENT NEAR THE VEHICLE!! YOU DIED!!!");
			
			}
			
			theDeLoreanClone.SetActive (false);
			theTestDeLorean.SetActive (true);
			
			// Debug.Log ("DeLorean 'isFluxing'== " + isFluxing);
			
			//Debug.Log ("you've traveled back in time biznatch (ABOLITA)");
		
		}
	
	}
	else
	{
	
		//Debug.Log ("array traversed???");
	
	}

	// Set the position of the "currentDeLoreanPosition" to the current position values, etc
	//currentDeLoreanPosition = Vector3 (theDeLorean.gameObject.transform.position.x, theDeLorean.gameObject.transform.position.y, theDeLorean.gameObject.transform.position.z);
	
	//Debug.Log (theDeLorean.gameObject.transform.position);
	
	// "Push" the current position of the deLorean every time update is called (every frame)
	//arr.Push (currentDeLoreanPosition);
	
}

// public Rect (LEFT: float, TOP: float, WIDTH: float, HEIGHT: float)
function OnGUI ()
{

	// Displays the DeLorean timer (how many seconds you are going to travel back in time for)
	GUI.Box (Rect (15, 40, 180, 30), "DeLorean Time: " + theDeLoreanTimer);

}

// 
function MeasureDistance (aGameObject : Transform) : float
{

	// Determines the distance of whatever gameObject is sent into this function
	// by subtracting the position of the DeLorean by that specific GameObject
	distanceBetween = Vector3.Distance (theTestDeLorean.transform.position, aGameObject.position);
	
	return distanceBetween;
	
	Debug.Log ("ballzack = " + distanceBetween);

}
