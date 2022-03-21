package soulCode.empresa.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

@Entity
public class Salario {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer codigo;
	
	@Column(nullable = false, length = 40)
	private String salario_descricao;
	
	@DateTimeFormat(pattern="dd-MM-yyyy")
//	@Temporal(TemporalType.DATE)
	@Column(columnDefinition = "date", nullable = false)
	private Date data_receber_salario;
	
	@NumberFormat(pattern = "#.##0,00")
	@Column(nullable = false)
	private Double salario_valor;
	
	@Enumerated(EnumType.STRING)
	private StatusSalario salario_status;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="id_funcionario")
	private Funcionario funcionario;

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getSalario_descricao() {
		return salario_descricao;
	}

	public void setSalario_descricao(String salario_descricao) {
		this.salario_descricao = salario_descricao;
	}

	public Date getData_receber_salario() {
		return data_receber_salario;
	}

	public void setData_receber_salario(Date data_receber_salario) {
		this.data_receber_salario = data_receber_salario;
	}

	public Double getSalario_valor() {
		return salario_valor;
	}

	public void setSalario_valor(Double salario_valor) {
		this.salario_valor = salario_valor;
	}

	public StatusSalario getSalario_status() {
		return salario_status;
	}

	public void setSalario_status(StatusSalario salario_status) {
		this.salario_status = salario_status;
	}

	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}

}
