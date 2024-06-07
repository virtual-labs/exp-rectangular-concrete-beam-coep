var shearCritical;
var criticalSec;

var maxShear;
var ptPercent;
var conValArr = [];
var compArr = [];
var finalAns;
var sGradeSelect = 0; 
var shrForceConvert = 0;

function shearCalculate(){
	
	var sCalculate = ''
	              +'<div class = "row">'
                  +'<div class="col-sm-4 marginBottom" id="steelGradeLabel">'
                  +' <center><label class="labelstyle " style="margin-left:10px;">L<sub>eff</sub> = '+effspan+' m </label></center> '
                  +'</div>'
//                  +'<div class="col-sm-1">'
//                  +'</div>'
                  +'<div class="col-sm-3 marginBottom" id="widthLabel">'
                  +' <center><label class="labelstyle " style="margin-left:10px;">Width (b) = '+beamWidthVal+' mm </label></center> '
                  +'</div>' 
//                  +'<div class="col-sm-1">'
//                  +'</div>'
                  +'<div class="col-sm-4 marginBottom" id="widthLabel">'
                  +' <center><label class="labelstyle " style="margin-left:10px;">Provided D = '+valueD1+' mm </label></center> '
                  +'</div>' 
//                  +'<div class="col-sm-1">'
//                  +'</div>'
                  +'</div>'
                  
                  +'<div class = "row">'
//                  +'<div class="col-sm-1">'
//                  +'</div>'
                  +'<div class="col-sm-3 marginBottom" id="widthLabel">'
                  +' <center><label class="labelstyle " style="margin-left:10px;">Provided Ast = '+astCalculatedpage4+' mm<sup>2</sup> </label></center> '
                  +'</div>'

                 
//                  +'<div class="col-sm-1">'
//                  +'</div>'
                   
                  +'<div class="col-sm-3 marginBottom" id="steelGradeLabel">'
                  +' <center><label class="labelstyle " style="margin-left:10px;">d<sub>eff</sub> = '+dVal+' mm </label></center> '
                  +'</div>'  
                   
                  +'<div class="col-sm-2 marginBottom" id="steelGradeLabel">'
                  +' <center><label class="labelstyle " style="margin-left:10px;">f<sub>ck</sub> = '+conVal+' Mpa </label></center> '
                  +'</div>' 
                  
                  +'<div class="col-sm-2 marginBottom" id="steelGradeLabel">'
                  +' <center><label class="labelstyle " style="margin-left:10px;">V<sub>u</sub> = '+shearForce+' kN </label></center> '
                  +'</div>'
//                  +'<div class="col-sm-1">'
//                  +'</div>'
                 
                  +'</div>'
                  
                   +'<div class="row" id="sForceCritical" >'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate shear force at critical section V<sub>uc</sub> N :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<input type="number"  value="" id="text14"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load14" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
               
                   +'<div class="row" id="sForceStress" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate shear stress at critical section 	&tau;<sub>v</sub> N/mm<sup>2</sup> :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<input type="number"  value="" id="text15"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load15" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				  
				   +'<div class = "row">'
				   +'<div class="col-sm-4">'
			       +'</div>'
			       +'<div class="col-sm-6">'
				   +'<span class="highlight" id="refClauseShear" hidden>Refer IS456 : 2000 (Table 19)</span>'
				   +'</div>'
				   +'<div class="col-sm-2">'
			       +'</div>'
				   +'</div>'
			   
				   +'<div class="row" id="sForceStrength" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Design Shear strength of concrete &tau;<sub>c</sub> N/mm<sup>2</sup> :  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="number"  value="" id="text16"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-2"  id="submitStep1">'
	               +'<button type="submit" class="btn btn-info"  id="refClause11" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 15px;" >Refer</input>'
				   +'</div>'
				   +'<div class="col-sm-2"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load16" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   +'<div class = "row">'
				   +'<div class="col-sm-4">'
			       +'</div>'
			       +'<div class="col-sm-6">'
				   +'<span class="highlight" id="refClauseShear1" hidden>Refer IS456 : 2000 (Table 20)</span>'
				   +'</div>'
				   +'<div class="col-sm-2">'
			       +'</div>'
				   +'</div>'
				   
				   +'<div class="row" id="sMaxShearStress" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Maximum shear strength &tau;<sub>cmax</sub> :  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="number"  value="" id="text17"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-2"  id="submitStep1">'
	               +'<button type="submit" class="btn btn-info"  id="refClause112" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 15px;" >Refer</input>'
				   +'</div>'
				   +'<div class="col-sm-2"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load17" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
                  
                  
                  +'<div class = "row" id="condition1" hidden>'
                  +'<div class="col-sm-5 marginBottom" >'
                  +'<label class="labelstyle " style="font-size:16px;margin:15px 10px ;"">Provide 2 legged stirrups of </label>'
                  +'</div>'
                  +'<div class="col-sm-3 marginBottom" >'
                  +'<select  class="form-control selectConf marginBottom" id="longReinForD2" " style="margin:15px 14px;height:50%;">'
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
                  +'<div class="col-sm-2 marginBottom" >'
                  +'<label class="labelstyle " style="font-size:16px;margin:15px 10px ;""> mm &empty;<sub>s</sub></label>'
                  +'</div>'
                  +'<div class="col-sm-2 marginBottom" >'
				  +'<button type="submit" class="btn btn-danger"  id="submit_load18" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
                  +'</div>'
                  +'</div>'
                  
                  +'<div class = "row" id="steelGradeStirrups" hidden>'
                  +'<div class="col-sm-5 marginBottom" >'
                  +'<label class="labelstyle " style="font-size:16px;margin:15px 10px ;"">Select Grade of steel for stirrups f<sub>y</sub> :  </label>'
                  +'</div>'
                  +'<div class="col-sm-3 marginBottom" >'
                  +'<select  class="form-control selectConf marginBottom" id="sGradeVal" " style="margin:15px 14px;height:50%;">'
					   +'<option value="0">--- Select  --- </option>'
					   +'<option value="250" >250</option>'
					   +'<option value="415" >415</option>'
				
				  +'</select>'
                  +'</div>'
                  +'<div class="col-sm-2 marginBottom" >'
                  +'<label class="labelstyle " style="font-size:16px;margin:15px 10px ;""> mm &empty;<sub>s</sub></label>'
                  +'</div>'
                  +'<div class="col-sm-2 marginBottom" >'
				  +'<button type="submit" class="btn btn-danger"  id="submit_load19" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
                  +'</div>'	
                  +'</div>'
          
//                  + '<div class="row" >'
//	              +'<label class="" style="margin-left:10px;" id = "relTemp" style="margin-left: 10px;font-size: x-large; font-style: italic; font-weight: bold; margin-top:5px;" hidden>   </label>'
//	              +'</div>'
                 
                    +'<div class="row" >'
                    +'<div class="col-sm-12" id="divRelTemp"  >'
                   
                     +'</div>'
                     +'</div>'
//                  + '<div class="row" id="temp1" style="margin-left: 10px;font-size: x-large; font-style: italic; font-weight: bold; margin-top:5px;" hidden>'
//	              +'<label class="" style="margin-left:10px;" id = "relTemp">   </label>'
//	              +'</div>' 
                  
	             
	              +'<div class = "row" id="condition2" hidden>'
                  +'<div class="col-sm-5 marginBottom" >'
                  +'<label class="labelstyle " style="font-size:16px;margin:15px 10px ;"">Provide 2 legged stirrups of </label>'
                  +'</div>'
                  +'<div class="col-sm-3 marginBottom" >'
                  +'<select  class="form-control selectConf marginBottom" id="longReinForD22" " style="margin:15px 14px;height:50%;">'
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
                  +'<div class="col-sm-2 marginBottom" >'
                  +'<label class="labelstyle " style="font-size:16px;margin:15px 10px ;""> mm &empty;<sub>s</sub></label>'
                  +'</div>'
                  +'<div class="col-sm-2 marginBottom" >'
				  +'<button type="submit" class="btn btn-danger"  id="submit_load20" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
                  +'</div>'
                  +'</div>'
                  
                  
                  +'<div class = "row" id="steelGradeStirrups3" hidden>'
                  +'<div class="col-sm-5 marginBottom" >'
                  +'<label class="labelstyle " style="font-size:16px;margin:15px 10px ;"">Select Grade of steel for stirrups f<sub>y</sub> :  </label>'
                  +'</div>'
                  +'<div class="col-sm-3 marginBottom" >'
                  +'<select  class="form-control selectConf marginBottom" id="sGradeVal3" " style="margin:15px 14px;height:50%;">'
					   +'<option value="0">--- Select  --- </option>'
					   +'<option value="250" >250</option>'
					   +'<option value="415" >415</option>'
				
				  +'</select>'
                  +'</div>'
                  +'<div class="col-sm-2 marginBottom" >'
                  +'<label class="labelstyle " style="font-size:16px;margin:15px 10px ;""> mm &empty;<sub>s</sub></label>'
                  +'</div>'
                  +'<div class="col-sm-2 marginBottom" >'
				  +'<button type="submit" class="btn btn-danger"  id="submit_load21" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
                  +'</div>'	
                  +'</div>'
	             
	               +'<div class="row" id="vcCalculate" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate V<sub>c</sub>:  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<input type="number"  value="" id="text18"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load22" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
	             
	             
	                +'<div class="row" >'
                    +'<div class="col-sm-12" id="divRelTemp1"  >'
                   
                     +'</div>'
                     +'</div>'
	             
	 $("#page5Div1").html(sCalculate);
	bendingMomentFinalShear();
	
	
	
	var shearCriticalEnter;
	var id9=1;
	
	$("#submit_load14").click(function(){
		shearCriticalEnter = $("#text14").val();
		
		var sfDiv = ((effspan*1000)/2).toFixed(3);
		var sfSub = (sfDiv-dVal).toFixed(3);
		var sfMul = ((shearForce*1000)*(sfSub)).toFixed(3);
		var sfDiv = (sfMul/sfDiv).toFixed(2);
		 shearCritical = parseFloat(sfDiv);
		 
		var shrForceConvert = shearCritical/1000;
		shearConvert = parseFloat(shrForceConvert); 
		 
		  if(shearCriticalEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				
				shearCriticalEnter = parseFloat($("#text14").val());
	   if (id9 <= 3) {
				
				if (shearCriticalEnter == shearCritical) {
			
	         $("#submit_load14").prop("disabled",true);
	         $("#text14").prop("disabled",true);
	         $("#sForceStress").prop("hidden",false); 
	         var x=50,y=-50;
	t1 = paper.text(x+170,y+310,shrForceConvert+" kN").attr({'font-weight': 'bold','font-size':'15px','stroke':'#000'});    
    t2 = paper.text(x+352,y+390,(-shrForceConvert)+" kN").attr({'font-weight': 'bold','font-size':'15px','stroke':'#000'});    

				} else if (shearCriticalEnter != shearCritical) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id9 == 4) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelI = '<img src="images/shearCritical.png" class="img-responsive" alt="Cinque Terre">'

			$("#MsgModal").html(modelI);

				
			} else {
	
				if (shearCriticalEnter == shearCritical) {					
			  $("#submit_load14").prop("disabled",true);
	         $("#text14").prop("disabled",true);
			 $("#sForceStress").prop("hidden",false); 
			 var x=50,y=-50;
	t1 = paper.text(x+170,y+310,shrForceConvert+" kN").attr({'font-weight': 'bold','font-size':'15px','stroke':'#000'});    
    t2 = paper.text(x+352,y+390,(-shrForceConvert)+" kN").attr({'font-weight': 'bold','font-size':'15px','stroke':'#000'});    

				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + shearCritical);
				 

				}
			}
			id9++;
				
		   }
	});
	
	
	var id10 = 1;
	var criticalSecEnter;
	$("#submit_load15").click(function(){
		    
		    criticalSecEnter = $("#text15").val();
		    
		    var numMul = shearCritical;
		    var denoMul = beamWidthVal*valueD1;
		    
		    var finDiv = (numMul/denoMul).toFixed(2);
		     criticalSec = parseFloat(finDiv);
		     
//		     criticalSec = 0.32;
		     
		     if(criticalSecEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				
				criticalSecEnter = parseFloat($("#text15").val());
	   if (id10 <= 3) {
				
				if (criticalSecEnter == criticalSec) {
			
	         $("#submit_load15").prop("disabled",true);
	         $("#text15").prop("disabled",true);
	         $("#sForceStrength").prop("hidden",false); 
	          
				} else if (criticalSecEnter != criticalSec) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id10 == 4) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelI1 = '<img src="images/criticalSection.png" class="img-responsive" alt="Cinque Terre">'

			$("#MsgModal").html(modelI1);

				
			} else {
	
				if (criticalSecEnter == criticalSec) {					
			  $("#submit_load15").prop("disabled",true);
	         $("#text15").prop("disabled",true);
			 $("#sForceStrength").prop("hidden",false);       
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + criticalSec);
				 

				}
			}
			id10++;
				
		   }
	    
		});
		
		$("#text16").click(function(){
			$("#refClauseShear").prop("hidden",false);
			blinkerShear();
		});
	    
	    
	    var id11=1;
		$("#submit_load16").click(function(){
			
			
			shearStEnter = $("#text16").val();
			shearStrength();
//			finalAns = 1.4;
			
			if(finalAns == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				
				shearStEnter = parseFloat($("#text16").val());
	   if (id11 <= 3) {
				
				if (shearStEnter == finalAns) {
			
	         $("#submit_load16").prop("disabled",true);
	         $("#text16").prop("disabled",true);
	         $("#refClauseShear").prop("hidden",true);
			$("#sMaxShearStress").prop("hidden",false);
	          
				} else if (shearStEnter != finalAns) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id11 == 4) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelI11 = '<img src="images/interpolationFormula.png" class="img-responsive" alt="Cinque Terre">'

			$("#MsgModal").html(modelI11);

				
			} else {
	
				if (shearStEnter == finalAns) {					
			 $("#submit_load16").prop("disabled",true);
	         $("#text16").prop("disabled",true);
	         $("#refClauseShear").prop("hidden",true);
			 $("#sMaxShearStress").prop("hidden",false);      
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + finalAns);
				 

				}
			}
			id11++;
				
				
			}
		});
		
		
		function shearStrength(){
			
			var bdMul = beamWidthVal*valueD1;
			var div = (astCalculatedpage4/bdMul).toFixed(3);
			var perCal1 = (div*100).toFixed(2);
			ptPercent = parseFloat(perCal1);
//			ptPercent = 0.13;
//		     conVal = 20;
		    
		    console.log("ptPercent : "+ptPercent);
		     
		            compArr = [0.15,0.25,0.5,0.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3];
		
		       if(conVal==15){
					conValArr = [0.28,0.35,0.46,0.54,0.6,0.64,0.68,0.71,0.71,0.71,0.71,0.71,0.71];

				}else if(conVal==20){
					conValArr = [0.28,0.36,0.48,0.56,0.62,0.67,0.72,0.75,0.79,0.81,0.82,0.82,0.82];

				}else if(conVal==25){
					conValArr = [0.29,0.36,0.49,0.57,0.64,0.7,0.74,0.78,0.82,0.85,0.88,0.9,0.92];

				}else if(conVal==30){
					conValArr = [0.29,0.37,0.5,0.59,0.66,0.71,0.76,0.8,0.84,0.88,0.91,0.94,0.96];

				}else if(conVal==35){
					conValArr = [0.29,0.37,0.5,0.59,0.67,0.73,0.78,0.82,0.86,0.9,0.93,0.96,0.99];

				}else if(conVal>=40){
					conValArr = [0.3,0.38,0.51,0.6,0.68,0.74,0.79,0.84,0.88,0.92,0.95,0.98,1.01];

				}
				
				console.log("conValArr "+conValArr);
				var closestPrevious = 0, closestNext = 0, comparePrevious = 0, compareNext = 0;
	
	   if (compArr[i] == ptPercent) {
			finalAns = compArr[i];
		}else if(ptPercent<=0.15){
			
			  closestPrevious = conValArr[0];
	          closestNext = conValArr[0];
	          comparePrevious = compArr[0];
	          compareNext = compArr[0];
	          
	  var firstTerm = comparePrevious-ptPercent;
	 var secondTerm = closestPrevious-closestNext;
	 var firstFinalMul = firstTerm*secondTerm;
	 var secondTerm = comparePrevious*closestPrevious;
	 var thirdTerm = compareNext*closestPrevious;
	 
	 var num = firstFinalMul-secondTerm+thirdTerm;
	 var deno = comparePrevious-compareNext;
	 
	 var division = num/deno;
	  finalAns = -(division);
	           
	          
		}else if(ptPercent>=3){
			
			  closestPrevious = conValArr[conValArr.length - 1];
	          closestNext = conValArr[conValArr.length - 1];
	          comparePrevious = compArr[conValArr.length - 1];
	          compareNext = compArr[conValArr.length - 1]; 
	          
	           var firstTerm = comparePrevious-ptPercent;
	 var secondTerm = closestPrevious-closestNext;
	 var firstFinalMul = firstTerm*secondTerm;
	 var secondTerm = comparePrevious*closestPrevious;
	 var thirdTerm = compareNext*closestPrevious;
	 
	 var num = firstFinalMul-secondTerm+thirdTerm;
	 var deno = comparePrevious-compareNext;
	 
	 var division = num/deno;
	  finalAns = -(division);
	          
			
		}else{
				 for (let i = 0; i < compArr.length; i++) {
        let diff = Math.abs(ptPercent - compArr[i]);

        if (compArr[i] < ptPercent && (comparePrevious === null || diff < Math.abs(ptPercent - comparePrevious))) {
            closestPrevious = conValArr[i];
            comparePrevious = compArr[i];
        }
        if (compArr[i] > ptPercent && (compareNext === null || diff < Math.abs(ptPercent - compareNext))) {
            closestNext = conValArr[i];
            compareNext = compArr[i];
        }
    }
    
     var firstTerm = comparePrevious-ptPercent;
	 var secondTerm = closestPrevious-closestNext;
	 var firstFinalMul = firstTerm*secondTerm;
	 var secondTerm = comparePrevious*closestPrevious;
	 var thirdTerm = compareNext*closestPrevious;
	 
	 var num = firstFinalMul-secondTerm+thirdTerm;
	 var deno = comparePrevious-compareNext;
	 
	 var division = (num/deno).toFixed(2);
	  finalAns = -(division);
    
}

		console.log("closestPrevious "+closestPrevious);
	    console.log("closestNext "+closestNext);
	    console.log("comparePrevious "+comparePrevious);
	    console.log("compareNext "+compareNext);
	    
	    console.log("finalAns "+finalAns);
	}
		
	
		$("#refClause11").click(function(){
	var ht1 = '<iframe src="images/plain-and-reinforced-concrete.pdf#page=74"  width="100%;" height="600px;" ></iframe>'
	$("#MsgModal").html(ht1);
		});
	
		    $("#text17").click(function(){
			$("#refClauseShear1").prop("hidden",false);
			blinkerShear();
		});
		
		$("#refClause112").click(function(){
			var ht1 = '<iframe src="images/plain-and-reinforced-concrete.pdf#page=74"  width="100%;" height="600px;" ></iframe>'
	        $("#MsgModal").html(ht1);
		});
		
		
		var id12=1;
		$("#submit_load17").click(function(){
			$("#refClauseShear1").prop("hidden",true);
			
			var maxShearEnter = $("#text17").val();
			if(conVal==15){
					maxShear = 2.5;
				}else if(conVal==20){
					maxShear = 2.8;
				}else if(conVal==25){
					maxShear = 3.1;
				}else if(conVal==30){
					maxShear = 3.5;
				}else if(conVal==35){
					maxShear = 3.7;
				}else if(conVal>=40){
					maxShear = 4.0;
				}
			
			
			if(maxShearEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				maxShearEnter = $("#text17").val();
				
				if (id12 <= 3) {
				
				if (maxShearEnter == maxShear) {
			
	          $("#submit_load17").prop("disabled",true);
	         $("#text17").prop("disabled",true);
//	         $("#condition2").prop("hidden",false);
	          conditionCheck();
//	$("#divRelTemp").html('<center><label style=" margin-left: 10px;font-size: x-large; font-style: italic; font-weight: bold; margin-top:5px;" id = "relTempMsgCond1">Revise the section size</label></center>');

	          
				} else if (maxShearEnter != maxShear) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id12 == 4) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelI1 = '<img src="images/maxShear.png" class="img-responsive" alt="Cinque Terre">'

			$("#MsgModal").html(modelI1);
		
			} else {
	
				if (maxShearEnter == maxShear) {					
			  $("#submit_load17").prop("disabled",true);
	         $("#text17").prop("disabled",true);
//	         $("#condition2").prop("hidden",false);
			    conditionCheck();  
//	$("#divRelTemp").html('<center><label style=" margin-left: 10px;font-size: x-large; font-style: italic; font-weight: bold; margin-top:5px;" id = "relTempMsgCond1">Revise the section size</label></center>');
  
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + maxShear);
				 

				}
			}
			id12++;
				
			 }
		});
	
	function conditionCheck(){
		
		if(criticalSec<finalAns){
			if(finalAns<maxShear){
				$("#condition1").prop("hidden",false);
			}
		}
		
		if(criticalSec>maxShear){
				$("#divRelTemp").html('<center><label style=" margin-left: 10px;font-size: x-large; font-style: italic; font-weight: bold; margin-top:5px;" id = "relTempMsgCond1">Revise the section size</label></center>');

		}
		
		if(finalAns<criticalSec){
			if(criticalSec<maxShear){
				$("#condition2").prop("hidden",false);
			}
		}

		
	}



var fysChange=0;
$("#longReinForD2").change(function(){
   	fysChange = $("#longReinForD2").val(); 
});


$("#submit_load18").click(function(){
		fysChange = parseInt($("#longReinForD2").val()); 
	
	
	  if(fysChange==0){
		$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Values");
	}else{
		
		$("#longReinForD2").prop("disabled",true);
		$("#submit_load18").prop("disabled",true);
		$("#steelGradeStirrups").prop("hidden",false);
	}
});



$("#sGradeVal").change(function(){
	sGradeSelect = $("#sGradeVal").val();
});


$("#submit_load19").click(function(){
	sGradeSelect = parseInt($("#sGradeVal").val());
	
	if(sGradeSelect==0){
		$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Values");
	}else{
		$("#submit_load19").prop("disabled",true);
		$("#sGradeVal").prop("disabled",true);
		asvCalculate();
	$("#divRelTemp").html('<center><label style=" margin-left: 10px;font-size: x-large; font-style: italic; font-weight: bold; margin-top:5px;" id = "relTempMsgCond1">Provide 2 legged stirrups of '+fysChange+' mm &empty;<sub>s</sub> @ '+condArr[0]+' mm c/c</label></center>');

	}
});

var fysChange3=0;
$("#longReinForD22").change(function(){
   	fysChange3 = $("#longReinForD22").val(); 
});

$("#submit_load20").click(function(){
	fysChange3 = parseInt($("#longReinForD22").val());
	if(fysChange3==0){
		    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Values");
	}else{
		$("#steelGradeStirrups3").prop("hidden",false);
		$("#submit_load20").prop("disabled",true);
		$("#longReinForD22").prop("disabled",true);
	} 
});

var sGradeSelect3;
$("#sGradeVal3").change(function(){
	sGradeSelect3 = $("#sGradeVal3").val();
});

$("#submit_load21").click(function(){
	sGradeSelect3 = parseInt($("#sGradeVal3").val());
	if(sGradeSelect3==0){
		    $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Values");
	}else{
		$("#vcCalculate").prop("hidden",false);
		$("#submit_load21").prop("disabled",true);
		$("#sGradeVal3").prop("disabled",true);
	} 
});

var vcVal;
var id13=1;

$("#submit_load22").click(function(){
	  var mul = (finalAns*beamWidthVal*valueD1).toFixed(2);
	  vcVal = parseFloat(mul);
	  
	  var vcValEnter = $("#text18").val();
	  if(vcValEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				 vcValEnter = parseFloat($("#text18").val());
				
				  if (id13 <= 3) {
				
				if (vcVal == vcValEnter) {
			
	                 $("#submit_load22").prop("disabled",true);
                     $("#text18").prop("disabled",true);
                     $("#divRelTemp1").prop("hidden",false);
                     svCalculateCond3();
             	$("#divRelTemp1").html('<center><label style=" margin-left: 10px;font-size: x-large; font-style: italic; font-weight: bold; margin-top:5px;" id = "relTempMsgCond1">Provide 2 legged stirrups of '+fysChange3+' mm &empty;<sub>s</sub> @ '+condArr3[0]+' mm c/c</label></center>');

				} else if (vcVal != vcValEnter) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id13 == 4) {
			$(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
            $("#MsgModal").html(" V<sub>c</sub> = &tau;<sub>c</sub> &times; bD");
				
			} else {
	
				if (vcVal == vcValEnter) {					
			         $("#submit_load22").prop("disabled",true);
                     $("#text18").prop("disabled",true);
	        $("#divRelTemp1").prop("hidden",false);
	        svCalculateCond3();
             	$("#divRelTemp1").html('<center><label style=" margin-left: 10px;font-size: x-large; font-style: italic; font-weight: bold; margin-top:5px;" id = "relTempMsgCond1">Provide 2 legged stirrups of '+fysChange3+' mm &empty;<sub>s</sub> @ '+condArr3[0]+' mm c/c</label></center>');
        
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + vcVal);
				 

				}
			}
			id13++;
				
				}
	  
	  
	});

	var asvVal;
	var svVal;
	var sc1;
	var sc2;
	var sc3;
	var condArr = [];
	function asvCalculate(){
		var asvDiv = (3.14/2);
		var asvCal = (asvDiv*sGradeSelect*sGradeSelect).toFixed(2);
		 asvVal = parseFloat(asvCal);
		console.log("asvVal : "+asvVal);
		
		var svNum = asvVal*0.87*sGradeSelect;
		var svDeno = beamWidthVal*0.4;
		
		var svDiv = (svNum/svDeno).toFixed(2);
		svVal = parseFloat(svDiv);
		
		var sc11 = (0.75*dVal).toFixed(2);
		sc1 = parseFloat(sc11);
		sc2 = 300;
		sc3 = asvVal;
		
		 condArr = [svVal,sc1,sc2,sc3];
		console.log("Before sorting : "+condArr);
		condArr.sort(compareNumbers);
		console.log("sorted array is : "+condArr);

		
	}
	
	function compareNumbers(a, b) {
    return a - b;
}

	var svValCond3,sc13,sc23,sc23;
	var condArr3 = [];
	function svCalculateCond3(){
		var asvDiv = (3.14/2);
		var asvCal = (asvDiv*fysChange3*fysChange3).toFixed(2);
		 asvVal = parseFloat(asvCal);
		console.log("asvVal : "+asvVal);
		
		var numMult = (0.87*sGradeSelect3*asvVal*valueD1).toFixed(2);
		var denoSub = ((shearCritical-vcVal)).toFixed(2);
		
		var svValCond = (numMult/denoSub).toFixed(2);
		svValCond3 = parseFloat(svValCond);
		
		var sc113 = (0.75*dVal).toFixed(2);
		sc13 = parseFloat(sc113);
		sc23 = 300;
		sc33 = asvVal;
		
		 condArr3 = [svValCond3,sc13,sc23,sc33];
		console.log("Before sorting : "+condArr3);
		condArr3.sort(compareNumbers);
		console.log("sorted array is : "+condArr3);
		
		
	}
}




function blinkerShear()
  {
    if(document.getElementById("refClauseShear"))
    {
	    var g = document.getElementById("refClauseShear") ;		
        g.style.color= (g.style.color=='red'?'blue':'red');		
        
    }
    if(document.getElementById("refClauseShear1"))
    {
	    var h = document.getElementById("refClauseShear1") ;		
        h.style.color= (h.style.color=='red'?'blue':'red');		
        
    }  
	setTimeout('blinkerShear()', 1000);
}
