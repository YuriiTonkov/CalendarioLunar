function Controller() {
    function btnEneroClick() {
        var eneroController = Alloy.createController("enero", {}).getView();
        console.debug("click Enero");
        eneroController.open();
    }
    function btnFebreroClick() {
        var febreroController = Alloy.createController("febrero", {}).getView();
        console.debug("click Febrero");
        febreroController.open();
    }
    function btnMarzoClick() {
        var marzoController = Alloy.createController("marzo", {}).getView();
        marzoController.open();
    }
    function btnAbrilClick() {
        var abrilController = Alloy.createController("abril", {}).getView();
        abrilController.open();
    }
    function btnMayoClick() {
        var mayoController = Alloy.createController("mayo", {}).getView();
        mayoController.open();
    }
    function btnJunioClick() {
        var junioController = Alloy.createController("junio", {}).getView();
        junioController.open();
    }
    function btnJulioClick() {
        var julioController = Alloy.createController("julio", {}).getView();
        julioController.open();
    }
    function btnAgostoClick() {
        var agostoController = Alloy.createController("agosto", {}).getView();
        agostoController.open();
    }
    function btnSeptiembreClick() {
        var septiembreController = Alloy.createController("septiembre", {}).getView();
        septiembreController.open();
    }
    function btnOctubreClick() {
        var octubreController = Alloy.createController("octubre", {}).getView();
        octubreController.open();
    }
    function btnNoviembreClick() {
        var noviembreController = Alloy.createController("noviembre", {}).getView();
        noviembreController.open();
    }
    function btnDiciembreClick() {
        var diciembreController = Alloy.createController("diciembre", {}).getView();
        diciembreController.open();
    }
    function saltarMesEnCurso() {
        var currentTime = new Date();
        var month = currentTime.getMonth() + 1;
        switch (month) {
          case 1:
            var eneroController = Alloy.createController("enero", {}).getView();
            console.debug("click Enero");
            eneroController.open();
            break;

          case 2:
            var febreroController = Alloy.createController("febrero", {}).getView();
            febreroController.open();
            console.debug("click Febrero");

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

          default:        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "anual";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.anual = Ti.UI.createWindow({
        id: "anual"
    });
    $.__views.anual && $.addTopLevelView($.__views.anual);
    $.__views.btnEnero = Ti.UI.createImageView({
        id: "btnEnero",
        image: "/images/Calendario-Enero-2014.jpg",
        top: "0px",
        height: "25%",
        left: "0px",
        width: "33%"
    });
    $.__views.anual.add($.__views.btnEnero);
    btnEneroClick ? $.__views.btnEnero.addEventListener("click", btnEneroClick) : __defers["$.__views.btnEnero!click!btnEneroClick"] = true;
    $.__views.btnFebrero = Ti.UI.createImageView({
        id: "btnFebrero",
        image: "/images/Calendario-Febrero-2014.jpg",
        top: "0px",
        height: "25%",
        left: "33%",
        width: "33%"
    });
    $.__views.anual.add($.__views.btnFebrero);
    btnFebreroClick ? $.__views.btnFebrero.addEventListener("click", btnFebreroClick) : __defers["$.__views.btnFebrero!click!btnFebreroClick"] = true;
    $.__views.btnMarzo = Ti.UI.createImageView({
        id: "btnMarzo",
        image: "/images/Calendario-Marzo-2014.jpg",
        top: "0px",
        height: "25%",
        left: "66%",
        width: "33%"
    });
    $.__views.anual.add($.__views.btnMarzo);
    btnMarzoClick ? $.__views.btnMarzo.addEventListener("click", btnMarzoClick) : __defers["$.__views.btnMarzo!click!btnMarzoClick"] = true;
    $.__views.btnAbril = Ti.UI.createImageView({
        id: "btnAbril",
        image: "/images/Calendario-Abril-2014.jpg",
        top: "25%",
        height: "25%",
        left: "0px",
        width: "33%"
    });
    $.__views.anual.add($.__views.btnAbril);
    btnAbrilClick ? $.__views.btnAbril.addEventListener("click", btnAbrilClick) : __defers["$.__views.btnAbril!click!btnAbrilClick"] = true;
    $.__views.btnMayo = Ti.UI.createImageView({
        id: "btnMayo",
        image: "/images/Calendario-Mayo-2014.jpg",
        top: "25%",
        height: "25%",
        left: "33%",
        width: "33%"
    });
    $.__views.anual.add($.__views.btnMayo);
    btnMayoClick ? $.__views.btnMayo.addEventListener("click", btnMayoClick) : __defers["$.__views.btnMayo!click!btnMayoClick"] = true;
    $.__views.btnJunio = Ti.UI.createImageView({
        id: "btnJunio",
        image: "/images/Calendario-Junio-2014.jpg",
        top: "25%",
        height: "25%",
        left: "66%",
        width: "33%"
    });
    $.__views.anual.add($.__views.btnJunio);
    btnJunioClick ? $.__views.btnJunio.addEventListener("click", btnJunioClick) : __defers["$.__views.btnJunio!click!btnJunioClick"] = true;
    $.__views.btnJulio = Ti.UI.createImageView({
        id: "btnJulio",
        image: "/images/Calendario-Julio-2014.jpg",
        top: "50%",
        height: "25%",
        left: "0px",
        width: "33%"
    });
    $.__views.anual.add($.__views.btnJulio);
    btnJulioClick ? $.__views.btnJulio.addEventListener("click", btnJulioClick) : __defers["$.__views.btnJulio!click!btnJulioClick"] = true;
    $.__views.btnAgosto = Ti.UI.createImageView({
        id: "btnAgosto",
        image: "/images/Calendario-Agosto-2014.jpg",
        top: "50%",
        height: "25%",
        left: "33%",
        width: "33%"
    });
    $.__views.anual.add($.__views.btnAgosto);
    btnAgostoClick ? $.__views.btnAgosto.addEventListener("click", btnAgostoClick) : __defers["$.__views.btnAgosto!click!btnAgostoClick"] = true;
    $.__views.btnSeptiembre = Ti.UI.createImageView({
        id: "btnSeptiembre",
        image: "/images/Calendario-Septiembre-2014.jpg",
        top: "50%",
        height: "25%",
        left: "66%",
        width: "33%"
    });
    $.__views.anual.add($.__views.btnSeptiembre);
    btnSeptiembreClick ? $.__views.btnSeptiembre.addEventListener("click", btnSeptiembreClick) : __defers["$.__views.btnSeptiembre!click!btnSeptiembreClick"] = true;
    $.__views.btnOctubre = Ti.UI.createImageView({
        id: "btnOctubre",
        image: "/images/Calendario-Octubre-2014.jpg",
        top: "75%",
        height: "25%",
        left: "0px",
        width: "33%"
    });
    $.__views.anual.add($.__views.btnOctubre);
    btnOctubreClick ? $.__views.btnOctubre.addEventListener("click", btnOctubreClick) : __defers["$.__views.btnOctubre!click!btnOctubreClick"] = true;
    $.__views.btnNoviembre = Ti.UI.createImageView({
        id: "btnNoviembre",
        image: "/images/Calendario-Noviembre-2014.jpg",
        top: "75%",
        height: "25%",
        left: "33%",
        width: "33%"
    });
    $.__views.anual.add($.__views.btnNoviembre);
    btnNoviembreClick ? $.__views.btnNoviembre.addEventListener("click", btnNoviembreClick) : __defers["$.__views.btnNoviembre!click!btnNoviembreClick"] = true;
    $.__views.btnDiciembre = Ti.UI.createImageView({
        id: "btnDiciembre",
        image: "/images/Calendario-Diciembre-2014.jpg",
        top: "75%",
        height: "25%",
        left: "66%",
        width: "33%"
    });
    $.__views.anual.add($.__views.btnDiciembre);
    btnDiciembreClick ? $.__views.btnDiciembre.addEventListener("click", btnDiciembreClick) : __defers["$.__views.btnDiciembre!click!btnDiciembreClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    saltarMesEnCurso();
    __defers["$.__views.btnEnero!click!btnEneroClick"] && $.__views.btnEnero.addEventListener("click", btnEneroClick);
    __defers["$.__views.btnFebrero!click!btnFebreroClick"] && $.__views.btnFebrero.addEventListener("click", btnFebreroClick);
    __defers["$.__views.btnMarzo!click!btnMarzoClick"] && $.__views.btnMarzo.addEventListener("click", btnMarzoClick);
    __defers["$.__views.btnAbril!click!btnAbrilClick"] && $.__views.btnAbril.addEventListener("click", btnAbrilClick);
    __defers["$.__views.btnMayo!click!btnMayoClick"] && $.__views.btnMayo.addEventListener("click", btnMayoClick);
    __defers["$.__views.btnJunio!click!btnJunioClick"] && $.__views.btnJunio.addEventListener("click", btnJunioClick);
    __defers["$.__views.btnJulio!click!btnJulioClick"] && $.__views.btnJulio.addEventListener("click", btnJulioClick);
    __defers["$.__views.btnAgosto!click!btnAgostoClick"] && $.__views.btnAgosto.addEventListener("click", btnAgostoClick);
    __defers["$.__views.btnSeptiembre!click!btnSeptiembreClick"] && $.__views.btnSeptiembre.addEventListener("click", btnSeptiembreClick);
    __defers["$.__views.btnOctubre!click!btnOctubreClick"] && $.__views.btnOctubre.addEventListener("click", btnOctubreClick);
    __defers["$.__views.btnNoviembre!click!btnNoviembreClick"] && $.__views.btnNoviembre.addEventListener("click", btnNoviembreClick);
    __defers["$.__views.btnDiciembre!click!btnDiciembreClick"] && $.__views.btnDiciembre.addEventListener("click", btnDiciembreClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;