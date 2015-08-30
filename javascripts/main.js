$(function() {
    $("article.post-content img").wrap(function() {
        return "<a class='gallery-item' href='" + $( this ).attr("src") + "'></a>";
    });
    $('a.gallery-item').magnificPopup({
        key: 'lightbox',
        type: 'image',
        image:{
            verticalFit: false
        },
        gallery:{
            enabled:true
        }
    });
});

