package co.edu.upiloto.ometeus.rest.service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/LoggeoOmeteus")
public interface LogginService
{
	@GET
	@Path("/loggear")
	@Produces("text/JSON")
	public String usuarioExiste();
	
}
