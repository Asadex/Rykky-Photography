(function(){
    let $lightbox = $("#lightbox")
    let $closerLightbox = $("#closerLightbox");
    let $openersLightbox = $(".openersLightbox")
    let galleryShow = false;

    $openersLightbox.click(openLightbox);
    $closerLightbox.click(closeLightbox)

    function openLightbox(){
        $lightbox.addClass("active")
        galleryShow = true;
        updateState();
    }
    function closeLightbox(){
        $lightbox.removeClass("active")
        galleryShow = false;
        updateState();
    }
    function updateState(){
        if(galleryShow){
            $('body').css({'overflow':'hidden'});
        }else{
            $(document).unbind('scroll'); 
            $('body').css({'overflow':'visible'});
        }
    }

    

})()