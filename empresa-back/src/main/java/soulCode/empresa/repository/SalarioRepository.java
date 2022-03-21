package soulCode.empresa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.empresa.model.Salario;

public interface SalarioRepository extends JpaRepository<Salario, Integer> {
	
	@Query(value = "SELECT * FROM db_empresa.salario WHERE id_funcionario = :id_funcionario", nativeQuery = true)
	List<Salario> salariosDoFuncionario(Integer id_funcionario);

}
