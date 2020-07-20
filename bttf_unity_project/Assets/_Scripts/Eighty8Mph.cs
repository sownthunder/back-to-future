using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Eighty8Mph : MonoBehaviour
{

	public GUIStyle timerGuiStyle;

	public int index = 1;

	public float distanceBetween;

	public float originalDeLoreanTimer = 0;

	public Transform martyTransform;

	public Vector3 myVector;

	public Vector3 originalDeLoreanPosition;

	// TEST array to hold the mvements (in Vector3)
	public Vector3[ ] arr = new Vector3[ ]{ };

	// array to hold 3D game object and direction ???
	public GameObject[ ] gameobjectArr = new GameObject[ ]{ };

	public List<Vector3> savedLocations = new List<Vector3>();

	public List<GameObject> savedObjectLocations = new List<GameObject>();

	void Awake()
	{

		// Set the vector, which you use to be added to the LIST
		myVector = new Vector3(0.0f, 1.0f, 0.0f);

		// add to the main array (movements/position)
		savedLocations.Add(myVector);

		Debug.Log(savedLocations);

	}

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
