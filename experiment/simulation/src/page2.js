function page2(){
	//$( document ).ready(function() {
	
	var htm=''
		htm+='<div class="row">'
		+'<div class="col-sm-1">'
		+'</div>'	
		+'<div class="col-sm-5">'
		+'<label class="labelstyle marginBottom">Enter Larger Dimension(Ly)mm: </label>'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<input type="number"  style= "width:100%;" min="1" max="10" class=" form-control marginBottom" id="" / >'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'	
	    +'</div>'
	    
	    +'<div class="row"  >'
	    +'<div class="col-sm-1">'
		+'</div>'	
		+'<div class="col-sm-5">'
		+'<label class="labelstyle marginBottom">Enter Smaller Dimension (Lx)mm: </label>'
		+'</div>'
		+'<div class="col-sm-5">'
		+'<input type="number"  style= "width:100%;" min="1" max="10" class=" form-control marginBottom" id=""  / >'
		+'</div>'
		+'<div class="col-sm-1">'
		+'</div>'	
	    +'</div>'

			   
		   $("#page2Div2").html(htm);
	
	
}