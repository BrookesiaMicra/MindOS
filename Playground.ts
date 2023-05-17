// MindScript Existential language
// ---------------------------------


// Primitive Data sensed in real time 
// ------------------------------------
type Sensable =
'no sensation'|
'any sensation'|
'breath'|
'sight'|
'sound'|
'smell'|
'touch'|
'taste';

// Thoughts derivatives   
// -------------------
type Emotion =
"affectionate"|
"engaged"|
"hopeful"|
"confident"|
"exited"|
"grateful"|
"inspired"|
"joyful"|
"exhilarated"|
"peaceful"|
"refreshed";

// Thoughts content, without substance behind them - Vikalpa
// -------------------
type Time =  "past" | "future";
type Positivity =  "negative" | "positive";
type Truthfulness = "truth" | "false";
type Livelihood = "life" | "death";
type Polars = Time | Positivity | Truthfulness | Livelihood;

type Any = Sensable | Emotion | Polars;

type Raw_Pseudo_Ontological_Data = Sensable;





// Social distribution networks 
// ----------------------------

class ConsoleLog{
    print(s :string){
        console.log(s);
    }
}
class MediumSocialNetwork{
    //...(todo: implement a class for how to upload a post on Medium)
}

class Publish{
    m_cl : ConsoleLog = new ConsoleLog();
    m_s : string = "";
    
    append(s : string){
        this.m_s += s;
    }
    out(){
        this.m_cl.print(this.m_s);
        this.m_s = "";
    } 
}

// The Mind OS
// ------------
class Mind{
    m_publish : Publish = new Publish();
    
    say_to_myself(engage : string){
    	this.m_publish.append("Mentally say to myself: \"" + engage + "\"");
    }

    ask_myself(explore : string){
    	this.m_publish.append("Ask myself: \"" + explore + " ?\"");
    }

    onInhalation(sat : string){
        this.m_publish.append("during inhelation see that " + sat + "\n");
    }
    onExhelation(num : string){
        this.m_publish.append("during exhelation see that " + num + "\n");
    }

    hello_world() {
        this.say_to_myself("Each time my thoughts will be interrupted, I will attain to the Endless Expanding universe and smile to it :-)");
        this.m_publish.out();
    }

    slow_down(sensation: Sensable) {
        this.say_to_myself("Whenever my thoughts will be interrupted, I will shift my attention to " + sensation);
        this.m_publish.out();
    }

   
    speed_up(directions:Any[], t?:Time){
        var s = "";
        s += directions.toString() + "";

    	switch(t){
    	   	case "past":
            	this.ask_myself ("Do " + s + " truely exist");
            	break;
        	case "future":
            	this.ask_myself ("How would I like the " + s + " to be");
            	break;
        	default:
            	this.ask_myself (s);
    	}
    	this.m_publish.out();
    }

    prepare(){
   	 this.say_to_myself ("I will make myself comfortable and relaxed for few breathing cycles");
   	 this.m_publish.out();
    }

    remind(pastSituation:any[], anchor:Sensable){
    	this.hello_world(); /* step 1 – smile to the endless universe */
    	this.slow_down(anchor); /* step 2 – anchor yourself to Sensable reality*/
        this.speed_up(pastSituation, "past"); /* step 3 – explore */
    	this.slow_down(anchor); /* step 4 – relax */
    	this.m_publish.out();
    };
 	 
    imagine(futureSituation:Any[], desiredEmotion:Emotion, anchor:Sensable){
        /*step 1 – smile to yourself */
        this.hello_world(); 
        /* step 2 – anchor yourself to Existential reality */
        this.slow_down(anchor); 
        /* step 3 – Explore (while smiling :-) how would you like your emotions to look like, in future situations ? */
        futureSituation.push(desiredEmotion);
        this.speed_up(futureSituation, "future");
        /*step 4 – smile, you did it, you've just created your own future */
        this.hello_world(); 
        /* step 5 – relax */
        this.slow_down(anchor); 
        this.m_publish.out();
    };

    oscillate(sat:string, num:string){
        this.onInhalation(sat);
        this.onExhelation(num);
        this.m_publish.out();
    }
    create(futureSituation:Any[]){
        /* step 1 – smile to the universe, it is all your creation */
        this.hello_world(); 
        /* step 2 - adjust your standpoint to 1st person point of view */
        this.oscillate(
            "my 'energetic body' expands infinitely to the size of the universe",
            "I am a zero sized witness, absorbing the universe energies"
        );
        /* step 3 - imagine forms of future physical situation, from your point of view*/
        this.speed_up(futureSituation, "future");
        /* step 4 - smaile, you have just creaeted physical reality */
        this.hello_world(); 
        /* step 5 – relax */
        this.slow_down("breath"); 
        this.m_publish.out();
    }
 	 
}

console.log(99);

/*--------- Tests --------*/
////////////////////////////

class Main {
    constructor() {
     
    
  	 
    // MindOS Unit tests
    // ---------------------------------------

    //hello_world
    var M = new Mind();
    var cl = new ConsoleLog();

    cl.print("\n hello_world():");
    cl.print("--------------");
    M.hello_world();
    
    //slow_down
    cl.print("\n slow_down():");
    cl.print("--------------");
    var sensation:Sensable = "any sensation";
    M.slow_down(sensation);
    
    //speed_up
    cl.print("\n speed_up():");
    cl.print("--------------");
    var direction:Any[] = ["truth"];
    
    M.speed_up(direction);



    var anchor:Sensable = "breath";

    //prepare
    cl.print("\n prep():");
    cl.print("[---");
    M.prepare();
    cl.print("---]");


    //remind
    cl.print("\n remind():");
    cl.print("[---");
    var situationDetails:Any[] = ["death", "negative"]; 
    M.remind(situationDetails, anchor);
    cl.print("---]");

    
    //imagine    
    cl.print("\n Imagine");
    cl.print("[---");
    var situationDetails:Any[]  = ["no sensation", "death"];
    var desiredEmotion:Emotion = "joyful";  
    M.imagine(situationDetails, desiredEmotion, anchor);
    cl.print("---]");

    //oscillate()
    cl.print("\n oscillate");
    cl.print("[---");
    M.oscillate(
        "I am the whole universe",
        "I am nothing but a witness"
    );
    cl.print("---]");

    //create()
    cl.print("\n create");
    cl.print("[---");
    var scene:Sensable[] = ["sight"];
    M.create(scene);
    cl.print("---]");
    
  }
}

var test = new Main();





