package co.edu.upiloto.ometeus.dto;

public class UsuarioDTO
{
	private String tipoUsuario;
	private String login;
	
	public String getTipoUsuario()
	{
		return tipoUsuario;
	}
	
	public void setTipoUsuario(String tipoUsuario)
	{
		this.tipoUsuario = tipoUsuario;
	}
	
	public String getLogin()
	{
		return login;
	}
	
	public void setLogin(String login)
	{
		this.login = login;
	}
	
	public String getNombre()
	{
		return nombre;
	}
	
	public void setNombre(String nombre)
	{
		this.nombre = nombre;
	}
	private String nombre;
}
