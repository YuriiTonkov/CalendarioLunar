/*$.pantEnero.addEventListener('swipe', function(e) {
   if (e.direction == 'left') {
      //win.open();
      var febreroController = Alloy.createController("febrero", {}).getView();
      console.debug("click febrero");
      febreroController.open();
   } else if (e.direction == 'right') {
      //win2.open();
      var diciembreController = Alloy.createController("diciembre", {}).getView();
      console.debug("click diciembre");
      diciembreController.open();
   }
   $.pantEnero.close();
});*/

function mesAnterior(e){
	var diciembreController = Alloy.createController("diciembre", {}).getView();
    console.debug("click diciembre");
    diciembreController.open();
    $.pantEnero.close();
};

function mesSiguiente(e){
	var febreroController = Alloy.createController("febrero", {}).getView();
   	console.debug("click febrero");
    febreroController.open();
    $.pantEnero.close();
};

function cerrarMes(e){
	$.pantEnero.close();
};