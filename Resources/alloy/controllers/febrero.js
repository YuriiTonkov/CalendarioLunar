function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "febrero";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.febrero = Ti.UI.createWindow({
        id: "febrero"
    });
    $.__views.febrero && $.addTopLevelView($.__views.febrero);
    $.__views.febrero = Ti.UI.createImageView({
        id: "febrero",
        image: "",
        top: "0px",
        height: "100%",
        left: "0px",
        width: "100%"
    });
    $.__views.febrero.add($.__views.febrero);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;