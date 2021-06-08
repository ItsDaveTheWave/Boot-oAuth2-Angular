package com.dtw.basicCrudService.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dtw.basicCrudService.entity.Car;
import com.dtw.basicCrudService.repo.CarRepo;

@RestController
@RequestMapping("car")
public class CarController {

	@Autowired
	private CarRepo carRepo;
	
	@GetMapping
	public ResponseEntity<List<Car>> getAll() {
		List<Car> cars = carRepo.findAll();
		if(cars.size() == 0) return new ResponseEntity<List<Car>>(HttpStatus.NO_CONTENT);
		else return ResponseEntity.ok(cars);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Car> getOne(@PathVariable Long id) {
		Optional<Car> optCar = carRepo.findById(id);
		if(optCar.isPresent()) return ResponseEntity.ok(optCar.get());
		else return new ResponseEntity<Car>(HttpStatus.NOT_FOUND);
	}
}