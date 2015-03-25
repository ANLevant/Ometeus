function autenticarUsuario(nombre, contrasena)
{
	var urlServicio = "localhost:8081/JAXRS-Ometeus/Loggeo";
	
	var xhr = Ti.Network.createHTTPClient( {
    	onload: function(e)
    	{
			// this.responseText holds the raw text return of the message (used for text/JSON)
        	// this.responseXML holds any returned XML (including SOAP)
        	// this.responseData holds any returned binary data
        	Ti.API.debug(this.responseText);
        	alert('success');
    	},
    	
    	onerror: function(e)
    	{
			// this function is called when an error occurs, including a timeout
        	Ti.API.debug(e.error);
        	alert('error');
    	},
    	timeout:5000  /* in milliseconds */
	} );

	xhr.open("GET", url);
	xhr.send();  // request is actually sent with this statement
	
	var resultado = xhr.getResponseText;
	
	if(resultado.contrasena != "")
	{
		
        	return true;
	}
	else
	{
		return false;
	}
}
