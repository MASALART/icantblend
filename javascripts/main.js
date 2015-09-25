var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

function windowResizeAction() {
    resizeStack();
}
function resizeStack() {
    var stack = $("article.post-content div.layered");
    stack.height($("a:first>img", stack).height());
}

$(function() {
    // wrap images with anchors
    var imgAnchors = $("article.post-content img").wrap(function() {
        if (!$(this).attr("title")) $(this).attr("title", $(this).attr("alt"));
        return "<a class='gallery-item' href='" + $(this).attr("src") +
            "' title='" + $(this).attr("title") + "'></a>";
    }).parent();
    // images in gallery
    $("article.post-content div.gallery a").removeClass();
    // layered images, for image sliders
    $("article.post-content div.layered a").addClass('layer');

    var stack = $("article.post-content div.layered").each(function() {
        var stack = $(this);
        var slider = $("<div class='layer-slider'></div>").insertBefore(stack);
        // create slider items, numbers
        for(var i=0; i<$("a", this).length; i++) {
            $("<a href='javascript:;'>"+(i+1)+"</a>").appendTo(slider).click(function() {
                if (typeof(stack.index)==='undefined') stack.index = 0;
                $("a", stack).eq(stack.index).css("z-index", 0);
                stack.index = $(this).index();
                var anchor = $("a", stack).eq(stack.index).css("z-index", 1);
                // set figcaption to topmost image title
                stack.next("figcaption").text($("img", anchor).attr("title"));
            });
        }
        // select first slider item
        $("a", slider).eq(0).trigger("click");
    });
    // wrap figures with captions around stacks and images
    stack.wrap(function() { return "<figure></figure>"; }).after(function() {
        var title = $("img", this).eq(0).attr("title");
        return "<figcaption>" + (title ? title : "") + "</figcaption>";
    });
    imgAnchors.filter(".gallery-item").wrap(function() {
        return "<figure></figure>";
    }).after(function() {
        var title = $("img", this).attr("title");
        if (title)
            return "<figcaption>" + title + "</figcaption>";
    });

    // magnific popup
    $('a.gallery-item').magnificPopup({
        key: 'lightbox',
        type: 'image',
        image:{
            verticalFit: false
        }
    });
    $('.gallery').each(function() {
        $(this).magnificPopup({
            key: 'lightbox-gallery',
            delegate: 'a',
            type: 'image',
            preload: [1,1],
            image:{
                verticalFit: false
            },
            gallery: {
                enabled:true
            }
        });
    });

    // resize action, delayed
    var doResizeAction;
    $( window ).resize(function() {
        clearTimeout(doResizeAction);
        doResizeAction = setTimeout(windowResizeAction, isMobile ? 0 : 100);
    });
    windowResizeAction();
});

