function mesAnterior(e){
	var mesAntController = Alloy.createController("junio", {}).getView();
    mesAntController.open();
    $.pantJulio.close();
};

function mesSiguiente(e){
	var mesSigController = Alloy.createController("agosto", {}).getView();
   	mesSigController.open();
    $.pantJulio.close();
};

function cerrarMes(e){
	$.pantJulio.close();
};