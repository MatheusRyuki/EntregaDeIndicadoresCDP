$('.tabular.menu .item').tab();

$( document ).ready(function() {
   $("#area").html(localStorage.area);
$("#mes").html(localStorage.mes);

//Teste de criação
    //Se for ASSCOM
        if(localStorage.area == 'ASSCOM') {
            $("#estrategicos").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Agenda do plano de comunicação" class="indicador3"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado3"> </div></div> </div><button class="ui primary button" id="estrategicosButton" > Salvar</button>');
            $("#processos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>')
             $("#setorial").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>')
             }

});


//Clique no botão de Processos

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