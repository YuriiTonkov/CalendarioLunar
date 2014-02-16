/*$.pantFebrero.addEventListener('swipe', function(e) {
   if (e.direction == 'left') {
      //win.open();
      var febreroController = Alloy.createController("febrero", {}).getView();
      console.debug("click marzo");
      febreroController.open();
   } else if (e.direction == 'right') {
      //win2.open();
      var eneroController = Alloy.createController("enero", {}).getView();
      console.debug("click enero");
      eneroController.open();
   }
   $.pantFebrero.close();
});*/

function mesAnterior(e){
	var eneroController = Alloy.createController("enero", {}).getView();
    console.debug("click enero");
    eneroController.open();
    $.pantFebrero.close();
};

function mesSiguiente(e){
	var marzoController = Alloy.createController("marzo", {}).getView();
      console.debug("click marzo");
      marzoController.open();
    $.pantFebrero.close();
};
function cerrarMes(e){
	$.pantFebrero.close();
};