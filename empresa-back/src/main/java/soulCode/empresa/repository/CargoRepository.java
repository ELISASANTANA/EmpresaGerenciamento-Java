package soulCode.empresa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import soulCode.empresa.model.Cargo;

public interface CargoRepository extends JpaRepository<Cargo, Integer> {
	

}
