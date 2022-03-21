package soulCode.empresa.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	ImplementsUserDetailsService userDetailsService;
	
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic();
		http.cors();
		
		http.csrf().disable().authorizeRequests()
			.antMatchers(HttpMethod.GET, "/").permitAll()
			.antMatchers(HttpMethod.GET, "/home**/**").hasRole("ADMIN")
			.antMatchers(HttpMethod.POST, "/usuario**/**").hasRole("ADMIN")
			.antMatchers(HttpMethod.GET, "/role**/**").hasRole("USER")
			.anyRequest()
			.authenticated()
			.and()
		.formLogin()
			.permitAll()
		.and()
			.logout().permitAll();
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService)
		.passwordEncoder(new BCryptPasswordEncoder());
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("//cdn.jsdelivr.net/**", "//cdnjs.cloudflare.com/**", "//fonts.googleapis.com/**");
	}
	
}




















