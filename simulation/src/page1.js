	function page2(){
var htm=''
	htm+='<div class="row">'
	+'<div class="col-sm-1">'
	+'</div>'	
	+'<div class="col-sm-5">'
	+'<label class="labelstyle marginBottom">ly1 </label>'
	+'</div>'
	+'<div class="col-sm-5">'
	+'<input type="number"  style= "width:100%;" class=" form-control marginBottom" id="ly1" / >'
	+'</div>'
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
    
    +'<div class="row"  >'
    +'<div class="col-sm-1">'
	+'</div>'	
	+'<div class="col-sm-5">'
	+'<label class="labelstyle marginBottom">lx2 </label>'
	+'</div>'
	+'<div class="col-sm-5">'
	+'<input type="number"  style= "width:100%;"  class=" form-control marginBottom" id="lx2"  / >'
	+'</div>'
	+'<div class="col-sm-1">'
	+'</div>'	
    +'</div>'
    
    $("#page1Div2").html(htm);
	}
	$("#lx2").change(function(){
		console.log("gfghg");
		MasterJsonSetPage1();
		MasterJsonGetPage1();

		});



	function MasterJsonSetPage1(){
		var tempJson = {};
		a=parseInt($("#ly1").val());
		b= parseInt($("#lx2").val());
		ans=a+b;
	    tempJson.ly1 = a;
	    tempJson.lx2 = b;
	    tempJson.ans2=ans;
	    
	    $("#label12").prop("hidden",false);
//	    $("#anslabel").html("Addition of "+ans);
	    
		MasterJson.page1 = tempJson;
		console.log(MasterJson);
		 $("#lx,#ly,#lxans").prop("disabled",true);	
		
	}
	function MasterJsonGetPage1(){
	   
	    $("#ly1").val(MasterJson.page1.ly1);
	    $("#lx2").val(MasterJson.page1.lx2);
//		$("#lxans").val(MasterJson.page1.ans2);
		
	}
	