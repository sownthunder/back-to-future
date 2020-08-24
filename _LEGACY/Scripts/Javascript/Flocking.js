#pragma strict

///////////////////////
// Flocking(manager) //
///////////////////////

// Number of cops the player has to "trap" (get rid of) A IT STARTS AT 8 == THIS IS A COUNTDOWN AND REPRESENT
// ^^ THIS IS A COUNTDOWN AND REPRESENTS HOW MANY REMAINING
public var enemiesRem : int = 8;

// This is the distance between any two of the cops within the flock (of our choosing)
public var distanceBetween : float;

// variable holding vehicle (player) that will be used to move police officers relative to THE DELOREAN
public var theDeLorean : Transform;

// the distance we want to try and have the police officers behind eachother
public var dist : float = 2.0;

// the Tranform of every cop that will be controlled in "the flock"
// ALSO: USED TO get CopController Script
public var enemyCop1 : Transform;
public var enemyCop2 : Transform;
public var enemyCop3 : Transform;
public var enemyCop4 : Transform;
public var enemyCop5 : Transform;
public var enemyCop6 : Transform;
public var enemyCop7 : Transform;
public var enemyCop8 : Transform;

//////////////////////////////////////////////////////////////////////////

// variable that will hold reference to the target script (CopController)
public var EnemyCop1Script : CopController;
public var EnemyCop2Script : CopController;
public var EnemyCop3Script : CopController;

public var EnemyCop4Script : CopController;
public var EnemyCop5Script : CopController;
public var EnemyCop6Script : CopController;

public var EnemyCop7Script : CopController;
public var EnemyCop8Script : CopController;

///////////////////////////////////////////////////////////////////////////////

// the Transform of every CopClone that will be controlled in "the flock"
// ALSO: Used to get CopCloneController script
// *********** <--- MIGHT NOT BE USED AT ALL ------> **********
public var enemyCopClone1 : Transform;
public var enemyCopClone2 : Transform;
public var enemyCopClone3 : Transform;

public var enemyCopClone4 : Transform;
public var enemyCopClone5 : Transform;
public var enemyCopClone6 : Transform;

public var enemyCopClone7 : Transform;
public var enemyCopClone8 : Transform;

//////////////////////////////////////////////////////////////////////////////////

// variable that will hold refernce to the target script (CopCloneController)
public var EnemyCopClone1Script : CopCloneController;
public var EnemyCopClone2Script : CopCloneController;
public var EnemyCopClone3Script : CopCloneController;

public var EnemyCopClone4Script : CopCloneController;
public var EnemyCopClone5Script : CopCloneController;
public var EnemyCopClone6Script : CopCloneController;

public var EnemyCopClone7Script : CopCloneController;
public var EnemyCopClone8Script : CopCloneController;

//////////////////////////////////////////////////////////////////////////////////

// Used for pre-initialization
function Awake ()
{

	// get a reference to all the enemyCops
	EnemyCop1Script = new enemyCop1.GetComponent (CopController);
	EnemyCop2Script = new enemyCop2.GetComponent (CopController);
	EnemyCop3Script = new enemyCop3.GetComponent (CopController);
	
	EnemyCop4Script = new enemyCop4.GetComponent (CopController);
 	EnemyCop5Script = new enemyCop5.GetComponent (CopController);
 	EnemyCop6Script = new enemyCop6.GetComponent (CopController);
 	
 	EnemyCop7Script = new enemyCop7.GetComponent (CopController);
 	EnemyCop8Script = new enemyCop8.GetComponent (CopController);
	
	// get a reference to all the enemyCopClones
	EnemyCopClone1Script = new enemyCopClone1.GetComponent (CopCloneController);
	EnemyCopClone2Script = new enemyCopClone2.GetComponent (CopCloneController);
	EnemyCopClone3Script = new enemyCopClone3.GetComponent (CopCloneController);
	
	EnemyCopClone4Script = new enemyCopClone4.GetComponent (CopCloneController);
	EnemyCopClone5Script = new enemyCopClone5.GetComponent (CopCloneController);
	EnemyCopClone6Script = new enemyCopClone6.GetComponent (CopCloneController);
	
	EnemyCopClone7Script = new enemyCopClone7.GetComponent (CopCloneController);
	EnemyCopClone8Script = new enemyCopClone8.GetComponent (CopCloneController);

}

// used for initialization
function Start () 
{

	

}

// called once per frame
function Update () 
{
	
	//CheckForHits ();

}

/*
// uses precedence (cop 1 > cop 2 > cop 3.. etc) 
// to control which ai cop is leading (they wont merge)
function CheckForHits ()
{

	/////////////////////////////////////////////
	// <-OFFICR PRECEDENCE-> //				   //
	///////////////////////////				   //
	// OFFICER #1			 //				   //
	// ^^					 //				   //
	// OFFICER #2			 //				   //
	// ^^					 //				   //
	// OFFICER #3			 //				   //
	// ^^					 //				   //
	// OFFICER #4 (add lat8r)//				   //
	// ^^					 //			       //
	// OFFICER #5 (add lat8r)//				   //
	/////////////////////////////////////////////

	/////////////////////////////////////////////
	// COP 1 PRECEDENCE
	/////////////////////////////////////////////
	// if the enemyCop1 happens to be hit by enemyCop#2
	// COP#1 HIT BY COP#2
	////////////////////////////////////////////////////
	if (EnemyCop1Script.hitCop2)
	{
		
		// if the enemyCop#2 is pursuing ("stillPursuiting" == true)
		// the one that just got hit
		if (EnemyCop2Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop2.transform.position, enemyCop1.transform.position) < dist)
			{
			
				// set it so enemyCop#2 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop2Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop2Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	///////// COP#1 HIT BY COP#3
	// if the enemyCop1 happens to be hit by enemyCop#3
	/////////////////////////////////////////////////////
	else if (EnemyCop1Script.hitCop3)
	{
	
		// if the enemyCop#3 is pursuing ("stillPursuing" == true)
		if (EnemyCop3Script.stillPursuiting)
		{
		
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop3.transform.position, enemyCop1.transform.position) < dist)
			{
			
				// set it so enemyCop#3 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop3Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop3Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	//// COP#1 HIT BY COP#4
	//// if the enemyCop1 happens to be hit by enemyCop#4
	///////////////////////////////////////////////////
	else if (EnemyCop1Script.hitCop4)
	{
	
		// if the enemyCop#4 is pursuing ("stillPursuing" == true)
		if (EnemyCop4Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop4.transform.position, enemyCop1.transform.position) < dist)
			{
			
				// set it so enemyCop#4 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop4Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop4Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#1 HIT BY COP#5
	////////////////////////////////////
	else if (EnemyCop1Script.hitCop5)
	{
	
		// if the enemyCop#5 is pursuing ("stillPursuing" == true)
		if (EnemyCop5Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop5.transform.position, enemyCop1.transform.position) < dist)
			{
			
				// set it so enemyCop#5 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop5Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop5Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#1 HIT BY COP#6
	/////////////////////////////////////
	else if (EnemyCop1Script.hitCop6)
	{
	
		// if the enemyCop#6 is pursuing ("stillPursuing" == true)
		if (EnemyCop6Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop6.transform.position, enemyCop1.transform.position) < dist)
			{
			
				// set it so enemyCop#6 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop6Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop6Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#1 HIT BY COP#7
	///////////////////////////////////////
	else if (EnemyCop1Script.hitCop7)
	{
	
		// if the enemyCop#7 is pursuing ("stillPursuing" == true)
		if (EnemyCop7Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop7.transform.position, enemyCop1.transform.position) < dist)
			{
			
				// set it so enemyCop#7 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop7Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop7Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#1 HIT BY COP#8
	/////////////////////////////////////
	else if (EnemyCop1Script.hitCop8)
	{
	
		// if the enemyCop#8 is pursuing ("stillPursuing" == true)
		if (EnemyCop8Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop8.transform.position, enemyCop1.transform.position) < dist)
			{
			
				// set it so enemyCop#8 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop8Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop8Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	///////////////////////////
	// COP 2 PRECEDENCE 
	///////////////////////////
	// if enemyCop2 happens to be hit by enemyCop#3
	// COP#2 HIT BY COP#3
	///////////////////////////////////////////////
	else if (EnemyCop2Script.hitCop3)
	{
	
		// if the enemyCop#3 is pursuing ("stillPursuing" == true)
		if (EnemyCop3Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop3.transform.position, enemyCop2.transform.position) < dist)
			{
			
				// set it so enemyCop#3 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop3Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop3Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#2 HIT BY COP#4
	/////////////////////////////////
	else if (EnemyCop2Script.hitCop4)
	{
	
		// if the enemyCop#4 is pursuing ("stillPursuing" == true)
		if (EnemyCop4Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop4.transform.position, enemyCop2.transform.position) < dist)
			{
			
				// set it so enemyCop#4 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop4Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop4Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#2 HIT BY COP#5
	//////////////////////////////////////////
	else if (EnemyCop2Script.hitCop5)
	{
	
		// if the enemyCop#5 is pursuing ("stillPursuing" == true)
		if (EnemyCop5Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop5.transform.position, enemyCop2.transform.position) < dist)
			{
			
				// set it so enemyCop#5 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop5Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop5Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#2 HIT BY COP#6
	////////////////////////////////////////////
	else if (EnemyCop2Script.hitCop6)
	{
	
		// if the enemyCop#6 is pursuing ("stillPursuing" == true)
		if (EnemyCop6Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop6.transform.position, enemyCop2.transform.position) < dist)
			{
			
				// set it so enemyCop#6 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop6Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop6Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#2 HIT BY COP#7
	///////////////////////////////////////////////////
	else if (EnemyCop2Script.hitCop7)
	{
	
		// if the enemyCop#7 is pursuing ("stillPursuing" == true)
		if (EnemyCop7Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop7.transform.position, enemyCop2.transform.position) < dist)
			{
			
				// set it so enemyCop#7 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop7Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop7Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#2 HIT BY COP#8
	///////////////////////////////////////////////////
	else if (EnemyCop2Script.hitCop8)
	{
	
		// if the enemyCop#8 is pursuing ("stillPursuing" == true)
		if (EnemyCop8Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop8.transform.position, enemyCop2.transform.position) < dist)
			{
			
				// set it so enemyCop#8 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop8Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop8Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	////////////////////////////////
	// COP 3 PRECEDENCE
	////////////////////////////////
	// if enemyCop3 happens to be hit by enemyCop#4
	// COP#3 HIT BY COP#4
	////////////////////////////////////////////////
	else if (EnemyCop3Script.hitCop4)
	{
	
		// if the enemyCop#4 is pursuing ("stillPursuing" == true)
		if (EnemyCop4Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop4.transform.position, enemyCop3.transform.position) < dist)
			{
			
				// set it so enemyCop#4 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop4Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop4Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#3 HIT BY COP #5
	//////////////////////////////////////
	else if (EnemyCop3Script.hitCop5)
	{
	
		// if the enemyCop#5 is pursuing ("stillPursuing" == true)
		if (EnemyCop5Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop5.transform.position, enemyCop3.transform.position) < dist)
			{
			
				// set it so enemyCop#5 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop5Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop5Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#3 HIT BY COP#6
	///////////////////////////////////////
	else if (EnemyCop3Script.hitCop6)
	{
	
		// if the enemyCop#6 is pursuing ("stillPursuing" == true)
		if (EnemyCop6Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop6.transform.position, enemyCop3.transform.position) < dist)
			{
			
				// set it so enemyCop#6 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop6Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop6Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP #3 HIT BY COP#7
	////////////////////////////////////////
	else if (EnemyCop3Script.hitCop7)
	{
	
		// if the enemyCop#7 is pursuing ("stillPursuing" == true)
		if (EnemyCop7Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop7.transform.position, enemyCop3.transform.position) < dist)
			{
			
				// set it so enemyCop#7 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop7Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop7Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#3 HIT BY COP#8
	//////////////////////////////////////////////
	else if (EnemyCop3Script.hitCop8)
	{
	
		// if the enemyCop#8 is pursuing ("stillPursuing" == true)
		if (EnemyCop8Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop8.transform.position, enemyCop3.transform.position) < dist)
			{
			
				// set it so enemyCop#8 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop8Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop8Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	////////////////////////////////////////////////
	// COP 4 PRECEDENCE
	////////////////////////////////////////////////
	// COP#4 HIT BY COP#5
	////////////////////////////////////////////////
	else if (EnemyCop4Script.hitCop5)
	{
	
		// if the enemyCop#5 is pursuing ("stillPursuing" == true)
		if (EnemyCop5Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop5.transform.position, enemyCop4.transform.position) < dist)
			{
			
				// set it so enemyCop#5 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop5Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop5Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	else if (EnemyCop4Script.hitCop6)
	{
	
		// if the enemyCop#6 is pursuing ("stillPursuing" == true)
		if (EnemyCop6Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop6.transform.position, enemyCop4.transform.position) < dist)
			{
			
				// set it so enemyCop#6 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop6Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop6Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#4 HIT BY COP#7
	/////////////////////////////////////////
	else if (EnemyCop4Script.hitCop7)
	{
	
		// if the enemyCop#7 is pursuing ("stillPursuing" == true)
		if (EnemyCop7Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop7.transform.position, enemyCop4.transform.position) < dist)
			{
			
				// set it so enemyCop#7 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop7Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop7Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#4 HIT BY COP#8
	//////////////////////////////////////////////////
	else if (EnemyCop4Script.hitCop8)
	{
	
		// if the enemyCop#8 is pursuing ("stillPursuing" == true)
		if (EnemyCop8Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop8.transform.position, enemyCop4.transform.position) < dist)
			{
			
				// set it so enemyCop#8 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop8Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop8Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	///////////////////////////////////////////////////////
	// COP#5 PRECEDENCE
	///////////////////////////////////////////////////////
	// COP#5 HIT BY COP#6
	///////////////////////////////////////////////////////
	else if (EnemyCop5Script.hitCop6)
	{
	
		// if the enemyCop#6 is pursuing ("stillPursuing" == true)
		if (EnemyCop6Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop6.transform.position, enemyCop5.transform.position) < dist)
			{
			
				// set it so enemyCop#6 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop6Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop6Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#5 HIT BY COP#7
	////////////////////////////////////////////
	else if (EnemyCop5Script.hitCop7)
	{
	
		// if the enemyCop#7 is pursuing ("stillPursuing" == true)
		if (EnemyCop7Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop7.transform.position, enemyCop5.transform.position) < dist)
			{
			
				// set it so enemyCop#7 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop7Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop7Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#5 HIT BY COP#8
	else if (EnemyCop5Script.hitCop8)
	{
	
		// if the enemyCop#8 is pursuing ("stillPursuing" == true)
		if (EnemyCop8Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop8.transform.position, enemyCop5.transform.position) < dist)
			{
			
				// set it so enemyCop#8 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop8Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop8Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	////////////////////////////////////////////////////////////////
	// COP#6 PRECEDENCE
	////////////////////////////////////////////////////////////////
	// COP#6 HIT BY COP#7
	////////////////////////////////////////////////////////////////
	else if (EnemyCop6Script.hitCop7)
	{
	
		// if the enemyCop#7 is pursuing ("stillPursuing" == true)
		if (EnemyCop7Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop7.transform.position, enemyCop6.transform.position) < dist)
			{
			
				// set it so enemyCop#7 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop7Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop7Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	// COP#6 HIT BY COP#8
	///////////////////////////////////////
	else if (EnemyCop6Script.hitCop8)
	{
	
		// if the enemyCop#8 is pursuing ("stillPursuing" == true)
		if (EnemyCop8Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop8.transform.position, enemyCop6.transform.position) < dist)
			{
			
				// set it so enemyCop#8 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop8Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop8Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	////////////////////////////////////////////////////////////////
	// COP#7 PRECEDENCE
	////////////////////////////////////////////////////////////////
	// COP#7 HIT BY COP#8
	////////////////////////////////////////////////////////////////
	else if (EnemyCop7Script.hitCop8)
	{
	
		// if the enemyCop#8 is pursuing ("stillPursuing" == true)
		if (EnemyCop8Script.stillPursuiting)
		{
			
			// If the measured distance is (less than the REQUIRED DISTANCE)
			if (MeasureDistance (enemyCop8.transform.position, enemyCop7.transform.position) < dist)
			{
			
				// set it so enemyCop#8 is no longer pursuing ("stillPursuiting" == false)
				EnemyCop8Script.stillPursuiting = false;
			
			}
			else
			{
			
				// start pursuiting again
				EnemyCop8Script.stillPursuiting = true;
			
			}
		
		}
	
	}
	////////////////////////////////////////////////////////////////
	// ELSE -----> WHATEVER
	////////////////////////////////////////////////////////////////
	else
	{
	
		
	
	}
	
}
*/

//////////////////////////////////////
// measures distance of two objects //
// SUBTRACT A FROM B ( A - B )	    //
///// CONFIRM THIS!?!?!?! ^^^ ////////
//////////////////////////////////////
function MeasureDistance (vectorA : Vector3, vectorB : Vector3) : float
{

	// Determines the distance by subtracting the position of the DeLorean by position of this cop
	distanceBetween = Vector3.Distance (vectorA, vectorB);
	
	return distanceBetween;

}