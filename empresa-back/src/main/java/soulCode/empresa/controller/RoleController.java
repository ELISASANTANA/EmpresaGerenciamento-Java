package soulCode.empresa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import soulCode.empresa.model.Role;
import soulCode.empresa.service.RoleService;

@CrossOrigin
@RestController
public class RoleController {
	
	@Autowired
	private RoleService roleServ;
	
	@GetMapping("/role")
	public List<Role> findAll() {
		List<Role> role = roleServ.findAll();
		return role;
	}

}
