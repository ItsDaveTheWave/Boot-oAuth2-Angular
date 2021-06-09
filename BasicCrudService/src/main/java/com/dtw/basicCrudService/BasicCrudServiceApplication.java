package com.dtw.basicCrudService;

import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BasicCrudServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BasicCrudServiceApplication.class, args);
	}
	
	@Bean
	public Validator getValidatorFactory() {

		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		return factory.getValidator();
	}
}