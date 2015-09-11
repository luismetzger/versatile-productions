
//  * Toggle tranparent navbar when the user scrolls the page


//  $(window).scroll(function() {
//     if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
//     {
//         $('.custom-navbar').addClass('opaque');
//     } else {
//         $('.custom-navbar').removeClass('opaque');
//     }
// });


//  * Header Video


window.onload = function() {

addSourceToVideo('http://cdn.davecampion.com/timelapse-demo/poster.png','http://cdn.davecampion.com/timelapse-demo/tl3.webm','video/webm');
  var video = $('#videoHouse');
  var vid = document.getElementById("video");
  video.click( function (){
    vid.play();
  });




};
  var video1 = $("#video1");
  var video2 = $("#video2");
  var video3 = $("#video3");


  video1.click( function (){
    addSourceToVideo('http://cdn.davecampion.com/timelapse-demo/poster.png','http://cdn.davecampion.com/timelapse-demo/tl3.webm','video/webm');
    var video = $('#videoHouse');
  var vid = document.getElementById("video");
  video.click( function (){
    vid.play();
  });
  });
  video2.click( function () {
    addSourceToVideo('http://cdn.davecampion.com/timelapse-demo/poster.png', 'http://cdn.davecampion.com/timelapse-demo/tl3.ogg','video/ogg');
    var video = $('#videoHouse');
  var vid = document.getElementById("video");
  video.click( function (){
    vid.play();
  });
  });
  video3.click( function () {
    addSourceToVideo('http://cdn.davecampion.com/timelapse-demo/poster.png', 'http://cdn.davecampion.com/timelapse-demo/tl3.mp4','video/mp4');
    var video = $('#videoHouse');
  var vid = document.getElementById("video");
  video.click( function (){
    vid.play();
  });
  });





function addSourceToVideo(poster, source, movieType) {

  console.log('clic');
    var videoContainer = $('.videoContainer');

   $('#video').remove();

    var videoElelment = document.createElement("video");
    videoElelment.id = "video";
    videoElelment.src = source;
    videoElelment.type = movieType;
    videoElelment.preload = "none";
    videoElelment.loop = "loop";
    videoElelment.muted = "muted";
    videoElelment.volume = 0;
    videoElelment.poster = poster;


    $('.videoContainer').append(videoElelment);
}

// addSourceToVideo('http://cdn.davecampion.com/timelapse-demo/tl3.webm','video/webm');
// addSourceToVideo('http://cdn.davecampion.com/timelapse-demo/tl3.ogg','video/ogg');
// addSourceToVideo('http://cdn.davecampion.com/timelapse-demo/tl3.mp4','video/mp4');


// $('#startVideoButton').on('click', function(){
//   console.log('clicked');
//   video.play();

//   slide2.addClass('slideUp');
//   setTimeout(function(){document.getElementById('email').focus();},250);

// });

// $('#cancel, .form-close').on('click', function(e){
//    e.preventDefault();
//    slide2.removeClass('slideUp').addClass('slideDownOut');
//    setTimeout(function(){
//      slide2.removeClass('slideDownOut');
//      video.pause();
//    },250);
// });

// $("form").on('submit', function(e){
// 	 e.preventDefault();
//   video.playbackRate = 0.5;
//    $('.spinner').removeClass('hidden');
//    $('.sendText').addClass('hidden');
//   $('button').prop('disabled', 'disabled');
//    setTimeout(function(){
//    	  $('.spinner').addClass('hidden');
//       $('.sendText').removeClass('hidden');
//       $('button').prop('disabled', '');
//      video.pause();
//      video.playbackRate = 1;
//      slide2.removeClass('slideUp').addClass('slideLeftOut');
//      setTimeout(function(){slide2.removeClass('slideLeftOut');},250);
//    },2000);
// });

// // * Mobile Menu Toggle

// $(".menu-toggle").on('click', function() {
//   $(this).toggleClass("on");
//   $('.menu-section').toggleClass("on");
//   $("nav ul").toggleClass('hidden');
// });