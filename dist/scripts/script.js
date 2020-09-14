    let $lightbox = $("#lightbox")
    let $openersLightbox = $(".openersLightbox")
    let $closerLightbox = $("#closerLightbox");
    let galleryShow = false;
    let $arrowRight = $(".arrowRight");
    let $arrowLeft = $(".arrowLeft");
    let $imageLightbox = $(".image-lightbox");
    let slideIndex = 1;

    let $animation_elements = $('.animation-element');
    let $window = $(window);

    $window.on('scroll', check_if_in_view);
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
      
        $.each($animation_elements, function() {
          var $element = $(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top;
          var element_bottom_position = (element_top_position + element_height);
      
          //check to see if this current container is within viewport
          if ((element_bottom_position >= window_top_position) &&
              (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
          } else {
            $element.removeClass('in-view');
          }
        });
      }
    //Event Listeners
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