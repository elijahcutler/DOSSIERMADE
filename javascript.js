// JavaScript Document
$( document ).ready(function() {
  
$("#getRemed").click(function() {

  $("#leftContent").fadeOut(1500, function() {
    //Once the fadeout is complete, call fadein function
    $("#leftLookbook").fadeOut(1500, function() {});
  });

  $("#rightContent").fadeOut(1500, function() {
    $("#rightLookbook").fadeOut(1500, function() {});
  });
});

$("#getMemed").click(function() {

  $("#leftContent").fadeOut(1500, function() {
    //Once the fadeout is complete, call fadein function
    $("#leftLookbook").fadeIn(1500, function() {});
  });

  $("#rightContent").fadeOut(1500, function() {
    $("#rightLookbook").fadeIn(1500, function() {});
  });
});

$("#getLemed").click(function() {
  $("#leftLookbook").fadeOut(1500, function() {
    $("#leftContent").fadeIn(1500, function() {});
  });

  $("#rightLookbook").fadeOut(1500, function() {
    $("#rightContent").fadeIn(1500, function() {});
  });
});
});


$('.showlink').each(
    function(i){
        $(this).text('showlink: ' + i);
    });

// Changes color on hover
    $(function() {
        $('.showlink').hover(function(){
            $(this).addClass('hovered');
        },
        function(){
            $(this).removeClass('hovered');
        });
    });
