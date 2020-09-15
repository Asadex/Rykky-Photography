    //LIGT BOX VARIABLES
    let $lightbox = $("#lightbox")
    let $openersLightbox = $(".openersLightbox")
    let $closerLightbox = $("#closerLightbox");
    let galleryShow = false;
    let $arrowRight = $(".arrowRight");
    let $arrowLeft = $(".arrowLeft");
    let $imageLightbox = $(".image-lightbox");
    let slideIndex = 1;

    //SERVICE SLIDER
    let serviceIndex = 0;
    let $serviceTitle = $(".serviceTitle");
    let $serviceDescription = $(".serviceDescription");
    let $serviceImage = $(".service-image")
    const services = [
        {
            image: "dist/images/studio.jpg",
            title: "Estudio Profesional",
            description: `<p class="lead">Disponibles luces profesionales, tenemos además una gran variedad de fondos para embellecer cualquier atuendo o escena.</p>
            <p class="lead">También ofrecemos pantalla verde para hacer alguna escena con fondos profesionales, como si salieras en una película o colocarte en algún lugar que te gustaría visitar, en general toda clase de posibilidades para poder cumplir y sobrepasar tus expectativas.</p>`
        },
        {
            image: "dist/images/reconstruccion.jpg",
            title: "Departamento de reconstrucción",
            description: `<p class="lead">Si tienes algunas fotos antiguas que te gustaría traer a la vida otra vez, tenemos solución para ti.</p>
            <p class="lead">Esos recuerdos nublados ya no estarán en el olvido, todas las experiencia y memorias que has tenido volverán a tener el color y resplandor tal y como las recuerdas.</p>`
        },
        {
            image: "dist/images/media.jpg",
            title: "Consultas para redes sociales",
            description: `<p class="lead">Consigue las últimas novedades y mejores consejos de parte de nuestro equipo con experiencia práctica en la industria.</p>
            <p class="lead">Deja que nuestros asesores te guién al éxito en las redes sociales, asesoramiento de imagen personal, estilo de fotografía apropiada para tu perfil, mejores vías para conseguir la mayor cantidad de visualizaciones posibles, ideas de contenido para tu sector y mucha información más que consideremos necesaria para tu crecimiento.</p>`
        },
    ]

    //ANIMATION VARIABLES
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
        
        $imageLightbox.animate({
            visibility:"hidden",
            opacity:0,
        })
        setTimeout(function(){
            $imageLightbox.attr("src",`dist/images/image-grid-${slideIndex}.jpg`).animate({
                visibility:"visible",
                opacity:1,
            })
        },400)
    }
    //SLIDER SERVICES

    function nextService(n){
        showService(serviceIndex += n);
    }
    function showService(n){
        if(n>2){serviceIndex = 0}
        if(n<0){serviceIndex = 2}

        $serviceImage.animate({
           visibility:"hidden",
           opacity:0,
        })

        $serviceTitle.text(services[serviceIndex].title)
        $serviceDescription.html(services[serviceIndex].description)
        
        setTimeout(function(){
            $serviceImage.attr("src",services[serviceIndex].image).animate({
                visibility:"visible",
                opacity:1,
            })
        },500)
    }
    //ANIMATIONS
    $(document).ready(function(){$(".hero-section").animate({
        top:0,
        opacity:1,
    },1000)})