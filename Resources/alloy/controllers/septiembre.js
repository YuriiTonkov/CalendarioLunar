function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "septiembre";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.septiembre = Ti.UI.createWindow({
        id: "septiembre"
    });
    $.__views.septiembre && $.addTopLevelView($.__views.septiembre);
    $.__views.septiembre = Ti.UI.createImageView({
        id: "septiembre",
        image: "",
        top: "0px",
        height: "100%",
        left: "0px",
        width: "100%"
    });
    $.__views.septiembre.add($.__views.septiembre);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;