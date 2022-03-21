package soulCode.empresa.controller.exceptions;

public class StandardError {
	
	private String timestamp;
	private Integer status;
	private String error;
	
	public StandardError(String timestamp, Integer status, String error) {
		this.timestamp = timestamp;
		this.status = status;
		this.error = error;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}
}
