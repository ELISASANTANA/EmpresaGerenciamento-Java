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

import soulCode.empresa.model.Funcionario;
import soulCode.empresa.model.Projeto;
import soulCode.empresa.service.ProjetoService;

@CrossOrigin
@RestController
@RequestMapping("empresa")
public class ProjetoController {
	
	@Autowired
	private ProjetoService projetoServ;
	
	@GetMapping("/projeto")
	public List<Projeto> allProjects() {
		List<Projeto> projeto = projetoServ.allProjects();
		return projeto;
	}
	
	@GetMapping("/projeto/{id_projeto}")
	public ResponseEntity<?> oneProject(@PathVariable Integer id_projeto) {
		Projeto projeto = projetoServ.oneProject(id_projeto);
		return ResponseEntity.ok().body(projeto);
	}
	
	@GetMapping("/projeto-sem-lider")
	public List<Projeto> projetoSemLider() {
		List<Projeto> projeto = projetoServ.projetoSemLider();
		return projeto;
	}
	
	@GetMapping("/funcionario/projeto-lider/{id_funcionario}")
	public ResponseEntity<Projeto> fetchProjetoByFunc(@PathVariable Integer id_funcionario) {
		Projeto projeto = projetoServ.fetchProjetoByFunc(id_funcionario);
		return ResponseEntity.ok().body(projeto);
	}
	
	@GetMapping("/projeto/projeto-e-lider")
	public List<List> projetoComSeulider() {
		List<List> projetoLider = projetoServ.projetoComSeulider();
		return projetoLider;
	}
	
	@PostMapping("/projeto")
	public ResponseEntity<Projeto> addProject(@RequestParam(value="funcionario", required = false)Integer id_funcionario, @RequestBody Projeto projeto) {
		projeto = projetoServ.addProject(id_funcionario, projeto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(projeto.getId_projeto()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PostMapping("/adicionar-projeto")
	public ResponseEntity<Projeto> cadastrarProjeto(@RequestBody Projeto projeto) {
		projeto = projetoServ.cadastrarProjeto(projeto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				 .path("/{id}")
				 .buildAndExpand(projeto.getId_projeto())
				 .toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/projeto/{id_projeto}")
	public ResponseEntity<Void> editProject(@PathVariable Integer id_projeto, @RequestBody Projeto projeto) {
		projeto.setId_projeto(id_projeto);
		projeto = projetoServ.editProject(projeto);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/projeto/definir-lider/{id_projeto}/{id_funcionario}")
	public ResponseEntity<Funcionario> chooseLeader(@PathVariable Integer id_projeto, @PathVariable Integer id_funcionario) {
		projetoServ.chooseLeader(id_projeto, id_funcionario);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/projeto/remover-lider/{id_projeto}/{id_funcionario}")
	public ResponseEntity<Funcionario> deixarProjSemLider(@PathVariable Integer id_projeto, @PathVariable Integer id_funcionario) {
		projetoServ.deixarProjSemLider(id_projeto, id_funcionario);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/editar-projeto/{id_projeto}")
	public ResponseEntity<Void> editarProjeto(@PathVariable Integer id_projeto, @RequestBody Projeto projeto) {
		projeto.setId_projeto(id_projeto);
		projeto = projetoServ.editarProjeto(projeto);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/projeto/{id_projeto}")
	public ResponseEntity<Void> deletarProjeto(@PathVariable Integer id_projeto) {
		projetoServ.deletarProjeto(id_projeto);
		return ResponseEntity.noContent().build();
	}
	
	
}
