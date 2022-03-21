package soulCode.empresa.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Role implements GrantedAuthority {
	
	@Id
	private String role;

	@JsonIgnore
	@ManyToMany
	@JoinTable(name = "usuarios_roles",
			   inverseJoinColumns = @JoinColumn(name = "username", referencedColumnName = "username"),
			   joinColumns = @JoinColumn(name = "role", referencedColumnName = "role"))
	private List<Usuario> usuarios;
	
	public Role() {
		
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<Usuario> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(List<Usuario> usuarios) {
		this.usuarios = usuarios;
	}

	@Override
	public String getAuthority() {
		return this.role;
	}	
}
