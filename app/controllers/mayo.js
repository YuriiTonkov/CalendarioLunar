function mesAnterior(e){
	var mesAntController = Alloy.createController("abril", {}).getView();
    mesAntController.open();
    $.pantMayo.close();
};

function mesSiguiente(e){
	var mesSigController = Alloy.createController("junio", {}).getView();
   	mesSigController.open();
    $.pantMayo.close();
};

function cerrarMes(e){
	$.pantMayo.close();
};