var valueD1;
var nBarsMax;
var nBars;
var Dchange = 0;
var astCalculatedpage4;

function reinCalulateBar(){
	$("#forwardButton").addClass("disabled");
    $('#backwardButton').addClass("disabled");
             
	$("#centerText2").html("CALCULATIONS");
	$("#centerText1").html("DIAGRAM");
	
	var htmbar = '<div class="row" id="overAllDepthSelect1" >'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Provide total depth (D) mm :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<select  class="form-control selectConf marginBottom"  " style="margin-top: 16px; margin-left:14px;  " id="selectD1">'
				   +'<option value="0">--- Select  --- </option>'
				   +'<option value="300" >300</option>'
				   +'<option value="380" >380</option>'
				   +'<option value="450" >450</option>'
				   +'<option value="500" >500</option>'
				   +'<option value="530" >530</option>'
				   +'<option value="600" >600</option>'
				   +'<option value="700" >700</option>'
				   +'<option value="800" >800</option>'
				   +'<option value="900" >900</option>'
				   +'<option value="1000" >1000</option>'
				  
				   +'</select>'	   
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load11" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>' 
				   
				   +'<div class="row" id="deffCalculate1" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Provided effective depth d<sub>eff</sub> (D-d<sup>'+"'"+' </sup>) mm </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<input type="number"  value="" id="textLabel"  style="margin:15px 14px;" class=" form-control" disabled></input>'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
//				   +'<button type="submit" class="btn btn-danger"  id="submit_load12" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Plot Graph</input>'
				   +'</div>'
				   +'</div>'
				   
				   
				   +'<div class="row" id="calculatedAst1" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Required Ast for provided depth mm<sup>2</sup>:  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<input type="number"  value="" id="text12"  style="margin:15px 14px;" class=" form-control" disabled></input>'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
//				   +'<button type="submit" class="btn btn-danger"  id="submit_load12" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Plot Graph</input>'
				   +'</div>'
				   +'</div>'
				   
				  +'<div class = "row"  id = "sizeOfBars1" style="margin-top:20px;width:95%;" hidden>'
//				  +'<div class="col-sm-1">'
//                  +'</div>'
                  +'<div class="col-sm-12 marginBottom" id="steelGradeLabel">'
                  +' <center><label class="labelstyle " " style="margin:15px 14px;height:100%;" > Spacing between bars is 50mm </label></center> '
                  +'</div>'
//                 
                 
//                  +'<div class="col-sm-1">'
//                  +'</div>'
                  +'</div>'
				   
//				   +'<div class="row" id="sizeOfBars" hidden>'
//				   +'<div class="col-sm-5 ">'
//				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Enter Size of Bar (&empty; mm) :  </label>'
//				   +'</div>'
//				   +'<div class="col-sm-4" id="valueStep1">'
//				   +'<input type="number"  value="" id="text12"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" ></input>'
//				   +'</div>'
//				   +'<div class="col-sm-3"  id="submitStep1">'
//				   +'<button type="submit" class="btn btn-danger"  id="submit_load12" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
//				   +'</div>'
//				   +'</div>'
				   
				   
				   +'<div class="row" id="noOfBars" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Select &empty;  mm :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   
//				   +'<input type="number"  value="" id="text13"  style="margin:15px 14px;height:50%;" class=" form-control" ></input>'

				    +'<select  class="form-control selectConf marginBottom" id="longReinForD1" " style="margin:15px 14px;height:50%;">'
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
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load12" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   
				   +'<div class="row" id="barNos" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate No of Bars :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'				   
				   +'<input type="number"  value="" id="text13"  style="margin:15px 14px;height:50%;" class=" form-control" ></input>'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load13" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   
				  
				   
				   $("#page4Div1").html(htmbar);
	DCalculateValNext();
//	var imgeffectiveD = '<img src="images/rein.png " style="width: 100%;"  class="img-fluid" >'
//            $("#page4Div2").html(imgeffectiveD);
	
	var deffPage;
	$("#submit_load11").click(function(){
		$("#selectD1").change(function(){
			valueD1 = parseInt($("#selectD1").val());
//			$("#next4").prop("hidden",false);
		});
		
		valueD1 = parseInt($("#selectD1").val());
		  var sub = (valueD1 - effectCover).toFixed(2);
		  deffPage = parseFloat(sub);
		   if(valueD1==0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select the Appropriate Value");
		}else{
			$("#submit_load11 , #selectD1").prop("disabled",true);
			$("#calculatedAst1").prop("hidden",false);
			$("#noOfBars").prop("hidden",false);
			$("#sizeOfBars1").prop("hidden",false);
			$("#deffCalculate1").prop("hidden",false);
			
			$("#textLabel").val(deffPage);
			page4ProvidedAst();
		}
		
	});
	
	
	
	function page4ProvidedAst(){
		  
			var sub = valueD1-effectCover;
			var mulConver = bendingMom*Math.pow(10,6);
			var numMul = 4.6*mulConver;
			
			
			var mulOfTerms1 = conVal*beamWidthVal*sub*sub;
			var mulOfTerms = mulOfTerms1.toFixed(2);
			var dmul = parseFloat(mulOfTerms);
			
			var divVal1 = (numMul/dmul).toFixed(2);
			var subCal = 1-divVal1;
			var sqrtDiv = Math.sqrt(subCal);
			
			var sqrtVal = sqrtDiv.toFixed(2);
			
			var finalSub1 = 1-sqrtVal;
			var finalSub = finalSub1.toFixed(2);
			
			var mulNum1 = (0.5*conVal).toFixed(2);
			var divFirst = (mulNum1/steelVal).toFixed(2);
			
			var mulValues = finalSub*divFirst*beamWidthVal*sub;
			astCalculatedpage4 = mulValues.toFixed(2);
			$("#text12").val(astCalculatedpage4);
			
	}
	
	
//	$("#longReinForD1").change(function(){
//			Dchange = $("#longReinForD1").val();
//		});
		
		$("#longReinForD1").change(function(){
		Dchange = $("#longReinForD1").val();

	});
		
	$("#submit_load12").click(function(){
		console.log("Dchange : "+Dchange);
		
		var twoD = effectCover*2;
		var denoAddition = parseInt(50)+parseInt(Dchange);
//		console.log("denoAddition "+denoAddition);
		var numAddition = beamWidthVal-parseFloat(twoD)+parseInt(Dchange)+parseInt(50);
//		console.log("numAddition "+numAddition);
		var nBars1 = (numAddition/denoAddition).toFixed(2);
//		console.log("nBars1 "+nBars1);
		 nBarsMax = Math.ceil(nBars1);
		 console.log("nBarsMax "+nBarsMax);
		 
		 var denoMul = 0.785*Dchange*Dchange;
		 var nDivision = astCalculatedpage4/denoMul;
		 nBars = Math.ceil(nDivision);
		 console.log("nBars : "+nBars);
		
		
		if(Dchange==0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Value");
		}else{
			if(Dchange==6||Dchange==8)
			 {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>Minimum bar diameter for longitudinal reinforcement should be 10mm</b>");
			}else{
				if(nBars<2){
					$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Minimum 2 bars required");
				}else{
			$("#submit_load12").prop("disabled",true);
			$("#longReinForD1").prop("disabled",true);
			$("#barNos").prop("hidden",false);
			 $("#text13").prop("disabled",false);	         
             $("#submit_load13").prop("disabled",false);
			$("#text13").val('');
			id8 = 1;
			}
			}
		}
	});
	
	
	
	var id8=1;
	$("#submit_load13").click(function(){
		var nBarsEnter = $("#text13").val();
		 
		    if(nBarsEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				 nBarsEnter = parseInt($("#text13").val());
				
				  if (id8 <= 3) {
				
				if (nBars == nBarsEnter) {
			
	         $("#submit_load13").prop("disabled",true);
	         $("#text13").prop("disabled",true);
	         reinAnimN();
	         $("#submit_load12").prop("disabled",false);
	         $("#longReinForD1").prop("disabled",false);	         
	         $("#forwardButton").removeClass("disabled");
             $("#backwardButton").removeClass("disabled");
           
            
             
				} else if (nBars != nBarsEnter) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id8 == 4) {
			$(".modal-header").html("Formula");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelImg2 = '<img src="images/nValFormula.png" class="img-responsive" alt="Cinque Terre">'
            $("#MsgModal").html(modelImg2);
				
			} else {
	
				if (nBars == nBarsEnter) {					
			 $("#submit_load13").prop("disabled",true);
	         $("#text13").prop("disabled",true);
	         reinAnimN();
	         $("#submit_load12").prop("disabled",false);
	         $("#longReinForD1").prop("disabled",false);	         
	         $("#forwardButton").removeClass("disabled");
             $("#backwardButton").removeClass("disabled");
	        
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + nBars);
				 

				}
			}
			id8++;
				
				}
		  
	});
	
}
