**********************************************************
  * Toggle tranparent navbar when the user scrolls the page  
  ********************************************************** 
  */
 $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.custom-navbar').addClass('opaque');
    } else {
        $('.custom-navbar').removeClass('opaque');
    }
});