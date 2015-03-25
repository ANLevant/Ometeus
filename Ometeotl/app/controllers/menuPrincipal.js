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

exports.create = function create(e)
{
	$.menuPrincipal.open();
	
	var left = true;
	var animation = Ti.UI.createAnimation();
	animation.duration = 3000;
	animation.left = 0; 
	var animationHandler =function()
	{
    	if (left)
    	{
       		animation.left = Titanium.Platform.displayCaps.platformWidth*2;
       		left = false;
    	} 
	};
	
	animation.addEventListener('complete', animationHandler);
	$.noticia.animate(animation);
};
