var dVal=0;
var overDepthVal=0;
var ast =0 ;
var astCalculated = 0;
graphJson = {};
arrGraphStore = [];
var minCriteria = 0;
var maxCriteria = 0;
var pressureValue;
var dValRepeat,overDepthValRepeat,astValRepeat;


var valMainArr = [];
var graphArr11 = [];

steelStr = 0.133;
function Dcalculate(){
	
	$("#forwardButton").addClass("disabled");
    $('#backwardButton').addClass("disabled");
	
//	var bendingMom=10;
//	var effectCover = 30;
//    console.log("bending Moment"+bendingMom);
//    console.log("effectCover"+effectCover);
	var dCalculate = ''
	              +'<div class = "row">'
                  +'<div class="col-sm-6 marginBottom" id="steelGradeLabel">'
                  +' <center><label class="labelstyle " style="margin-left:10px;">Utilmate moment carrying capacity of a balanced section <br>(For Fe'+steelVal+')  M<sub>u</sub> = '+steelStr+' f<sub>ck</sub> bd<sup>2</sup> </label></center> '
                  +'</div>'
//                   +'<div class="col-sm-1">'
//                  +'</div>'
                  +'<div class="col-sm-5 marginBottom" id="widthLabel">'
                  +' <center><label class="labelstyle " style="margin-left:10px;">Width (b) = '+beamWidthVal+' mm </label></center> '
                  +'</div>' 
                  +'<div class="col-sm-1">'
                  +'</div>'
                  +'</div>'
                  
                  +'<div class = "row">'
                  +'<div class="col-sm-6 marginBottom" id="bendLabel">'
                  +' <center><label class="labelstyle " > M<sub>u</sub>  = '+bendingMom+' kNm  </label></center> '
                  +'</div>'
//                  +'<div class="col-sm-1">'
//                  +'</div>'
                  +'<div class="col-sm-5 marginBottom" id="concreteGradeLabel">'
                  +' <center><label class="labelstyle " >f<sub>ck</sub> = '+conVal+' Mpa </label></center> '
                  +'</div>' 
                  +'<div class="col-sm-1">'
                  +'</div>'
                  +'</div>'  
                  
                  +'<div class = "row">'
                  +'<div class="col-sm-1">'
                  +'</div>'
                  +'<div class="col-sm-3 marginBottom" id="longLabel">'
                  +' <center><label class="labelstyle " > &empty; = '+longReinVal+' mm  </label></center> '
                  +'</div>'
//                  +'<div class="col-sm-1">'
//                  +'</div>'
                  +'<div class="col-sm-3 marginBottom" id="shearLabel">'
                  +' <center><label class="labelstyle " >&empty;<sub>s</sub> = '+shearReinVal+' mm </label></center> '
                  +'</div>' 
                  
                  +'<div class="col-sm-3 marginBottom" id="nominalCLabel">'
                  +' <center><label class="labelstyle " >cc = '+nominalCoverVal+' mm </label></center> '
                  +'</div>'
                  
                  +'<div class="col-sm-1">'
                  +'</div>'
                  +'</div>'
                   
                  
                   +'<div class="row" id="effectiveDepth" >'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Required effective depth for balanced section (d<sub>eff</sub>)mm :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<input type="number"  value="" id="text6"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load6" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
                   
                   +'<div class="row" id="overAllDepth" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate Overall depth (D) mm :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<input type="number"  value="" id="text7"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load7" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>' 
				   
				   +'<div class="row" id="astBlock" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate area of tension reinforcement (Ast) for balanced section (mm<sup>2</sup>):  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<input type="number"  value="" id="text8"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load8" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>' 
				   
				   +'<div class="row" id="overAllDepthSelect" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Trial for different values of total depth (D) mm :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<select  class="form-control selectConf marginBottom"  " style="margin-top: 16px; margin-left:14px; height:auto; " id="selectD">'
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
				   +'<button type="submit" class="btn btn-danger"  id="submit_load9"  style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>' 
				   
				   +'<div class="row" id="calculatedAst" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Required Ast for selected D mm<sup>2</sup>:  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<input type="number"  value="" id="text9"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" disabled></input>'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load10" style="width:100%;height:50%;margin-top: 16px;" >Plot Graph</input>'
				   +'</div>'
				   +'</div>'
				   
				   +'<div class="row" >'
				   +'<div class="col-sm-1">'
				   +'</div>' 
				    +'<div class="col-sm-10" id="lessThan470" hidden>'
				   	+'<label class="labelstyle marginBottom" style="margin-top:5px; margin-left:-15px;">Selected depth is less than calculated depth for balanced section.<br>Hence, it is Over reinforced section.<br>Over reinforced section subjected to compressive failure(Sudden failure).<br>Generally, we avoid over reinforced sections; however, if necessary, you may proceed with a design of doubly reinforced section.</label>'
			        +'</div>' 
                   +'<div class="col-sm-1">'
				   +'</div>'
	               +'</div>'
	               
	               +'<div class="row"  >'
				   +'<div class="col-sm-1">'
				   +'</div>' 
				    +'<div class="col-sm-10" id="greaterThan470" hidden>'
				   	+'<label class="labelstyle marginBottom" style="margin-top:5px; margin-left:-15px;">Selected depth is greater than calculated depth for balanced section.<br>Hence, it is Under reinforced section.<br>Under reinforced section subjected to tensile failure.<br>Generally, we prefer under reinforced sections because they provide visible indications of cracking before failure occurs.</label>'
			        +'</div>' 
                   +'<div class="col-sm-1">'
				   +'</div>'
	               +'</div>' 
	               
	                +'<div class="row"  >'
				    +'<div class="col-sm-1 ">'
				    +'</div>'
				    +'<div class="col-sm-10 ">'
				    +'<button type="button"   class="btn btn-danger btnStyle" id="next4"  hidden><b>NEXT LEVEL </b></button>'
				    +'</div>'
				    +'<div class="col-sm-1 ">'
				    +'</div>'
				    +'</div>'
	                         
	   
	   $("#page3Div1").html(dCalculate);
	   staticDiag();
//	   var imgeffectiveD = '<img src="images/rein.png " style="width: 100%;"  class="img-fluid" >'
//            $("#page3Div2").html(imgeffectiveD);
	   
	   var dValEnter;
	   var id5=1;
	   var modelImg1;
	   $("#submit_load6").click(function(){
		
		if($("#text6").val() == '')
			$("#text6").val(dValRepeat);
			dValRepeat = $("#text6").val();
           
		
		dValEnter = $("#text6").val();
		
		 var convert = Math.pow(10,6);
		 var mulOfTerms = steelStr*conVal*beamWidthVal;
		 var valueTrim = mulOfTerms.toFixed(2);
		 var bendConvert1 = bendingMom*convert;
		 var bendConvert = bendConvert1.toFixed(2);
		 var divOfTerms = (bendConvert/valueTrim).toFixed(2);
		 var sqrt = Math.sqrt(divOfTerms);
		 var dVal1 =  sqrt.toFixed(2);
		 dVal = parseFloat(dVal1);
		 
		 if(dValEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				
				dValEnter = parseFloat($("#text6").val());
				if (id5 <= 3) {
				
				if (dVal == dValEnter) {			  
	         $("#submit_load6").prop("disabled",true);
	         $("#text6").prop("disabled",true);
	         $("#overAllDepth").prop("hidden",false);
	         $("#page3Div2").html('');
	         staticDiag();
	         deffVal();
	         
				} else if (dVal != dValEnter) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id5 == 4) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			if(steelVal==250){
				modelImg1 = '<img src="images/0.148effectDepth.png" class="img-responsive" alt="Cinque Terre">'
			
             }else if(steelVal==415){
					modelImg1 = '<img src="images/0.138effectiveDepth.png" class="img-responsive" alt="Cinque Terre">'

            }else{
		          modelImg1 = '<img src="images/0.133effectiveDepth.png" class="img-responsive" alt="Cinque Terre">'
}
$("#MsgModal").html(modelImg1);

				
			} else {
	
				if (dVal == dValEnter) {
			 $("#submit_load6").prop("disabled",true);
	         $("#text6").prop("disabled",true);
	         $("#overAllDepth").prop("hidden",false);
	         $("#page3Div2").html('');
	         staticDiag();
	         deffVal();
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + dVal);
				 

				}
			}
			id5++;
				
			}
	});
	
	var overDepthEnter;
	var id6=1;
	$("#submit_load7").click(function(){
		if($("#text7").val() == '')
			$("#text7").val(overDepthValRepeat);
			overDepthValRepeat = $("#text7").val();

		   var div = (longReinVal/2).toFixed(2);
		   var div1 = parseFloat(div);
		    overDepthVal = parseFloat(nominalCoverVal)+parseFloat(shearReinVal)+div1+dVal;
		   overDepthEnter = $("text7").val();
		   
		   if(overDepthEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				
				overDepthEnter = parseFloat($("#text7").val());
	   if (id6 <= 3) {
				
				if (overDepthEnter == overDepthVal) {
			
	         $("#submit_load7").prop("disabled",true);
	         $("#text7").prop("disabled",true);
	         $("#astBlock").prop("hidden",false);
	         DCalculateVal();
				} else if (overDepthEnter != overDepthVal) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id6 == 4) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("<b>Formula : Overall depth D = d+&empty;/2+cc+</b>&empty;<sub>s</sub>");

				
			} else {
	
				if (overDepthVal == overDepthEnter) {					
			 $("#submit_load7").prop("disabled",true);
	         $("#text7").prop("disabled",true);
	         $("#astBlock").prop("hidden",false);
	          DCalculateVal();
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + overDepthVal);
				 

				}
			}
			id6++;
		   }
		});
		
		var astEnter;
		var id7=1;
		$("#submit_load8").click(function(){
			if($("#text8").val() == '')
			$("#text8").val(astValRepeat);
			astValRepeat = $("#text8").val();
			
			astEnter = $("#text8").val();
			var mulConver = bendingMom*Math.pow(10,6);
			var numMul = 4.6*mulConver;
			
			
			var mulOfTerms1 = conVal*beamWidthVal*dVal*dVal;
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
			
			var mulValues = finalSub*divFirst*beamWidthVal*dVal;
			ast = mulValues.toFixed(2);
			
			 if(astEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				
				astEnter = parseFloat($("#text8").val());
				if (id7 <= 3) {
				
				if (ast == astEnter) {
			
	         $("#submit_load8").prop("disabled",true);
	         $("#text8").prop("disabled",true);
	         $("#overAllDepthSelect").prop("hidden",false);
	        
	         
				} else if (ast != astEnter) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id7 == 4) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			modelImg2 = '<img src="images/astFormula.png" class="img-responsive" alt="Cinque Terre">'
            $("#MsgModal").html(modelImg2);
				
			} else {
	
				if (ast == astEnter) {					
			 $("#submit_load8").prop("disabled",true);
	         $("#text8").prop("disabled",true);
	         $("#overAllDepthSelect").prop("hidden",false);
	        
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + ast);
				 

				}
			}
			id7++;
				
				
			}
			
		});
		
		var ValueD = 0;
		$("#selectD").change(function(){
			ValueD = parseInt($("#selectD").val());
			$("#calculatedAst").prop("hidden",true);
			$("#lessThan470").prop("hidden",true);
			$("#greaterThan470").prop("hidden",true);
//			$("#next4").prop("hidden",false);
		});
		
		
		var cntD = 0;
		
		$("#submit_load9").click(function(){
//			console.log("ValueD : "+ValueD);
		
			 $("#forwardButton").removeClass("disabled");
             $("#backwardButton").removeClass("disabled");
		
			if(ValueD==0){
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select appropriate values");
			}else{
				autoScroll();
				
            var sub = ValueD-effectCover;
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
			astCalculated = mulValues.toFixed(2);
			
			var minCriteriaNum = (0.85*beamWidthVal*sub).toFixed(2);
			var minCriteriaDiv = (minCriteriaNum/steelVal).toFixed(2);
			minCriteria = parseFloat(minCriteriaDiv);
			
			var maxCrit = (0.04*beamWidthVal*ValueD).toFixed(2);
             maxCriteria = parseFloat(maxCrit);
			
			pressureValue =$("#selectD").children(":selected").attr("value");
			 
			 $("#selectD").children('option[value="' + pressureValue + '"]').attr('disabled', true);
//			           console.log("maxCriteria "+maxCriteria);
//						console.log("minCriteria "+minCriteria);
//						console.log("overDepthVal "+overDepthVal);
//						console.log("astCalculated "+astCalculated);
//						console.log("ValueD "+ValueD);
						
						var astCalculated1 = parseFloat(astCalculated);
						var ValueD1 = parseFloat(ValueD);
//			var maxCriteriatemp1 = parseFloat(maxCriteria);			
//			var minCriteriatemp2 = parseFloat(minCriteria);	
//			var overDepthValtemp3 = parseFloat(overDepthVal);	
//			var astCalculatedtemp4 = parseFloat(astCalculated);
//			var ValueDtemp5 = parseFloat(ValueD);
					
			if(ValueD1==0){
				
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropraite Values");
				
			}else{

				valMainArr.push(ValueD1);
			
				
				if(overDepthVal<ValueD1)
				{
					blinker2();
					$("#lessThan470").prop("hidden",true);
					$("#greaterThan470").prop("hidden",false);
//					console.log("message under");
					
					if(astCalculated1<minCriteria){
						blinker2();
//						console.log("minimum ast Provide");
						$("#text9").val(minCriteria);
						ast = minCriteria;
						astCalculated = ast;
						$("#lessThan470").prop("hidden",true);
					$("#calculatedAst").prop("hidden",false);
					$("#selectD").prop("disabled",true);
					$("#submit_load9").prop("disabled",true);
					$("#submit_load10").prop("disabled",false);
					
					
					if(cntD>2){
							 $("#forwardButton").removeClass("disabled");
             				$("#backwardButton").removeClass("disabled");
						}
					
					cntD++;
					}
					else if(astCalculated1>maxCriteria){
						
						$("#lessThan470").prop("hidden",false);
						$("#greaterThan470").prop("hidden",true);
					 $("#calculatedAst").prop("hidden",true);
						$("#lessThan470").htm("Revise Section");
						
					}else{
						
						$("#text9").val(astCalculated1);
						$("#lessThan470").prop("hidden",true);
					$("#calculatedAst").prop("hidden",false);
					$("#selectD").prop("disabled",true);
					$("#submit_load9").prop("disabled",true);
					$("#submit_load10").prop("disabled",false);
					
						if(cntD>1){
							 $("#forwardButton").removeClass("disabled");
             				$("#backwardButton").removeClass("disabled");
						}
						cntD++;
						
					}
				}
				else
				{
//					alert("empty");
                 blinker2();
                 $("#lessThan470").prop("hidden",false);
//                 $("#lessThan470").htm("Revise Section");
				
				$("#greaterThan470").prop("hidden",true);
				$("#calculatedAst").prop("hidden",true);
					
				}

			}
           }
		});
	
		 var ast1;
		$("#submit_load10").click(function(){	
			ast1 = parseInt(ast)+1000;		
			 $("#selectD").prop("disabled",false);
			 $("#submit_load9").prop("disabled",false);
			 graphArr11.push(ast1);
			$("#submit_load10").prop("disabled",true);
//			 $(".modal-header").html("Error Message");
//			$(".modal-header").css("background","#23435c");
//			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
//            $("#MsgModal").html("Select another depth D and plot the graph.");
			 $("#selectD").val(0);
//			 console.log("ast1 : "+ast1);
			                 tempJson={};
							 tempJson.selectedD = parseInt(ValueD);
							 tempJson.calAst = astCalculated;
							 arrGraphStore.push(tempJson);
							 graphJson.astGraph=arrGraphStore;
							 
//							 console.log(graphJson);
							 $("#page3Div2").html('');
							 graphCreate(graphJson);
			 
//							 graphJson = {};
//arrGraphStore = [];
//            $("#page1,#page2,#page3").prop("hidden",true);
//	         $("#page4").prop("hidden",false);
//               reinCalulateBar();
		});

}

function graphCreate(graphJson) {
//    $("#page3Div2").html('');
    var xdata = [];
    var ydata = [];

    var graphData1 = [];
    var graphDataSort = [];

    for (var i = 0; i < graphJson.astGraph.length; i++) {
        xdata[i] = parseInt(graphJson.astGraph[i].selectedD);
        ydata[i] = parseFloat(graphJson.astGraph[i].calAst);
    }

    for (var j = 0; j < graphJson.astGraph.length; j++) {
        let tempArr = [];
        tempArr[0] = xdata[j];
        tempArr[1] = ydata[j];
        graphData1.push(tempArr);
    }

    // Custom sort function to place 1000 at the end
    xdata.sort(function(a, b) {
        if (a === 1000) return 1;
        if (b === 1000) return -1;
        return a - b;
    });

    // Ensure graphData1 is sorted by the custom sorted xdata
    graphData1.sort(function(a, b) {
        if (a[0] === 1000) return 1;
        if (b[0] === 1000) return -1;
        return a[0] - b[0];
    });

    ydata.sort(function(a, b) { return a - b });

    Xmax = parseInt(xdata[xdata.length - 1]);
    Ymax = parseFloat(ydata[ydata.length - 1]);

    Xmin = parseInt(xdata[0]);
    Ymin = parseFloat(ydata[0]);

    graphDataSort = graphData1.slice(); // Make a copy of the sorted graph data

    // Determine threshold for higher side (e.g., the top 20% of values)
    var threshold = ydata[Math.floor(ydata.length * 0.8)];

    Highcharts.chart('page3Div2', {
        title: {
            text: 'Selected Depth'
        },

        xAxis: {
            min: Xmin,
            max: Xmax,
            title: {
                text: 'Selected D'
            }
        },
        yAxis: {
            min: Ymin,
            max: Ymax,
            title: {
                text: 'Calculated AST'
            }
        },
        series: [
            {
                type: 'line',
                name: 'Standard value',
                data: graphDataSort,
                marker: {
                    enabled: false
                },
                states: {
                    hover: {
                        lineWidth: 0
                    }
                },
                enableMouseTracking: false
            },

            {
                type: 'scatter',
                name: 'Observation value',
                data: graphData1,
                marker: {
                    radius: 4
                },
                zones: [{
                    value: threshold,
                    color: '#7240a1' // Default blue color
                }, {
                    color: '#ff0000' // Red color for higher values
                }]
            }
        ]
    });
}


function sortJsonArrayByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; 
        var y = b[key];

        // If the key values are numbers, compare them directly
        if (typeof x === "number" && typeof y === "number") {
            return x - y;
        }

        // Otherwise, compare them as strings
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
}

function blinker2()
  {
    if(document.getElementById("lessThan470"))
    {
	    var h = document.getElementById("lessThan470") ;		
        h.style.color= (h.style.color=='red'?'blue':'red');		
        
    }if(document.getElementById("greaterThan470"))
    {
	    var n = document.getElementById("greaterThan470") ;		
        n.style.color= (n.style.color=='red'?'blue':'red');		
        
    } 
	setTimeout('blinker2()', 1000);
}

function autoScroll() {
    $("html, body").animate({ scrollTop: $(document).height() }, 1000); // Scroll to bottom in 5 sec
}