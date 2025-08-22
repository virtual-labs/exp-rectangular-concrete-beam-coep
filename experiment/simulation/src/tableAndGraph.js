 var finJson = {};
 var graphArr = [];
 
 var dArr = [];
 var arr = [];
 var steelCostLongCal = 0;
 var steelCostLo = [];
 var tableMainDiv;
 var longStrirrupTableVal = 0;
var concreteSelVal = 0;
 var longReinTableSel = 0;
			var steelLongRateVal = 0;
			
			var concreteCostLo = 0;
			var concreteCostArr = [];
			var concreteRateVal = 0;
			var steelStirupRateVal = 0;
			
			var stiruppArr = [];
			 var costArr = [];
			 
			 var closestVal = [];
			 var barNos = [];
			 var diam = [];
			 var finalDiam = [];
			 
			 let astRoundOff;
	var tabDisp = 0;
			 
 function table(){
	if(tabDisp==0){
	$("#forwardButton").addClass("disabled");
    $('#backwardButton').addClass("disabled");
    tabDisp++;
	}else{
		 $('#backwardButton').removeClass("disabled");
	}
  dArr = [300,380,450,500,530,600,700,800,900,1000];
 
 astTension();
 shearReinForcement();


var htmTg = '<div class="row" id="gsLongRein" >'
				   +'<div class="col-sm-4 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Grade of steel for longitudinal reinforcement </label>'
				   +'</div>'
				   
				       +'<div class="col-sm-2 marginBottom" >'
                      +'<select  class="form-control selectConf marginBottom" id="longReinTable" " style="margin:15px 14px;height:50%;">'
					   +'<option value="0">--- Select  --- </option>'
					   +'<option value="500" >Fe500</option>'
					   +'<option value="415" >Fe415</option>'
					 
				  +'</select>'
                  +'</div>'
				   
				   +'<div class="col-sm-2 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Cost Rs/kg   </label>'
				   +'</div>'
				   
				   +'<div class="col-sm-2" id="valueStep1">'
				   +'<input type="number"  value="" id="steelLongRate"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-2"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submitFirstDiv" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   
				   +'<div class="row" id="gsLongStirrup" hidden>'
				   +'<div class="col-sm-4 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Grade of steel for longitudinal stirrup </label>'
				   +'</div>'
				   
				       +'<div class="col-sm-2 marginBottom" >'
                      +'<select  class="form-control selectConf marginBottom" id="longStrirrupTable" " style="margin:15px 14px;height:50%;">'
					   +'<option value="0">--- Select  --- </option>'
					   +'<option value="500" >Fe250</option>'
					   +'<option value="415" >Fe415</option>'
					 
				  +'</select>'
                  +'</div>'
				   
				   +'<div class="col-sm-2 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Cost Rs/kg   </label>'
				   +'</div>'
				   
				   +'<div class="col-sm-2" id="valueStep1">'
				   +'<input type="number"  value="" id="steelStirupRate"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-2"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submitSecDiv" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   
				   +'<div class="row" id="gsConcrete" hidden>'
				   +'<div class="col-sm-4 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Grade of concrete </label>'
				   +'</div>'
				   
				       +'<div class="col-sm-2 marginBottom" >'
                      +'<select  class="form-control selectConf marginBottom" id="concreteSel" " style="margin:15px 14px;height:50%;">'
					   +'<option value="0">--- Select  --- </option>'
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
				   
				   +'<div class="col-sm-2 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;"> Cost Rs/kg   </label>'
				   +'</div>'
				   
				   +'<div class="col-sm-2" id="valueStep1">'
				   +'<input type="number"  value="" id="concreteRate"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-2"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submitThirdDiv" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   
 
 
// tableMainDiv =	'<div class="col-sm-12">'
//			        + '<table class=" table table-bordered " style="overflow-x:auto;">'
//					+ ' <thead>'
//					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
////					+ '  <th><center>Sr.No</center></th>'
//					+ '  <th><center>For different values of D (mm)</center></th>'
//					+ '   <th><center>Tension reinforcement </center></th>'
//					+ '  <th><center>Provided 2 bars of 12 &empty; mm </center> </th>'
//                    + '  <th><center>Shear reinforcement</center> </th>'
//                    + '  <th><center>Cost</center> </th>' 
//					+ '   </tr>'
//					+ '  </thead>'
//					+ '   <tbody>'
//					
////					+ '  <th><center>1</center></th>'
//                    for(i=0;i<dArr.length;i++){
//	                +'<tr>'
//	      tableMainDiv  += '  <td><center>'+dArr[i]+'</center></td>'
//	                + '   <td><center>'+arr[i]+' </center></td>'
//					+ '  <td><center>'+compReinMul+'</center> </td>'
//                    + '  <td><center>'+shearArr[i]+'</td>'
//                    + '  <td><center>'+costArr[i]+' </td>' 
//	      + '</tr>'
//                    }
					
			
			
			$("#page6Div1").html(htmTg);		
			
			$("#longReinTable").change(function(){
				longReinTableSel = parseInt($("#longReinTable").val());
			});
					
		$("#submitFirstDiv").click(function(){
			steelLongRateVal = $("#steelLongRate").val();
			if(longReinTableSel==0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Value");
			}else if(steelLongRateVal==""){
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter Appropriate Rate");
			}else{
				steelLongRateVal = parseFloat($("#steelLongRate").val());
				if(steelLongRateVal<=0){
					
				}else{
			$("#gsLongStirrup").prop("hidden",false);
			$("#longReinTable").prop("disabled",true);
			$("#steelLongRate").prop("disabled",true);
			$("#submitFirstDiv").prop("disabled",true);
			}
			}
		
	});
	
	
	
	$("#longStrirrupTable").change(function(){
				longStrirrupTableVal = parseInt($("#longStrirrupTable").val());
			});
	
		$("#submitSecDiv").click(function(){
			
			steelStirupRateVal = $("#steelStirupRate").val();
			if(longStrirrupTableVal==0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Value");
			}else if(steelStirupRateVal==""){
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter Appropriate Rate");
			}else{
				steelStirupRateVal = parseFloat($("#steelStirupRate").val());
				if(steelStirupRateVal<=0){
					
				}else{
			$("#gsConcrete").prop("hidden",false);
			$("#longStrirrupTable").prop("disabled",true);
			$("#steelStirupRate").prop("disabled",true);
			$("#submitSecDiv").prop("disabled",true);
			}
			}
			
			
		});
		
		
		$("#concreteSel").change(function(){
				concreteSelVal = parseInt($("#concreteSel").val());
			});
			
		$("#submitThirdDiv").click(function(){
			concreteRateVal = $("#concreteRate").val();
			if(concreteSelVal==0){
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Select Appropriate Value");
			}else if(concreteRateVal==""){
				$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter Appropriate Rate");
			}else{
				concreteRateVal = parseFloat($("#concreteRate").val());
				if(concreteRateVal<=0){
					
				}else{
			
			
			 
			var multiples = [12, 16, 20, 25, 28, 32];
			var numbers = [];
			 
			 var areaArr = [];
			 
			  for(i = 0;i<multiples.length;i++){
				 var areaFor1 = (3.14/4).toFixed(2);  
				 var areaFor2 = (areaFor1*multiples[i]*multiples[i]).toFixed(2); 
				 var area = parseFloat(areaFor2);
				 areaArr.push(area);
			}
			 
			 

//			let results = arr.map(givenValue => {
//  let { product, reference, multiplier } = findMultiplierAndProduct(givenValue, areaArr);
//  return { givenValue, reference, product, multiplier };
//});
  
  astRoundOff = arr.map(givenValue => {
  let { product } = findMultiplierAndProduct(givenValue, areaArr);
  return product;
});

 let barNos = arr.map(givenValue => {
  let { multiplier } = findMultiplierAndProduct(givenValue, areaArr);
  return multiplier;
});

let barDiam = arr.map(givenValue => {
  let { reference } = findMultiplierAndProduct(givenValue, areaArr);
  return reference;
});

             steelCost();
             concreteCost();
             steelCostStirrups();			 			 
			 totalCost();


for(i=0;i<barDiam.length;i++){
 	
  let valueToFind = barDiam[i];


let index = areaArr.indexOf(valueToFind);	
	finalDiam[i] = multiples[index]
}

             


			$("#concreteSel").prop("disabled",true);
			$("#steelStirupRate").prop("disabled",true);
			$("#submitThirdDiv").prop("disabled",true);
			
			tableMainDiv =	'<div class="col-sm-12">'
			        + '<table class=" table table-bordered " style="overflow-x:auto;">'
					+ ' <thead>'
					+ '  <tr style = "BACKGROUND-COLOR: #072647; color:#fff; ">'
//					+ '  <th><center>Sr.No</center></th>'
					+ '  <th><center>For different values of D (mm)</center></th>'
					+ '   <th><center>Area of Tension reinforcement (mm)<sup>2</sup> </center></th>'
					+ '  <th><center>Provided 2 bars of 12 &empty; mm </center> </th>'
                    + '  <th><center>Shear reinforcement</center> </th>'
                    + '  <th><center>Cost(Rs)</center> </th>' 
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					
//					+ '  <th><center>1</center></th>'
                    for(i=0;i<dArr.length;i++){
	                +'<tr>'
	      tableMainDiv  += '  <td><center>'+dArr[i]+'</center></td>'
//	                + '   <td><center>'+arr[i]+' </center></td>'
					+ '   <td><center>'+astRoundOff[i].toFixed(2)+" ( "+barNos[i]+" # "+finalDiam[i]+" mm &empty; ) "+' </center></td>'
					+ '  <td><center>'+compReinMul+'</center> </td>'
                    + '  <td><center>'+shearArr[i]+'</td>'
                    + '  <td><center>'+costArr[i]+' </td>' 
	      + '</tr>'
                    }
			
			 $("#page6Div1").append(tableMainDiv);
			 
			                 tempJson={};
							 tempJson.totDepth = dArr;
							 tempJson.relevantCost = costArr;
							 graphArr.push(tempJson);
							 finJson.costGraph=graphArr;
							 graphCost();
							 
//							 console.log(finJson);
			 
			}
			
			
			showAlert();
			
			}
		});	
					
	}
	
   function showAlert(){
	   Swal.fire({
        icon: 'success',
        title: 'Experiment Completed!',
        confirmButtonText: 'Ok',
        customClass: {
          icon: 'custom-icon',
          popup: 'custom-popup',
          title: 'custom-title',
          confirmButton: 'custom-confirm-button',
          cancelButton: 'custom-cancel-button',
        }
      });
   }
   
	function findMultiplierAndProduct(givenValue, areaArr) {
  let closestProduct = null;
  let bestReference = null;
  let bestMultiplier = null;

  for (let reference of areaArr) {
    let multiplier = 2;  // Start from 2 to ensure multiplier is never 1
    let product = reference * multiplier;

    while (product < givenValue) {
      multiplier++;
      product = reference * multiplier;
    }

    // Ensure we skip multipliers that result in 1
    if (multiplier === 1) {
      continue;
    }

    if (closestProduct === null || product < closestProduct) {
      closestProduct = product;
      bestReference = reference;
      bestMultiplier = multiplier;
    }
  }

  return { product: closestProduct, reference: bestReference, multiplier: bestMultiplier };
}

	

	
	function findClosestMultiple(number, areaArr) {
                let closest = areaArr[0];
                let minDifference = Math.abs(number - areaArr[0]);

                for (let i = 1; i < areaArr.length; i++) {
                    let difference = Math.abs(number - areaArr[i]);
                    if (difference < minDifference) {
                        minDifference = difference;
                        closest = areaArr[i];
                    }
                }

                return closest;
            }
            
            function calculateMultiplier(number, areaArr) {
  let multiplier = Math.round(number / areaArr);
  return multiplier === 1 ? 2 : multiplier; // Ensure multiplier is never 1
}

	
	
	function graphCost(){
		$('#backwardButton').removeClass("disabled");
		
    var xdata = dArr;
    var ydata = costArr;

    var graphData1 = [];

    for (var i = 0; i < finJson.costGraph.length; i++) {
        xdata[i] = parseFloat(finJson.costGraph[i].totDepth);
        ydata[i] = parseFloat(finJson.costGraph[i].relevantCost);
    }

    for (var j = 0; j < dArr.length; j++) {
        var tempArr = [];
        tempArr[0] = xdata[j];
        tempArr[1] = ydata[j];
        graphData1.push(tempArr);
    }

//    console.log("xdata " + xdata);
//    console.log("ydata " + ydata);
//    console.log("graphData1 " + graphData1);
    ydata.sort(function(a, b) { return a - b });
    xdata.sort(function(a, b) { return a - b });
//    console.log("After xdata " + xdata);
//    console.log("After ydata " + ydata);
    var Xmax = parseFloat(xdata[xdata.length - 1]);
    var Ymax = parseFloat(ydata[ydata.length - 1]);
//    console.log("Xmax " + Xmax);
//    console.log("Ymax " + Ymax);

    var Xmin = parseFloat(xdata[0]);
    var Ymin = parseFloat(ydata[0]);

    Highcharts.chart('page6Div2', {
        title: {
            text: 'Total Depth Vs Cost'
        },
        xAxis: {
            min: Xmin,
            max: Xmax,
            title: {
                text: 'Total Depth D'
            }
        },
        yAxis: {
            min: Ymin,
            max: Ymax,
            title: {
                text: 'Cost'
            }
        },
        tooltip: {
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            borderRadius: 10,
            style: {
                color: '#333333',
                fontSize: '14px'
            },
            formatter: function() {
                return `<b>${this.series.name}</b><br/>x: ${this.x}<br/>y: ${this.y}`;
            }
        },
        series: [
            {
                type: 'line',
                name: 'Standard value',
                data: graphData1,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 0
                    },
                    stops: [
                        [0, 'red'],
                        [0.5, 'purple'],
                        [1, 'blue']
                    ]
                },
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
                data: graphData1.map(function(point) {
                    return {
                        x: point[0],
                        y: point[1],
                        marker: {
                            fillColor: point[1] > Ymax * 0.75 ? 'red' : (point[1] > Ymax * 0.25 ? 'purple' : 'blue')
                        }
                    };
                }),
                marker: {
                    radius: 4,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'black'
                        }
                    }
                }
            }
        ]
    });
}


	function steelCost(){
		 for(i=0;i<dArr.length;i++){
			var multiCalculate = (arr[i]*effspanVal*Math.pow(10,-6)*steelLongRateVal*7850).toFixed(2);
			 steelCostLongCal = parseFloat(multiCalculate);
             steelCostLo.push(steelCostLongCal);
		}
//		console.log(steelCostLo);
	} 
	
//	function concreteCost(){
//		for(i=0;i<dArr.length;i++){
//			var mul = (beamWidthVal*dArr[i]).toFixed(2);
//			var sub = parseFloat(mul)-parseFloat(arr[i]);
//			var concreteMul = (sub*effspanVal*Math.pow(10,-6)*concreteRateVal).toFixed(2);
//			concreteCostLo = parseFloat(concreteMul);
//			concreteCostArr.push(concreteCostLo);
//		}
//		console.log(concreteCostArr);
//	}

   function concreteCost(){
	       if(sGradeSelect3 ==0 || fysChange3 == 0){
					sGradeFin = sGradeSelect;
					fyChangeFin = fysChange;
				}else{
					sGradeFin = sGradeSelect3;
					fyChangeFin = fysChange3;
					
				}
				
				for(i=0;i<dArr.length;i++){
		noOfStrVal = effspanVal*Math.pow(10,3);
	    strSpacing = (noOfStrVal/shearArr[i]).toFixed(2);
	    noOfStrirrups = parseFloat(strSpacing);
			
			var mul1 = (beamWidthVal*dArr[i]).toFixed(2);
			var mul = parseFloat(mul1);
			
			var firstTerm1 = ((beamWidthVal-dVal)*2).toFixed(2);
				var secTerm1 = ((dArr[i]-dVal)*2).toFixed(2);
				var thirdTerm1 = 2*6*fyChangeFin;
				
				var firstTerm = parseFloat(firstTerm1);
				var secTerm = parseFloat(secTerm1);
				var thirdTerm = parseFloat(thirdTerm1);
				
				var lenOfStr = firstTerm+secTerm+thirdTerm;
				
//				console.log("lenOfStr1 : "+lenOfStr);
				
				var crossArea1 = ((3.14/4)*fyChangeFin*fyChangeFin).toFixed(2);
				var crossArea = parseFloat(crossArea1);
				
				var volumeOfStr1 = (lenOfStr*noOfStrirrups*crossArea).toFixed(2);
				var volumeOfStr12 = (volumeOfStr1*Math.pow(10,-9)).toFixed(4);
			    var volumeOfStr = parseFloat(volumeOfStr12);
			    
			    var bracketTerm = parseFloat(astRoundOff[i])+(226.08);
			    
			    var fSub = mul-bracketTerm;
			    
			    var firT = (fSub*effspanVal*Math.pow(10,3)).toFixed(2);
			    
			    var finFirstTerm = parseFloat(firT)-parseFloat(volumeOfStr);
			    
			    var cost1 = (finFirstTerm*Math.pow(10,-9)*concreteRateVal).toFixed(2);
			    concreteCostLo = parseFloat(cost1);
			    concreteCostArr.push(concreteCostLo);
				}
				
//				console.log(concreteCostArr);
}

//   function concreteCost(){
//   
//       if(sGradeSelect3 ==0 || fysChange3 == 0){
//					sGradeFin = sGradeSelect;
//					fyChangeFin = fysChange;
//				}else{
//					sGradeFin = sGradeSelect3;
//					fyChangeFin = fysChange3;
//					
//				}
//    
//		for(i=0;i<dArr.length;i++){
//			noOfStrVal = effspanVal*Math.pow(10,3);
//	    strSpacing = (noOfStrVal/shearArr[i]).toFixed(2);
//	    noOfStrirrups = parseFloat(strSpacing);
//			
//			var mul = (beamWidthVal*dArr[i]).toFixed(2);
//			
//			var firstTerm1 = ((beamWidthVal-dVal)*2).toFixed(2);
//				var secTerm1 = ((dArr[i]-dVal)*2).toFixed(2);
//				var thirdTerm1 = 2*6*fyChangeFin;
//				
//				var firstTerm = parseFloat(firstTerm1);
//				var secTerm = parseFloat(secTerm1);
//				var thirdTerm = parseFloat(thirdTerm1);
//				
//				var lenOfStr = firstTerm+secTerm+thirdTerm;
//				
//				console.log("lenOfStr1 : "+lenOfStr);
//				
//				var crossArea1 = ((3.14/4)*fyChangeFin*fyChangeFin).toFixed(2);
//				var crossArea = parseFloat(crossArea1);
//				
//				var volumeOfStr1 = (lenOfStr*noOfStrirrups*crossArea).toFixed(2);
//				var volumeOfStr12 = (volumeOfStr1*Math.pow(10,-9)).toFixed(4);
//			    var volumeOfStr = parseFloat(volumeOfStr12);
//			    
//			    var bracketTerm = parseFloat(astRoundOff[i])+parseFloat(compReinMul[i])+parseFloat(volumeOfStr)+parseFloat(volumeOfStr1);
//			    
//			    var concreteMul1 = (bracketTerm*effspanVal*Math.pow(10,-6)*concreteRateVal).toFixed(2);
//			    var sub = parseFloat(mul)-parseFloat(concreteMul1);
//			var concreteCostLo1 = sub.toFixed(2);
//			concreteCostLo = parseFloat(concreteCostLo1);
//			concreteCostArr.push(concreteCostLo);
//		}
//		console.log(concreteCostArr);
//	}
    
	
	var noOfStrirrups;
	
	
	function steelCostStirrups(){
		for(i=0;i<dArr.length;i++){
		 noOfStrVal = effspanVal*Math.pow(10,3);
	    strSpacing = (noOfStrVal/shearArr[i]).toFixed(2);
	    noOfStrirrups = parseFloat(strSpacing);
	    
	     // deff -> dVal
	     
	     var sGradeFin;
	     var fyChangeFin;
	    if(sGradeSelect3 ==0 || fysChange3 == 0){
					sGradeFin = sGradeSelect;
					fyChangeFin = fysChange;
				}else{
					sGradeFin = sGradeSelect3;
					fyChangeFin = fysChange3;
					
				}
				
//				console.log(" sGradeFin : "+sGradeFin);
//				console.log(" fyChangeFin : "+fyChangeFin);
				
				var firstTerm1 = ((beamWidthVal-dVal)*2).toFixed(2);
				var secTerm1 = ((dArr[i]-dVal)*2).toFixed(2);
				var thirdTerm1 = 2*6*fyChangeFin;
				
				var firstTerm = parseFloat(firstTerm1);
				var secTerm = parseFloat(secTerm1);
				var thirdTerm = parseFloat(thirdTerm1);
				
				var lenOfStr = firstTerm+secTerm+thirdTerm;
				
//				console.log("lenOfStr1 : "+lenOfStr);
				
				var crossArea1 = ((3.14/4)*fyChangeFin*fyChangeFin).toFixed(2);
				var crossArea = parseFloat(crossArea1);
				
				var volumeOfStr1 = (lenOfStr*noOfStrirrups*crossArea).toFixed(2);
				var volumeOfStr = parseFloat(volumeOfStr1);
				
				var wtOfStr = (volumeOfStr*Math.pow(10,-9)*78.5).toFixed(2);
				var weightOfSS = parseFloat(wtOfStr);
                
                var costSt1 = (weightOfSS*steelStirupRateVal).toFixed(2);				
				var costOfStirrup = parseFloat(costSt1);
				
				stiruppArr.push(costOfStirrup);
	
				
	    }
//	   console.log(stiruppArr); 
	}
	
	
	function totalCost(){
		for(i=0;i<dArr.length;i++){
		var totcost1 = (parseFloat(stiruppArr[i])+parseFloat(concreteCostArr[i])+parseFloat(steelCostLo[i])).toFixed(2);
		var totcost = parseFloat(totcost1);
		costArr.push(totcost);
		}
		
//		console.log(costArr);
	}
	
	
	var ast1,compReinMul;
	function astTension(){
     for(i=0;i<dArr.length;i++){
	     
	     var sub = dArr[i]-effectCover;
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
			
//			console.log("astCalculated : "+astCalculated);
			
			var minCriteriaNum = (0.85*beamWidthVal*sub).toFixed(2);
			var minCriteriaDiv = (minCriteriaNum/steelVal).toFixed(2);
			minCriteria = parseFloat(minCriteriaDiv);
			
//			console.log("minCriteria : "+minCriteria);
			
			var maxCrit = (0.04*beamWidthVal*dArr[i]).toFixed(2);
             maxCriteria = parseFloat(maxCrit);

			if(astCalculated<minCriteria){
				ast1 = minCriteria;
			}else{
				ast1 = astCalculated;
			}
		arr.push(ast1);
		
			
}
   var compReinMul1 = 2*(3.14/4)*12*12;
    compReinMul = compReinMul1.toFixed(2);
}
	
	var shearCriticalTab=0;
	var criticalSecTab = 0;
	
	var maxShear1 = 0;
	
	var shearArr = [];
	
	function shearReinForcement(){
		
		 for(i=0;i<dArr.length;i++){
			
			var sfDiv = ((effspan*1000)/2).toFixed(3);
		    var sfSub = (sfDiv-(dArr[i]-effectCover)).toFixed(3);
		    var sfMul = ((shearForce*1000)*(sfSub)).toFixed(3);
		    var sfDiv = (sfMul/sfDiv).toFixed(2);
		     shearCriticalTab = parseFloat(sfDiv);
//		     console.log(" shearCriticalTab : "+shearCriticalTab);
		     
		      var numMul = shearCriticalTab;
		    var denoMul = beamWidthVal*(dArr[i]-effectCover);
		    
		    var finDiv = (numMul/denoMul).toFixed(2);
		     criticalSecTab = parseFloat(finDiv);
//		     console.log(" criticalSecTab : "+criticalSecTab);
		     
		     
		     var bdMul = beamWidthVal*(dArr[i]-effectCover);
			var div = (ast1/bdMul).toFixed(3);
			var perCal1 = (div*100).toFixed(2);
			ptPercent = parseFloat(perCal1);
//			ptPercent = 0.13;
//		     conVal = 20;
		    
//		    console.log("ptPercent : "+ptPercent);
		     
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
				
//				console.log("conValArr "+conValArr);
				var closestPrevious = 0, closestNext = 0, comparePrevious = 0, compareNext = 0;
	
	   if(ptPercent<=0.15){
			
			  closestPrevious = conValArr[0];
	          closestNext = conValArr[0];
	          comparePrevious = compArr[0];
	          compareNext = compArr[0];
	         if(closestPrevious!=closestNext||comparePrevious!=compareNext){  
	  var firstTerm = (comparePrevious-ptPercent);
	 var secondTerm = closestPrevious-closestNext;
	 var firstFinalMul = firstTerm*secondTerm;
	 var secondTerm = comparePrevious*closestPrevious;
	 var thirdTerm = compareNext*closestPrevious;
	 
	 var num = firstFinalMul-secondTerm+thirdTerm;
	 var deno = comparePrevious-compareNext;
	 
	 var division = num/deno;
	  finalAns = -(division);
	    } else {
	   finalAns = closestPrevious;
	   }        
	          
		}else if(ptPercent>=3){
			
			  closestPrevious = conValArr[conValArr.length - 1];
	          closestNext = conValArr[conValArr.length - 1];
	          comparePrevious = compArr[conValArr.length - 1];
	          compareNext = compArr[conValArr.length - 1]; 
	        if(closestPrevious!=closestNext||comparePrevious!=compareNext){    
	           var firstTerm = comparePrevious-ptPercent;
	 var secondTerm = closestPrevious-closestNext;
	 var firstFinalMul = firstTerm*secondTerm;
	 var secondTerm = comparePrevious*closestPrevious;
	 var thirdTerm = compareNext*closestPrevious;
	 
	 var num = firstFinalMul-secondTerm+thirdTerm;
	 var deno = comparePrevious-compareNext;
	 
	 var division = num/deno;
	  finalAns = -(division);
	        } else {
	   finalAns = closestPrevious;
	   }   
			
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
    if(closestPrevious!=closestNext||comparePrevious!=compareNext){
	         
     var firstTerm = comparePrevious-ptPercent;
	 var secondTerm = closestPrevious-closestNext;
	 var firstFinalMul = parseFloat(firstTerm)*parseFloat(secondTerm);
	 var secondTerm = comparePrevious*closestPrevious;
	 var thirdTerm = compareNext*closestPrevious;
	 
	 var num = firstFinalMul-secondTerm+thirdTerm;
	 var deno = comparePrevious-compareNext;
	 
	 var division = (num/deno).toFixed(2);
	  finalAns = -(division);
   } else {
	   finalAns = closestPrevious;
	   }
        
}


      if(conVal==15){
					maxShear1 = 2.5;
				}else if(conVal==20){
					maxShear1 = 2.8;
				}else if(conVal==25){
					maxShear1 = 3.1;
				}else if(conVal==30){
					maxShear1 = 3.5;
				}else if(conVal==35){
					maxShear1 = 3.7;
				}else if(conVal>=40){
					maxShear1 = 4.0;
				}
//		console.log("closestPrevious "+closestPrevious);
//	    console.log("closestNext "+closestNext);
//	    console.log("comparePrevious "+comparePrevious);
//	    console.log("compareNext "+compareNext);
	    
	    console.log("finalAns "+finalAns);   
		console.log(" maxShear :  "+maxShear1);
		     
		     
		     if(criticalSecTab<finalAns){
			if(finalAns<maxShear1){
				
				if(sGradeSelect ==0 || fysChange==0 ){
					sGradeSelect = sGradeSelect3;
					fysChange = fysChange3;
					
				}
				
				var asvDiv = (3.14/2);
		var asvCal = (asvDiv*sGradeSelect*sGradeSelect).toFixed(2);
		 asvVal = parseFloat(asvCal);
		console.log("asvVal : "+asvVal);
		
		var svNum = asvVal*0.87*sGradeSelect;
		var svDeno = beamWidthVal*0.4;
		
		var svDiv = (svNum/svDeno).toFixed(2);
		svVal = parseFloat(svDiv);
		
		var sc11 = (0.75*(dArr[i]-effectCover)).toFixed(2);
		sc1 = parseFloat(sc11);
		sc2 = 300;
		sc3 = asvVal;
		
		 condArr = [svVal,sc1,sc2,sc3];
		 
		 condArr.sort(compareNumbers);
		 
		 console.log();
//		console.log(roundDownToNearestFive(condArr[0]));
         console.log("sorted array is : "+condArr);
		shearArr.push(roundDownToNearestFive(condArr[0]));
		console.log(shearArr);
			}
		} else 
		
		if(criticalSecTab>maxShear1){
				$("#divRelTemp").html('<center><label style=" margin-left: 10px;font-size: x-large; font-style: italic; font-weight: bold; margin-top:5px;" id = "relTempMsgCond1">Revise the section size</label></center>');
				shearArr.push(0);
		console.log(shearArr);

		} else
		    {
		if(finalAns<criticalSecTab){
			if(criticalSecTab<maxShear1){
			
			if(sGradeSelect3 ==0 || fysChange3 == 0){
					sGradeSelect3 = sGradeSelect;
					fysChange3 = fysChange;
				}
		
		 var mul = (finalAns*beamWidthVal*(dArr[i]-effectCover)).toFixed(2);
	     var vcVal = parseFloat(mul);
		
		
         var asvDiv = (3.14/2);

		var asvCal = (asvDiv*fysChange3*fysChange3).toFixed(2);
		 asvVal = parseFloat(asvCal);
		console.log("asvVal : "+asvVal);
		
		// valueD1 replace with D-d'
		var numMult = (0.87*sGradeSelect3*asvVal*(dArr[i]-effectCover)).toFixed(2);
		var denoSub = ((shearCritical-vcVal)).toFixed(2);
		
		var svValCond = (numMult/denoSub).toFixed(2);
		svValCond3 = parseFloat(svValCond);
		
		var sc113 = (0.75*(dArr[i])).toFixed(2);
		sc13 = parseFloat(sc113);
		sc23 = 300;
		sc33 = asvVal;
		
		
		
		 condArr3 = [svValCond3,sc13,sc23,sc33];
		 condArr3.sort(compareNumbers);
//		  var mul = (condArr3[0]*beamWidthVal*valueD1).toFixed(2);
//	   var vcVal = parseFloat(mul);
		 
//		console.log("Before sorting : "+condArr3);
		
		console.log("sorted array is : "+condArr3);
//		 console.log("condArr"+condArr[0]);
//		console.log(roundDownToNearestFive(condArr[0]));
        shearArr.push(roundDownToNearestFive(condArr3[0]));
//		console.log(shearArr);
			}
		}
	  } 	     
		   
		}
		function compareNumbers(a, b) {
    return a - b;
}
function roundDownToNearestFive(num) {
    return Math.floor(num / 5) * 5;
}
	}
//	console.log(shearArr);  
	
	function finalPage(){
		
//		$("#forwardButton").removeClass("disabled");
//    $('#backwardButton').removeClass("disabled");
		
		$("#gsLongStirrup").prop("hidden",false);
		$("#gsConcrete").prop("hidden",false);
		
		$("#longReinTable").val(longReinTableSel);
		$("#longReinTable").prop("disabled",true);
		$("#steelLongRate").val(steelLongRateVal);
		$("#steelLongRate").prop("disabled",true);
		$("#submitFirstDiv").prop("disabled",true);
		
		$("#longStrirrupTable").val(longStrirrupTableVal);
		$("#longStrirrupTable").prop("disabled",true);
		$("#steelStirupRate").val(steelStirupRateVal);
		$("#steelStirupRate").prop("disabled",true);
		$("#submitSecDiv").prop("disabled",true);
		
		$("#concreteSel").val(concreteSelVal);
		$("#concreteSel").prop("disabled",true);
		
		$("#concreteRate").val(concreteRateVal);
		$("#concreteRate").prop("disabled",true);
		$("#submitThirdDiv").prop("disabled",true);
		
		$("#page6Div1").append(tableMainDiv);
		
	}
	