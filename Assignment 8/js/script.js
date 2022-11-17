$.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function(data) {
        for (var i=0; i<data.length; i++) {
            var row = $('<tr><td>' + data[i].Movie_Num+ '</td><td>' + data[i].Role + '</td><td>' + data[i].First_Name + '</td><td>' + data[i].Last_Name + '</td><td>' + data[i].Gender + '</td></tr>');
            $('#Movie_Table').append(row);
        }
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});
$(document).ready(function(){  
           $('#search').keyup(function(){  
                search_table($(this).val());  
           });  
           function search_table(value){  
                $('#Movie_Table tr').each(function(){  
                     var found = 'false';  
                     $(this).each(function(){  
                          if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
                          {  
                               found = 'true';  
                               $(this).css('bgcolor', 'purple'); 
                           $(this).css('color', 'white');
                          }  
                          else{
                              $(this).css('background', 'pink'); 
                           $(this).css('color', 'black');
                          }
                     });            
                });  
           }  
      });  


