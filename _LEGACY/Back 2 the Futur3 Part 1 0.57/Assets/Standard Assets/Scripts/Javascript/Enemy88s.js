#pragma strict

// index into the array at the destination
public var index = 1;

// timer for how long the original (first/past) Enemy was moving around for (used to compare)
public var originalEnemyTimer : float = 0;

// the timer that will start counting as soon as the (FluxCapacitor) TIME-CIRCUITS are on
public var theEnemyTimer : float = 0;

// the point in which game starts recording Enemy 
// movements that will be replayed once the player "time travels"
public var isFluxing : boolean = false;

// flux capacitor must be on in order to turn time circuits on
// then travels the player back in time and has ENEMY clone do old movements
public var timeCircuitsOn : boolean = false;

// boolean that is used when the player has turned TimeCircuitsOn 
// and the EnemyClone needs to be moved around accordingly
public var backInTime : boolean = false;

// Original position of the enemy (FOR WHEN IT TRAVELS BACK IN TIME)
// To be used in knowing where to start (set) the EnemyClone
public var originalEnemyPosition : Vector3;

// Current position of the Enemy
public var currentEnemyPosition : Vector3;

// the (singular) police officer that this script is referencing/pointing to and controlling
// to be used in deactivating and activating the (singular) police office
// *------> THERES ONE SCRIPT FOR EVERY COP SO ALL COPS ARE COVERED
public var theEnemyCop : GameObject;

// The clone (future) Enemy as a GameObject
public var theEnemyClone : GameObject;

// boolean used to instantiate the enemy clone only one time 
public var isEnemyCloneSet : boolean = false;

// our test array to hold the movements (in Vector3)
public var copArr : Array;

// variable to control time taken to travel between points
var duration : float = 1.0;

// variable that will hold the reference to the target script (CopController)
public var enemyControllerScript : CopController;

// Use this for pre-initialization
function Awake ()
{

	// get a reference to the target script (from whichever cop is the target of this script) 
   enemyControllerScript = new theEnemyCop.gameObject.transform.GetComponent (CopController);
   
   copArr = new Array ();

}

// Use this for initialization
function Start () 
{



}

// Called once per frame
function Update () 
{

	// If the Enemy is Fluxing (isFluxing == true)...
	if (isFluxing)
	{
	
		// Increase the time by a second
		theEnemyTimer = theEnemyTimer + Time.fixedDeltaTime;
	
	}
	
	// if you are initiating time travel (timeCircuitsOn == true)
	if (timeCircuitsOn)
	{
	
		// set to false right away so this doesn't get called again (in update function)
		timeCircuitsOn = false;
	
		// set the timer for EnemyClone to be the same amount as previous time travel "sequence"
		originalEnemyTimer = theEnemyTimer;
		
		// reset timer to start to be used again
		theEnemyTimer = 0;
		
		// start the loop which starts displaying the "past" Enemy by setting backInTime to be true
		backInTime = true;
	
	}
	
	// if you are already in the past (backInTime == true)
	// then we start moving the old Enemy according to the array of Vector3
	if (backInTime)
	{
		
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
			
			//Debug.Log ("BACK IN TIME COP");
			
			// MAKE IT SO THE SPRITE OF THE ENEMY-CLONE STICKS OUTWARDS TOWARDS THE CAMERA AND IS VISIBILE
			
			// enabled theEnemyClone
			theEnemyClone.SetActive (true);
		
		}
		
		//	RIGHT HERE THERE IS NOTHING IN THE ARRAY FOR THE ENEMY CLONE TO TAKE FROM 
		//	AND USE AS DIRECTIONS FOR MOVEMENTS
		//	< --------- 								--------- >
		//	FIX THIS !!!!!!!!!!!!!!!!!!!!!!
		
		
		// if we are still going through the array (positions)
		if (index < copArr.length)
		{
		
			// if there is actually a value within the part of array index is point at
			// If copArr[index] is not equal to null)
			if (copArr[index] != null)
			{
			
				// Move from the previous position in the array to the next over time
				theEnemyClone.transform.position = Vector3.Lerp(copArr[index - 1], copArr[index], Time.time);
			
			}
		
			// If we've reached the destination, move to the next one
			if (theEnemyClone.transform.position == copArr[index])
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
			copArr.Clear ();										// clear array (meaning the length of array will be zero)
			copArr = new Array();									// re-instantiate the array to be used again later
			
			index = 1;												// Reset the index to 1 so it will start looking through arrays again from beginning
			originalEnemyTimer = 0;									// Set timer that counts how many seconds "time traveL" is (reset back to zero)
			theEnemyTimer = 0;										// reset timer so next time it starts counting it will start from zero
			isEnemyCloneSet = false;								// reset the fact the clone is being set 
			
			// If the clone of the police officer still exsists:
			if (theEnemyClone != null) 
			{
			
				//Debug.Log ("OFFICER " + theEnemyClone.tag + "STILL ALIVE!");
				
				//// **** IF YOU WANT COPS TO STOP MOVING IF THEY ARETOO CLOSE **** ////////////////////////////////////////////////////////////////////////////
				enemyControllerScript.moving = false;					// reset every police officers "moving" variable so they dont freeze after time travel
				enemyControllerScript.stillPursuiting = false;			// ^^ same as above ^^
				////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
				theEnemyClone.SetActive (false);	// get rid of clones
				theEnemyCop.SetActive (true);		// bring back original cops
			
				//Debug.Log ("COP HAS FINISHED TIMETRAVEL AND IS NOW BACK IN PRESENT");
				//Debug.Log ("RESPAWN REAL COPS AND DESTROY CLONES");
			
				//Debug.Log ("Police Offcier 'isFluxing'== " + isFluxing);
				//Debug.Log ("Police Officer 'timeCircuitsOn'== " + timeCircuitsOn);
			
				/// just to be a dick
				//Debug.Log ("first value in COP-ARRAY: " + copArr[0]);
				// HA-HA-HA-HA-HA
			
			}
			else 
			{
			
				Debug.Log ("OFFICER DEAD!");
			
			}
			
			
		
		}
	
	}
	else
	{
	
		//Debug.Log ("array traversed???");
	
	}

}