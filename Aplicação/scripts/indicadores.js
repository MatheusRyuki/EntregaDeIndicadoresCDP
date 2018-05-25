$('.tabular.menu .item').tab();

$( document ).ready(function() {
   $("#area").html(localStorage.area);
$("#mes").html(localStorage.mes);
});


<!--Clique no botão de Processos-->

$("#processoButton").click(function(){
    
    var indicadoresProcessos =  $( ".indicador1" ).map(function() {
    return $( this ).val();
    });
    var resultadosProcessos =  $(".resultado1").map(function() {
    return $( this ).val();
  });
    
    console.log(indicadoresProcessos);
    console.log(resultadosProcessos);
});


$("#setorialButton").click(function(){
    
    var indicadoresSetorial =  $(".indicador2").map(function() {
    return $( this ).val();
    });
    var resultadosSetorial =  $(".resultado2").map(function() {
    return $( this ).val();
    });
    
       console.log(indicadoresSetorial);
    console.log(resultadosSetorial);
});


$("#estrategicosButton").click(function(){
    
    var indicadoresEstrategicos =  $(".indicador3").map(function() {
    return $( this ).val();
      });
    var resultadosEstrategicos =  $(".resultado3").map(function() {
    return $( this ).val();
    });
    
     console.log(indicadoresEstrategicos);
    console.log(resultadosEstrategicos);
});