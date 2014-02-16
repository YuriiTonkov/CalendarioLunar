function mesAnterior(e){
	var mesAntController = Alloy.createController("octubre", {}).getView();
    mesAntController.open();
	$.pantNoviembre.close();
};

function mesSiguiente(e){
	var mesSigController = Alloy.createController("diciembre", {}).getView();
   	mesSigController.open();
	$.pantNoviembre.close();
};

function cerrarMes(e){
	$.pantNoviembre.close();
};