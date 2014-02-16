function mesAnterior(e){
	var mesAntController = Alloy.createController("febrero", {}).getView();
    console.debug("click diciembre");
    mesAntController.open();
    $.pantMarzo.close();
};

function mesSiguiente(e){
	var mesSigController = Alloy.createController("abril", {}).getView();
   	console.debug("click febrero");
    mesSigController.open();
    $.pantMarzo.close();
};

function cerrarMes(e){
	$.pantMarzo.close();
};