$(function(){
   //pojedyńcze zdarzenie na paragrafie
    $("p").click(function(){
       $(this).css("color", "orange"); 
    });
    
    //grupa zdarzeń na nagłówku
    $("h1").on({
        "mouseenter": function(){
            $(this).css("color", "red");
        },
        "mouseleave": function(){
            $(this).css("color", "inherit");
            //inherit-dziedziczy po rodzicu
        }
    });
});