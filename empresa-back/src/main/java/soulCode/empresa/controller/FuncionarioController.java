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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import soulCode.empresa.model.Cargo;
import soulCode.empresa.model.Funcionario;
import soulCode.empresa.model.Projeto;
import soulCode.empresa.repository.FuncionarioRepository;
import soulCode.empresa.service.FuncionarioService;

@CrossOrigin
@RestController
@RequestMapping("empresa")
public class FuncionarioController {
	
	@Autowired
	private FuncionarioRepository funcionarioRepo;
	
	@Autowired
	private FuncionarioService funcionarioServ;
	
	@GetMapping("/funcionario")
	public List<Funcionario> findAllWorkers() {
		List<Funcionario> funcionario = funcionarioServ.findAllWorkers();
		return funcionario;
	}
	
	@GetMapping("/funcionario/{id_funcionario}")
	public ResponseEntity<?> findOneWorker(@PathVariable Integer id_funcionario) {
		Funcionario funcionario = funcionarioServ.findOneWorker(id_funcionario);
		return ResponseEntity.ok().body(funcionario);
	}
	
	@GetMapping("/funcionario-cargo")
	public List<List> workerAndJob() {
		List<List> funcCargo = this.funcionarioServ.workerAndJob();
		return funcCargo;
	}
	
	@GetMapping("/funcionario/funcionario-projeto")
	public List<List> funcComSeuProjeto() {
		List<List> funcProjeto =  funcionarioServ.funcComSeuProjeto();
		return funcProjeto;
	}
	
	@GetMapping("/funcionario/busca-cargo/{id_cargo}")
	public List<Funcionario> fetchByCargo(@PathVariable Integer id_cargo) {
		List<Funcionario> funcionario = funcionarioServ.fetchByCargo(id_cargo);
		return funcionario;
	}	
	
	@GetMapping("/funcionario/lider-projeto/{id_projeto}")
	public ResponseEntity<Funcionario> fetchFuncionarioByProj(@PathVariable Integer id_projeto) {
		Funcionario funcionario = funcionarioServ.fetchFuncionarioByProj(id_projeto);
		return ResponseEntity.ok().body(funcionario);
	}
	
	@GetMapping("/funcionario-sem-projeto")
	public List<Funcionario> funcSemProjeto() {
		List<Funcionario> funcionario = funcionarioServ.funcSemProjeto();
		return funcionario;
	}
	
	@GetMapping("/funcionario-nome/{func_nome}")
	public ResponseEntity<Funcionario> buscarFuncionarioPeloNome(@PathVariable String func_nome) {
		Funcionario funcionario = funcionarioServ.buscarFuncionarioPeloNome(func_nome);
		return ResponseEntity.ok().body(funcionario);
	}
	
	@PostMapping("/funcionario")
	public ResponseEntity<Funcionario> addJob(@RequestParam(value="cargo")Integer id_cargo, @RequestBody Funcionario funcionario) {
		funcionario = funcionarioServ.addWorker(id_cargo, funcionario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
											 .path("/funcionario/{id}")
											 .buildAndExpand(funcionario.getId_funcionario())
											 .toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PostMapping("/funcionario-sem-cargo")
	public ResponseEntity<Funcionario> inserirFuncionarioSemCargo(@RequestBody Funcionario funcionario) {
		funcionario = funcionarioServ.inserirFuncionarioSemCargo(funcionario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
											 .path("/{id}")
											 .buildAndExpand(funcionario.getId_funcionario())
											 .toUri();
		return ResponseEntity.created(uri).build();
	}
	
	
	@DeleteMapping("/funcionario/{id_funcionario}")
	public ResponseEntity<Void> deleteWorker(@PathVariable Integer id_funcionario) {
		funcionarioServ.deleteWorker(id_funcionario);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/{id_funcionario}")
	public ResponseEntity<Void> editWorker(@RequestParam(value="projeto")Integer id_projeto, @PathVariable Integer id_funcionario, @RequestBody Funcionario funcionario) {
		funcionario.setId_funcionario(id_funcionario);
		funcionario = funcionarioServ.editWorker(id_projeto, funcionario);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/troca-cargo/{id_funcionario}") 
	public ResponseEntity<Void> editWorkerFromJob(@RequestParam(value="cargo")Cargo cargo, @PathVariable Integer id_funcionario, @RequestBody Funcionario funcionario) {
		funcionario.setId_funcionario(id_funcionario);
		funcionario.setCargo(cargo);
		funcionario = funcionarioServ.editWorkerFromJob(funcionario);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/definir-projeto/{id_funcionario}/{id_projeto}")
	public ResponseEntity<Projeto> atribuirProjetoFunc(@PathVariable Integer id_funcionario, @PathVariable Integer id_projeto) {
		funcionarioServ.atribuirProjetoFunc(id_funcionario, id_projeto);
		return ResponseEntity.noContent().build();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
