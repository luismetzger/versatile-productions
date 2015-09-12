$(document).ready(function () {

    //Header video
    var iframe = $('#header-player')[0],
        player = $f(iframe);

    var headerVideo = $('.header-fullscreen-video');
    var headerVideoToggle = $('#header-fullscreen-video-toggle');
    var headerVideoClose = $('#header-fullscreen-video-close');

    headerVideoToggle.click(function (e) {
        e.preventDefault();
        headerVideo.addClass('header-fullscreen-video-open');
        player.api("play");
    });

    headerVideoClose.click(function (e) {
        e.preventDefault();
        headerVideo.removeClass('header-fullscreen-video-open');
        player.api('unload');
    });

    //Quotes carousel
    var quotesCarouselVideoIsPlaying = false;

    var quotesCarousel = $('.quotes-carousel');
    var quotesCarouselItem = $('.quotes-carousel-item');
    var quotesCarouselItemVideo = quotesCarouselItem.find('iframe')[0];

    var carouselControlItem = $('.quotes-carousel-controls-item');

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
            console.log(property.item.index)
            var current = property.item.index;
            makeCarouselControlActive(current)
            quotesCarouselVideoIsPlaying ? carouselCloseVideos() : '';
        });

    carouselControlItem.click(function () {
        quotesCarousel.trigger('to.owl.carousel', $(this).attr("data-slide"))
    });


    function makeCarouselControlActive(index) {
        carouselControlItem.removeClass('active');
        carouselControlItem.eq(index).addClass('active')
    }

    function carouselCloseVideos() {
        console.log('CLOSED ALL')
        quotesCarouselVideoIsPlaying = false;
        quotesCarouselItem.removeClass('video-open');
        $f(quotesCarouselItemVideo).api('unload')
    }

    carouselItemVideoToggle.click(function (e) {
        e.preventDefault();
        var thisParent = $(this).parent();
        var thisGrandparent = thisParent.parent();
        thisGrandparent.toggleClass('video-open');
        $f(thisParent.next()[0]).api('play');
        quotesCarouselVideoIsPlaying = true;
    });

    carouselItemVideoClose.click(function (e) {
        e.preventDefault();
        var thisParent = $(this).parent();
        thisParent.toggleClass('video-open');
        $f(thisParent.find('iframe')[0]).api('unload');
        quotesCarouselVideoIsPlaying = false;
    })

});