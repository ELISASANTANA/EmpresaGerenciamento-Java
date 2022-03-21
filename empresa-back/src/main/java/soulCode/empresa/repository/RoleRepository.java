package soulCode.empresa.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import soulCode.empresa.model.Role;

public interface RoleRepository extends JpaRepository<Role, String> {
	
	//Optional<Role> findByNome(String nome);

}
