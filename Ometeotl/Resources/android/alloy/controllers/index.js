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
        var matriz2d = Ti.UI.create2DMatrix();
        matriz2d.rotate(45);
        var animation = Ti.UI.createAnimation({
            transform: matriz2d,
            duration: 2e3,
            autoreverse: true,
            repeat: 3
        });
        $.btnLoggear.animate(animation);
        var menuPrincipal = Alloy.createController("menuPrincipal");
        menuPrincipal.create();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        navBarHidden: true,
        backgroundImage: "/images/puenteIlustradoLinea.png",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.LogoPilotoLogin = Ti.UI.createImageView({
        image: "/icons/logoDiana.png",
        height: "25%",
        width: "40%",
        top: "14%",
        id: "LogoPilotoLogin"
    });
    $.__views.index.add($.__views.LogoPilotoLogin);
    $.__views.usuarioTxt = Ti.UI.createTextField({
        width: "38%",
        height: "10%",
        top: "51%",
        left: "48%",
        id: "usuarioTxt"
    });
    $.__views.index.add($.__views.usuarioTxt);
    $.__views.usuarioImg = Ti.UI.createImageView({
        top: "52%",
        left: "19%",
        height: "8%",
        width: "30%",
        image: "/icons/usuario.png",
        id: "usuarioImg"
    });
    $.__views.index.add($.__views.usuarioImg);
    $.__views.contraseñaTxt = Ti.UI.createTextField({
        width: "36%",
        height: "10%",
        passwordMask: true,
        top: "59%",
        left: "51%",
        id: "contraseñaTxt"
    });
    $.__views.index.add($.__views.contraseñaTxt);
    $.__views.contraseñaImg = Ti.UI.createImageView({
        top: "60%",
        left: "20%",
        height: "8%",
        width: "32%",
        image: "/icons/contrasena.png",
        id: "contraseñaImg"
    });
    $.__views.index.add($.__views.contraseñaImg);
    $.__views.btnLoggear = Ti.UI.createButton({
        top: "75%",
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