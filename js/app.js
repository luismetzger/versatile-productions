$(document).ready(function () {

    var body = $('body');

    //Header video
    var iframe = $('#header-player')[0],
        player = $f(iframe);

    var headerVideo = $('.header-fullscreen-video');
    var headerVideoToggle = $('#header-fullscreen-video-toggle');
    var headerVideoClose = $('#header-fullscreen-video-close');

    player.addEvent('ready', function() {
        player.addEvent('finish', closeHeaderVideo);
    });

    headerVideoToggle.click(function (e) {
        e.preventDefault();
        openHeaderVideo();
    });

    headerVideoClose.click(function (e) {
        e.preventDefault();
        closeHeaderVideo();
    });

    function openHeaderVideo() {
        body.addClass('overflow-h');
        headerVideo.addClass('header-fullscreen-video-open');
        player.api("play");
    }

    function closeHeaderVideo() {
        body.removeClass('overflow-h');
        headerVideo.removeClass('header-fullscreen-video-open');
        player.api('unload');
    }

    //Quotes carousel
    var quotesCarouselVideoIsPlaying = false;

    var quotesCarousel = $('.quotes-carousel');
    var quotesCarouselItem = $('.quotes-carousel-item');

    var carouselControls = $('.quotes-carousel-controls');
    var carouselControlsItem = $('.quotes-carousel-controls-item');

    var carouselItemVideoToggle = $('.quotes-carousel-item-video-toggle');
    var carouselItemVideoClose = $('.quotes-carousel-controls-item-video-close');

    quotesCarousel
        .owlCarousel({
            //In case of custom animations are needed
            //animateOut: 'zoomOutDown',
            //animateIn: 'slideInUp',
            items: 1
        })
        .on('changed.owl.carousel', function (property) {
            var current = property.item.index;
            makeCarouselControlActive(current)
            quotesCarouselVideoIsPlaying ? carouselCloseVideos() : '';
        });

    carouselControlsItem.click(function () {
        quotesCarousel.trigger('to.owl.carousel', $(this).attr("data-slide"))
    });


    function makeCarouselControlActive(index) {
        carouselControlsItem.removeClass('active');
        carouselControlsItem.eq(index).addClass('active')
    }

    function carouselCloseVideos() {
        quotesCarouselVideoIsPlaying = false;
        $f($('.video-open').find('iframe')[0]).api('unload');
        quotesCarouselItem.removeClass('video-open');
        controlsInactiveVideoClose()
    }

    function controlsActiveVideoPlaying() {
        carouselControls.addClass('video-open')
    }

    function controlsInactiveVideoClose() {
        carouselControls.removeClass('video-open')
    }

    carouselItemVideoToggle.click(function (e) {
        e.preventDefault();
        var thisParent = $(this).parent();
        var thisGrandparent = thisParent.parent();
        thisGrandparent.toggleClass('video-open');
        $f(thisParent.next()[0]).api('play');
        quotesCarouselVideoIsPlaying = true;
        controlsActiveVideoPlaying()
    });

    carouselItemVideoClose.click(function (e) {
        e.preventDefault();
        var thisParent = $(this).parent();
        thisParent.toggleClass('video-open');
        $f(thisParent.find('iframe')[0]).api('unload');
        quotesCarouselVideoIsPlaying = false;
        controlsInactiveVideoClose()
    })

});