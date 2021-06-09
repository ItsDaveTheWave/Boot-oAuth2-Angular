package com.dtw.basicCrudService.controller;

import java.util.List;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dtw.basicCrudService.entity.Car;
import com.dtw.basicCrudService.errorHandling.EntityNotFoundException;
import com.dtw.basicCrudService.service.CarService;

@RestController
@RequestMapping("car")
@CrossOrigin("http://localhost:4200")
public class CarController {

	@Autowired
	private CarService carService;
	
	@GetMapping
	public ResponseEntity<List<Car>> getAll() {
		return ResponseEntity.ok(carService.getAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Car> getOne(@PathVariable Long id) throws EntityNotFoundException {
		return ResponseEntity.ok(carService.getOne(id));
	}
	
	@PostMapping
	public ResponseEntity<Car> create(@RequestBody @Valid Car car) {
		return new ResponseEntity<Car>(carService.create(car), HttpStatus.CREATED);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Car> update(@PathVariable Long id, @RequestBody @Valid Car car) throws EntityNotFoundException {
		return ResponseEntity.ok(carService.update(id, car));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) throws EntityNotFoundException {
		carService.delete(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}