function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function redirectFacebook() {
        Titanium.Platform.openURL("https://www.facebook.com/UPiloto");
    }
    function redirectTwitter() {
        Titanium.Platform.openURL("https://twitter.com/UPilotoOficial");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menuPrincipal";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.menuPrincipal = Ti.UI.createWindow({
        backgroundImage: "/images/menuPrincipal.jpg",
        id: "menuPrincipal"
    });
    $.__views.menuPrincipal && $.addTopLevelView($.__views.menuPrincipal);
    $.__views.logoPiloto = Ti.UI.createImageView({
        image: "/icons/LogoUFondoVerdeVeneno.png",
        width: 60,
        height: 60,
        top: 10,
        left: 130,
        id: "logoPiloto"
    });
    $.__views.menuPrincipal.add($.__views.logoPiloto);
    $.__views.facultad = Ti.UI.createImageView({
        image: "/icons/IconoIngenieriaTransVerdeVeneno.png",
        width: 60,
        height: 60,
        top: 100,
        left: 30,
        id: "facultad"
    });
    $.__views.menuPrincipal.add($.__views.facultad);
    $.__views.noticia = Ti.UI.createLabel({
        color: "white",
        font: {
            fontFamily: "/fonts/Arsenal-Bold",
            fontSize: "18dp"
        },
        top: "20%",
        left: "-10%",
        text: "¡KFC Está regalando pollo!",
        id: "noticia"
    });
    $.__views.menuPrincipal.add($.__views.noticia);
    $.__views.fondo = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontFamily: "/fonts/Arsenal-Bold",
            fontSize: "18dp"
        },
        top: "17%",
        width: "100%",
        heigth: "20%",
        backgroundColor: "#686868",
        id: "fondo"
    });
    $.__views.menuPrincipal.add($.__views.fondo);
    $.__views.txtIngenieriaDeSistemas = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontFamily: "/fonts/Arsenal-Bold",
            fontSize: "18dp"
        },
        top: 110,
        left: 100,
        text: "Ingeniería de Sistemas",
        id: "txtIngenieriaDeSistemas"
    });
    $.__views.menuPrincipal.add($.__views.txtIngenieriaDeSistemas);
    $.__views.registroYControl = Ti.UI.createImageView({
        image: "/icons/IconoRegistroTransVerdeVeneno.png",
        width: 60,
        height: 60,
        top: 180,
        left: 30,
        id: "registroYControl"
    });
    $.__views.menuPrincipal.add($.__views.registroYControl);
    $.__views.txtRegistroYControl = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontFamily: "/fonts/Arsenal-Bold",
            fontSize: "18dp"
        },
        top: 190,
        left: 100,
        text: "Registro y Control",
        id: "txtRegistroYControl"
    });
    $.__views.menuPrincipal.add($.__views.txtRegistroYControl);
    $.__views.bienestarInstitucional = Ti.UI.createImageView({
        image: "/icons/IconoBienestarTransVerdeVeneno.png",
        width: 65,
        height: 50,
        top: 260,
        left: 30,
        id: "bienestarInstitucional"
    });
    $.__views.menuPrincipal.add($.__views.bienestarInstitucional);
    $.__views.txtBienestarInstitucional = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontFamily: "/fonts/Arsenal-Bold",
            fontSize: "18dp"
        },
        top: 270,
        left: 100,
        text: "Bienestar Institucional",
        id: "txtBienestarInstitucional"
    });
    $.__views.menuPrincipal.add($.__views.txtBienestarInstitucional);
    $.__views.__alloyId0 = Ti.UI.createView({
        height: "2dp",
        bottom: "55dp",
        left: "0dp",
        right: "0dp",
        borderWidth: "2",
        borderColor: "#11C520",
        id: "__alloyId0"
    });
    $.__views.menuPrincipal.add($.__views.__alloyId0);
    $.__views.facebook = Ti.UI.createImageView({
        image: "/icons/FacebookVerdeVeneno.png",
        width: 40,
        height: 40,
        bottom: 10,
        left: 30,
        id: "facebook"
    });
    $.__views.menuPrincipal.add($.__views.facebook);
    redirectFacebook ? $.__views.facebook.addEventListener("click", redirectFacebook) : __defers["$.__views.facebook!click!redirectFacebook"] = true;
    $.__views.twitter = Ti.UI.createImageView({
        image: "/icons/Twitter-iconGreen.png",
        width: 40,
        height: 40,
        bottom: 10,
        left: 140,
        id: "twitter"
    });
    $.__views.menuPrincipal.add($.__views.twitter);
    redirectTwitter ? $.__views.twitter.addEventListener("click", redirectTwitter) : __defers["$.__views.twitter!click!redirectTwitter"] = true;
    $.__views.instagram = Ti.UI.createImageView({
        image: "/icons/InstagramGreen.png",
        width: 40,
        height: 40,
        bottom: 10,
        left: 240,
        id: "instagram"
    });
    $.__views.menuPrincipal.add($.__views.instagram);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.facebook!click!redirectFacebook"] && $.__views.facebook.addEventListener("click", redirectFacebook);
    __defers["$.__views.twitter!click!redirectTwitter"] && $.__views.twitter.addEventListener("click", redirectTwitter);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;