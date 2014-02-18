function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabCreditos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.creditos = Ti.UI.createWindow({
        id: "creditos"
    });
    $.__views.__alloyId17 = Ti.UI.createImageView({
        image: "/images/creditos.png",
        top: "0px",
        height: "100%",
        left: "0px",
        width: "100%",
        id: "__alloyId17"
    });
    $.__views.creditos.add($.__views.__alloyId17);
    $.__views.tabCreditos = Ti.UI.createTab({
        window: $.__views.creditos,
        title: "Creditos",
        icon: "KS_nav_Class.png",
        id: "tabCreditos"
    });
    $.__views.tabCreditos && $.addTopLevelView($.__views.tabCreditos);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;