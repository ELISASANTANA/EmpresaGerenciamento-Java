package soulCode.empresa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.empresa.model.Projeto;

public interface ProjetoRepository extends JpaRepository<Projeto, Integer> {
	
		@Query(value = "SELECT * FROM projeto WHERE fk_lider_resp is null;", nativeQuery = true)
		List<Projeto> projetoSemLider();
		
		@Query(value = "SELECT * FROM projeto WHERE fk_lider_resp = :id_funcionario", nativeQuery = true)
		Projeto fetchProjetoByFunc(Integer id_funcionario);
		
		@Query(value = "SELECT projeto.id_projeto, projeto.proj_nome, projeto.proj_filial, funcionario.func_nome, funcionario.func_cidade FROM funcionario right JOIN projeto ON projeto.id_projeto = funcionario.fk_id_projeto order by projeto.id_projeto;", nativeQuery = true)
		List<List> projetoComSeulider();
}
