
//  * Toggle tranparent navbar when the user scrolls the page  


 $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.custom-navbar').addClass('opaque');
    } else {
        $('.custom-navbar').removeClass('opaque');
    }
});


//  * Header Video  
  

var //slide1 = $(".slide1"),
    slide2 = $(".slide2"),
    video = $("#video")[0];
function addSourceToVideo(element, src, type) {    
    var source = document.createElement('source');    
    source.src = src;    
    source.type = type;    
    element.appendChild(source);    
}
addSourceToVideo(video, 'http://cdn.davecampion.com/timelapse-demo/tl3.webm','video/webm');
addSourceToVideo(video, 'http://cdn.davecampion.com/timelapse-demo/tl3.ogg','video/ogg');
addSourceToVideo(video, 'http://cdn.davecampion.com/timelapse-demo/tl3.mp4','video/mp4');


$('#contact-button').on('click', function(){
  video.play();
  
  slide2.addClass('slideUp');
  setTimeout(function(){document.getElementById('email').focus();},250);
  
});

$('#cancel, .form-close').on('click', function(e){
   e.preventDefault();
   slide2.removeClass('slideUp').addClass('slideDownOut');
   setTimeout(function(){
     slide2.removeClass('slideDownOut');
     video.pause();
   },250); 
});

$("form").on('submit', function(e){
	 e.preventDefault();
  video.playbackRate = 0.5;
   $('.spinner').removeClass('hidden');
   $('.sendText').addClass('hidden');
  $('button').prop('disabled', 'disabled');
   setTimeout(function(){
   	  $('.spinner').addClass('hidden');
      $('.sendText').removeClass('hidden');
      $('button').prop('disabled', '');
     video.pause();
     video.playbackRate = 1;
     slide2.removeClass('slideUp').addClass('slideLeftOut');
     setTimeout(function(){slide2.removeClass('slideLeftOut');},250);
   },2000); 
});