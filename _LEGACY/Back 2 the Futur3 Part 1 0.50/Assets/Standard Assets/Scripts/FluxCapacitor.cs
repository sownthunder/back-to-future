using UnityEngine;
using System.Collections;

public class FluxCapacitor : MonoBehaviour {

	// DeLorean as a GameObject to get scripts, positions, etc
	public GameObject theDeLorean;

	// Rigidbody of the DeLorean
	public Rigidbody deLoreanRb;

	// Marty as a GameObject 
	//public GameObject theMartyMcFly;

	// VehicleController Script
	public VehicleController theVehicleController;

	// PlayerController Script
	public PlayerController thePlayerController;

	// Used to count how much time has passed / how much time the clone of Marty will move around for
	public float deLoreanTimer;

	// boolean to see if the timer is counting up, down, or not at all (originally set at false)
	public bool isTimerGoing = false;

	// Speed (miles per hour) of the DeLorean
	// 1 meter/second = 2.236 MPH
	// Vector3 that holds the value of velocity for OMeter (Miles Per Hour)
	public Vector3 deLoreanVelocity;

	// speed of DeLorean in Miles Per Hour
	public double deLoreanSpeed; 

	public double deLoreanSpeedMPH;

	// String that holds the value of however fast the DeLorean is going (??in MPH??)
	public string oMeterString = "MPH: ~88";

	// Use this for PRE PRE PRE initialization
	void Awake ()
	{

		theVehicleController = theDeLorean.GetComponent<VehicleController> ();
		
		//thePlayerController = theMartyMcFly.GetComponent<PlayerController> ();

	}

	// Use this for initialization
	void Start () 
	{

		// Gets the RigidBody of the DeLorean AFTERRR first establishing the VehicleController script to a variable
		deLoreanRb = theDeLorean.GetComponent<Rigidbody> ();
	
	}
	
	// Update is called once per frame
	void Update () 
	{

		// If the DeLorean starts going faster than 55 mph
		if (deLoreanSpeed >= 90)
		{
			
			// can you bastards do 90?
			
		}

		// Debug.Log button
		/*if (Input.GetKey (KeyCode.Space))
		{

			// Start the timer (adds 1 per second) when the player desires (for now)
			Debug.Log ("start TImer!");

			// We set the "isTimerGoing" to try because the button has been pressed,
			// specifically requesting the Timer to be turned on (start counting), 
			// that way we know how long the clone DeLorean/Marty will move around 4
			isTimerGoing = true;
			
		}*/

		if (isTimerGoing)
		{

			// For every frame we count towards the timer
			deLoreanTimer = deLoreanTimer + Time.deltaTime;

			// Show timer as it counts (for now)
			Debug.Log (deLoreanTimer);

		}
	
	}

	// EVERYTHING REGARDING PHYSICS GOES IN HERE
	void FixedUpdate () 
	{

		// Constantly set the velocity (meters/seconds) of the deLorean from VehicleController Script (RigidBody variable)
		deLoreanVelocity = deLoreanRb.velocity;

		// convert velocity to a single value
		deLoreanSpeed = deLoreanVelocity.magnitude;

		// we need a seperate variable to multiply and finalize the METERS/SECOND > MPH change without
		// distrubting the actual speed
		// convert the velocity of meters/second to MILES PER HOUR (without actually changing velocity of DeLorean)
		// 1 meter/second is the same as 2.236 miles per hour
		deLoreanSpeedMPH = deLoreanSpeed * 2.236; 

		oMeterString = "MPH : " + deLoreanSpeedMPH.ToString ();

	}

	void OnGUI ()
	{

		// Create a GUI Box that displays the MPH of the DeLorean (in test form)
		GUI.Box (new Rect (20, 20, 200, 30), oMeterString);

	}

}
