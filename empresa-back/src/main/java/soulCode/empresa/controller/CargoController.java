package soulCode.empresa.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import soulCode.empresa.model.Cargo;
import soulCode.empresa.service.CargoService;

@CrossOrigin
@RestController
@RequestMapping("empresa")
public class CargoController {
	
	@Autowired
	private CargoService cargoServ;
	
	@GetMapping("/cargo")
	public List<Cargo> findAllJobs() {
		List<Cargo> cargo = cargoServ.findAllJobs();
		return cargo;
	}
	
	@GetMapping("/cargo/{id_cargo}")
	public ResponseEntity<Cargo> findOneJob(@PathVariable Integer id_cargo) {
		Cargo cargo = cargoServ.findOneJob(id_cargo);
		return ResponseEntity.ok().body(cargo);
		
	}
	
	@PostMapping("/cargo")
	public ResponseEntity<Cargo> addJob(@RequestBody Cargo cargo) {
		cargo = cargoServ.addJob(cargo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
											 .path("/{id}")
											 .buildAndExpand(cargo.getId_cargo())
											 .toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/cargo/{id_cargo}")
	public ResponseEntity<Cargo> editJob(@PathVariable Integer id_cargo, @RequestBody Cargo cargo) {
		cargo.setId_cargo(id_cargo);
		cargo = cargoServ.editJob(cargo);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/cargo/{id_cargo}")
	public ResponseEntity<Void> deleteJob(@PathVariable Integer id_cargo) {
		cargoServ.deleteJob(id_cargo);
		return ResponseEntity.noContent().build();
	}
	
	
	
	
	
	
	
	
}
