/*$.pantDiciembre.addEventListener('swipe', function(e) {
   if (e.direction == 'left') {
      //win.open();
      var eneroController = Alloy.createController("enero", {}).getView();
      console.debug("click enero");
      eneroController.open();
   } else if (e.direction == 'right') {
      //win2.open();
      var noviembreController = Alloy.createController("noviembre", {}).getView();
      console.debug("click noviembre");
      noviembreController.open();
   }
   $.pantDiciembre.close();
});*/

function mesAnterior(e){
	var noviembreController = Alloy.createController("noviembre", {}).getView();
    console.debug("click noviembre");
    noviembreController.open();
    $.pantDiciembre.close();
};

function mesSiguiente(e){
	var eneroController = Alloy.createController("enero", {}).getView();
    console.debug("click enero");
    eneroController.open();
    $.pantDiciembre.close();
};
function cerrarMes(e){
	$.pantDiciembre.close();
};