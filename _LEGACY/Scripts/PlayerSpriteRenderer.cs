using UnityEngine;
using System.Collections;

public class PlayerSpriteRenderer : MonoBehaviour {

	// <--- SPRITES FOR WHEN STAYING LEVEL AND NOT MOVING UP OR DOWN --->
	public Sprite martyMoveStrLeft1;	// Left
	public Sprite martyMoveStrLeft2; 	// Left
	public Sprite martyMoveStrLeft3;	// Left

	public Sprite martyMoveStrRight1;	// Right
	public Sprite martyMoveStrRight2;	// Right
	public Sprite martyMoveStrRight3; 	// Right

	private SpriteRenderer spriteRenderer; 

	// Marty the player (as a GameObject)
	public GameObject player;

	// "PlayerController" script as a variable (we get through GameObject)
	public PlayerController thePlayerController;

	void Awake ()
	{

		// Get the script from the player GameObject and set it to the variable "PlayerController"
		// To be used when needing to call functions or set variables within the PlayerController class
		thePlayerController = player.GetComponent<PlayerController> ();

		// we are accessing the SpriteRenderer that is attached to the Gameobject
		spriteRenderer = GetComponent<SpriteRenderer> (); 

	}

	void Start ()
	{

		// if the sprite on spriteRenderer is null then
		if (spriteRenderer.sprite == null) 
			// set the sprite to sprite1
			spriteRenderer.sprite = martyMoveStrRight1; 

	}
	
	void Update ()
	{

		// Do while the player is moving left
		/*if (thePlayerController.isLeft)
		{

			Debug.Log ("ballsack lefty");

			// if the spriteRenderer sprite = martyLeft1 then change to martyLeft2
			if (spriteRenderer.sprite == martyMoveStrLeft1) 
			{
				
				spriteRenderer.sprite = martyMoveStrLeft2;
				
			}
			// if the spriteRenderer sprite = martyLeft2 then chance to martyLeft3
			else if (spriteRenderer.sprite = martyMoveStrLeft2)
			{

				spriteRenderer.sprite = martyMoveStrLeft3;
				
			}
			// if the spriteRender is at sprite 3 and at the end of the loop start over
			else if (spriteRenderer.sprite = martyMoveStrLeft3)
			{

				spriteRenderer.sprite = martyMoveStrLeft1;

			}

		}
		// Else do while the player is moving right
		if else(thePlayerController.isRight)
		{

			// if the spriteRenderer sprite = martyRight1 then change to martyRight2
			if (spriteRenderer.sprite == martyMoveStrRight1) 
			{
				
				spriteRenderer.sprite = martyMoveStrRight2;
				
			}
			// if the spriteRenderer sprite = martyRight2 then chance to martyRight3
			else if (spriteRenderer.sprite = martyMoveStrRight2)
			{
				
				spriteRenderer.sprite = martyMoveStrRight3;
				
			}
			// if the spriteRender is at sprite 3 and at the end of the loop start over
			else if (spriteRenderer.sprite = martyMoveStrRight3)
			{
				
				spriteRenderer.sprite = martyMoveStrRight1;
				
			}

		}*/

	}
	
	/*void ChangeTheDamnSprite ()
	{

		// if the spriteRenderer sprite = sprite1 then change to sprite2
		if (spriteRenderer.sprite == sprite1) 
		{

			spriteRenderer.sprite = sprite2;

		}
		else
		{

			// otherwise change it back to sprite1
			spriteRenderer.sprite = sprite1; 

		}

	}*/

}
