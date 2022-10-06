// // WEB303 Assignment 2

$(document).ready(function(){
    
    $("#content-wrapper a#prospect").click(function(){ 
       
        $("#content").load("prospect.html", function(responseTxt1, prospect1) {
            if(prospect1 == "success")
            {
                $("#content").fadeIn(2000);

            //$("#convert").fadeOut(1000);
           // $("#retain").fadeOut(1000);
            }
        });

    });


    $("#content-wrapper a#convert").click(function(){
    
        $("#content").load("convert.html", function(responseTxt2, convert1){
            if(convert1 == "success") {
            $("#content").fadeIn(2000);
           // $("#prospect").fadeOut(1000);
            //$("#retain").fadeOut(1000);
            }
        });
    });


    $("#content-wrapper a#retain").click(function(){
        //$("#content").fadeOut(1000);
        $("#content").load("retain.html", function(responseTxt3, retain1){
            if(retain1 == "success") {
                $("#content").fadeIn(2000);
            //$("#convert").fadeOut(1000);
            //$("#prospect").fadeOut(1000);
        }

        });
      
    });

});

