$('.tabular.menu .item').tab();

$( document ).ready(function() {
   $("#area").html(localStorage.area);
$("#mes").html(localStorage.mes);

//Teste de criação
    //Se for ASSCOM
        if(localStorage.area == 'ASSCOM') {
            $("#estrategicos").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Agenda do plano de comunicação" class="indicador3"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado3"> </div></div> </div><button class="ui primary button" id="estrategicosButton" > Salvar</button>');
            $("#processos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
             $("#setorial").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
             }  // Se for Comissão de Ética
             else if (localStorage.area == 'Comissão de Ética') {
                   $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
                     $("#setorial").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
             $("#processos").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentual de Reuniões da Comissão de Ética" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div> <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentuais de tipos de recebimento de solicitação/denúncia" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div> <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Média de Tempo de conclusão de cada fase do processo" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div> <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentual de processos que competem à Comissão de Ética local" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>  <button class="ui primary button" id="processoButton" > Salvar</button>');
            } // Se for GEENGE
             else if (localStorage.area == 'GEENGE') {
                $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
                  $("#setorial").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Execução do plano de manutenção dos portos" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div><button class="ui primary button" id="setorialButton">Salvar</button>');
                 $("#processos").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Gastos de Manutenção por área requisitante" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div> <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentual de Execução do Orçamento de Investimentos e Dispêndio" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>  <button class="ui primary button" id="processoButton">Salvar</button>');
             } // Se for GEFINS
                else if (localStorage.area == 'GEFINS') {
                    $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
                  $("#setorial").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Fluxo de Caixa Operacional (FCO) sobre EBITDA" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>  <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Imobilização do Patrimônio liquido" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div> <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="índice de Arrecadação da Receita Patrimonial Faturada" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>   <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="índice de autossuficiência tarifária" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>  <div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Lucrativade" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'  
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
            } // Se for GERPMA
                 else if (localStorage.area == 'GERPMA') {
                  $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
                   $("#setorial").html(
 '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Cumprimento dos monitores previstos (Porto de Belém)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Cumprimento dos monitores previstos (Porto de Santarém)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Cumprimento dos monitores previstos (Porto de Óbidos)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Cumprimento dos monitores previstos (Porto de Altamira" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Cumprimento dos monitores previstos (Porto de Vila do Conde)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Cumprimento dos monitores previstos (Terminal de Miramar)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Cumprimento dos monitores previstos (Terminal de Outeiro)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Índice de Desempenho Ambiental (Porto de Belém)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Índice de Desempenho Ambiental (Porto de Santarém)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Índice de Desempenho Ambiental (Porto de Óbidos)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Índice de Desempenho Ambiental (Porto de Altamira" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Índice de Desempenho Ambiental (Porto de Vila do Conde)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Índice de Desempenho Ambiental (Terminal de Miramar)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Índice de Desempenho Ambiental (Terminal de Outeiro)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Conformidade da Documentação do Serviço de Coleta de Resíduos de Embarcações" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Gestão de Licenças Ambientais da Autoridade Portuária (Porto de Belém)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Gestão de Licenças Ambientais da Autoridade Portuária (Porto de Santarém)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Gestão de Licenças Ambientais da Autoridade Portuária (Porto de Óbidos)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Gestão de Licenças Ambientais da Autoridade Portuária (Porto de Altamira" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Gestão de Licenças Ambientais da Autoridade Portuária (Porto de Vila do Conde)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Gestão de Licenças Ambientais da Autoridade Portuária (Terminal de Miramar)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Gestão de Licenças Ambientais da Autoridade Portuária (Terminal de Outeiro)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Gestão de Licenças Ambientais dos Terminais Arrendados" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Conformidade do Serviço de Coleta de Resíduos de Embarcações" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Utilização do Porto para retirada de resíduos de embarcações" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<button class="ui primary button" id="setorialButton" > Salvar</button>');
                $("#processos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
        } // Se for Ouvidoria
            else if (localStorage.area == 'Ouvidoria') {
                  $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
                  $("#setorial").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Índice de atendimento em até 30 dias" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Índice de resposta aos pedidos de informação" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Proporção por modalidade(Denúncia)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Proporção por modalidade(Solicitação)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Proporção por modalidade(reclamação)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Proporção por modalidade(Sugestão)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Tempo médio de resposta aos pedidos de informação" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<button class="ui primary button" id="setorialButton" > Salvar</button>');
                $("#processos").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Atendimentos dentro do prazo" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Reclamações" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Satisfação do atendimento" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<button class="ui primary button" id="processoButton" > Salvar</button>');
        } //Se for SIC
            else if (localStorage.area == 'SIC') {
                 $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
                 $("#processos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
                  $("#setorial").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Índice de atendimento em até 30 dias" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Índice de resposta aos pedidos de informação" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Tempo médio de resposta aos pedidos de informação" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Proporção por modalidade(SIC)" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<button class="ui primary button" id="setorialButton" > Salvar</button>');
        } //Se for SUCOFA
            else if (localStorage.area == 'SUCOFA') {
                 $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
                 $("#processos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
                 $("#setorial").html('<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Execução do Orçamento de Investimento" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Orçamento realizado (PDG) - Dispêndio" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Orçamento realizado (PDG) - Recurso" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<button class="ui primary button" id="setorialButton" > Salvar</button>');
        } //Se for GETINF
         else if (localStorage.area == 'GETINF') {
            $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
            $("#setorial").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
              $("#processos").html(
'<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Conclusão do PDTI" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Qualidade da Disponibilidade de Internet" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'    
 + '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Disponibilidade dos recursos de data center" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'            
  + '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Efetividade na Manutenção de Sistemas Corporativos" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
   + '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Validação de Requisitos pelas partes interessadas" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
    + '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Efetividade na Resolução de chamados de suporte" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
     + '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Chamados solucionados dentro do acordado(SLA)" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'  
    + '<button class="ui primary button" id="processoButton" > Salvar</button>');         
         } //Se for GEAUDI
         else if (localStorage.area == 'GEAUDI') {
         $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
            $("#setorial").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
            $("#processos").html(
            '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Cumprimento do Plano Anual de Auditoria - PAINT" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Pontos de Auditoria Sanados" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<button class="ui primary button" id="processoButton" > Salvar</button>');    
            } //Se for GEGABI
            else if (localStorage.area == 'GEGABI') {
                 $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
            $("#setorial").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
             $("#processos").html(
            '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentual de Demandas recebidas dentro do prazo estipulado (Órgãos Colegiados)" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Média de dias para a pbulicação das atas na intranet dos Órgãos Colegiados" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+  '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentual de Demandas recebidas dentro do prazo estipulado (DIREXE)" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Média de dias para a punlicação das atas na intranet da DIREXE" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<button class="ui primary button" id="processoButton" > Salvar</button>');    
            } //Se for GEPLAM
            else if (localStorage.area == 'GEPLAM') {
                 $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
            $("#setorial").html('<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Market Share do Complexo Portuário: Carga Geral Solta" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Market Share do Complexo Portuário: Carga Geral Conteineirizada" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Market Share do Complexo Portuário: Granel Sólido" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Market Share do Complexo Portuário: Granel Líquido" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Market Share do Complexo Portuário: Total" class="indicador2"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado2"> </div></div> </div>'
+ '<button class="ui primary button" id="setorialButton" > Salvar</button>');
             $("#processos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');    
            } //Se for GEJURI
            else if (localStorage.area == 'GEJURI') {
                 $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
            $("#setorial").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
             $("#processos").html(
            '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Processos trabalhistas ganhos pela CDP" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Valores dos processos trabalhistas que foram acordados" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentual dos processos trabalhistas que foram perdidos" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+  '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="3 indicadores representando o acompanhamento das proporções das avaliações de risco" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Contratos a vencer nos próximos 03 meses" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<button class="ui primary button" id="processoButton" > Salvar</button>');    
            } //Se for GEADMI
            else if (localStorage.area == 'GEADMI') {
                 $("#estrategicos").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
            $("#setorial").html('<div class="ui info message"><div class="header">Sem Indicadores</div><ul class="list"><li>Não há indicadores desse cenário para essa área.</li></ul></div>');
             $("#processos").html(
            '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentuais de dispensas (valor)" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentuais de dispensas (quantidade)" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentuais de Registros de Preço (quantidade)" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+  '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentuais de Tomadas de Preço (valor)" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentuais de Tomadas de Preço (quantidade)" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<div class="two fields"><div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"><div class="ui label">Indicador</div><input readonly="" type="text" value="Percentual de pregões (quantidade)" class="indicador1"></div></div> <div class="field"><!--Área de Inserimento dos dados--><div class="ui labeled input"> <div class="ui label"> Resultado do Indicador </div><input type="text" placeholder="Resultado" class="resultado1"> </div></div> </div>'
+ '<button class="ui primary button" id="processoButton" > Salvar</button>');    
            }









//Clique no botão de Processos

$("#processoButton").click(function(){
     //Aviso que Salvou
      $(this).popup({
           title: 'Salvo!',
            on:'click'
      }).popup('show');
       
    var indicadoresProcessos =  $( ".indicador1" ).map(function() {
    return $( this ).val();
    });
    var resultadosProcessos =  $(".resultado1").map(function() {
    return $( this ).val();
  });
    
     localStorage.indicadoresProcessos = JSON.stringify(indicadoresProcessos);
    localStorage.resultadosProcessos = JSON.stringify(resultadosProcessos);
    
    console.log( localStorage.indicadoresProcessos);
    console.log(localStorage.resultadosProcessos);
});

//Clique no botão de Setorial

$("#setorialButton").click(function(){
     //Aviso que Salvou
    $(this).popup({
           title: 'Salvo!',
            on:'click'
      }).popup('show');
      
    var indicadoresSetorial =  $(".indicador2").map(function() {
    return $( this ).val();
    });
    var resultadosSetorial =  $(".resultado2").map(function() {
    return $( this ).val();
    });
    
     localStorage.indicadoresSetorial = JSON.stringify(indicadoresSetorial);
    localStorage.resultadosSetorial = JSON.stringify(resultadosSetorial);
    
       console.log( localStorage.indicadoresSetorial);
    console.log( localStorage.resultadosSetorial);
});


//Clique no botão de Estratégicos

$("#estrategicosButton").click(function(){
    //Aviso que Salvou
    $(this).popup({
           title: 'Salvo!',
            on:'click'
      }).popup('show');
      
    
    var indicadoresEstrategicos =  $(".indicador3").map(function() {
    return $( this ).val();
      });
    var resultadosEstrategicos =  $(".resultado3").map(function() {
    return $( this ).val();
    });
    
    localStorage.indicadoresEstrategicos = JSON.stringify(indicadoresEstrategicos);
    localStorage.resultadosEstrategicos = JSON.stringify(resultadosEstrategicos);
    
    
     console.log( localStorage.indicadoresEstrategicos);
    console.log(localStorage.resultadosEstrategicos);
});

//Clique no Botão Finalizar


$("#confirmar").click(function(){
    $('.ui.basic.modal')
  .modal('show')
;    
});

$("#escrever").click(function(){
    $('#final')
  .modal('show')
;    
});

$("#gerarpdf").click(function(){
    localStorage.avaliacao =  $("#avaliacao").val();
    localStorage.planos =  $("#planos").val();
    
    //Geração do PDF
    var imgData = 'data:image/png;base64,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'; 
    
    var doc = new jsPDF();
    doc.addImage(imgData, 'PNG', 10, 10, 70, 25);
    
   doc.setFontType("bold");
doc.text(105, 50, 'Relatório dos Indicadores', null, null, 'center');

 doc.setFontType("normal");
       doc.text('Área: ', 20, 70);
    doc.text(localStorage.area, 35, 70);
    
    doc.text('Mês: ', 20, 80);
      doc.text(localStorage.mes, 35, 80);
      
      //Criar nova Linha caso o texto passe a linha
      doc.setFontSize(12);
      
      var splitTexto = doc.splitTextToSize(localStorage.avaliacao, 140);
      
    
      y=90;
        doc.text('Avaliação Gerencial: ' + splitTexto[0], 20, y);
       
       
       y += 8;
         //Digitar em cada linha um texto
         
       for(var c = 1;c<splitTexto.length;c++){

        doc.text(splitTexto[c], 20,y);
        y += 8;

        }
   
        console.log(splitTexto);

        
        var splitTexto2 = doc.splitTextToSize(localStorage.planos, 140);
        
    
          
        //digitar em uma linha cada texto
       doc.text('Planos de Ação: ' + splitTexto2[0], 20, y);
    y += 8;
             
        for(var c = 1;c<splitTexto2.length;c++){

        doc.text(splitTexto2[c], 20,y);
        y += 8;

        }
          console.log(splitTexto2);
        
        doc.setFontSize(20);
        doc.addPage();
        
       
           doc.setFontType("bold");
        doc.text(105, 10, 'Resultados', null, null, 'center');
        doc.setFontType("normal");
        doc.setFontSize(12);
        
       //Notação dos indicadores
        
        var y = 30;
        
        if (localStorage.getItem("indicadoresEstrategicos") !== null) {
        //Estratégicos
        var indEstra =  JSON.parse(localStorage.indicadoresEstrategicos);
        var resulEstra = JSON.parse(localStorage.resultadosEstrategicos);
        
        for (var i = 0; i<indEstra.length; i++) {
              doc.text(indEstra[i] + ': \n' + resulEstra[i], 20, y);
              y += 15;
              //Adiciona uma página ao chegar ao fim
            
              if (y >= 300) {
                 doc.addPage();
                 y = 30 //Reinicia o Y
            }
        }
        
        //Espaçamento
            y += 15;
        
    }
        
       if (localStorage.getItem("indicadoresSetorial") !== null) {
        //Setorial
        var indSeto=  JSON.parse(localStorage.indicadoresSetorial);
        var resulSeto = JSON.parse(localStorage.resultadosSetorial);
        
          for (var i = 0; i<indSeto.length; i++) {
              doc.text(indSeto[i] + ': \n' + resulSeto[i], 20, y);
              y += 15;
               //Adiciona uma página ao chegar ao fim
                
              if (y >= 300) {
                 doc.addPage();
                 y = 30 //Reinicia o Y
            }
        }
        
         //Espaçamento
            y += 15;
        }
        
          if (localStorage.getItem("indicadoresProcessos") !== null) {
          //Processos
        var indPro=  JSON.parse(localStorage.indicadoresProcessos);
        var resulPro = JSON.parse(localStorage.resultadosProcessos);
        
          for (var i = 0; i<indPro.length; i++) {
              doc.text(indPro[i] + ': \n' + resulPro[i], 20, y);
              y += 15;
               //Adiciona uma página ao chegar ao fim
              if (y >= 300) {
                 doc.addPage();
                 y = 30 //Reinicia o Y
            }
        }
    }

        
  
        
      doc.save('Relatório.pdf');
});



});


