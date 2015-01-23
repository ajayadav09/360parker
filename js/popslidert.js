var preloadSlidest = 1;                // Number of slides to preload before showing gallery
var loadingMessageDelayt = 2000;       // How long to wait before showing loading message (in ms)
var loadingMessageSpeedt = 1200;       // Duration of each pulse in/out of the loading message (in ms)
var loadingMessageMinOpacityt = 0.4;   // Minimum opacity of the loading message
var loadingMessageMaxOpacityt = 1;     // Maximum opacity of the loading message
var captionSpeedt = 1200;              // Duration of the caption fade in/out (in ms)
var captionOpacityt = 0.5;             // Maximum opacity of the caption when faded in
var swipeXThresholdt = 30;             // X-axis minimum threshold for swipe action (in px) 
var swipeYThresholdt = 90;             // Y-axis maximum threshold for swipe action (in px) 
var leftKeyCodet = 37;                 // Character code for "move left" key (default: left arrow)
var rightKeyCodet = 39;                // Character code for "move right" key (default: right arrow)
var currentSlideOpacityt = 1.0;        // Opacity of the current (centre) slide
var backgroundSlideOpacityt = 0.5; 
var currentSlideHeightt = 170;
var backgroundSlideHeightt = 97.14;
var currentSlideWidtht = 750;
var backgroundSlideWidtht = 428.57;
var currentSlideTopt = -6;
var backgroundSlideTopt = 40;

// Opacity of the slides either side of the current slide
//  --- End Config ---

var slideHorizMargint = 0;             // Number of pixels either side of each slide
var buttonHeightt = 0;                 // Temporary store for the button heights
var currentSlidet = 0;                 // The slide that the user is currently viewing
var totalSlidest = 0;                  // Total number of slides in the gallery
var slidest = new Array();             // Holds jQuery objects representing each slide image
var slideWidthst = new Array();        // Holds the widths (in pixels) of each slide
var slideLoadedt = new Array();        // True if the given slide image has loaded
var loadingt = true;                   // True if we're still preloading images prior to displaying the gallery

$( init );


// Set up the gallery once the document is ready

function init() {

  // Grab the horizontal margin between slides for later calculations
  slideHorizMargint = parseInt( $('#galleryt a img').css('margin-left') );

  // Hide the gallery and left/right buttons
  $('#galleryt').fadeTo( 1, 1 );
 /* $('#gallery').css('top','-999em'); */
  buttonHeightt = $('#leftButtont').css('height');
 /* $('#leftButton').css('height',0);
  $('#rightButton').css('height',0); */

  // If the requried number of slides haven't loaded after 'loadingMessageDelay' ms,
  // start fading in the loading message

/*  $('#loading').delay( loadingMessageDelay );
  fadeInLoadingMessage(); */

  // Bind the handleSlideLoad() handler function to each slide's load event
  $('#galleryt a img').load( handleSlideLoadt );

  // For each of the slide images:
  // 1. Hide the slide
  // 2. Record its serial number (0 = the first slide)
  // 3. Store it in the slides array
  // 4. Trigger the load event if the image is already cached (for IE and Opera)

  $('#galleryt a img').each( function() {
  /*  $(this).hide();  */
    $(this).data( 'slideNum', totalSlidest );
    slidest[totalSlidest++] = $(this);
  /*  if ( this.complete ) $(this).trigger("load");
    $(this).attr( 'src', $(this).attr('src') ); */
  } );

  // Re-centre the current slide whenever the user resizes the browser
  $(window).resize( centreCurrentSlidet ); 

  // Set the initial show/hide states of the left and right buttons
//*  setButtonStates();

  // Set the caption text to the alt text of the first slide
//*  $('#caption').html( slides[currentSlide].attr('alt') );

  // Bind the moveRight() and moveLeft() functions to
  // the swipeLeft and swipeRight events respectively.
  // (IE chokes on the swipe plugin, so skip this code on IE)

 

  // Bind the moveleft() and moveRight() functions to the
  // "move left" and "move right" keys on the keyboard
/*--
  $(document).keydown( function(event) {
    if ( event.which == leftKeyCode ) moveLeftt();
    if ( event.which == rightKeyCode ) moveRightt();
  } );
*/
  
}


// Process each slide once it's finished loading

function handleSlideLoadt() {

  // Record the slide's width in the slideWidths array
  slideWidthst[$(this).data('slideNum')] = $(this).width();

  // Increase the gallery div's width to encompass this newly-loaded slide
  $('#galleryt').width( $('#galleryt').width() + $(this).width() + slideHorizMargint*2 );

  // Record the fact that this slide has loaded in the slideLoaded array
  slideLoadedt[$(this).data('slideNum')] = true;

  // Are we still preloading the slides?

  if ( loading ) {

    // Yes: Calculate how many slides we've now preloaded

    var preloadedt = 0;

    for ( var i=0; i < preloadSlidest; i++ ) {
      if ( slideLoadedt[i] ) preloadedt++;
    }

    // If we've preloaded enough slides, fade in the gallery and enable the left/right buttons

    if ( preloadedt == preloadSlidest || preloadedt == totalSlidest ) {
      $('#loading').clearQueue().stop().fadeTo('slow', 0 );
      $('#galleryt').css('top',9);
      $('#galleryt').fadeTo('slow', 1 );
      $('#leftButtont').css('height',buttonHeight);
      $('#rightButtont').css('height',buttonHeight);
      $('#rightButtont').show();
      loading = false;
    }
  }

  // If this newly-loaded slide is the first slide in the gallery,
  // centre it in the browser viewport and set its opacity to currentSlideOpacity.
  // Otherwise, set its opacity to backgroundSlideOpacity.

  if ( $(this).data('slideNum') == 0 ) {
    centreCurrentSlidet();
    $(this).fadeTo( 'slow', currentSlideOpacityt );
  } else {
    $(this).fadeTo( 'slow', backgroundSlideOpacityt );
  }

}


// Move one slide to the left by sliding the gallery left-to-right

function moveLeftt() {

  // Don't move if this is the first slide, or if we don't yet have a width for the previous slide
  if ( currentSlidet == 0 ) return;
  if ( slideWidthst[currentSlidet-1] == undefined ) return;

  // Cancel all event handlers on the current slide
  slidest[currentSlidet].unbind('mouseenter').unbind('mouseleave').unbind('touchstart');

  // Stop any fades on the caption and hide it
  $('#caption').stop().clearQueue().hide();

  // Slide the whole gallery right so that the previous slide is now centred
  var offsett = slideWidthst[currentSlidet]/2 + slideHorizMargint*2 + slideWidthst[currentSlidet-1]/2;
  $('#galleryt').animate( { left: '+=' +offsett} );

 
   
   
   
    slidest[currentSlidet].animate( { opacity: backgroundSlideOpacityt,
                                       height: backgroundSlideHeightt,
                                       width: backgroundSlideWidtht,
									   top: backgroundSlideTopt } );
  
  slidest[currentSlidet-1].animate( { opacity: currentSlideOpacityt,
	                                   height: currentSlideHeightt,   
									  width: currentSlideWidtht, 
									    top: currentSlideTopt } );
   
  // Update the current slide index
  currentSlidet = currentSlidet - 1;

  // Update the shown/hidden states of left/right buttons as appropriate
  setButtonStatest();

  // Set the caption to the new current slide's alt text,
  // and attach the hover events to the new slide
  $('#caption').html( slidest[currentSlidet].attr('alt') );
  addSlideHovert();
}


// Move one slide to the right by sliding the gallery right-to-left

function moveRightt() {

  // Don't move if this is the final slide, or if we don't yet have a width for the next slide
  if ( currentSlidet == totalSlidest - 1 ) return;
  if ( slideWidthst[currentSlidet+1] == undefined ) return;

  // Cancel all event handlers on the current slide
  slidest[currentSlidet].unbind('mouseenter').unbind('mouseleave').unbind('touchstart');

  // Stop any fades on the caption and hide it
  $('#caption').stop().clearQueue().hide();

  // Slide the whole gallery left so that the next slide is now centred
  var offsett = slideWidthst[currentSlidet]/2 + slideHorizMargint*2 + slideWidthst[currentSlidet+1]/2;
  $('#galleryt').animate( { left: '-=' +offsett } );

 

  
   slidest[currentSlidet].animate( { opacity: backgroundSlideOpacityt,
                                     height: backgroundSlideHeightt,
									 width: backgroundSlideWidtht, 
									 top: backgroundSlideTopt } );
  
  slidest[currentSlidet+1].animate( { opacity: currentSlideOpacityt,
                                      height: currentSlideHeightt,
									  width: currentSlideWidtht,
									  top: currentSlideTopt } );
  
  
  
  
  
  
  
  
  // Update the current slide index
  currentSlidet = currentSlidet + 1;

  // Update the shown/hidden states of left/right buttons as appropriate
  setButtonStatest();

  // Set the caption to the new current slide's alt text,
  // and attach the hover events to the new slide
  $('#caption').html( slidest[currentSlidet].attr('alt') );
  addSlideHovert();
}


// Centre the current slide horizontally in the viewport


function centreCurrentSlidet() {

  // Work out how far the left edge of the slide is from the
  // left hand edge of the gallery div

  var offsetFromGalleryStartt;

  for ( var i=0; i <= currentSlidet; i++ ) {
    offsetFromGalleryStartt = offsetFromGalleryStartt + slideWidthst[i] + slideHorizMargint*2;
  }

  // Find the horizontal centre of the browser window
  var windowCentret = $(window).width() / 2;
 
 
  // Compute the left position of the slide based on the window centre and slide width
  var slideLeftPost = windowCentret - ( slideWidthst[currentSlidet] / 2 );

  // Compute the offset for the gallery div based on the slide position and
  // the slide offset from the gallery start. Also allow for the
  // horizontal margin on the left side of the slide.
  var offsett = slideLeftPost - offsetFromGalleryStartt - slideHorizMargint;

  // Move the gallery div to the new offset
  $('#galleryt').css( 'left', +offsett );
  
}





// Show or hide the left and right buttons depending on the current slide:
// 1. If we're showing the first slide, hide the left button
// 2. If we're showing the last slide, hide the right button

function setButtonStatest() {

  if ( currentSlidet == 0 ) {
    $('#leftButtont').show();
  } else {
    $('#leftButtont').show();
  }

  if ( currentSlidet == totalSlides - 1 ) {
    $('#rightButtont').show();
  } else {
    $('#rightButtont').show();
  }

}

// Attach mouseenter and mouseleave event handlers to the current slide to fade the caption in and out
// However, if the device supports touch events then fade the caption in/out when the slide is touched
// Functions to pulse the loading message

function fadeInLoadingMessage() {
  $('#loading').animate( { opacity: loadingMessageMaxOpacity }, loadingMessageSpeed, 'swing', fadeOutLoadingMessage );
}

function fadeOutLoadingMessage(){
  $('#loading').animate( { opacity: loadingMessageMinOpacity }, loadingMessageSpeed, 'swing', fadeInLoadingMessage );
}
