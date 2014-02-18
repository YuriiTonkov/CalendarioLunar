function btnEneroClick() {
	//var eneroController = Alloy.createController("enero", {});
	//Alloy.Globals.GrupoTab.open(eneroController.getView());
	var eneroController = Alloy.createController("enero", {}).getView();
    console.debug("click Enero");
    eneroController.open();
    
}

function btnFebreroClick() {
	//var febreroController = Alloy.createController("febrero", {});
    //Alloy.Globals.GrupoTab.open(febreroController.getView());
    var febreroController = Alloy.createController("febrero", {}).getView();
    console.debug("click Febrero");
    febreroController.open();
}

function btnMarzoClick() {
	//var marzoController = Alloy.createController("marzo", {});
    //Alloy.Globals.GrupoTab.open(marzoController.getView());
    var marzoController = Alloy.createController("marzo", {}).getView();
    marzoController.open();
}

function btnAbrilClick() {
	//var abrilController = Alloy.createController("abril", {});
    //Alloy.Globals.GrupoTab.open(abrilController.getView());
    var abrilController = Alloy.createController("abril", {}).getView();
    abrilController.open();
}
 	
function btnMayoClick() {
	//var mayoController = Alloy.createController("mayo", {});
    //Alloy.Globals.GrupoTab.open(mayoController.getView());
    var mayoController = Alloy.createController("mayo", {}).getView();
    mayoController.open();
}

function btnJunioClick() {
	//var junioController = Alloy.createController("junio", {});
    //Alloy.Globals.GrupoTab.open(junioController.getView());
    var junioController = Alloy.createController("junio", {}).getView();
    junioController.open();
}

function btnJulioClick() {
	//var julioController = Alloy.createController("julio", {});
    //Alloy.Globals.GrupoTab.open(julioController.getView());
    var julioController = Alloy.createController("julio", {}).getView();
    julioController.open();
}

function btnAgostoClick() {
	//var agostoController = Alloy.createController("agosto", {});
    //Alloy.Globals.GrupoTab.open(agostoController.getView());
    var agostoController = Alloy.createController("agosto", {}).getView();
    agostoController.open();
}

function btnSeptiembreClick() {
	//var septiembreController = Alloy.createController("septiembre", {});
    //Alloy.Globals.GrupoTab.open(septiembreController.getView());
    var septiembreController = Alloy.createController("septiembre", {}).getView();
    septiembreController.open();
}

function btnOctubreClick() {
	//var octubreController = Alloy.createController("octubre", {});
    //Alloy.Globals.GrupoTab.open(octubreController.getView());
    var octubreController = Alloy.createController("octubre", {}).getView();
    octubreController.open();
}

function btnNoviembreClick() {
	//var noviembreController = Alloy.createController("noviembre", {});
    //Alloy.Globals.GrupoTab.open(noviembreController.getView());
    var noviembreController = Alloy.createController("noviembre", {}).getView();
    noviembreController.open();
}

function btnDiciembreClick() {
	//var diciembreController = Alloy.createController("diciembre", {});
    //Alloy.Globals.GrupoTab.open(diciembreController.getView());
    var diciembreController = Alloy.createController("diciembre", {}).getView();
    diciembreController.open();
}
//Si acabamos de entrar entonces llamamos a la funcion que salta al mes en curso
saltarMesEnCurso();

//Funcion que salta al mes en curso
function saltarMesEnCurso(){
	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	switch (month){
		case 1:
			var eneroController = Alloy.createController("enero", {}).getView();
    		console.debug("click Enero");
   			eneroController.open();
   			break;
   		case 2:
   			var febreroController = Alloy.createController("febrero", {}).getView();
    		febreroController.open();
    		console.debug("click Febrero");
   			//break;
    	case 3:
    		var marzoController = Alloy.createController("marzo", {}).getView();
    		marzoController.open();
   			break;
    	case 4:
    		var abrilController = Alloy.createController("abril", {}).getView();
    		abrilController.open();
   			break;
    	case 5:
    		var mayoController = Alloy.createController("mayo", {}).getView();
    		mayoController.open();
   			break;
    	case 6:
    		var junioController = Alloy.createController("junio", {}).getView();
    		junioController.open();
   			break;
    	case 7:
    		var julioController = Alloy.createController("julio", {}).getView();
    		julioController.open();
   			break;
    	case 8:
    		var agostoController = Alloy.createController("agosto", {}).getView();
    		agostoController.open();
   			break;
    	case 9:
    		var septiembreController = Alloy.createController("septiembre", {}).getView();
    		septiembreController.open();
   			break;
    	case 10:
    		var octubreController = Alloy.createController("octubre", {}).getView();
    		octubreController.open();
   			break;
    	case 11:
    		var noviembreController = Alloy.createController("noviembre", {}).getView();
    		noviembreController.open();
   			break;
    	case 12:
    		var diciembreController = Alloy.createController("diciembre", {}).getView();
    		diciembreController.open();
   			break;
   		default:
   			//break;
   	}
}
