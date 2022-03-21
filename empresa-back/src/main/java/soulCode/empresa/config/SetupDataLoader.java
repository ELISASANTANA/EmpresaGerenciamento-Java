//package soulCode.empresa.config;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.ApplicationListener;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.event.ContextRefreshedEvent;
//
//import soulCode.empresa.model.Role;
//import soulCode.empresa.model.Usuario;
//import soulCode.empresa.repository.RoleRepository;
//import soulCode.empresa.repository.UsuarioRepository;
//
//@Configuration
//public class SetupDataLoader implements ApplicationListener<ContextRefreshedEvent> {
//	
//	@Autowired
//	private UsuarioRepository usuarioRepo;
//	
//	@Autowired
//	private RoleRepository roleRepo;
//	
//	@Override
//	public void onApplicationEvent(ContextRefreshedEvent event) {
//		Role roleAdmin = createRoleIfNotFound("ROLE_ADMIN");
//		Role roleUser = createRoleIfNotFound("ROLE_USER");	
//		
//		Usuario Fernanda = new Usuario("Fernanda", "Pereira", "fernanda@gmail.com");
//		Usuario Ana = new Usuario("Ana", "Chinaia", "ana@gmail.com");
//		
//		Fernanda.setPassword("1234");
//		Ana.setPassword("1234");
//		
//		Fernanda.setUserName("fernanda");
//		Ana.setUserName("anachinaia");
//		
//		Fernanda.setRole(roleAdmin);
//		Ana.setRole(roleUser);
//		
//		createUserIfNotFound(Fernanda);
//		createUserIfNotFound(Ana);
//
//	}
//
//	private Usuario createUserIfNotFound(Usuario usuario) {
//		Optional<Usuario> userObj = usuarioRepo.findByEmailUser(usuario.getEmailUser());
//		if(userObj.isPresent()) {
//			return userObj.get();
//		}		
//		return usuarioRepo.save(usuario);		
//	}
//	
//	private Role createRoleIfNotFound(String nome) {
//		Optional<Role> roleObj = roleRepo.findByNome(nome);
//		if(roleObj.isPresent()) {
//			return roleObj.get();
//		} 
//		
//		return roleRepo.save(new Role(nome));
//		
//	}
//
//}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
