#pragma strict

public var moveSpeed : float = 8.0f;
public var rotationSpeed : float = 2.0f;

public var minDist = 4.0f;
public var maxDist = 45.0f;

private var minSqrDist : float;
private var maxSqrDist : float;

private var myTransform : Transform;
private var target : Transform;

private var myRigidbody : Rigidbody;
private var desiredVelocity : Vector3;

// Use for pre-initialization
function Awake ()
{

	

}

// Use for initialization 
function Start () 
{

	minSqrDist = minDist * minDist;
	maxSqrDist = maxDist * maxDist;
	
	myTransform = transform;
	myRigidbody = GetComponent.<Rigidbody>();

}

// Called once per frame
function Update () 
{

	

}