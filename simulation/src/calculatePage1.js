var effspan;
var effectCover;
var facLoad;
var shearForce;	
var bendingMom;
var effSpanForward;
MasterJson={};
var effectCoverEnterVal, facLoadEnterVal,effspanVal,shearForceVal,bendingMomVal;
var page2Flg = false;
var reinDiamanicFlg = 0;

var oneTimeDisp = 1;

function calculateLength(){
	
	
	$("#forwardButton").addClass("disabled");
    $('#backwardButton').addClass("disabled");
	
//	console.log("length of beam "+lenghtBeam);
	var htm1= ''
	              +'<div class = "row ">'
	              +'<div class="col-sm-1">'
                  +'</div>'
                  +'<div class="col-sm-3 marginBottom" id="nomCover">'
                  +' <center><label class="labelstyle " > nominal cover : '+nominalCoverVal+' (mm)  </label></center> '
                  +'</div>'
//                  +'<div class="col-sm-1">'
//                  +'</div>'
                  +'<div class="col-sm-3 marginBottom" id="spanLabel">'
                  +' <center><label class="labelstyle " >L<sub>0</sub> : '+lenghtBeam+' (m)</label></center> '
                  +'</div>' 
                  
                  +'<div class="col-sm-3 marginBottom" id="longReinLabel">'
                  +' <center><label class="labelstyle " > &empty; : '+longReinVal+' (mm)</label></center> '
                  +'</div>'
                  
                  +'<div class="col-sm-2">'
                  +'</div>'
                  +'</div>' 
                  
                  
                  +'<div class = "row">'
	              +'<div class="col-sm-1">'
                  +'</div>'
                  +'<div class="col-sm-3 marginBottom" id="shearLabel">'
                  +' <center><label class="labelstyle " > &empty;<sub>s</sub> : '+shearReinVal+' (mm)  </label></center> '
                  +'</div>'
                  +'<div class="col-sm-3 marginBottom" id="w1Label">'
                  +' <center><label class="labelstyle " >w1 : '+w1WidthVal+' (m)</label></center> '
                  +'</div>'
                  +'<div class="col-sm-3 marginBottom" id="w2Label">'
                  +' <center><label class="labelstyle " >w2 : '+w2WidthVal+' (m)</label></center> '
                  +'</div>' 
                  +'<div class="col-sm-2">'
                  +'</div>'
                  +'</div>' 
                        
	   
	     
	   +'<div class=" row  " id="eCover">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom" style="font-size:16px;margin:15px 10px ;">Calculate effective cover d<sup>'+"'"+'</sup>(mm) :  </label>'
	   +'</div>'
	   +'<div class="col-sm-3">'
	   +'<input type="number"  style= "width:100%;margin-top:10px;margin-left:15px;"  class=" form-control" id="text1">'
	   +'</div>'
	   +'<div class="col-sm-2">'
	   +'<button type="submit" class="btn btn-info"  id="refClause1" data-toggle="modal" data-target="#myModal1" style="width:100%;margin-top: 10px;" >Refer</input>'
	   +'</div>'
	   +'<div class="col-sm-2">'
	   +'<button type="submit" class="btn btn-danger"  id="submit_load1" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 10px;" >Submit</input>'
	   +'</div>'	    
	   +'</div>'
	   
	   +'<div class = "row">'
	   +'<div class="col-sm-5">'
       +'</div>'
       +'<div class="col-sm-4">'
	   +'<span class="highlight" id="refClause" hidden> Refer IS456:2000 <br> Table 16 and 16A</span>'
	   +'</div>'
	   +'<div class="col-sm-3">'
       +'</div>'
	   +'</div>'
	   
	               +'<div class="row" id="factoredLoad" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate Factored load w<sub>u</sub> (kN/m) :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<input type="number"  value="" id="text2"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load2" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
	   
	   
	               +'<div class="row" id="effectiveSpan" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate effective span L<sub>eff</sub> (m):  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="number"  value="" id="text3"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-2">'
	               +'<button type="submit" class="btn btn-info"  id="refClause11" data-toggle="modal" data-target="#myModal1" style="width:100%;margin-top: 16px;" >Refer</input>'
	               +'</div>'
				   +'<div class="col-sm-2"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load3" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
                  +'<div class = "row">'
	   +'<div class="col-sm-5">'
       +'</div>'
       +'<div class="col-sm-4">'
	   +'<span class="highlight" id="refClauseNew" hidden> Refer clause 22.2</span>'
	   +'</div>'
	   +'<div class="col-sm-3">'
       +'</div>'
	   +'</div>'
                  
				   
                   +'<div class="row" id="shearF" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate ultimate Shear force V<sub>u</sub> (kN) :  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<input type="number"  value="" id="text4"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load4" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   +'<div class="row" id="bendingM" hidden>'
				   +'<div class="col-sm-5 ">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate ultimate Bending moment M<sub>u</sub> (kNm):  </label>'
				   +'</div>'
				   +'<div class="col-sm-4" id="valueStep1">'
				   +'<input type="number"  value="" id="text5"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<button type="submit" class="btn btn-danger"  id="submit_load5" data-toggle="modal" data-target="#myModal" style="width:100%;margin-top: 16px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   
				    +'<div class="row"  >'
				    +'<div class="col-sm-1 ">'
				    +'</div>'
				    +'<div class="col-sm-10 ">'
				    +'<button type="button"   class="btn btn-danger btnStyle" id="next3"  hidden><b>NEXT LEVEL </b></button>'
				    +'</div>'
				    +'<div class="col-sm-1 ">'
				    +'</div>'
				    +'</div>'

				   
	  
				   
	
	    $("#page2Div1").html(htm1);
		
		var w1Div;
		var w2Div;
		
		var beamSpanVal1;
		var effspanEnter;
		var id=1;
		
		var shearVal;
		var effectCoverEnter;
		
		$("#text1").click(function(){
			blinker1();
			$("#refClause").prop("hidden",false);
//			toastr.error("Refer clause no 22.2");
		});
		
		$("#refClause1").click(function(){
//	var ht = '<iframe src="images/plain-and-reinforced-concrete.pdf#page=48"  width="100%;" height="600px;" ></iframe>'
//	
      var ht = '<iframe src="images/plain-and-reinforced-concrete.pdf#page=48"  width="100%;" height="600px;" ></iframe>'
	
	$(".modal-header").css('background-color', '#45898680');
	$(".modal-header").html("Reference");
	$("#MsgModal1").html(ht);
		});
		
		$("#refClause11").click(function(){
	var ht = '<iframe src="images/plain-and-reinforced-concrete.pdf#page=35"  width="100%;" height="600px;" ></iframe>'
	$(".modal-header").css('background-color', '#45898680');
	$(".modal-header").html("Reference");
	$("#MsgModal1").html(ht);
		});
		
		
		$("#submit_load1").click(function(){
			if($("#text1").val() == '')
			$("#text1").val(effectCoverEnterVal);
			effectCoverEnter = $("#text1").val();
			var conv1 = parseFloat(nominalCoverVal);
			var conv = conv1.toFixed(2);			
			effectCoverEnterVal = $("#text1").val();
			var longDiv1 = longReinVal/2;
			var longDiv11 = longDiv1.toFixed(2);
			var longDiv = longDiv11;			
			
			var shearVal1 = parseFloat(shearReinVal);
			shearVal = shearVal1.toFixed(2);			
			
			var effectCover1 = parseFloat(conv)+parseFloat(longDiv)+parseFloat(shearVal);
			effectCover = effectCover1.toFixed(2);
			if(effectCoverEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				effectCoverEnter = parseFloat($("#text1").val());
				
				if (id <= 3) {
				
				if (effectCoverEnter == effectCover) {
				
	         $("#submit_load1").prop("disabled",true);
	         $("#text1").prop("disabled",true);
	         $("#factoredLoad").prop("hidden",false);
	         $("#refClause").prop("hidden",true);
				} else if (effectCoverEnter != effectCover) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id == 4) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b>Formula : nominal cover+&empty;<sub>s</sub>+&empty;/2 </b>");

				
			} else {
	
				if (effectCoverEnter== effectCover) {
					
					$("#submit_load1").prop("disabled",true);
	         $("#text1").prop("disabled",true);
	         $("#factoredLoad").prop("hidden",false);
	         $("#refClause").prop("hidden",true);
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + effectCover);
				 

				}
			}
			id++;
				
			}
		});
		
		
		var facLoadEnter;
		var id1 = 1;
		
		$("#submit_load2").click(function(){
			if($("#text2").val() == '')
			$("#text2").val(facLoadEnterVal);
			facLoadEnter = $("#text2").val();
		    var facLoad1 = loadMagVal*1.5;
		    facLoad = facLoad1.toFixed(2);
		    facLoadEnterVal = $("#text2").val();
		    if(facLoadEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				
				facLoadEnter = parseFloat($("#text2").val());
				
				if (id1 <= 3) {
				
				if (facLoad == facLoadEnter) {
				
	         $("#submit_load2").prop("disabled",true);
	         $("#text2").prop("disabled",true);
	         $("#effectiveSpan").prop("hidden",false);
	         $("#page2Div2").html('');
	         factLoad();
				} else if (facLoad != facLoadEnter) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id1 == 4) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b>Formula : Factored Load = 1.5 &times; magnitude of load</b>");

				
			} else {
	
				if (facLoad== facLoadEnter) {
					$("#submit_load2").prop("disabled",true);
	         $("#text2").prop("disabled",true);
	         $("#effectiveSpan").prop("hidden",false);
	         $("#page2Div2").html('');
	         factLoad();
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + facLoad);
				 

				}
			}
			id1++;
				
			}
		});
		
		$("#text3").click(function(){
			$("#refClauseNew").prop("hidden",false);
			blinker1();
		})
		
		
		var id2 = 1;
		$("#submit_load3").click(function(){
			if($("#text3").val() == '')
			$("#text3").val(effspanVal);
			effspanVal = $("#text3").val();
			
			effspanEnter = $("#text3").val();
			var w11Div = (w1WidthVal/2).toFixed(3);
			w1Div = parseFloat(w11Div);
			var w22Div = (w2WidthVal/2).toFixed(3);
			w2Div = parseFloat(w22Div);
			var beamSpanVal12 = parseFloat(beamSpanVal);
			//beamSpanVal1 = beamSpanVal12.toFixed(2);
			var effspan1 = (beamSpanVal12+w2Div+w1Div);
			effspan = effspan1.toFixed(2);
			 if(effspanEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				
				effspanEnter = parseFloat($("#text3").val());
				if (id2 <= 3) {
				
				if (effspanEnter == effspan) {
//				$("#page2Div2").html('');	
//			lengthAdd();
	         $("#submit_load3").prop("disabled",true);
	         $("#text3").prop("disabled",true);
	         $("#shearF").prop("hidden",false);
	         $("#page2Div2").html('');
	         $("#refClauseNew").prop("hidden",true);
	         leffective();
				} else if (effspanEnter != effspan) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id2 == 4) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b>Formula : Lo+(w1)/2+(w2)/2 </bold>");

				
			} else {
	
				if (effspanEnter== effspan) {
//					$("#page2Div2").html('');
//					lengthAdd();
				 $("#submit_load3").prop("disabled",true);
	         $("#text3").prop("disabled",true);
	         $("#shearF").prop("hidden",false);
	         $("#page2Div2").html('');
	          $("#refClauseNew").prop("hidden",true);
	         leffective();
	         
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + effspan);
				 

				}
			}
			id2++;
				
			}
			
		});
		
		
	
	var shearForceEnter;
	var id3 = 1;
	
 $("#submit_load4").click(function(){
	
	if($("#text4").val() == '')
			$("#text4").val(shearForceVal);
			shearForceVal = $("#text4").val();
	
	var mul = facLoad*effspan;
	shearForce = (mul/2).toFixed(2);
	shearForceEnter = $("#text4").val();
	 if(shearForceEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				
				shearForceEnter = parseFloat($("#text4").val());
				if (id3 <= 3) {
				
				if (shearForceEnter == shearForce) {
//				$("#page2Div2").html('');	
//			lengthAdd();
	         $("#submit_load4").prop("disabled",true);
	         $("#text4").prop("disabled",true);
	         $("#bendingM").prop("hidden",false);
	         $("#page2Div2").html('');
	         shearForceFinal();
				} else if (shearForceEnter != shearForce) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id3 == 4) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b>Formula : (w<sub>u</sub> &times; L)/2");

				
			} else {
	
				if (shearForceEnter== shearForce) {
//					$("#page2Div2").html('');
//					lengthAdd();
				 $("#submit_load4").prop("disabled",true);
	         $("#text4").prop("disabled",true);
	         $("#bendingM").prop("hidden",false);
	         $("#page2Div2").html('');
	         shearForceFinal();
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + shearForce);
				 

				}
			}
			id3++;
				
	}
});


var bendingMomEnter;
var id4=1;



$("#submit_load5").click(function(){
	if($("#text5").val() == '')
			$("#text5").val(bendingMomVal);
			bendingMomVal = $("#text5").val();
	bendingMomEnter = $("#text5").val();
	var multi = facLoad*effspan*effspan;
	var div = multi/8;
	  bendingMom = div.toFixed(2);
	
	
	 if(bendingMomEnter == ""){
			
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Enter the Values");
				
			}else{
				bendingMomEnter = parseFloat($("#text5").val());
				if (id4 <= 3) {
				
				if (bendingMomEnter == bendingMom) {
//				$("#page2Div2").html('');	
//			lengthAdd();
           
//          if(oneTimeDisp==1){
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("<b> Click the next arrow to proceed.</b>");
//          $("#MsgModal").modal("show");
          
         setTimeout(() => {
	         $("#submit_load5").prop("disabled",true);
	         $("#text5").prop("disabled",true);
//	         $("#bendingM").prop("hidden",false);
             }, 1000); 
			  
             $("#page2Div2").html('');
             
	         bendingMomentFinal();
	         $("#forwardButton").removeClass("disabled");
             $('#backwardButton').removeClass("disabled");
             oneTimeDisp++;
//             }
				} else if (bendingMomEnter != bendingMom) {
				  $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Entered value is Incorrect.<br>Try again");	

				}
	
	
			} else if (id4 == 4) {
			$(".modal-header").html("Error Message");
			$(".modal-header").css("background","#23435c");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
		    $("#MsgModal").html("<b>Formula : (w<sub>u</sub> &times; L<sup>2</sup>)/8");

				
			} else {
	
				if (bendingMomEnter== bendingMom) {
//					$("#page2Div2").html('');
//					lengthAdd();
//           if(oneTimeDisp==1){
          $("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("<b> Click the next arrow to proceed.</b>");

				 setTimeout(() => {
	         $("#submit_load5").prop("disabled",true);
	         $("#text5").prop("disabled",true);
//	         $("#bendingM").prop("hidden",false);
             }, 1000); 
//	         $("#bendingM").prop("hidden",false);
               
             $("#page2Div2").html('');
            
	         bendingMomentFinal();
	        $("#forwardButton").removeClass("disabled");
			    $('#backwardButton').removeClass("disabled");
			  
//             }
				} else {
					
			$("#btnModal").removeClass("btn-danger").addClass("btn-success");
	        $(".modal-header").html("Success Message");
            $(".modal-header").css("background","#5cb85c");
			$("#MsgModal").html("Correct Answer is " + bendingMom);
				 

				}
			}
			id4++;
			}
	
});

}

function nextGraphLevel(){
	
	$("#page3").prop("hidden",false);
//	console.log("bending Moment"+bendingMom);
//	console.log("effectCover"+effectCover);
//	console.log("effspan"+effspan);	
	
	var tempJson = {};
	 tempJson.effectCover =effectCover;
    tempJson.facLoad = facLoad;
    MasterJson.page2 = tempJson;
//	console.log(MasterJson);
	
	$("#eCover").prop("hidden",false);
	$("#factoredLoad").prop("hidden",false);
	
//     $("#text1").prop("disabled",true);
//	 $("#text2").prop("disabled",true);	
	 $("#submit_load5").prop("disabled",true);
	         $("#text5").prop("disabled",true);
	 $("#text1").val(MasterJson.page2.effectCover);
	 $("#text2").val(MasterJson.page2.facLoad);
	 $("#forwardButton").addClass("disabled");
     $('#backwardButton').addClass("disabled");  
	Dcalculate();
	if(page2Flg == true){
			$("#submit_load6").click();
			$("#submit_load7").click();
			$("#submit_load8").click();
			let lastValue = valMainArr[valMainArr.length - 1];
			$("#selectD").val(lastValue);
//			$("#selectD").prop("disabled",true);
//			$("#submit_load9").prop("disabled",true);
			$("#submit_load9").click();
			
			 let finVal = graphArr11[graphArr11.length-1];
			$("#text9").val(finVal);
			graphCreate(graphJson);
			$("#forwardButton").removeClass("disabled");
     $('#backwardButton').removeClass("disabled");  
//			$("#calculatedAst").prop("hidden",false);
//		
//			$("#submit_load10").click();
//			
			}
			
			page2Flg = true;
}


function blinker1()
  {
    if(document.getElementById("refClause"))
    {
	    var g = document.getElementById("refClause") ;		
        g.style.color= (g.style.color=='red'?'blue':'red');		
        
    } 
    if(document.getElementById("refClauseNew"))
    {
	    var g = document.getElementById("refClauseNew") ;		
        g.style.color= (g.style.color=='red'?'blue':'red');		
        
    } 
	setTimeout('blinker1()', 1000);
}

function page2Value(){
	
	$("#forwardButton").removeClass("disabled");
    $('#backwardButton').removeClass("disabled");
	
	$("#factoredLoad").prop("hidden",false);
	$("#effectiveSpan").prop("hidden",false);
	$("#shearF").prop("hidden",false);
	$("#bendingM").prop("hidden",false);
	
	$("#text1").val(effectCover);
	$("#text1").prop("disabled",true);
	$("#submit_load1").prop("disabled",true);
	
	$("#text2").val(facLoad);
	$("#text2").prop("disabled",true);
	$("#submit_load2").prop("disabled",true);
	
	$("#text3").val(effspan);
	$("#text3").prop("disabled",true);
	$("#submit_load3").prop("disabled",true);
	
	$("#text4").val(shearForce);
	$("#text4").prop("disabled",true);
	$("#submit_load4").prop("disabled",true);
	
	$("#text5").val(bendingMom);
	$("#text5").prop("disabled",true);
	$("#submit_load5").prop("disabled",true);
}
