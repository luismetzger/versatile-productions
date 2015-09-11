$(document).ready(function () {
    var iframe = $('#header-player')[0],
        player = $f(iframe);

    $('#header-fullscreen-video-toggle').click(function () {
        $('.header-fullscreen-video').addClass('header-fullscreen-video-open');
        player.api("play");
    })

    $('#header-fullscreen-video-close').click(function () {
        $('.header-fullscreen-video').removeClass('header-fullscreen-video-open');
        player.api('unload');
    })


})