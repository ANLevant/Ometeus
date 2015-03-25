function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundImage: "/images/login.jpg",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.logoPiloto = Ti.UI.createImageView({
        image: "/icons/LogoUFondoVerdeVeneno.png",
        width: 60,
        height: 60,
        top: 10,
        left: 130,
        id: "logoPiloto"
    });
    $.__views.index.add($.__views.logoPiloto);
    $.__views.usuario = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontFamily: "/fonts/Arsenal-Bold",
            fontSize: "28dp"
        },
        top: 100,
        left: 20,
        text: "Usuario:",
        id: "usuario"
    });
    $.__views.index.add($.__views.usuario);
    $.__views.usuarioTxt = Ti.UI.createTextField({
        width: 100,
        height: 30,
        top: 105,
        left: 180,
        id: "usuarioTxt"
    });
    $.__views.index.add($.__views.usuarioTxt);
    $.__views.contraseña = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontFamily: "/fonts/Arsenal-Bold",
            fontSize: "28dp"
        },
        top: 140,
        left: 20,
        text: "Contraseña:",
        id: "contraseña"
    });
    $.__views.index.add($.__views.contraseña);
    $.__views.contraseñaTxt = Ti.UI.createTextField({
        width: 100,
        height: 30,
        top: 145,
        left: 180,
        passwordMask: true,
        id: "contraseñaTxt"
    });
    $.__views.index.add($.__views.contraseñaTxt);
    $.__views.btnLoggear = Ti.UI.createButton({
        top: 240,
        left: 100,
        opacity: .5,
        width: 100,
        height: 50,
        font: {
            fontFamily: "/fonts/Arsenal-Bold"
        },
        title: "Ingresar",
        id: "btnLoggear"
    });
    $.__views.index.add($.__views.btnLoggear);
    $.__views.facebook = Ti.UI.createImageView({
        image: "/icons/FacebookVerdeVeneno.png",
        width: 60,
        height: 60,
        bottom: 10,
        left: 30,
        id: "facebook"
    });
    $.__views.index.add($.__views.facebook);
    $.__views.twitter = Ti.UI.createImageView({
        image: "/icons/Twitter-iconGreen.png",
        width: 60,
        height: 60,
        bottom: 10,
        left: 130,
        id: "twitter"
    });
    $.__views.index.add($.__views.twitter);
    $.__views.instagram = Ti.UI.createImageView({
        image: "/icons/InstagramGreen.png",
        width: 60,
        height: 60,
        bottom: 10,
        left: 270,
        id: "instagram"
    });
    $.__views.index.add($.__views.instagram);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;