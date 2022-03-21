package soulCode.empresa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.empresa.model.Funcionario;
import soulCode.empresa.model.Projeto;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {
	
	@Query(value = "SELECT * FROM funcionario WHERE id_cargo = :id_cargo", nativeQuery = true)
	List<Funcionario> fetchByCargo(Integer id_cargo);
	
	@Query(value = "SELECT id_funcionario, func_nome, func_cidade, cargo_nome, cargo_atribuicao FROM cargo right JOIN funcionario ON funcionario.id_cargo = cargo.id_cargo order by func_nome", nativeQuery = true)
	List<List> workerAndJob();
	
	@Query(value = "SELECT * FROM funcionario WHERE fk_id_projeto = :id_projeto", nativeQuery = true)
	Funcionario fetchFuncionarioByProj(Integer id_projeto);
	
	@Query(value = "SELECT * FROM funcionario WHERE fk_id_projeto is null", nativeQuery = true)
	List<Funcionario> funcSemProjeto();
	
	@Query(value = "SELECT funcionario.id_funcionario, funcionario.func_nome, funcionario.func_cidade, projeto.id_projeto, projeto.proj_nome ,projeto.proj_filial FROM projeto right JOIN funcionario ON funcionario.id_funcionario = projeto.fk_lider_resp order by funcionario.func_nome;", nativeQuery = true)
	List<List> funcComSeuProjeto();
	
	@Query(value = "SELECT * FROM db_empresa.funcionario WHERE func_nome = :func_nome", nativeQuery = true)
	Funcionario fetchByName(String func_nome);
	
//	@Query(value = "SELECT * FROM db_empresa.funcionario WHERE id_funcionario = :id_funcionario", nativeQuery = true)
//	Funcionario fetchById(Integer id_funcionario);
	
	
	
	
}
