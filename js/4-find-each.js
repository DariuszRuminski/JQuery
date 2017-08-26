$(function(){
    //wybieranie elementu z kolekcji za pomocą metody eq()
    $("body").find("p").eq(1).css("color", "red");
    
    //pętla each dodająca do paragrafow klase z kelejnym numerem
    $("p").each(function(index){
        $(this).addClass("paragraf-" + index);
    });
});