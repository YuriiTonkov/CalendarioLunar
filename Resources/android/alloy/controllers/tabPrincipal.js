function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabPrincipal";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId6 = Alloy.createController("anual", {
        id: "__alloyId6",
        __parentSymbol: __parentSymbol
    });
    $.__views.tabPrincipal = Ti.UI.createTab({
        window: $.__views.__alloyId6.getViewEx({
            recurse: true
        }),
        title: "Principal",
        icon: "KS_nav_Config.png",
        id: "tabPrincipal"
    });
    $.__views.tabPrincipal && $.addTopLevelView($.__views.tabPrincipal);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;