#pragma strict
@script RequireComponent(AudioSource)

// Splash screen that only shows for a second
public var splashBackground : GameObject;

// string variable of whatever will be displayed inside the 'play' button
public var playButtonText : String = "Play!";

// string variable that will hold whatever will be displaye when clicking main
// image on the main menu (should be obvious yet also quite hidden from view)
public var introRulesText : String = "You found da secret (not really)!";

// Are we showing the introductory rules? Start at false so when begin with no
public var isShowingRules : boolean = false;

// Draws 2 buttons, one with an image, and other with a text
// And print a message when they got clicked.
public var btnTexture : Texture;

public var imagePosition : int;

// A timer that will count to 
public var introAudioTimer : float = 0;

// Sound clip for the second and third clips to be played during menu
public var otherClip1 : AudioClip;
public var otherClip2 : AudioClip;

//public var sr : StreamReader

public var passwordToEdit : String = "2015";

// used for pre-initalization 
function Awake ()
{

	// set up the value of the imagePosition (half the size of the screen)
	imagePosition = Screen.width / 4;
	
	Debug.Log ("img pos =" +imagePosition);

}

// used for initialization
function Start () 
{

	//var audio : AudioSource = GetComponent.<AudioSource>();
	
	/*
	//audio.Play();
	//audio.Play(44100);
	new WaitForSeconds(audio.clip.length)audio.clip = otherClip1;
	audio.Play(); */

}

// called once per frame
function Update () 
{

	// Counts 1 per second
	introAudioTimer = introAudioTimer + Time.fixedDeltaTime;
	
	// if it has been more than 15 seconds
	if (introAudioTimer >= 14)
	{
	
		// Disable the splash background
		splashBackground.SetActive (false);
		
		// begin to show rules (set to true)
		isShowingRules = true;
	
	}

}

// public Rect (left: float, top: float, width: float, height: float)
function OnGUI () 
{
		
		if (isShowingRules)
		{
		
			//GUI.Box (Rect (0, 0, Screen.width, Screen.height), "Here are da rules");
			GUI.Box (Rect(imagePosition, ((Screen.height / 3) * 2), (Screen.width / 2), 100), "CLICK MARTYYYYYYY");
			
			if (GUI.Button (Rect(imagePosition, 50, (Screen.width / 2), (Screen.width / 3)), btnTexture))
			{
		
				// Load the test level
				Application.LoadLevel (1);
			
				Debug.Log ("Clicked the button with an image");
		
			}
			
			//if (GUI.Button (Rect(imagePosition, 450, (Screen.width / 2), 100), "Click"))
			//{
		
			//	Debug.Log ("Clicked the button with text");
		
			//}
			
			// Make a password field that modifies passwordToEdit.
			//passwordToEdit = GUI.PasswordField (Rect (10, 10, 200, 20), passwordToEdit, "*"[0], 25);
		
		}
		
		if (!btnTexture) 
		{
			
			Debug.LogError("Please assign a texture on the inspector");
			return;
			
		}	
			
}

function LoadHighScores ()
{

	

}