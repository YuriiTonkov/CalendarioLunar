function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mayo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mayo = Ti.UI.createWindow({
        id: "mayo"
    });
    $.__views.mayo && $.addTopLevelView($.__views.mayo);
    $.__views.mayo = Ti.UI.createImageView({
        id: "mayo",
        image: "",
        top: "0px",
        height: "100%",
        left: "0px",
        width: "100%"
    });
    $.__views.mayo.add($.__views.mayo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;