function mesAnterior(e){
	var mesAntController = Alloy.createController("septiembre", {}).getView();
    mesAntController.open();
	$.pantOctubre.close();
};

function mesSiguiente(e){
	var mesSigController = Alloy.createController("noviembre", {}).getView();
   	mesSigController.open();
	$.pantOctubre.close();
};

function cerrarMes(e){
	$.pantOctubre.close();
};