package soulCode.empresa.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import soulCode.empresa.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
	
	//Optional<Usuario> findByEmailUser(String email);
	
	Usuario findByUsername(String username);

}
