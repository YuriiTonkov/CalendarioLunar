function mesAnterior(e){
	var mesAntController = Alloy.createController("julio", {}).getView();
    mesAntController.open();
    $.pantAgosto.close();
};

function mesSiguiente(e){
	var mesSigController = Alloy.createController("septiembre", {}).getView();
   	mesSigController.open();
    $.pantAgosto.close();
};

function cerrarMes(e){
	$.pantAgosto.close();
};