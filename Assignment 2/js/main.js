// // WEB303 Assignment 2
// $('').load('')

// $('#content-wrapper').click(function() 
// {

// }
// );
	
$(document).ready(function()
{
    $("#content-wrapper a").click(function(e) {
    e.preventDefault();
    $("#content").fadeOut();
    $("#content").empty();
    var pagetoLoad = $(this).attr("href");
    if(pagetoLoad=='prospect.html')
    { 
        $.ajax({		
        type: "GET",
        url: "prospect.html",
        data:{page:pagetoLoad},
        dataType: "html",
        success: function(data) {		
            $("#content").html(data);
            $("#content").fadeIn(2000);
            }
         })
    }
    else if(pagetoLoad=="convert.html"){		
              $.ajax({
        type: "GET",
        url: "convert.html",
        data:{page:pagetoLoad},
        dataType: "html",
        success: function(data) {			
            $("#content").html(data);
            $("#content").fadeIn(2000);
        }
                         })

     }
     else if(pagetoLoad=="retain.html"){
                $.ajax({
        type: "GET",
        url: "retain.html",
        data:{page:pagetoLoad},
        dataType: "html",
        success: function(data) {		
            $("#content").html(data);
            $("#content").fadeIn(2000);
        }
                         })
            }
        })
    
});
