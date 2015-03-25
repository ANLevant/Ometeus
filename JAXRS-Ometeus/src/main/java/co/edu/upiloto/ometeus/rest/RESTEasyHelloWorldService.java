package co.edu.upiloto.ometeus.rest;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

@Path("/RESTEasyHelloWorld")
public class RESTEasyHelloWorldService
{
	 @GET
	 @Path("/helloworld")
	 public String helloworld()
	 {
		 return "Hello World!";
	 }

}
