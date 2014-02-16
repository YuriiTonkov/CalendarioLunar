function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "creditos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId0 = Ti.UI.createWindow({
        id: "__alloyId0"
    });
    $.__views.creditos = Ti.UI.createImageView({
        id: "creditos",
        image: "",
        top: "0px",
        height: "100%",
        left: "0px",
        width: "100%"
    });
    $.__views.__alloyId0.add($.__views.creditos);
    $.__views.creditos = Ti.UI.createTab({
        window: $.__views.__alloyId0,
        title: "Creditos",
        icon: "KS_nav_Config.png",
        id: "creditos"
    });
    $.__views.creditos && $.addTopLevelView($.__views.creditos);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;