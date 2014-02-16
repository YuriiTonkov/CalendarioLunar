function mesAnterior(e){
	var mesAntController = Alloy.createController("marzo", {}).getView();
    mesAntController.open();
    $.pantAbril.close();
};

function mesSiguiente(e){
	var mesSigController = Alloy.createController("mayo", {}).getView();
   	mesSigController.open();
    $.pantAbril.close();
};

function cerrarMes(e){
	$.pantAbril.close();
};