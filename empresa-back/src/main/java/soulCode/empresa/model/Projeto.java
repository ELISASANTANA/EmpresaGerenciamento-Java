package soulCode.empresa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Projeto {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id_projeto;
	
	@Column(nullable = false, length = 30)
	private String proj_nome;
	
	
	@Column(nullable = false, length = 40)
	private String proj_filial;
	
	@OneToOne
	@JoinColumn(name = "fk_lider_resp", unique = true)
	@JsonIgnore
	private Funcionario funcionario;

	public Integer getId_projeto() {
		return id_projeto;
	}

	public void setId_projeto(Integer id_projeto) {
		this.id_projeto = id_projeto;
	}

	public String getProj_nome() {
		return proj_nome;
	}

	public void setProj_nome(String proj_nome) {
		this.proj_nome = proj_nome;
	}

	public String getProj_filial() {
		return proj_filial;
	}

	public void setProj_filial(String proj_filial) {
		this.proj_filial = proj_filial;
	}

	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}
}
