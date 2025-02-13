

var conVal = 20;
var steelVal = 500;
var configDiag;
var beamWidthVal;
var beamSpanVal;
var loadOnBeamVal;
var loadMagVal;
var w1WidthVal;
var w2WidthVal;
var longReinVal = 12;
var shearReinVal = 8;
var nominalCoverVal;
var	effectdepthVal ;
var lenghtBeam;
var divFlg = 0;
var steelStr;
var initFlag = false;


var htm=''
	htm+='<div class="row">'	
	+'<div class="col-sm-6">'
	+'<label class="labelstyle marginBottom" >Enter the value of clear span of beam  <label style="color:#8f0831;">L<sub>0</sub>(m)</label>: </label>'
	+'</div>'
	+'<div class="col-sm-4">'
	+'<input type="number"   onblur="updateBeamSpanVal()" style= "width:100%;"  class=" form-control" id="beamSpan" >'
	+'</div>'
	+'<div class="col-sm-3">'
	+'</div>'	
    +'</div>'
    
       +  '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Select Grade of Concrete f<sub>ck</sub> : </label>'
	   +'</div>'	   
	   +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf marginBottom" id="concreteGrade" " style="height:auto;margin-bottom:5px; " >'
	   +'<option value="0">--- Select grade of concrete --- </option>'
//	   +'<option value="10" >M10  </option>'
	   +'<option value="15" >M15  </option>'
	   +'<option value="20" >M20  </option>'
	   +'<option value="25" >M25  </option>'
	   +'<option value="30" >M30  </option>'
	   +'<option value="35" >M35  </option>'
	   +'<option value="40" >M40  </option>'
	   +'<option value="45" >M45  </option>'
	   +'<option value="50" >M50  </option>'
	   +'<option value="55" >M55  </option>'
	   +'<option value="60" >M60  </option>'
	   +'<option value="65" >M65  </option>'
	   +'<option value="70" >M70  </option>'
	   +'<option value="75" >M75  </option>'
	   +'<option value="80" >M80  </option>'	  
	   +'</select>'
	   +'</div>'
	   +'<div class="col-sm-3" id="concreteLabel" hidden>'
	   +'<label class="spanMsg" style="margin-top:-5px; margin-left:5px;">f<sub>ck</sub> :<label id = "relTemp" class="spanMsg"> '+conVal+' </label></label>   '
//	   +'<div class="col-sm-1">'
//	    +'</div>'
	   +'</div>'
	   +'</div>'
	   
	   
	   + '<div class="row">'	     
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Select Grade of Steel f<sub>y</sub> : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf marginBottom" id="steelGrade" " style="height:auto;margin-bottom:5px; " >'
	   +'<option value="0">--- Select grade of steel --- </option>'
	   +'<option value="250" >Fe250  </option>'
	   +'<option value="415" >Fe415  </option>'
	   +'<option value="500" >Fe500  </option>'
	  
	   +'</select>'	   
	  
	   +'</div>'
	   +'<div class="col-sm-3" id="steelLabel" hidden>'
       +'<label class="labelstyle spanMsg" style="margin-top:-5px;">f<sub>y</sub> :<label id = "relTemp1" class="labelstyle spanMsg"> '+steelVal+' </label>   </label>'
       +'</div>'
       +'</div>'
	   
//	   + '<div class="row">'	     
//	   +'<div class="col-sm-6">'
//	   +'<label class="labelstyle marginBottom">Select type of load acting on beam :  </label>'
//	   +'</div>'
//	   
//	   +'<div class="col-sm-4">'
//	   +'<select  class="form-control selectConf marginBottom" id="loadOnBeam" " style="height:auto;margin-bottom:5px; " >'
//	   +'<option value="0">--- Select  --- </option>'
//	   +'<option value="1" >Uniform distributed load  </option>'
//	   +'<option value="2" disabled>Pointer load  </option>'
//	   +'<option value="3" disabled>Variable pointer load  </option>'
//	  
//	   +'</select>'	   
//	  
//	   +'</div>'
//	   +'<div class="col-sm-2">'
//	    +'</div>'
//       +'</div>'
    
	+'<div class="row">'	
	+'<div class="col-sm-6">'
	+'<label class="labelstyle marginBottom">Enter magnitude of Load  <label style="color:#8f0831;">w (kN/m)</label>: </label>'
	+'</div>'
	+'<div class="col-sm-4">'
	+'<input type="number"  style= "width:100%; " onblur="updateLoadMag()" class=" form-control" id="loadMag" >'
	+'</div>'
	+'<div class="col-sm-2">'
	+'</div>'	
    +'</div>'
	
	+ '<div class="row" id="blink" hidden>'
	+'<div class="col-sm-6">'
	+'</div>'
	+'<div class="col-sm-6">'
	+'<span><label class="labelstyle" style="margin-bottom:15px;">(Dead load + Live load)</label></span>'
	+'</div>'
	+'</div>'
	
	+ '<div class="row">'	     
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Enter width of beam  <label style="color:#8f0831;">b (mm)</label> :  </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-4">'
	   +'<select  class="form-control selectConf marginBottom" id="beamWidth" " style="height:auto;margin-bottom:5px; " >'
	   +'<option value="0">--- Select  --- </option>'
	   +'<option value="150" >150</option>'
	   +'<option value="200" >200</option>'
	   +'<option value="230" >230</option>'
	   +'<option value="300" >300</option>'
	   +'<option value="400" >400</option>'
	   +'<option value="500" >500</option>'
	   +'<option value="600" >600</option>'
	  
	   +'</select>'	   
	  
	   +'</div>'
	   +'<div class="col-sm-2" id="blink1" hidden>'
	   	+'<label class="labelstyle marginBottom" style="margin-top:5px; margin-left:-15px;">Uncommon</label>'

	    +'</div>'
       +'</div>'
	   
	   + '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom" >Enter width of support  <label style="color:#8f0831;">w<sub>1</sub> (m)</label> :  </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number"  style= "width:100%;"  class=" form-control" id="w1Width" onblur="updateValW1()" >'
	   +'</div>'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'</div>'
	   
	   + '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Enter width of support <label style="color:#8f0831;">w<sub>2</sub> (m) </label>:  </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number"  style= "width:100%;"  class=" form-control" id="w2Width" onblur="updateValW2(),ren()" >'
	   +'</div>'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'</div>'
	   
	 
	   
	   + '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Assume bar diameter for longitudinal reinforcement <label style="color:#8f0831;">(&empty; mm)</label> : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	    +'<select  class="form-control selectConf marginBottom" id="longRein" " style="height:auto;margin-bottom:5px; " >'
	   +'<option value="0">--- Select  --- </option>'
	   +'<option value="6" >6</option>'
	   +'<option value="8" >8</option>'
	   +'<option value="10" >10</option>'
	   +'<option value="12" >12</option>'
	   +'<option value="16" >16</option>'
	   +'<option value="20" >20</option>'
	   +'<option value="25" >25</option>'
	   +'<option value="28" >28</option>'
	   +'<option value="32" >32</option>'
	  
	   +'</select>'	  
	   +'</div>'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'</div>'
	   
	   + '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Assume bar diameter for shear reinforcement <label style="color:#8f0831;">(&empty;<sub>s</sub> mm)</label> : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	    +'<select  class="form-control selectConf marginBottom" id="shearRein" " style="height:auto;margin-bottom:5px; " >'
	   +'<option value="0">--- Select  --- </option>'
	   +'<option value="6" >6</option>'
	   +'<option value="8" >8</option>'
	   +'<option value="10" >10</option>'
	   +'<option value="12" >12</option>'
	   +'<option value="16" >16</option>'
	   +'<option value="20" >20</option>'
	   +'<option value="25" >25</option>'
	   +'<option value="28" >28</option>'
	   +'<option value="32" >32</option>'
	  
	   +'</select>'	  
	   +'</div>'
	   +'<div class="col-sm-2">'
	   +'</div>'
	   +'</div>'
	   
	   + '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Enter the value of nominal cover <label style="color:#8f0831;">(mm) </label>:  </label>'
	   +'</div>'
	   +'<div class="col-sm-3">'
	   +'<input type="number"  style= "width:100%;"  class=" form-control" id="nominalCover" >'
	   +'</div>'
	    +'<div class="col-sm-3">'
	   +'<button type="button"   class="btn btn-info btnStyle" id="refer" data-toggle="modal" data-target="#myModal1" >Reference</button>'
	   +'</div>'
	   +'</div>'
	   
	   + '<div class="row" id="blink2" hidden>'
	   +'<div class="col-sm-6">'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom" style="margin-bottom:-50px;">Refer IS456:2000<br> Table 16 and 16A</label>'
	   +'</div>'
	  
	   +'</div>'	   
	   
	+'<div class="col-sm-12">'
	    +'<center><button type="button"   class="btn btn-danger btnStyle" id="checkConfg" style="margin-top:10px; width:50%"data-toggle="modal" data-target="#myModal" ><b>CONFIGURE </b></button></center>'
	    +'</div>'
	   
	
    $("#page1Div2").html(htm);
	 $(".next").click(function(){});
   $(".next").prop("disabled",true);
   
   $("#nominalCover").click(function(){
//	toastr.warning('Enter nominal cover value between 20 to 70 mm');

 
//	toastr.warning('Enter Values between 20 mm to 70 mm');
	$("#blink2").prop("hidden",false);
	blinker();
 toastr.error('<span class="blinking21">Enter Values between 20 mm to 70 mm</span>');
});
   
   $("#nominalCover").change(function(){
		beamSpanVal = $("#beamSpan").val();
		lenghtBeam = beamSpanVal;
		loadOnBeamVal = $("#loadOnBeam").val();
		loadMagVal = $("#loadMag").val();
		beamWidthVal = $("#beamWidth").val();
		w1WidthVal = $("#w1Width").val();
		w2WidthVal = $("#w2Width").val();
		nominalCoverVal = $("#nominalCover").val();
		
		if(beamSpanVal==""||conVal==0||steelVal==0||loadOnBeamVal==0||loadMagVal==""||
		beamWidthVal==0||w1WidthVal==""||w2WidthVal==""||longReinVal==0||
		shearReinVal==0||nominalCoverVal==""){
//           toastr.warning('Enter Appropraite Values');

            toastr.error('<span class="blinking1">Enter Appropraite Values</span>');

		}else{
		nominalCoverVal = parseFloat($("#nominalCover").val());
		w1WidthVal = parseFloat($("#w1Width").val());
		w2WidthVal = parseFloat($("#w2Width").val());
		
		if(nominalCoverVal<20||nominalCoverVal>70){
//					toastr.warning('Enter nominal cover value between 20 to 70 mm');
          toastr.error('<span class="blinking1">Enter nominal cover value between 20 to 70 mm</span>');
				}else if(w1WidthVal<0.23||w1WidthVal>2||w2WidthVal<0.23||w2WidthVal>2){
//					toastr.warning('Enter Value of w1 and w2 between 0.23m to 2m');
                    toastr.error('<span class="blinking1">Enter Value of w1 and w2 between 0.23m to 2m</span>');
				}else if(beamSpanVal<0||loadMagVal<0||beamWidthVal<0)	
				   {
//					toastr.warning('Enter Appropriate Values');
                   toastr.error('<span class="blinking1">Enter Appropriate Values</span>');
			    }else{
				
		beamSpanVal = parseFloat($("#beamSpan").val());
		lenghtBeam = beamSpanVal;
		loadOnBeamVal = parseFloat($("#loadOnBeam").val());
		loadMagVal = parseFloat($("#loadMag").val());
		beamWidthVal = parseFloat($("#beamWidth").val());
		
			
//				$('#forwardButton').removeClass("disabled");
//            $('#backwardButton').prop("hidden",false);
//					$(".next").prop("disabled",false);	
           }
           }		
		
	})
   
   
    $("#concreteGrade").change(function(){
	  toastr.remove();
	  conVal = $("#concreteGrade").val();
//	  console.log("conVal : "+conVal);
	  change();
	  $("#concreteLabel").prop("hidden",false);
	  $("#relTemp").text(conVal+" Mpa");
    });
    
    $("#steelGrade").change(function(){
	toastr.remove();
		steelVal = $("#steelGrade").val();
		
		if(steelVal==250){
		steelStr = 0.148;
	}else if(steelVal==415){
		steelStr = 0.138;
	}else{
		steelStr = 0.133;
	}
		
//		console.log("steelVal : "+steelVal);
		  $("#steelLabel").prop("hidden",false);	
		  $("#relTemp1").text(steelVal+" Mpa");
		
		
	});
    
	$("#loadMag").click(function(){
		blinker();
		$("#blink").prop("hidden",false);
	
	});
	
	$("#beamWidth").change(function(){
		beamWithVal = $("#beamWidth").val();
		if(beamWithVal<400){
			$("#blink").prop("hidden",true);
			$("#blink1").prop("hidden",true);
		}else{
		blinker();
		$("#blink").prop("hidden",true);
		$("#blink1").prop("hidden",false);
		
		$("#overBeam").prop("hidden",false);
		}
	});
	
	
	
	
	
	$("#longRein").change(function(){
//		$("#page1Div1").html('');
toastr.remove();
		longReinVal = $("#longRein").val();
//		ren();	
//		change();
//		getValuesEntered();
//		updateBeamSpanVal();
//		updateLoadMag();
//		updateValW1();
//		updateValW2();
	});
//	longReinVal=12;
//	shearReinVal = 8;
	$("#shearRein").change(function(){
		
//		shearReinVal = $("#shearRein").val();
	});
	
	$("#nominalCover").click(function(){
		blinker();
		$("#blink2").prop("hidden",false);
	});


     $("#w1Width").click(function(){
	   toastr.remove();
//	   toastr.warning('Enter Value of w1 between 0.23m to 2m');
	   toastr.error('<span class="blinking21">Enter Value of w1 between 0.23m to 2m');
	   $("#blink").prop("hidden",true);
});

      $("#w2Width").click(function(){
	toastr.remove();
	    toastr.error('<span class="blinking21">Enter Value of w1 between 0.23m to 2m');
});

//   $("#refer").click(function(){
//	var ht = '<iframe src="images/plain-and-reinforced-concrete.pdf#page=48"  width="100%;" height="600px;" ></iframe>'
//	$("#MsgModal1").html(ht);
//});
	
	$("#refer").click(function(){
	var ht = '<iframe src="images/plain-and-reinforced-concrete.pdf#page=48"  width="100%;" height="600px;" ></iframe>'
	
	$(".modal-header").css('background-color', '#45898680');
	$(".modal-header").html("Reference");
	$("#MsgModal1").html(ht);
	
});
	
	function nextLevel2(){
	
	if(beamSpanVal==""||conVal==0||steelVal==0||loadOnBeamVal==0||loadMagVal==""||
		beamWidthVal==0||w1WidthVal==""||w2WidthVal==""||longReinVal==0||
		shearReinVal==0||nominalCoverVal==""){
           toastr.warning('Enter Appropraite Values');
		}else{
		nominalCoverVal = parseFloat($("#nominalCover").val());
		w1WidthVal = parseFloat($("#w1Width").val());
		w2WidthVal = parseFloat($("#w2Width").val());
		
		if(nominalCoverVal<20||nominalCoverVal>70){
//					toastr.warning('Enter nominal cover value between 20 to 70 mm');
         toastr.error('<span class="blinking1">Enter nominal cover value between 20 to 70 mm</span>');
				}else if(w1WidthVal<0.23||w1WidthVal>2||w2WidthVal<0.23||w2WidthVal>2){
//					toastr.warning('Enter Value of w1 and w2 between 0.23m to 2m');
             toastr.error('<span class="blinking1">Enter Value of w1 and w2 between 0.23m to 2m</span>');
		
				}else if(beamSpanVal<0||loadMagVal<0||beamWidthVal<0)	
				   {
//					toastr.warning('Enter Appropriate Values');
				toastr.error('<span class="blinking1">Enter Appropriate Values');
			    }else if(beamSpanVal>10){
		   
		   $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value between 1m to 10m");
		   
	}
			       
			      
			    else{
				
		beamSpanVal = parseFloat($("#beamSpan").val());
		lenghtBeam = beamSpanVal;
		loadOnBeamVal = parseFloat($("#loadOnBeam").val());
		loadMagVal = parseFloat($("#loadMag").val());
		beamWidthVal = parseFloat($("#beamWidth").val());
		
		
				
				$('#forwardButton').removeClass("disabled");
//				 $(".next").prop("disabled",false);
			getValuesEntered();
			$("#blink2").prop("hidden",true);
//            $('#backwardButton').prop("hidden",false);
//					$(".next").prop("disabled",false);	

            $("#page1,#page3,#page4").prop("hidden",true);
			
			$("#page2").prop("hidden",false);
//			$('#forwardButton').addClass("disabled");
			calculateLength();
			
//			if(initFlag == true){
//				$(".modal-backdrop").hide();				
//				console.log("click1");
//			$("#submit_load1").click();
//			$("#submit_load2").click();
//			$("#submit_load3").click();
//			$("#submit_load4").click();
//			$("#submit_load5").click();
//			}
			
//			initFlag = true;
			
			SecondPage();
//			$(".modal-backdrop").hide();
           }
           }		
	
		
//			divFlg = 1;
//			console.log("welcome");
         
			
//			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
//	        $(".modal-header").html("Success Message");
//            $(".modal-header").css("background","#5cb85c");
//			$("#MsgModal").html("Configured Successfully");
			
			
//			$("#page2Div2").html('');
//		valuesCon();
//				}
//			}
	}
	
	$("#checkConfg").click(function(){
		toastr.remove();
		beamSpanVal = $("#beamSpan").val();
		lenghtBeam = beamSpanVal;
		loadOnBeamVal = $("#loadOnBeam").val();
		loadMagVal = $("#loadMag").val();
		beamWidthVal = $("#beamWidth").val();
		w1WidthVal = $("#w1Width").val();
		w2WidthVal = $("#w2Width").val();
		nominalCoverVal = $("#nominalCover").val();
		
		
			
		
			if(beamSpanVal==""||conVal==0||steelVal==0||loadOnBeamVal==0||loadMagVal==""||beamWidthVal==0||w1WidthVal==""||w2WidthVal==""||longReinVal==0||shearReinVal==0||nominalCoverVal==""){
				 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter Appropraite Values");
			}else{
				
				if(nominalCoverVal<20||nominalCoverVal>70){
					 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter nominal cover value between 20 to 70 mm");
				  }else if(beamSpanVal>10){
		   
		   $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the value between 1m to 10m");
		   
	}
				else{
					
				
//				$("#checkConfg").prop("hidden",true);
//				$("#nextLevelForConfig").prop("hidden",false);				
			
//			divFlg = 1;
			getValuesEntered();
			$("#blink2").prop("hidden",true);
   
               $('#forwardButton').removeClass("disabled");		
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("<b>Configuration successful. Click the next arrow to proceed.</b>");
             
   
//             $("#checkConfg").prop("disabled",true);
             $("#beamSpan").prop("disabled",true);
             $("#concreteGrade").prop("disabled",true);
             $("#steelGrade").prop("disabled",true);
            $("#loadMag").prop("disabled",true);
            $("#beamWidth").prop("disabled",true);
             $("#w1Width").prop("disabled",true);
             $("#w2Width").prop("disabled",true);
             $("#longRein").prop("disabled",true);
             $("#shearRein").prop("disabled",true);
              $("#nominalCover").prop("disabled",true);
           
		
           
			
//			$("#page2Div2").html('');
//		valuesCon();
				}
			}

	});
	
	
//	$("#nextLevelForConfig").click(function(){
//		calculateLength();
//			SecondPage();
//			
//	});
	
   function blinker()
  {
    if(document.getElementById("blink"))
    {
	    var d = document.getElementById("blink") ;		
        d.style.color= (d.style.color=='red'?'blue':'red');		
        
    }if(document.getElementById("blink1")){
	var e = document.getElementById("blink1") ;
	e.style.color= (e.style.color=='red'?'blue':'red');
	
    } if(document.getElementById("blink2")){
	var f = document.getElementById("blink2") ;
		f.style.color= (f.style.color=='red'?'blue':'red');
    }
	setTimeout('blinker()', 1000);
} 






 

 
	 
 
