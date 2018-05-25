$('.tabular.menu .item').tab();

$( document ).ready(function() {
   $("#area").html(localStorage.area);
$("#mes").html(localStorage.mes);
});


<!--Clique no botão de Processos-->

$("#processoButton").click(function(){
    
    var indicadoresProcessos =  $(".indicador1").html().toArray();
    var resultadosProcessos =  $(".resultado1").html().toArray(); 
    
    console.log(indicadoresProcessos);
    console.log(resultadosProcessos);
});


$("#setorialButton").click(function(){
    
    var indicadoresSetorial =  $(".indicador2").html().toArray();
    var resultadosSetorial =  $(".resultado2").html().toArray(); 
    
       console.log(indicadoresSetorial);
    console.log(resultadosSetorial);
});


$("#estrategicosButton").click(function(){
    
    var indicadoresEstrategicos =  $(".indicador3").html().toArray();
    var resultadosEstrategicos =  $(".resultado3").toArray(); 
    
     console.log(indicadoresEstrategicos);
    console.log(resultadosEstrategicos);
});