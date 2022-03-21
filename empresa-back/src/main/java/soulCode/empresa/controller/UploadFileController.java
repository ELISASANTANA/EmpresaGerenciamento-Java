package soulCode.empresa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import soulCode.empresa.model.Funcionario;
import soulCode.empresa.service.FuncionarioService;
import soulCode.empresa.util.UploadFileUtil;

@RestController
@CrossOrigin
@RequestMapping("empresa")
public class UploadFileController {
	
	@Autowired
	private FuncionarioService funcionarioService;
	
	@PostMapping("/envio/{id_funcionario}")
	public ResponseEntity<String> enviarDados(@PathVariable Integer id_funcionario, MultipartFile foto, @RequestParam(value="nome")String nome) {
		String fileName = nome;
		String uploadDir = "/home/elisasantana/Documents/empresa-spring/empresa-front/src/assets/img";
		String nomeMaisCaminho = "assets/img/" + nome;
		
		Funcionario funcionario = funcionarioService.salvarFoto(id_funcionario, nomeMaisCaminho);
		
		try {
			UploadFileUtil.salvarArquivo(uploadDir, fileName, foto);
		} catch(Exception e) {
			System.out.println("Erro ao enviar arquivo" + e);
		}
		
		System.out.println("Sucesso ao subir arquivo" + nomeMaisCaminho);
		return ResponseEntity.ok("Arquivo enviado");
	}

}
