$('.tabular.menu .item').tab();

$( document ).ready(function() {
   $("#area").html(localStorage.area);
$("#mes").html(localStorage.mes);
});


<!--Clique no botão de Processos-->

$("#processosButton").click(function(){
    
    var indicadoresProcessos =  $(".indicador1").toArray();
    var resultadosProcessos =  $(".resultado1").toArray(); 
});


$("#setorialButton").click(function(){
    
    var indicadoresSetorial =  $(".indicador2").toArray();
    var resultadosSetorial =  $(".resultado2").toArray(); 
});


$("#estrategicosButton").click(function(){
    
    var indicadoresEstrategicos =  $(".indicador3").toArray();
    var resultadosEstrategicos =  $(".resultado3").toArray(); 
});