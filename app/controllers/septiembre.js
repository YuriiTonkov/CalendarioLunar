function mesAnterior(e){
	var mesAntController = Alloy.createController("agosto", {}).getView();
    mesAntController.open();
	$.pantSeptiembre.close();
};

function mesSiguiente(e){
	var mesSigController = Alloy.createController("octubre", {}).getView();
   	mesSigController.open();
	$.pantSeptiembre.close();
};

function cerrarMes(e){
	$.pantSeptiembre.close();
};