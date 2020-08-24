using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour {

	// x and y translations (for speed on x and y axis)
	public float xTranslation;
	public float yTranslation; 

	public bool isBlocked = false;

	public bool isLeft = false;
	public bool isRight = false;
	public bool isUp = false;
	public bool isDown = false;

	void Awake ()
	{



	}

	// Use this for initialization
	void Start () 
	{


	
	}
	
	// Update is called once per frame
	void Update () 
	{

		// 1 - Slow as shit
		// 2 - yupe still pretty slow
		// 3 - I guess thats ok
		// 4 - fastest you can go
		
		xTranslation = Time.deltaTime * 2;
		yTranslation = Time.deltaTime * 2;
		
		// Go Leftward (when player presses key down like rapid fire)			
		if (Input.GetKey (KeyCode.LeftArrow)) 
		{
			
			// Set bool "isLeft" to true
			isLeft = true;
			
			if (isBlocked == false)
				transform.Translate (Vector3.left * xTranslation);
			
		}
		// Go Rightward
		else if (Input.GetKey (KeyCode.RightArrow))
		{
			
			// Set bool "isRight" to true
			isRight = true;
			
			if (isBlocked == false)
				transform.Translate (Vector3.right * xTranslation);
			
		}
		// Go Forward
		else if (Input.GetKey (KeyCode.UpArrow))
		{
			
			// Set bool "isUp" to true
			isUp = true;
			
			if (isBlocked == false)
				transform.Translate (Vector3.up * yTranslation);
			
		}
		// Go Backward (down)
		else if (Input.GetKey (KeyCode.DownArrow)) 
		{
			
			// set bool "isDown" to true
			isDown = true;
			
			if (isBlocked == false)
				transform.Translate (Vector3.down * yTranslation);
			
		}
		
		//////////////////// GET KEY UP
		
		// when player releases a key
		if (Input.GetKeyUp (KeyCode.LeftArrow))
		{
			
			// set "bool" to false because key is released
			isLeft = false;
			
		}
		else if (Input.GetKeyUp (KeyCode.RightArrow))
		{
			
			// set "bool" to false because key is released
			isRight = false;
			
		}
		else if (Input.GetKeyUp (KeyCode.UpArrow))
		{
			
			// set "bool" to false because key is released
			isUp = false; 
			
		}
		else if (Input.GetKeyUp (KeyCode.DownArrow))
		{
			
			// set "bool" to false because key is released
			isDown = false;
			
		}
	
	}

}
