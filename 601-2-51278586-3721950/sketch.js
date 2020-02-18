/*
Officer: 3721950
CaseNum: 601-2-51278586-3721950

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing LightSeaGreen stroke vertexes at each location. (done)

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, MediumSpringGreen stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 78 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- stroke()
- beginShape(), endShape(), vertex()

- stroke
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var criminal_record_coordinate_x = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var criminal_record_coordinate_y = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


//Recent crime records.

var killing_record = [ 
  { PosX : 409, PosY : 446, VictimDetails : 'NELSON TINTLE'},
  { PosX : 443, PosY : 419, VictimDetails : 'BRIDGET BROADVIEW'},
  { PosX : 465, PosY : 548, VictimDetails : 'MAJORIE JENI'},
  { PosX : 709, PosY : 552, VictimDetails : 'ERMELINDA OORIN'},
  { PosX : 695, PosY : 421, VictimDetails : 'NICOLE ASHELY'},
  { PosX : 652, PosY : 268, VictimDetails : 'LAVERNE JACQUELIN'},
  { PosX : 641, PosY : 306, VictimDetails : 'SUMMER CASIMERE'},
  { PosX : 119, PosY : 344, VictimDetails : 'HANG NIEMELA'},
  { PosX : 114, PosY : 359, VictimDetails : 'JACQUELINE DURANTS'},
  { PosX : 90, PosY : 490, VictimDetails : 'TAMICA MAUBERT'},
  { PosX : 76, PosY : 516, VictimDetails : 'KITTY THAXTER'},
  { PosX : 615, PosY : 741, VictimDetails : 'LIANNE COURTWOOD'},
  { PosX : 349, PosY : 796, VictimDetails : 'BRAD SILVEIRA'},
  { PosX : 456, PosY : 770, VictimDetails : 'JULIANA ADVERSANE'} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
	beginShape()
	stroke(32, 178, 170)
	for(var i = 0; i < criminal_record_coordinate_x.length; i++)
		{
			vertex(criminal_record_coordinate_x[i], criminal_record_coordinate_y[i] )
			console.log("criminal records coordinates",criminal_record_coordinate_x[i],
					   criminal_record_coordinate_y[i])
			
			
		}
	endShape();
	
	
	
	
	
	
	
	
	beginShape();
	stroke(0, 250, 154)
	for(var j = 0; j <killing_record.length ; j++) 
		{
			console.log("killing coordinates",killing_record[j].PosX,
					   killing_record[j].PosY)
			rect(killing_record[j].PosX -5,killing_record[j].PosY -5, 10, 10) //killing_record[j].PosX, killing_record[j].PosY
		
		}
		endShape();
	
//	if(dist(criminal_record_coordinate_x[i],
//		   criminal_record_coordinate_y[i],
//		   killing_record[j].PosX,
//		   killing_record[j].PosY < 78))
//	   {
//		   possibleMatches.push({ 
//			   crime:{x:killing_record[i].PosX,
//					  y:killing_record[i].PosY,
//					  victimName: killing_record[i].VictimDetails}, 
//			   suspect:{
//					  x: criminal_record_coordinate_x[i],
//					  y: criminal_record_coordinate_y[i]} }
//							   )
//	   
//	   }



	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
