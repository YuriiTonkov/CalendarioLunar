function Controller() {
    function mesAnterior() {
        var noviembreController = Alloy.createController("noviembre", {}).getView();
        console.debug("click noviembre");
        noviembreController.open();
        $.pantDiciembre.close();
    }
    function mesSiguiente() {
        var eneroController = Alloy.createController("enero", {}).getView();
        console.debug("click enero");
        eneroController.open();
        $.pantDiciembre.close();
    }
    function cerrarMes() {
        $.pantDiciembre.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "diciembre";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.pantDiciembre = Ti.UI.createWindow({
        id: "pantDiciembre"
    });
    $.__views.pantDiciembre && $.addTopLevelView($.__views.pantDiciembre);
    $.__views.__alloyId2 = Ti.UI.createImageView({
        image: "/images/diciembre2014.png",
        top: "0px",
        height: "100%",
        left: "0px",
        width: "100%",
        id: "__alloyId2"
    });
    $.__views.pantDiciembre.add($.__views.__alloyId2);
    $.__views.botAnterior = Ti.UI.createButton({
        top: "92%",
        height: 50,
        textAlign: "left",
        left: 1,
        id: "botAnterior",
        title: "Noviembre"
    });
    $.__views.pantDiciembre.add($.__views.botAnterior);
    mesAnterior ? $.__views.botAnterior.addEventListener("click", mesAnterior) : __defers["$.__views.botAnterior!click!mesAnterior"] = true;
    $.__views.botSiguiente = Ti.UI.createButton({
        top: "93%",
        height: 50,
        textAlign: "right",
        right: 10,
        id: "botSiguiente",
        title: "Enero 2014"
    });
    $.__views.pantDiciembre.add($.__views.botSiguiente);
    mesSiguiente ? $.__views.botSiguiente.addEventListener("click", mesSiguiente) : __defers["$.__views.botSiguiente!click!mesSiguiente"] = true;
    $.__views.botCerrarMes = Ti.UI.createButton({
        top: "1%",
        height: 50,
        textAlign: "center",
        width: "100%",
        id: "botCerrarMes",
        title: "Ver todo el 2014"
    });
    $.__views.pantDiciembre.add($.__views.botCerrarMes);
    cerrarMes ? $.__views.botCerrarMes.addEventListener("click", cerrarMes) : __defers["$.__views.botCerrarMes!click!cerrarMes"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.botAnterior!click!mesAnterior"] && $.__views.botAnterior.addEventListener("click", mesAnterior);
    __defers["$.__views.botSiguiente!click!mesSiguiente"] && $.__views.botSiguiente.addEventListener("click", mesSiguiente);
    __defers["$.__views.botCerrarMes!click!cerrarMes"] && $.__views.botCerrarMes.addEventListener("click", cerrarMes);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;