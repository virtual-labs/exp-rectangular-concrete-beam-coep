
	 var pageno=1; 
  var pagecount=1; 

var initFlgNo = 0;
var init = 0;
var init1 = 0;
var init2=0;
  
	 $("#page1").prop("hidden",false);            		
            	 $("#page2,#page3,#page4,#page5,#page6").prop("hidden",true);

			
			console.log("page1 val ="+pageno);
	$('#forwardButton').click(function(){
				if(pageno<6)
       		pageno=pageno+1;
            if(pageno==1){
    	   		
            	$("#page1").prop("hidden",false);
//            		$(".modal-backdrop").hide();
            	 $("#page2,#page3,#page4,#page5,#page6").prop("hidden",true);
            }
            else if(pageno==2){
//            	
            	$("#page2").prop("hidden",false);  
            	      	
            	nextLevel2();
            	
            	
            	if(init2>0){
	bendingMomentFinal();
						page2Value();
					}
			    if(init2==0){ 
			     init2++;
			   }
            	
//            	$(".modal-backdrop").hide();
				$("#page1,#page3,#page4,#page5,#page6").prop("hidden",true);
            }
            else if(pageno==3){
            	 $("#page3").prop("hidden",false);
            	nextGraphLevel();
            	
//            	$(".modal-backdrop").hide();
            	 $("#page1,#page2,#page4,#page5,#page6").prop("hidden",true);
            	
            } else if(pageno==4){
	             
	             $("#page4").prop("hidden",false);
	             $("#page1,#page2,#page3,#page5,#page6").prop("hidden",true);
	             reinCalulateBar();
	             
	             if(initFlgNo>0){
						reinCalculateValues();
					}
			    if(initFlgNo==0){ 
			     initFlgNo++;
			   }
//	             $(".modal-backdrop").hide();
	             
           }else if(pageno==5){
	             
	             $("#page5").prop("hidden",false);
	             $("#page1,#page2,#page3,#page4,#page6").prop("hidden",true);
//	             bendingMomentFinalShear();
	             shearCalculate();
	             
	             
	             if(init>0){
						criticalValues();
						
					}
			    if(init==0){ 
			     init++;
			   }
//	             $(".modal-backdrop").hide();
	             
           }else if(pageno==6){
	             $("#page6").prop("hidden",false);
	             $("#page1,#page2,#page3,#page4,#page5").prop("hidden",true);
//	             console.log(" sGradeSelect3 : "+sGradeSelect3);
//	             console.log(" fysChange3 : "+fysChange3);
	             table();
	             
	             if(init1>0){
						finalPage();
					}
			    if(init1==0){ 
			     init1++;
			   }
	             
	             
        }
           
//           $(".modal-backdrop").hide(); 
        });


$('#backwardButton').click(function(){
//	  $('.modal-backdrop').removeClass(' fade in');
				if(pageno>1)
				 pageno=pageno-1;
				 if(pageno==6){
			finalPage();
			}else
			if(pageno==5){
	 $("#page5").prop("hidden",false);
//	   $('.modal-backdrop').removeClass(' fade in');
//                 bendingMomentFinalShear();
	             criticalValues();
	            
//	             $(".modal-backdrop").hide();
	             $("#page1,#page2,#page3,#page4,#page6").prop("hidden",true);
	
            }else	 
            if(pageno==4){
	 $("#page4").prop("hidden",false);
//	   $('.modal-backdrop').removeClass(' fade in');
//	             reinCalulateBar();
                  reinCalculateValues();
//	             $(".modal-backdrop").hide();
	             $("#page1,#page2,#page3,#page5,#page6").prop("hidden",true);
	
            }
            else if(pageno==3){
 				$("#page3").prop("hidden",false);
// 				 $('.modal-backdrop').removeClass(' fade in');
				
            	nextGraphLevel();
            	
//            	$(".modal-backdrop").hide();
            	 $("#page1,#page2,#page4,#page5,#page6").prop("hidden",true);//            	

            }
            else if(pageno==2){
				
            	$("#page2").prop("hidden",false);  
//            	 $('.modal-backdrop').removeClass(' fade in');	
            	 bendingMomentFinal();
						page2Value();
//                 nextLevel2();
                
            	
//            	$(".modal-backdrop").hide();
				$("#page1,#page3,#page4,#page5,#page6").prop("hidden",true);
            	
            } else if(pageno==1){
	             $('.modal').removeClass('modal-backdrop');
	             $("#page1").prop("hidden",false);
//            		$(".modal-backdrop").hide();
            	 $("#page2,#page3,#page4,#page5,#page6").prop("hidden",true);
	            
           }
           
//            $(".modal-backdrop").hide();
        });
 