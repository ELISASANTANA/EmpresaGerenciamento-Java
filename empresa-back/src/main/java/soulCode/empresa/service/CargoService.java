package soulCode.empresa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import soulCode.empresa.model.Cargo;
import soulCode.empresa.model.Projeto;
import soulCode.empresa.repository.CargoRepository;
import soulCode.empresa.service.exceptions.ObjectNotFoundException;

@Service
public class CargoService {
	
	@Autowired
	private CargoRepository cargoRepo;
	
	// retorna todos os cargos
	public List<Cargo> findAllJobs() {
		return cargoRepo.findAll();
	}
	
	// retornar um cargo
	public Cargo findOneJob(Integer id_cargo) {	
		Optional<Cargo> cargo = cargoRepo.findById(id_cargo);
		return cargo.orElseThrow(() -> new ObjectNotFoundException( "Objeto não cadastro! O id procurado: " + id_cargo + " nao existe no db"));
	}
	
	public Cargo addJob(Cargo cargo) {
		cargo.setId_cargo(null);
		return cargoRepo.save(cargo);
	}
	
	public Cargo editJob(Cargo cargo) {
		findOneJob(cargo.getId_cargo());
		return cargoRepo.save(cargo);
	}
	
	public void deleteJob(Integer id_cargo) {
		findOneJob(id_cargo);
		try { 
			cargoRepo.deleteById(id_cargo);
		} catch (DataIntegrityViolationException e) {
			throw new soulCode.empresa.service.exceptions.DataIntegrityViolationException("Cargo nao pode ser deletada, pois possui funcionarios relacionados");
		}
		
	}
	
}
