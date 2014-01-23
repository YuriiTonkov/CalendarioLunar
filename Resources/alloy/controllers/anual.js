function Controller() {
    function eneroClick() {
        var eneroController = Alloy.createController("enero", {});
        Alloy.Globals.GrupoTab.open(eneroController.getView());
    }
    function febreroClick() {
        var febreroController = Alloy.createController("febrero", {});
        Alloy.Globals.GrupoTab.open(febreroController.getView());
    }
    function marzoClick() {
        var marzoController = Alloy.createController("marzo", {});
        Alloy.Globals.GrupoTab.open(marzoController.getView());
    }
    function abrilClick() {
        var abrilController = Alloy.createController("abril", {});
        Alloy.Globals.GrupoTab.open(abrilController.getView());
    }
    function mayoClick() {
        var mayoController = Alloy.createController("mayo", {});
        Alloy.Globals.GrupoTab.open(mayoController.getView());
    }
    function junioClick() {
        var junioController = Alloy.createController("junio", {});
        Alloy.Globals.GrupoTab.open(junioController.getView());
    }
    function julioClick() {
        var julioController = Alloy.createController("julio", {});
        Alloy.Globals.GrupoTab.open(julioController.getView());
    }
    function agostoClick() {
        var agostoController = Alloy.createController("agosto", {});
        Alloy.Globals.GrupoTab.open(agostoController.getView());
    }
    function septiembreClick() {
        var septiembreController = Alloy.createController("septiembre", {});
        Alloy.Globals.GrupoTab.open(septiembreController.getView());
    }
    function octubreClick() {
        var octubreController = Alloy.createController("octubre", {});
        Alloy.Globals.GrupoTab.open(octubreController.getView());
    }
    function noviembreClick() {
        var noviembreController = Alloy.createController("noviembre", {});
        Alloy.Globals.GrupoTab.open(noviembreController.getView());
    }
    function diciembreClick() {
        var diciembreController = Alloy.createController("diciembree", {});
        Alloy.Globals.GrupoTab.open(diciembreController.getView());
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
    $.__views.enero = Ti.UI.createImageView({
        id: "enero",
        image: "/images/Calendario-Enero-2014",
        top: "0px",
        height: "25%",
        left: "0px",
        width: "33%"
    });
    $.__views.anual.add($.__views.enero);
    eneroClick ? $.__views.enero.addEventListener("click", eneroClick) : __defers["$.__views.enero!click!eneroClick"] = true;
    $.__views.febrero = Ti.UI.createImageView({
        id: "febrero",
        image: "/images/Calendario-Febrero-2014",
        top: "0px",
        height: "25%",
        left: "33%",
        width: "33%"
    });
    $.__views.anual.add($.__views.febrero);
    febreroClick ? $.__views.febrero.addEventListener("click", febreroClick) : __defers["$.__views.febrero!click!febreroClick"] = true;
    $.__views.marzo = Ti.UI.createImageView({
        id: "marzo",
        image: "/images/Calendario-Marzo-2014",
        top: "0px",
        height: "25%",
        left: "66%",
        width: "33%"
    });
    $.__views.anual.add($.__views.marzo);
    marzoClick ? $.__views.marzo.addEventListener("click", marzoClick) : __defers["$.__views.marzo!click!marzoClick"] = true;
    $.__views.abril = Ti.UI.createImageView({
        id: "abril",
        image: "/images/Calendario-Abril-2014",
        top: "25%",
        height: "25%",
        left: "0px",
        width: "33%"
    });
    $.__views.anual.add($.__views.abril);
    abrilClick ? $.__views.abril.addEventListener("click", abrilClick) : __defers["$.__views.abril!click!abrilClick"] = true;
    $.__views.mayo = Ti.UI.createImageView({
        id: "mayo",
        image: "/images/Calendario-Mayo-2014",
        top: "25%",
        height: "25%",
        left: "33%",
        width: "33%"
    });
    $.__views.anual.add($.__views.mayo);
    mayoClick ? $.__views.mayo.addEventListener("click", mayoClick) : __defers["$.__views.mayo!click!mayoClick"] = true;
    $.__views.junio = Ti.UI.createImageView({
        id: "junio",
        image: "/images/Calendario-Junio-2014",
        top: "25%",
        height: "25%",
        left: "66%",
        width: "33%"
    });
    $.__views.anual.add($.__views.junio);
    junioClick ? $.__views.junio.addEventListener("click", junioClick) : __defers["$.__views.junio!click!junioClick"] = true;
    $.__views.julio = Ti.UI.createImageView({
        id: "julio",
        image: "/images/Calendario-Julio-2014",
        top: "50%",
        height: "25%",
        left: "0px",
        width: "33%"
    });
    $.__views.anual.add($.__views.julio);
    julioClick ? $.__views.julio.addEventListener("click", julioClick) : __defers["$.__views.julio!click!julioClick"] = true;
    $.__views.agosto = Ti.UI.createImageView({
        id: "agosto",
        image: "/images/Calendario-Agosto-2014",
        top: "50%",
        height: "25%",
        left: "33%",
        width: "33%"
    });
    $.__views.anual.add($.__views.agosto);
    agostoClick ? $.__views.agosto.addEventListener("click", agostoClick) : __defers["$.__views.agosto!click!agostoClick"] = true;
    $.__views.septiembre = Ti.UI.createImageView({
        id: "septiembre",
        image: "/images/Calendario-Septiembre-2014",
        top: "50%",
        height: "25%",
        left: "66%",
        width: "33%"
    });
    $.__views.anual.add($.__views.septiembre);
    septiembreClick ? $.__views.septiembre.addEventListener("click", septiembreClick) : __defers["$.__views.septiembre!click!septiembreClick"] = true;
    $.__views.octubre = Ti.UI.createImageView({
        id: "octubre",
        image: "/images/Calendario-Octubre-2014",
        top: "75%",
        height: "25%",
        left: "0px",
        width: "33%"
    });
    $.__views.anual.add($.__views.octubre);
    octubreClick ? $.__views.octubre.addEventListener("click", octubreClick) : __defers["$.__views.octubre!click!octubreClick"] = true;
    $.__views.noviembre = Ti.UI.createImageView({
        id: "noviembre",
        image: "/images/Calendario-Noviembre-2014",
        top: "75%",
        height: "25%",
        left: "33%",
        width: "33%"
    });
    $.__views.anual.add($.__views.noviembre);
    noviembreClick ? $.__views.noviembre.addEventListener("click", noviembreClick) : __defers["$.__views.noviembre!click!noviembreClick"] = true;
    $.__views.diciembre = Ti.UI.createImageView({
        id: "diciembre",
        image: "/images/Calendario-Diciembre-2014",
        top: "75%",
        height: "25%",
        left: "66%",
        width: "33%"
    });
    $.__views.anual.add($.__views.diciembre);
    diciembreClick ? $.__views.diciembre.addEventListener("click", diciembreClick) : __defers["$.__views.diciembre!click!diciembreClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.enero!click!eneroClick"] && $.__views.enero.addEventListener("click", eneroClick);
    __defers["$.__views.febrero!click!febreroClick"] && $.__views.febrero.addEventListener("click", febreroClick);
    __defers["$.__views.marzo!click!marzoClick"] && $.__views.marzo.addEventListener("click", marzoClick);
    __defers["$.__views.abril!click!abrilClick"] && $.__views.abril.addEventListener("click", abrilClick);
    __defers["$.__views.mayo!click!mayoClick"] && $.__views.mayo.addEventListener("click", mayoClick);
    __defers["$.__views.junio!click!junioClick"] && $.__views.junio.addEventListener("click", junioClick);
    __defers["$.__views.julio!click!julioClick"] && $.__views.julio.addEventListener("click", julioClick);
    __defers["$.__views.agosto!click!agostoClick"] && $.__views.agosto.addEventListener("click", agostoClick);
    __defers["$.__views.septiembre!click!septiembreClick"] && $.__views.septiembre.addEventListener("click", septiembreClick);
    __defers["$.__views.octubre!click!octubreClick"] && $.__views.octubre.addEventListener("click", octubreClick);
    __defers["$.__views.noviembre!click!noviembreClick"] && $.__views.noviembre.addEventListener("click", noviembreClick);
    __defers["$.__views.diciembre!click!diciembreClick"] && $.__views.diciembre.addEventListener("click", diciembreClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;