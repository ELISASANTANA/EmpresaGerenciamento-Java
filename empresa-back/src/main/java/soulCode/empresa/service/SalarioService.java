package soulCode.empresa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCode.empresa.model.Funcionario;
import soulCode.empresa.model.Salario;
import soulCode.empresa.model.StatusSalario;
import soulCode.empresa.repository.SalarioRepository;

@Service
public class SalarioService {

	@Autowired
	private SalarioRepository salarioRepo;
	
	@Autowired
	private FuncionarioService funcionarioService;
	
	public List<Salario> buscarTodosSalario() {
		return salarioRepo.findAll();
	}
	
	public Salario buscarUmSalario(Integer codigo) {
		Optional<Salario> salario = salarioRepo.findById(codigo);
		return salario.orElseThrow();
	}
	
	public List<Salario> salariosDoFuncionario(Integer id_funcionario) {
		List<Salario> salario = salarioRepo.salariosDoFuncionario(id_funcionario);
		return salario;
	}
	
	public Salario inserirSalario(Salario salario, Integer id_funcionario) {
		salario.setCodigo(null);
		Funcionario funcionario = funcionarioService.findOneWorker(id_funcionario);
		salario.setFuncionario(funcionario);
		return salarioRepo.save(salario);
	}
	
	public Salario editarPagamento(Salario salario, Integer codigo, Integer id_funcionario) {
		buscarUmSalario(codigo);
		Funcionario funcionario = funcionarioService.findOneWorker(id_funcionario);
		salario.setFuncionario(funcionario);
		return salarioRepo.save(salario);
	}
	
	public Salario pagarSalario(Integer codigo) {
		Salario salario = buscarUmSalario(codigo);
		StatusSalario status1 = StatusSalario.RECEBIDO;
		salario.setSalario_status(status1);
		return salarioRepo.save(salario);
	}
	
	public Salario cancelarSalario(Integer codigo) {
		Salario salario = buscarUmSalario(codigo);
		StatusSalario status2 = StatusSalario.ATRASADO;
		salario.setSalario_status(status2);
		return salarioRepo.save(salario);
	}
	
	public void deletarSalario(Integer codigo) {
		salarioRepo.deleteById(codigo);
	}	
	
}
