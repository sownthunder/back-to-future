#pragma strict

// declare custom GUI style
public var gameOverGUIStyle : GUIStyle;

// Use this for pre-initialization
function Awake ()
{

	

}

// Use this for initialization
function Start () 
{

	

}

// Called once per frame
function Update () 
{

	

}

// Use this for Graphical User Interface
function OnGUI ()
{

	// display the fact that the user is a total noob 
	GUI.Box(Rect ((Screen.width / 2), ((Screen.height / 10) * 9), (Screen.width / 5), 100), "YOU LOSE LOL!", gameOverGUIStyle);

}