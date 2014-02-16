function mesAnterior(e){
	var mesAntController = Alloy.createController("mayo", {}).getView();
    mesAntController.open();
    $.pantJunio.close();
};

function mesSiguiente(e){
	var mesSigController = Alloy.createController("julio", {}).getView();
   	mesSigController.open();
    $.pantJunio.close();
};

function cerrarMes(e){
	$.pantJunio.close();
};