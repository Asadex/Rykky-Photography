    let $lightbox = $("#lightbox")
    let $openersLightbox = $(".openersLightbox")
    let $closerLightbox = $("#closerLightbox");
    let galleryShow = false;
    let $arrowRight = $(".arrowRight");
    let $arrowLeft = $(".arrowLeft");
    let $imageLightbox = $(".image-lightbox");
    let slideIndex = 1;

    $openersLightbox.click(openLightbox)
    $closerLightbox.click(closeLightbox);
    
    //OPENING AND CLOSING LIGHTBOX
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

    //DISABLE SCROLL
    function updateState(){
        if(galleryShow){
            $('body').css({'overflow':'hidden'});
        }else{
            $(document).unbind('scroll'); 
            $('body').css({'overflow':'visible'});
        }
    }

    //CURRENT IMAGE
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        if(n==4){slideIndex = 5};
        if(n>8){slideIndex=1};
        $imageLightbox.attr("src",`dist/images/image-grid-${slideIndex}.jpg`)
    }

    //ANIMATIONS
    $(document).ready(function(){$(".hero-section").animate({
        top:0,
        opacity:1,
    },1000)})