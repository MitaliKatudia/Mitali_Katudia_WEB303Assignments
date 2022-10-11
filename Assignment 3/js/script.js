//Assignment 3

function JSON(){
    $.getJSON( "team.json", function( result ) {    
        $.each( result, function( index, info ) {
            var nameData = `<h2>${info.name}</h2>`;
            $("div#team").append(`${nameData}<h5>${info.position}</h5><p>${info.bio}</p>`);
        });
    });
}

function Ajax(){
    $.ajax({
        url: "team.json",
        beforeSend: function() {
            $("div#team").html(`<h1>Loading...</h1>`);
        },
        error: function(xhr){
            alert("An error occured.");
        },        
        success: function(result){
            setTimeout(() => {
                $("div#team").html("");
                $.each(result, (index, info)=>{
                    var nameData = `<h2>${info.name}</h2>`;
                    $("div#team").append(`${nameData}<h5>${info.position}</h5><p>${info.bio}</p>`);
                });
            }, 3000);
        }
    });
}

$(document).ready(function(){
    Ajax();
});