package soulCode.empresa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import soulCode.empresa.model.Funcionario;
import soulCode.empresa.model.Projeto;
import soulCode.empresa.repository.FuncionarioRepository;
import soulCode.empresa.repository.ProjetoRepository;
import soulCode.empresa.service.exceptions.DataIntegrityViolationException;
import soulCode.empresa.service.exceptions.ObjectNotFoundException;

@Service
public class ProjetoService {
	
	@Lazy
	@Autowired
	private FuncionarioService funcionarioServ;
	
	@Autowired
	private ProjetoRepository projetoRepo;
	
	@Autowired
	private FuncionarioRepository funcionarioRepo;
	
	public List<Projeto> allProjects() {
		return projetoRepo.findAll();
	}
	
	public Projeto oneProject(Integer id_projeto) {
		Optional<Projeto> projeto = projetoRepo.findById(id_projeto);
		return projeto.orElseThrow();
	}
	
	public List<List> projetoComSeulider() {
		return projetoRepo.projetoComSeulider();
	}
	
	public List<Projeto> projetoSemLider() {
		return projetoRepo.projetoSemLider();
	}
	
	public Projeto addProject(Integer id_funcionario, Projeto projeto) {
		projeto.setId_projeto(null);
		if(id_funcionario != null) {
			Funcionario funcionario = funcionarioServ.findOneWorker(id_funcionario);
			funcionario.setProjeto(projeto);
		}
		return projetoRepo.save(projeto);
	}
	
	public Projeto cadastrarProjeto(Projeto projeto) {
		projeto.setId_projeto(null);
		return projetoRepo.save(projeto);
    }
	
	public Projeto editProject(Projeto projeto) {
		oneProject(projeto.getId_projeto());
		return projetoRepo.save(projeto);
	}
	
	public Projeto chooseLeader(Integer id_projeto, Integer id_funcionario) {
		Projeto projeto = oneProject(id_projeto);
		Funcionario funcAnterior = funcionarioServ.fetchFuncionarioByProj(id_projeto);
		Funcionario funcionario = funcionarioServ.findOneWorker(id_funcionario);
		if(projeto.getFuncionario() != null) {
			projeto.setFuncionario(null);
			funcAnterior.setProjeto(null);
		}
		projeto.setFuncionario(funcionario);
		funcionario.setProjeto(projeto);
		return projetoRepo.save(projeto);
	}

	
	public Projeto deixarProjSemLider(Integer id_projeto, Integer id_funcionario) {
		Projeto projeto = oneProject(id_projeto);
		projeto.setFuncionario(null);
		Funcionario funcionario = funcionarioServ.findOneWorker(id_funcionario);
		funcionario.setProjeto(null);
		return projetoRepo.save(projeto);
	}
	
	public Projeto fetchProjetoByFunc(Integer id_funcionario) {
		Projeto projeto = projetoRepo.fetchProjetoByFunc(id_funcionario);
		return projeto;
	}
	
	public Projeto editarProjeto(Projeto projeto) {
		oneProject(projeto.getId_projeto());
		return projetoRepo.save(projeto);
	}
	
	public void deletarProjeto(Integer id_projeto) {
		projetoRepo.deleteById(id_projeto);	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
