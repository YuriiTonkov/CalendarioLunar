function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId6 = [];
    $.__views.__alloyId7 = Alloy.createController("tabPrincipal", {
        id: "__alloyId7"
    });
    __alloyId6.push($.__views.__alloyId7.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId9 = Alloy.createController("tabCreditos", {
        id: "__alloyId9"
    });
    __alloyId6.push($.__views.__alloyId9.getViewEx({
        recurse: true
    }));
    $.__views.GrupoTab = Ti.UI.createTabGroup({
        tabs: __alloyId6,
        id: "GrupoTab"
    });
    $.__views.GrupoTab && $.addTopLevelView($.__views.GrupoTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.GrupoTab.open();
    Alloy.Globals.GrupoTab = $.GrupoTab;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;