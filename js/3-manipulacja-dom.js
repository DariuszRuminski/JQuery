"use strict";

$(function(){
   //pobieranie tekstu
    var tekstParPierwszy = $("#paragraf").text();
    console.log(tekstParPierwszy);
    
    //dodawanie textu
    $(".paragraf").text(tekstParPierwszy);
    
    //dodawanie html
    $(".paragrafnext").html("To jest <strong>paragraf</strong> z dodanym<br>HTML");
    
    //dodanie tresci na koncu selektora
    $(".paragrafnext").append("Trećś na końcu selektora");
    
    //dodanie tresci za selektorem
    $(".paragrafnext").after("Trećś za selektorem");
    
    //usuwanie elementu i jego zawartosci
    $("strong").remove();
    
    //usuwanie TYLKO zawartosi elementu
    $(".paragraf").empty();
    
    //dodawanie klasy
    $("h1").addClass("blue");
    
    //dodawanie atrybutu
    $("h1").attr("imie","Marcin");
});


