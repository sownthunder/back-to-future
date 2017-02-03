#pragma strict
@script RequireComponent(AudioSource)

// Splash screen that only shows for a second
public var splashBackground : GameObject;

// string variable of whatever will be displayed at the EndGame screen (game is over)
public var endButtonText : String = "End Game";

// boolean variable to determine whether "QUIT BUTTON" is showing or not
public var isShowingQButton : boolean = false;

// boolean variable to determine whether "RESTART BUTTON" is showing or not
public var isShowingRButton : boolean = false;

// Draws 2 buttons, one with an image, and other with a text
// And print a message when they got clicked.
public var btnTexture : Texture;

// POSITION OF IMAGE?!??
public var imagePosition : int;

// A timer that will count to when the outro Audio should start to be played
public var outroAudioTimer : float = 0;

// used for pre-initialization
function Awake ()
{

	// set up the value of the imagePosition (half the size of the screen)
	imagePosition = Screen.width / 4;

}

// use for initialization
function Start () 
{

	

}

/// called once per second
function Update () 
{

	// counts 1 per second
	outroAudioTimer = outroAudioTimer + Time.fixedDeltaTime;
	
	Debug.Log ("oUtRo +=+ " + outroAudioTimer);
	
	// if it has been more than 14 seconds
	if (outroAudioTimer >= 14)
	{
	
		// disable the splash background
		splashBackground.SetActive (false);
		
		// begin to show the "QUIT BUTTON" (set to true)
		isShowingQButton = true;
		
		// begin to show the "RESTART BUTTON" (set to true)
		isShowingRButton = true;
	
	}

}

// displays Graphical User Interface 
function OnGUI ()
{

	if (isShowingQButton && isShowingRButton)
	{
	
		GUI.Box (Rect(imagePosition, ((Screen.height / 3) * 2), (Screen.width / 2), 100), "CLICK THE IMAGE ABOVE TO QUIT");
	
		if (GUI.Button (Rect(10, 40, 90, 30), "Quit"))
		{
		
			// End the game
			Application.Quit ();
			Debug.Log ("Quit");
		
		}
		
		if (GUI.Button (Rect(10, 70, 90, 30), "Or restart?"))
			Application.LoadLevel (1);
		
	}

}