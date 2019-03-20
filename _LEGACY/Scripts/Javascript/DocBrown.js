#pragma strict

// variable that holds the transform of the player (Marty)
public var theMarty : Transform;

// The total number of phrases that Doc will randomly cycle through 
// and feed back to the player (Marty)
public var numOfPhrases : int = 5;

// for determining when/where to produce sprite rotation
public var isRight : boolean = false;
public var isLeft : boolean = false;

// variable to hold sprite for Doc Brown talking, as well as facing to the left
public var spriteTalkingLeft : Sprite;

// variable to hold sprite for Doc Brown standing still, as well as facing to the right
// ***** THERE ISNT ONE FOR FACING LEFT BECAUSE HE NATURALLY STARTS WITH THAT SPRITE
// ***** SINCE THE SPRIE IS ALREADY ATTACHED TO THE OBJECT AT START WHY MAKE VARIABLE
public var spriteIdleRight : Sprite;

// variable to hold sprite for Doc Brown talking, as well as facing to the right
public var spriteTalkingRight : Sprite;

// the various phrases Doc Brown has and what they are:
public var docBrownSaying1 : String = "No, no, no, no, no, this sucker's electrical, but I need a nuclear reaction to generate the 1.21 gigawatts of electricity I need.";
public var docBrownSaying2 : String = "Of course. From a group of Libyan nationalists. They wanted me to build them a bomb, so I took their plutonium and, in turn, gave them a shoddy bomb casing full of used pinball machine parts. Come on! Let's get you a radiation suit. We must prepare to reload.";
public var docBrownSaying3 : String;
public var docBrownSaying4 : String;
public var docBrownSaying5 : String;

///////////////////////////////////////////////////////////////////////////////////////////////////

// Use for pre-initialization
function Awake ()
{

	

}

// Use for initialization
function Start () 
{

	

}

// Called once per second
function Update () 
{

	

}

// Displays GRAPHICAL USER INTERFACE
function OnGUI ()
{

	

}