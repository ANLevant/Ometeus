function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function ingresar() {
        var menuPrincipal = Alloy.createController("menuPrincipal").getView();
        var left = true;
        var animation = Titanium.UI.createAnimation();
        animation.duration = 3e3;
        animation.left = 0;
        var animationHandler = function() {
            if (left) {
                animation.left = 400;
                left = false;
            }
            menuPrincipal.noticia.animate(animation);
        };
        animation.addEventListener("complete", animationHandler);
        animation.repeat = 5;
        menuPrincipal.noticia.animate(animation);
        menuPrincipal.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundImage: "/images/loginFondo.png",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.LogoPilotoLogin = Ti.UI.createImageView({
        image: "/icons/LogoRanRojo.png",
        height: "30%",
        width: "50%",
        top: "7%",
        id: "LogoPilotoLogin"
    });
    $.__views.index.add($.__views.LogoPilotoLogin);
    $.__views.usuarioTxt = Ti.UI.createTextField({
        width: "50%",
        height: "10%",
        hintText: "Usuario",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        backgroundImage: "/icons/textFieldUsuario.png",
        top: "40%",
        id: "usuarioTxt"
    });
    $.__views.index.add($.__views.usuarioTxt);
    $.__views.contraseñaTxt = Ti.UI.createTextField({
        width: "50%",
        height: "10%",
        hintText: "Contraseña",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        backgroundImage: "/icons/textFieldContrasena.png",
        passwordMask: true,
        top: "47%",
        id: "contraseñaTxt"
    });
    $.__views.index.add($.__views.contraseñaTxt);
    $.__views.btnLoggear = Ti.UI.createButton({
        top: "65%",
        height: "10%",
        width: "50%",
        backgroundImage: "/icons/botonIngresar.png",
        font: {
            fontFamily: "/fonts/Arsenal-Bold"
        },
        id: "btnLoggear"
    });
    $.__views.index.add($.__views.btnLoggear);
    ingresar ? $.__views.btnLoggear.addEventListener("click", ingresar) : __defers["$.__views.btnLoggear!click!ingresar"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.btnLoggear!click!ingresar"] && $.__views.btnLoggear.addEventListener("click", ingresar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;