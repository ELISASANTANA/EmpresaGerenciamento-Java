package soulCode.empresa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCode.empresa.model.Usuario;
import soulCode.empresa.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepo;
	
	public List<Usuario> findAll() {
		return usuarioRepo.findAll();
	}
	
	public Usuario findUser(String username) {
		Optional<Usuario> usuario = usuarioRepo.findById(username);
		return usuario.orElseThrow();
	}
	
}
