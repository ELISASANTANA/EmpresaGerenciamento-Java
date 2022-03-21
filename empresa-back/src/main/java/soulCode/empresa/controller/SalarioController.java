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

import soulCode.empresa.model.Salario;
import soulCode.empresa.service.SalarioService;

@RestController
@CrossOrigin
@RequestMapping("empresa")
public class SalarioController {

	@Autowired
	private SalarioService salarioServ;
	
	@GetMapping("/funcionario/salario")
	public List<Salario> buscarTodosSalarios() {
		List<Salario> salario = salarioServ.buscarTodosSalario();
		return salario;
	}
	
	@GetMapping("/funcionario/salario/{codigo}")
	public ResponseEntity<Salario> buscarUmSalario(@PathVariable Integer codigo) {
		Salario salario = salarioServ.buscarUmSalario(codigo);
		return ResponseEntity.ok().body(salario);
	}
	
	@GetMapping("/funcionario/salario-funcionario/{id_funcionario}")
	public List<Salario> salariosDoFuncionario(@PathVariable Integer id_funcionario) {
		 List<Salario> salario = salarioServ.salariosDoFuncionario(id_funcionario);
		 return salario;
	}
	
	@PostMapping("/funcionario/salario/{id_funcionario}")
	public ResponseEntity<Salario> inserirBoleto(@RequestBody Salario salario, @PathVariable Integer id_funcionario) {
		salario = salarioServ.inserirSalario(salario, id_funcionario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(salario.getCodigo()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/funcionario/salario/{codigo}/{id_funcionario}")
	public ResponseEntity<Salario> editarSalario(@RequestBody Salario salario, @PathVariable Integer codigo, @PathVariable Integer id_funcionario) {
		buscarUmSalario(codigo);
		salario = salarioServ.editarPagamento(salario, codigo, id_funcionario);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/pagar-salario/{codigo}")
	public ResponseEntity<Salario> pagarSalario(@PathVariable Integer codigo) {
		salarioServ.pagarSalario(codigo);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/cancelar-salario/{codigo}")
	public ResponseEntity<Salario> cancelarSalario(@PathVariable Integer codigo) {
		salarioServ.cancelarSalario(codigo);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/funcionario/excluir-salario/{codigo}")
	public ResponseEntity<Void> deletarSalario(@PathVariable Integer codigo) {
		salarioServ.deletarSalario(codigo);
		return ResponseEntity.noContent().build();
	}
	
}
