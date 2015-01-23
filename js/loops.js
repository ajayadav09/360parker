
// ====================================================================== Parts label counter ========================================================= //


var currentIndex = 0;
var items = $('#popupOne div p ');
var itemAmt = items.length;

	function cycleItems() {
	  var item = $('#popupOne div p ').eq(currentIndex);
	  items.hide();
	  item.css('display','inline-block');
	}

		function forward(){
			currentIndex += 1;
		  if (currentIndex > itemAmt - 2) {
		  $('#rightButton').css("pointer-events","none");
			}
			$('#leftButton').css("pointer-events","auto"); 
			cycleItems();
			
			
		}

		function backward(){
			currentIndex -= 1;
		  if (currentIndex < 0) {
		   /* currentIndex = itemAmt - 1; */
		   }
		   if (currentIndex < 1) {
		  $('#leftButton').css("pointer-events","none"); 
		  }
		   $('#rightButton').css("pointer-events","auto");
		  cycleItems();
			}


$('#rightButton').click(function() {
  forward();
}); 

$('#leftButton').click(function() {
  backward();
});

/*
$(document).keydown(function(event) {
		var leftKeyCode = 37;                 // Character code for "move left" key (default: left arrow)
		var rightKeyCode = 39;  

	     if ( (event.which == rightKeyCode) && (currentIndex < itemAmt - 1)) { forward();}
		if ((event.which == leftKeyCode) && (currentIndex > 0)){ backward(); }
	  
	  }); 

   
*/





/* ====================================================== function partcounter ================ */





// ====================================================================== Trucks label counter ========================================================= //


var currentIndext = 0;
var itemst = $('#popuptrucks .producttitle p ');
var itemAmtt = itemst.length;

function cycleItemst() {
  var itemt = $('#popuptrucks .producttitle p ').eq(currentIndext);
  itemst.hide();
  itemt.css('display','inline-block');
}

function forwardtrucks(){
	currentIndext += 1;
  if (currentIndext > itemAmtt - 1) {
 /*  currentIndext = 0;  */
    }
  
 if (currentIndext > itemAmtt - 2) {
  
       $('#rightButtont').css('pointer-events', 'none');
  } 
  
  $('#leftButtont').css('pointer-events', 'auto');
  cycleItemst();
	
}

function backwardtrucks(){
	currentIndext -= 1;
  if (currentIndext < 0) {
    currentIndext = itemAmtt - 1;
  }
  
  if (currentIndext < 1) {
    $('#leftButtont').css('pointer-events', 'none');
  }
  
   $('#rightButtont').css('pointer-events', 'auto');
  
  cycleItemst();
	
}

$('#rightButtont').click(function() {
   forwardtrucks();
}); 

$('#leftButtont').click(function() {
   backwardtrucks();
});

/*
$(document).keydown(function(event) {
		var leftKeyCode = 37;                 // Character code for "move left" key (default: left arrow)
		var rightKeyCode = 39;  

	     if ( (event.which == rightKeyCode) && (currentIndext < itemAmtt - 1)) { forwardtrucks();}
		if ((event.which == leftKeyCode) && (currentIndext > 0)){ backwardtrucks(); }
	  
	  }); 

*/



/*====================================================== Looping the truck description counter ====================== */
var currentIndexd = 0;
var itemsd = $('.truckdesc p');
var itemAmtd = itemsd.length;

function cycleItemsd() {
  var itemd = $('.truckdesc p').eq(currentIndexd);
  itemsd.hide();
  itemd.css('display','inline-block');
}


function forwarddesc(){
		currentIndexd += 1;
	  if (currentIndexd > itemAmtd - 1) {
	 /*  currentIndexd = 0;  */
		   
	  }
	  
	 if (currentIndexd > itemAmtd - 2) {
	  
		   $('#rightButtont').css('pointer-events', 'none');
	  } 
	  
	  $('#leftButtont').css('pointer-events', 'auto');
	  cycleItemsd();
	
} 



function backwarddesc(){
	
		 currentIndexd -= 1;
	  if (currentIndexd < 0) {
		currentIndexd = itemAmtd - 1;
	  }
	  
	  if (currentIndexd < 1) {
		$('#leftButtont').css('pointer-events', 'none');
	  }
	  
	   $('#rightButtont').css('pointer-events', 'auto');
	  
	  cycleItemsd();
} 


$('#rightButtont').click(function() {
   forwarddesc();
}); 

$('#leftButtont').click(function() {
   backwarddesc();
});

/*
$(document).keydown(function(event) {
		var leftKeyCode = 37;                 // Character code for "move left" key (default: left arrow)
		var rightKeyCode = 39;  

	     if ( (event.which == rightKeyCode) && (currentIndexd < itemAmtd - 1)) { forwarddesc();}
		if ((event.which == leftKeyCode) && (currentIndexd > 0)){ backwarddesc(); }
	  
	  }); 


*/




//======================================================== looping the special-parts(sp) ===========================================================//





var currentIndexsp = 0;
var itemssp = $('.special-parts img');
var itemAmtsp = itemssp.length;

function cycleItemssp() {
  var itemsp = $('.special-parts img').eq(currentIndexsp);
  itemssp.hide();
  itemsp.css('display','inline-block');
}

function forwardsp(){
		 currentIndexsp += 1;
	  if (currentIndexsp > itemAmtsp - 1) {
	 /*  currentIndexd = 0;  */
		   
	  }
	  
	 if (currentIndexsp > itemAmtsp - 1) {
	  
		   $('#rightButtont').css('pointer-events', 'none');
	  } 
	  
	  $('#leftButtont').css('pointer-events', 'auto');
	  cycleItemssp();
	
	
}

function backwardsp(){
   currentIndexsp -= 1;
  if (currentIndexsp < 0) {
    currentIndexsp = itemAmtsp - 1;
  }
  
  if (currentIndexsp < 1) {
    $('#leftButtont').css('pointer-events', 'none');
  }
  
   $('#rightButtont').css('pointer-events', 'auto');
  
  cycleItemssp();
}

$('#rightButtont').click(function() {
   forwardsp();
}); 

$('#leftButtont').click(function() {
 backwardsp();
});


/*

$(document).keydown(function(event) {
		var leftKeyCode = 37;                 // Character code for "move left" key (default: left arrow)
		var rightKeyCode = 39;  

	     if ( (event.which == rightKeyCode) && (currentIndexsp < itemAmtsp - 1)) { forwardsp();}
		if ((event.which == leftKeyCode) && (currentIndexsp > 0)){ backwardsp(); }
	  
	  }); 
*/









 

// ====================================================================== Component label counter ========================================================= //

var currentIndexc = 0;
var itemsc = $('#productnum p ');
var itemAmtc = itemsc.length;

function cycleItemsc() {
  var itemc = $('#productnum p ').eq(currentIndexc);
  itemsc.hide();
  itemc.css('display','block');
}


function forwardcomp(){
	currentIndexc += 1;
  if (currentIndexc > itemAmtc - 1) {
    /* currentIndexc = 0; */
  /*-    $('#nextComp').css("pointer-events","none"); -*/
 }
  $('#prevComp').css("pointer-events","auto"); 
  cycleItemsc();
	
}


function backwardcomp(){
	 currentIndexc -= 1;
  if (currentIndexc < 0) {
    currentIndexc = itemAmtc - 1; 
  }
  
  if (currentIndexc < 1) {
  /*-  $('#prevComp').css("pointer-events","none"); */
  }
  
  cycleItemsc();
	
	
}

$('#nextComp').click(function() {
   forwardcomp();
}); 

$('#prevComp').click(function() {
   backwardcomp();
});

$(document).keydown(function(event) {
		var leftKeyCode = 37;                 // Character code for "move left" key (default: left arrow)
		var rightKeyCode = 39;  

	     if ( (event.which == rightKeyCode) && (currentIndexc < itemAmtc - 1)) { forwardcomp();}
		if ((event.which == leftKeyCode) && (currentIndexc > 0)){ backwardcomp(); }
	  
	  }); 








/* =========================== component counter function ============================*/






function compcounter(index){
var currentIndexc = index;
var itemsc = $('#productnum p ');
var itemAmtc = itemsc.length;

function cycleItemsc() {
  var itemc = $('#productnum p ').eq(currentIndexc);
  itemsc.hide();
  itemc.css('display','block');
}

$('#nextComp').click(function() {
  currentIndexc += 1;
  if (currentIndexc > itemAmtc - 1) {
    /* currentIndexc = 0; */
  /*-    $('#nextComp').css("pointer-events","none"); */
 }
  $('#prevComp').css("pointer-events","auto"); 
  cycleItemsc();
}); 

$('#prevComp').click(function() {
  currentIndexc -= 1;
  if (currentIndexc < 0) {
    currentIndexc = itemAmtc - 1; 
  }
  
  if (currentIndexc < 1) {
  /* $('#prevComp').css("pointer-events","none"); */
  }
  
  cycleItemsc();
});


}























// ====================================================================== Image change counter ========================================================= //




var currentIndexi = 0;
var itemsi = $('.yellowstrip img');
var itemAmti = itemsi.length;

function cycleItemsi() {
  var itemi = $('.yellowstrip img').eq(currentIndexi);
  itemsi.hide();
  itemi.css('display','block');
}

function forwardimg(){
	currentIndexi += 1;
	  if (currentIndexi > itemAmti - 1) {
		/* currentIndexc = 0; */
	  /*-    $('#nextComp').css("pointer-events","none"); */
	 }
	  $('#prevComp').css("pointer-events","auto"); 
	  cycleItemsi();
	
}

function backwardimg(){
	currentIndexi -= 1;
  if (currentIndexi < 0) {
    currentIndexi = itemAmti - 1; 
  }
  
  if (currentIndexi < 1) {
 /*-   $('#prevComp').css("pointer-events","none"); */
  }
 
  
  cycleItemsi();
   if (currentIndexi < 2) {
   $('.yellowstrip img:first-child').hide();
  }
  
	
	
}


$('#nextComp').click(function() {
	  forwardimg();
}); 

$('#prevComp').click(function() {
  backwardimg();
});


$(document).keydown(function(event) {
		var leftKeyCode = 37;                 // Character code for "move left" key (default: left arrow)
		var rightKeyCode = 39;  

	     if ( (event.which == rightKeyCode) && (currentIndexi < itemAmti)) { forwardimg();}
		if ((event.which == leftKeyCode) && (currentIndexi > 0)){ backwardimg(); }
	  
	  }); 






/*==================== function for changing img properly after jump =============  */

function imgcounter( index){
var currentIndexi = index;
var itemsi = $('.yellowstrip img');
var itemAmti = itemsi.length;


function cycleItemsi() {
  var itemi = $('.yellowstrip img').eq(currentIndexi);
  itemsi.hide();
  itemi.css('display','block');
}

$('#nextComp').click(function() {
  currentIndexi += 1;
  if (currentIndexi > itemAmti - 1) {
    /* currentIndexc = 0; */
   /*-   $('#nextComp').css("pointer-events","none"); */
 }
  $('#prevComp').css("pointer-events","auto"); 
  cycleItemsi();
}); 

$('#prevComp').click(function() {
  currentIndexi -= 1;
  if (currentIndexi < 0) {
    currentIndexi = itemAmti - 1; 
  }
  
  if (currentIndexi < 1) {
 /*  $('#prevComp').css("pointer-events","none"); */
  }
 cycleItemsi();
   if (currentIndexi < 2) {
   $('.yellowstrip img:first-child').hide();
  }
  
});

}









// ============================== Popover content counter ===============================// 

var currentIndexp = 0;
var itemsp = $('.popovercontent p ');
var itemAmtp = itemsp.length;

function cycleItemsp() {
  var itemp = $('.popovercontent p ').eq(currentIndexp);
  itemsp.hide();
  itemp.css('display','block');
}

function forwardpop(){
	currentIndexp += 1;
	  if (currentIndexp > itemAmtp - 1) {
		/* currentIndexc = 0; */
	   /*-   $('#nextComp').css("pointer-events","none"); */
	 }
	  $('#prevComp').css("pointer-events","auto"); 
	  cycleItemsp();
	
}


function backwardpop(){
	  currentIndexp -= 1;
	  if (currentIndexp < 0) {
		currentIndexp = itemAmtp - 1; 
	  }
	  
	  if (currentIndexp < 1) {
	  /* $('#prevComp').css("pointer-events","none"); */
	  }
	  
	  cycleItemsp();
	
	
}

$('#nextComp').click(function() {
	  forwardpop();
}); 

$('#prevComp').click(function() {
	backwardpop();
});



$(document).keydown(function(event) {
		var leftKeyCode = 37;                 // Character code for "move left" key (default: left arrow)
		var rightKeyCode = 39;  

	     if ( (event.which == rightKeyCode) && (currentIndexp < itemAmtp)) { forwardpop();
		 $(".tooltips").css({"display":"block"});
		 }
		if ((event.which == leftKeyCode) && (currentIndexp > 0)){ backwardpop(); }
	  
	  }); 







// ====================================================================================== //


function popinfocounter(index){

var currentIndexp = index;
var itemsp = $('.popovercontent p ');
var itemAmtp = itemsp.length;

function cycleItemsp() {
  var itemp = $('.popovercontent p ').eq(currentIndexp);
  itemsp.hide();
  itemp.css('display','block');
}

$('#nextComp').click(function() {
  currentIndexp += 1;
  if (currentIndexp > itemAmtp - 1) {
    /* currentIndexc = 0; */
   /*-   $('#nextComp').css("pointer-events","none"); */
 }
  $('#prevComp').css("pointer-events","auto"); 
  cycleItemsp();
}); 

$('#prevComp').click(function() {
  currentIndexp -= 1;
  if (currentIndexp < 0) {
    currentIndexp = itemAmtp - 1; 
  }
  
  if (currentIndexp < 1) {
 /*  $('#prevComp').css("pointer-events","none"); */
  }
  
  cycleItemsp();
});


}

/* ========================================================= Skipping to the parts ====================================== */
	
	
	
	
	
