package soulCode.empresa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import soulCode.empresa.model.Usuario;
import soulCode.empresa.service.UsuarioService;

@CrossOrigin
@RestController
//@RequestMapping("seguranca")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioServ;
	
	@GetMapping("/login")
	public String login() {
		return "Login efetuado com sucesso";
	}
	
	@GetMapping("/usuario")
	public List<Usuario> findAll() {
		List<Usuario> usuario = usuarioServ.findAll();
		return usuario;
	}
	
	@GetMapping("/usuario/{username}")
	public ResponseEntity<Usuario> findById(@PathVariable String username) {
		Usuario usuario = usuarioServ.findUser(username);
		return ResponseEntity.ok().body(usuario);
	}

}
