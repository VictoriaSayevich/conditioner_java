package com.condiCool.springbootRestfulAPIhibernatepostgresql;

import com.condiCool.springbootRestfulAPIhibernatepostgresql.filters.AuthFilter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
//@ComponentScan({"com.condiCool.springbootRestfulAPIhibernatepostgresql.Controller"})
//@ComponentScan({"com.condiCool.springbootRestfulAPIhibernatepostgresql.Resources"})

//@ComponentScan({"com.condiCool.springbootRestfulAPIhibernatepostgresql.Repositories"})

public class SpringBootRestfulApiHibernatePostgresqlApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootRestfulApiHibernatePostgresqlApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean<CorsFilter> corsFilter() {
		FilterRegistrationBean<CorsFilter> registrationBean = new FilterRegistrationBean<>();
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.addAllowedOrigin("*");
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");
		source.registerCorsConfiguration("/**", config);
		registrationBean.setFilter(new CorsFilter(source));
		registrationBean.setOrder(0);
		return registrationBean;
	}

	@Bean
	public FilterRegistrationBean<AuthFilter> filterRegistrationBean() {
		FilterRegistrationBean<AuthFilter> registrationBean = new FilterRegistrationBean<>();
		AuthFilter authFilter = new AuthFilter();
		registrationBean.setFilter(authFilter);
		registrationBean.addUrlPatterns("/api/conditioner/*");
		return registrationBean;
	}
}
