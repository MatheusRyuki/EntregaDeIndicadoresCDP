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
             }  // Se for Comissão de Ética
             else if (localStorage.area == 'Comissão de Ética') {
                   $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>')
                     $("#setorial").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>')
             $("#processos").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentual de Reuniões da Comissão de Ética" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div> <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentuais de tipos de recebimento de solicitação/denúncia" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div> <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Média de Tempo de conclusão de cada fase do processo" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div> <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentual de processos que competem à Comissão de Ética local" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>  <button class="ui primary button" id="processoButton" > Salvar</button>');
            } // Se for GEENGE
             else if (localStorage.area == 'GEENGE') {
                $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>')
                  $("#setorial").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Execução do plano de manutenção dos portos" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div><button class="ui primary button" id="setorialButton">Salvar</button>');
                 $("#processos").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Gastos de Manutenção por área requisitante" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div> <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentual de Execução do Orçamento de Investimentos e Dispêndio" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>  <button class="ui primary button" id="processoButton">Salvar</button>');
             } // Se for GEFINS
                else if (localStorage.area == 'GEFINS') {
                    $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>')
                  $("#setorial").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Fluxo de Caixa Operacional (FCO) sobre EBITDA" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>  <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Imobilização do Patrimônio liquido" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div> <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="índice de Arrecadação da Receita Patrimonial Faturada" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>   <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="índice de autossuficiência tarifária" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>  <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Lucrativade" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>  
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Proporção em representação entre as receitas (patrimonial e total)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Proporção em representação entre as receitas (tarifárias e total)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Retorno sobre o Capital Ajustado" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Taxa de Participação(Operacionais)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Taxa de Participação(Pessoas e Encargos)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<button class="ui primary button" id="setorialButton" > Salvar</button>');
 $("#processos").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Inadimplência de clientes(valor das notas)" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Inadimplência de clientes(valor das notas)" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<button class="ui primary button" id="processoButton" > Salvar</button>');
            }


























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

//Clique no botão de Setorial

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


//Clique no botão de Estratégicos

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
});


