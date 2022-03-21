package soulCode.empresa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCode.empresa.model.Cargo;
import soulCode.empresa.model.Funcionario;
import soulCode.empresa.model.Projeto;
import soulCode.empresa.repository.CargoRepository;
import soulCode.empresa.repository.FuncionarioRepository;
import soulCode.empresa.repository.ProjetoRepository;
import soulCode.empresa.service.exceptions.ObjectNotFoundException;

@Service
public class FuncionarioService {
	
	@Autowired
	private CargoRepository cargoRepo;
	
	@Autowired
	private ProjetoService projetoServ;
	
	@Autowired
	private ProjetoRepository projetoRepo;
	
	@Autowired
	private CargoService cargoServ;
	
	// injeção de dependência
	@Autowired
	private FuncionarioRepository funcionarioRepo;
	
	// retorno todos funcionarios cadastrados
	public List<Funcionario> findAllWorkers() {
		return funcionarioRepo.findAll();
	}
	
	public List<List> workerAndJob() {
		return funcionarioRepo.workerAndJob();
	}
	
	public List<List> funcComSeuProjeto() {
		return funcionarioRepo.funcComSeuProjeto();
	}
	
	// retornar apenas um funcionario
	public Funcionario findOneWorker(Integer id_funcionario) {
		Optional<Funcionario> funcionario = funcionarioRepo.findById(id_funcionario);
		return funcionario.orElseThrow(() -> new ObjectNotFoundException("Objeto não cadastro! O id procurado: " + id_funcionario + "nao existe no db"));
	}
	
	public List<Funcionario> funcSemProjeto() {
		return funcionarioRepo.funcSemProjeto();
	}
	
	public Funcionario fetchFuncionarioByProj(Integer id_projeto) {
		Funcionario funcionario = funcionarioRepo.fetchFuncionarioByProj(id_projeto);
		return funcionario;
	}
	
	public Funcionario buscarFuncionarioPeloNome(String func_nome) {
		Funcionario funcionario = funcionarioRepo.fetchByName(func_nome);
		return funcionario;
	}
	
	// adicionar um funcionario
	public Funcionario addWorker(Integer id_cargo, Funcionario funcionario) {
		funcionario.setId_funcionario(null);
		Cargo cargo = cargoServ.findOneJob(id_cargo);
		funcionario.setCargo(cargo);
		return funcionarioRepo.save(funcionario);
	}
	
	public Funcionario inserirFuncionarioSemCargo(Funcionario funcionario) {
		return funcionarioRepo.save(funcionario);
	}
	
	// deletar um funcionario
	public void deleteWorker(Integer id_funcionario) {
		funcionarioRepo.deleteById(id_funcionario);
	}
	
	public Funcionario editWorker(Integer id_projeto, Funcionario funcionario) {
		if(id_projeto != null) {
			Funcionario dadosAnterior = findOneWorker(funcionario.getId_funcionario());
			Projeto funcAnterior = dadosAnterior.getProjeto();
			if(funcAnterior != null) {
				funcAnterior.setFuncionario(null);;
				projetoRepo.save(funcAnterior);
			}
			Projeto projeto = projetoServ.oneProject(id_projeto);
			funcionario.setProjeto(projeto);
			projeto.setFuncionario(funcionario);
		}
		return funcionarioRepo.save(funcionario);
	}	
	
	
	public Funcionario editWorkerFromJob(Funcionario funcionario) {
		findOneWorker(funcionario.getId_funcionario());
		return funcionarioRepo.save(funcionario);
	}
	
	public List<Funcionario> fetchByCargo(Integer id_cargo) {
		List<Funcionario> funcionario = funcionarioRepo.fetchByCargo(id_cargo);
		return funcionario;
	}
	
	public Funcionario atribuirProjetoFunc(Integer id_funcionario, Integer id_projeto) {
		Funcionario funcionario = findOneWorker(id_funcionario);
		Projeto projetoAnterior = projetoServ.fetchProjetoByFunc(id_funcionario);
		Projeto projeto = projetoServ.oneProject(id_projeto);
		if(funcionario.getProjeto() != null) {
			funcionario.setProjeto(null);
			projetoAnterior.setFuncionario(null);
		}
		funcionario.setProjeto(projeto);
		projeto.setFuncionario(funcionario);
		return funcionarioRepo.save(funcionario);
	}
	
	public Funcionario salvarFoto(Integer id_funcionario, String caminhoFoto) {
		Funcionario funcionario = findOneWorker(id_funcionario);
		funcionario.setFunc_foto(caminhoFoto);
		return funcionarioRepo.save(funcionario);
	}
}
