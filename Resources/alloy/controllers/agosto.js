function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "agosto";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.agosto = Ti.UI.createWindow({
        id: "agosto"
    });
    $.__views.agosto && $.addTopLevelView($.__views.agosto);
    $.__views.agosto = Ti.UI.createImageView({
        id: "agosto",
        image: "",
        top: "0px",
        height: "100%",
        left: "0px",
        width: "100%"
    });
    $.__views.agosto.add($.__views.agosto);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;