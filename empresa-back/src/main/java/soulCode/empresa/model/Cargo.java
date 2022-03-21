package soulCode.empresa.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Cargo {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_cargo;
	
	@Column(nullable = false, length = 20)
	private String cargo_nome;
	
	@Column(nullable = true, length = 25)
	private String cargo_atribuicao;
	
	@OneToMany(mappedBy = "cargo")
	private List<Funcionario> funcionario = new ArrayList<>();

	public Integer getId_cargo() {
		return id_cargo;
	}

	public void setId_cargo(Integer id_cargo) {
		this.id_cargo = id_cargo;
	}

	public String getCargo_nome() {
		return cargo_nome;
	}

	public void setCargo_nome(String cargo_nome) {
		this.cargo_nome = cargo_nome;
	}

	public String getCargo_atribuicao() {
		return cargo_atribuicao;
	}

	public void setCargo_atribuicao(String cargo_atrinuicao) {
		this.cargo_atribuicao = cargo_atrinuicao;
	}

	public List<Funcionario> getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(List<Funcionario> funcionario) {
		this.funcionario = funcionario;
	}
	
}
