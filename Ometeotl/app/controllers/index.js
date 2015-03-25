var autenticadorDeUsuario = autenticarUsuario;

function redirectFacebook(e)
{
	Titanium.Platform.openURL("https://www.facebook.com/UPiloto");
}

function redirectTwitter(e)
{
	Titanium.Platform.openURL("https://twitter.com/UPilotoOficial");
}

function redirectInstagram(e)
{
	Titanium.Platform.openURL("https://www.facebook.com/UPiloto");
}

function ingresar(e)
{
	var loggeoCorrecto = autenticadorDeUsuario.autenticarUsuario(usuarioTxt, contraseñaTxt);
	
	if(loggeoCorrecto)
	{
		var matriz2d = Ti.UI.create2DMatrix();
	
		matriz2d.rotate(45);
	
		var animation = Ti.UI.createAnimation({
			transform: matriz2d,
			duration: 2000,
			autoreverse: true,
			repeat: 3
		});
	
		$.btnLoggear.animate(animation);
	
		var menuPrincipal = Alloy.createController('menuPrincipal');
		menuPrincipal.create();
	}
}

$.index.open();