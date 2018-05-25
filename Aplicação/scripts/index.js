$('.ui.dropdown')
  .dropdown();

// Clique de ínicio

$("#inicio").click(function(){
    localStorage.mes = $( "#mes option:selected" ).text();
    localStorage.area = $( "#area option:selected" ).text();
    window.location.href = "./views/indicadores.html";
});

