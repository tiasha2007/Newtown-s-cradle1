public class cradle : MonoBehaviour
{
    public Transform bob1,bob2;
    public float speed;
    public float rot;
    public Quaternion rot1, rot2;
    // Start is called before the first frame update
    void Start()
    {
       rot1= bob1.rotation;
       rot2 = bob2.rotation; 
    }

    // Update is called once per frame
    void Update()
    {
        rot += speed;
        if(rot >50){
            speed = -speed;
        }
        if(rot < -50){
            speed = -speed;
        }
        if(rot >0){
            bob1.Rotate(transform.right*speed);
            bob2.rotation = rot2;
        }
        if(rot < 0){
            bob2.Rotate(transform.right*speed);
            bob1.rotation = rot1;

        }

    }
}