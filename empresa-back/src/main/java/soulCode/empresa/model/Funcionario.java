package soulCode.empresa.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Funcionario {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id_funcionario;
	
	@Column(nullable = false, length = 60)
	private String func_nome;
	
	@Column(nullable = true, length = 30)
	private String func_cidade;
	
	@Column(nullable = true)
	private String func_foto;
	
	@ManyToOne
	@JoinColumn(name="id_cargo")
	@JsonIgnore
	private Cargo cargo;
	
	@OneToOne(cascade={CascadeType.PERSIST})
	@JoinColumn(name="fk_id_projeto", unique = true)
	private Projeto projeto;
//	for (Funcionario projeto = projeto.getFuncionario())) {
//	    projeto.setFuncionario(null);
//	}
//	session.delete(funcionario);

	public Integer getId_funcionario() {
		return id_funcionario;
	}

	public void setId_funcionario(Integer id_funcionario) {
		this.id_funcionario = id_funcionario;
	}

	public String getFunc_nome() {
		return func_nome;
	}

	public void setFunc_nome(String func_nome) {
		this.func_nome = func_nome;
	}

	public String getFunc_cidade() {
		return func_cidade;
	}

	public void setFunc_cidade(String func_cidade) {
		this.func_cidade = func_cidade;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}

	public Projeto getProjeto() {
		return projeto;
	}

	public void setProjeto(Projeto projeto) {
		this.projeto = projeto;
	}

	public String getFunc_foto() {
		return func_foto;
	}

	public void setFunc_foto(String func_foto) {
		this.func_foto = func_foto;
	}
}
