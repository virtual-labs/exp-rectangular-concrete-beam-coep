function DCalculateValNext(){
		$("#page4Div2").html('');
	 var x=100,y=50;
var paper = new Raphael(document.getElementById('page4Div2'));

var w = 600;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();
//		if(flg==0){
			paper = new Raphael(document.getElementById('page4Div2'), '100%', '100%');
//		}else{
//			paper = new Raphael(document.getElementById('main-div-conf'), '100%', '100%');
//		}
		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {
//		if(flg==0){
			paper = new Raphael(document.getElementById('page4Div2'), '100%', '100%');
//		}else{
//			paper = new Raphael(document.getElementById('main-div-conf'), '100%', '100%');
//		}
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}
//	
   var frame = paper.image("images/reinFrame.png",(x+50), (y+30),250, 350);
  var circle1 = paper.circle((x+107),(y+88), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  var circle2 = paper.circle((x+240),(y+88), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  
  var circle3 = paper.circle((x+107),(y+318), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  var circle4 = paper.circle((x+240),(y+318), 25).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  
  var dline = paper.path("M"+(x+39)+" "+(y+40)+" l 0 330").attr({'stroke':'#000','stroke-width': 1});
  var arD = paper.path("M"+(x+40)+" "+(y+45)+" l 10 0 l -11 -11 l -11 11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
  var arDL = paper.path("M"+(x+40)+" "+(y+358)+" l 10 0 l -11 11 l -11 -11 l 10 0").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
  
  var dline1 = paper.path("M"+(x+311)+" "+(y+40)+" l 0 275").attr({'stroke':'#000','stroke-width': 1});
  var arD1 = paper.path("M"+(x+312)+" "+(y+45)+" l 10 0 l -11 -11 l -11 11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
   
  var arD2 = paper.path("M"+(x+312)+" "+(y+306)+" l 10 0 l -11 11 l -11 -11 l 10 0")
   .attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});

    paper.path('M' + (x + 105) + ' ' + (y + 318 )  + 'l 240 0 ')
		.attr({ 'stroke-dasharray':  "- ", 'stroke-width': '2','stroke': '#000'}).toFront();
		
		
    var lin = paper.path("M"+(x+311)+" "+(y+320)+" l 0 50");	
	var a1 = paper.path("M"+(x+312)+" "+(y+330)+" l 10 0 l -11 -11 l -11 11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
	var a2 = paper.path("M"+(x+312)+" "+(y+358)+" l 10 0 l -11 11 l -11 -11 l 10 0").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
	txtD.remove
	 txtD = paper.text(x-30,y+190,"D = "+overDepthVal+" mm").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
     deffText1 = paper.text(x+325,y+190,"d").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
     deffText2 = paper.text(x+340,y+195,"eff").attr({'font-weight': 'bold','font-size':'14px','stroke':'#f20515'});
     var deffTxt = paper.text(x+410,y+190," = "+dVal+" mm").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
    var textd1 = paper.text(x+380,y+345,"d' = "+effectCover+" mm").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
    var txtb = paper.text(x+175,y+5,"b = "+beamWidthVal+" mm").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'}); 

     
 
	var lin1 = paper.path("M"+(x+60)+" "+(y+16)+" l 225 0 ");
	var a11 = paper.path("M"+(x+68)+" "+(y+16)+" l 0 10 l-11 -11 l 11 -11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});
	var a12 = paper.path("M"+(x+283)+" "+(y+16)+" l 0 10 l 11 -11 l -11 -11 z").attr({'stroke':'#000','stroke-width': 1,'fill':'#000'});

	
//    
		
	}
	
	
	
	function reinAnimN(){
	
	$("#page4Div2").html('');
	var x=50,y=50;
var paper = new Raphael(document.getElementById('page4Div2'));

	var w = 800;
	var h = 450;

	var width = $(window).width();

	if ($(window).width() < 600) {
		width = $(this).width();
			paper = new Raphael(document.getElementById('page4Div2'), '100%', '100%');
		
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	} else {

			paper = new Raphael(document.getElementById('page4Div2'), '100%', '100%');

		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('90%', '90%');
	}

  var temp = 0;
  var circleSize = parseInt(Dchange);
  var noOfCircles = nBars ;
  var spacing = 0;
  var beamWidthV = parseInt(beamWidthVal);
  
  var beamWidthVal1 = 0;
  
  if(beamWidthV==150)
    {
	beamWidthVal1 =200;
}if(beamWidthV==200||beamWidthV==230){
	beamWidthVal1 =220;
}if(beamWidthV==300||beamWidthV==400){
	beamWidthVal1 =240;
}if(beamWidthV==500||beamWidthV==600){
	beamWidthVal1 =260;
}

console.log("beamWidthVal1 : "+beamWidthVal1);

var frameArea = beamWidthVal/noOfCircles;
var z;

spacing=frameArea;
 
var bottomDiff = beamWidthVal-spacing;
var spac = spacing/2;
var finDiv = spac/2;

var spaceVal = 0;
    var rect1 = paper.rect(x+50,y+40,beamWidthVal,beamWidthVal+50).attr({'stroke':'#000','stroke-width': 2});
    
    
    
    
    var arr = []; 

 
 var actualDistance = (noOfCircles*2*circleSize);
 var newCircleSize, actualDistance1;
 if((actualDistance+100)>=(beamWidthVal+50)){
	newCircleSize = circleSize/2;
	actualDistance1 = (noOfCircles*2*newCircleSize);
	if((actualDistance1+100)>=(beamWidthVal+50)){
	newCircleSize = newCircleSize/3;	
	}else{
		newCircleSize = newCircleSize;
	}
}else{
	newCircleSize = circleSize;
}
  
    yAdjust = (beamWidthVal+90)-(newCircleSize*3);
    
    
     for(i=0;i<noOfCircles;i++){	
  var circle1 = paper.circle((x+50+spac+temp),(y+yAdjust), newCircleSize+2).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  	temp = temp+spacing;
   console.log((beamWidthVal+50+y+40) - (y+yAdjust));
  	var xpos =spac+temp;
	arr[i] = xpos;
	console.log(arr[i]);
     
  }
  
    var rect2 = paper.rect(x+50+40+beamWidthVal,y+40,beamWidthVal+70,beamWidthVal+50).attr({'stroke':'#000','stroke-width': 2});

  
      var l1 = paper.path("M"+(x+50+40+beamWidthVal)+" "+(y+yAdjust)+" l "+(beamWidthVal+70)+" 0").attr({'stroke':'#636058','stroke-width': newCircleSize*2});

 
  paper.path('M' + (x+50) + ' ' + (y+yAdjust)  + 'l '+(beamWidthVal)+' 0 ')
  .attr({ 'stroke-dasharray':  "- ", 'stroke-width': '2','stroke': '#000'}).toFront(); 
  
  
  
  var lastVal = arr[arr.length - 1];
  var diff = lastVal-beamWidthVal;
  var div = diff/2;
  console.log("lastVal "+lastVal);
  var frameArea1 = beamWidthVal/2;


  var temp1 = 0;
  var tmp12 = (beamWidthVal+50+y+40) - (y+yAdjust);
	
   var circle2 = paper.circle((x+50+spac+temp1-1),(y + 40 + tmp12), newCircleSize+2).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
   var circle3 = paper.circle((x+beamWidthVal+50-diff),(y + 40 + tmp12), newCircleSize+2).attr({'stroke':'#000','fill': '#a19d92','stroke-width': 2});
  
   var l2 = paper.path("M"+(x+50+40+beamWidthVal)+" "+(y + 40 + tmp12)+" l "+(beamWidthVal+70)+" 0").attr({'stroke':'#636058','stroke-width': newCircleSize*2});

  paper.path('M' + (x+50) + ' ' + (y + 40 + tmp12)  + 'l '+(beamWidthVal)+' 0 ')
  .attr({ 'stroke-dasharray':  "- ", 'stroke-width': '2','stroke': '#000'}).toFront(); 
  
 paper.path('M' + (x+50+spac) + ' ' + (y+40 )  + 'l  0 '+(beamWidthVal+50))
  .attr({ 'stroke-dasharray':  "- ", 'stroke-width': '2','stroke': '#000'}).toFront(); 
  
   paper.path('M' + (x+50+beamWidthVal-spac) + ' ' + (y+40 )  + 'l  0 '+(beamWidthVal+50))
  .attr({ 'stroke-dasharray':  "- ", 'stroke-width': '2','stroke': '#000'}).toFront(); 
 
  paper.path('M' + (x+90+beamWidthVal+(beamWidthVal+70)/2) + ' ' + (y+40 )  + 'l  0 '+(beamWidthVal+50))
  .attr({ 'stroke-dasharray':  "- ", 'stroke-width': '2','stroke': '#000'}).toFront();  
  
	txtD = paper.text((x+90+beamWidthVal+(beamWidthVal+70)/2),y+25,"A").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});
	txtD1 = paper.text((x+90+beamWidthVal+(beamWidthVal+70)/2),y+(beamWidthVal+108),"A'").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});

	txtD2 = paper.text((x+50+temp1+(beamWidthVal/2)),y+(beamWidthVal+108),"Section AA'").attr({'font-weight': 'bold','font-size':'18px','stroke':'#f20515'});

    
}	