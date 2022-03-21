package soulCode.empresa.model;

public enum StatusSalario {
	
	PENDENTE("Pendente"),
	RECEBIDO("Recebido"),
	ATRASADO("Atrasado");
	
	private String status;
	
	StatusSalario(String status) {
		this.status = status;
	}

	public String getStatus() {
		return status;
	}
}
