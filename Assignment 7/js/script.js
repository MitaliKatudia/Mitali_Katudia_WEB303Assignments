$(function () {
    $('#photo-viewer').show().on('click', '.photo-box', function x(e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });

        let modal = $("#myModal");
       
        let modalImg = $("#img");
        $('.photo-box').on('click',  function(e){
            $(modal).show()
            $(modalImg).attr('src', $('.active').children('.myImg').map(function () {
                return $(this).attr('src')
                }).get());
        })
        
        let span = $(".close");
        
        span.on('click', function(e) { 
            e.preventDefault();
            $(modal).hide();
        })
    });
    });
  
