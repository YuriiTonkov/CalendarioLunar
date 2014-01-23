function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.GrupoTab = Ti.UI.createTabGroup({
        id: "GrupoTab"
    });
    $.__views.__alloyId2 = Alloy.createController("principal", {
        id: "__alloyId2"
    });
    $.__views.GrupoTab.addTab($.__views.__alloyId2.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId4 = Alloy.createController("creditos", {
        id: "__alloyId4"
    });
    $.__views.GrupoTab.addTab($.__views.__alloyId4.getViewEx({
        recurse: true
    }));
    $.__views.GrupoTab && $.addTopLevelView($.__views.GrupoTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.GrupoTab.open();
    Alloy.Globals.GrupoTab = $.GrupoTab;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;