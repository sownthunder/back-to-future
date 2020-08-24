using UnityEngine;
using System.Collections;

public class VehicleController : MonoBehaviour {

	// DeLorean as a GameObject to get scripts, positions, etc
	public GameObject theDeLorean;

	// Rigidbody of the DeLorean (this object)
	public Rigidbody rb;

	// x and y translations (for speed on x and y axis)
	public float xTranslation;
	public float yTranslation; 
	
	public bool isBlocked = false;
	
	public bool isLeft = false;
	public bool isRight = false;
	public bool isUp = false;
	public bool isDown = false;

	// mmmm..... thrust it
	public float thrust;

	// speed of DeLorean in Miles Per Hour
	public float deLoreanSpeed; 

	// stores actual velocity of the rigidbody attached to DeLorean GameObject
	//public Vector3  deLoreanVelocity;

	// Use this BEFORE the initialization
	void Awake ()
	{

		// Set variable "rb" to be the rigidBody attached to DeLorean GameObject
		rb = GetComponent<Rigidbody> ();

		thrust = 4;

	}

	// Use this for initialization
	void Start () 
	{
	


	}
	
	// Update is called once per frame
	void Update () 
	{
		
		//////////////////// GET KEY UP
		
		// when player releases a key
		if (Input.GetKeyUp (KeyCode.A))
		{
			
			// set "bool" to false because key is released
			isLeft = false;
			
		}
		else if (Input.GetKeyUp (KeyCode.D))
		{
			
			// set "bool" to false because key is released
			isRight = false;
			
		}
		else if (Input.GetKeyUp (KeyCode.W))
		{
			
			// set "bool" to false because key is released
			isUp = false; 
			
		}
		else if (Input.GetKeyUp (KeyCode.S))
		{
			
			// set "bool" to false because key is released
			isDown = false;
			
		} 

	}

	void FixedUpdate ()
	{

		// Always have it so the variable "deLoreanVelocity" is the actual current velocity of the RigidBody
		//deLoreanVelocity = rb.velocity;
		
		// 1 - Slow as shit
		// 2 - yupe still pretty slow
		// 3 - I guess thats ok
		// 4 - fastest you can go
		
		//xTranslation = Time.deltaTime * 2;
		//yTranslation = Time.deltaTime * 2;
		
		/*if (Input.GetKey (KeyCode.Space))
		{

			deLoreanVelocity = rb.velocity;

			Debug.Log ("velocity :" + deLoreanVelocity);
			Debug.Log ("velocity :" + rb.velocity);

		}*/
		
		// Go Leftward (when player presses key down like rapid fire)			
		if (Input.GetKey (KeyCode.A)) 
		{
			
			// Set bool "isLeft" to true
			isLeft = true;
			
			if (isBlocked == false)
			{
				
				rb.AddForce(new Vector3 (-2, 0, 0) * thrust);
				
				//velocity = new Vector3 (-100, 0, 0);
				//transform.Translate (rb.velocity * Time.deltaTime);
				
			}
			
		}
		// Go Rightward
		else if (Input.GetKey (KeyCode.D))
		{
			
			// Set bool "isRight" to true
			isRight = true;
			
			if (isBlocked == false)
			{
				
				rb.AddForce(new Vector3 (2, 0, 0) * thrust);
				
				//velocity = new Vector3 (100, 0, 0);
				//transform.Translate (rb.velocity * Time.deltaTime);
				
			}
			
		}
		// Go Up
		else if (Input.GetKey (KeyCode.W))
		{
			
			// Set bool "isUp" to true
			isUp = true;
			
			if (isBlocked == false)
			{
				
				rb.AddForce(new Vector3 (0, 0, 2) * thrust);
				
				//velocity = new Vector3 (0, 0, 100);
				//transform.Translate (rb.velocity * Time.deltaTime);
				
			}
			
		}
		// Go Backward (down)
		else if (Input.GetKey (KeyCode.S)) 
		{
			
			// set bool "isDown" to true
			isDown = true;
			
			if (isBlocked == false)
			{
				
				rb.AddForce(new Vector3 (0, 0, -2) * thrust);
				
				//velocity = new Vector3 (0, 0, -100);
				//transform.Translate (rb.velocity * Time.deltaTime);
				
			}
			
		}

	}

}
