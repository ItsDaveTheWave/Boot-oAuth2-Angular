package com.dtw.basicCrudService.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dtw.basicCrudService.entity.Car;
import com.dtw.basicCrudService.repo.CarRepo;
import com.dtw.errorHandler.EntityNotFoundException;

@Service
public class CarService {

	@Autowired
	private CarRepo carRepo;
	
	public List<Car> getAll() {		
		return carRepo.findAll();
	}
	
	public Car getOne(Long id) throws EntityNotFoundException {
		Car car = carRepo.findById(id).orElseThrow(() -> new EntityNotFoundException(Car.class, id));
		return car;
	}
	
	public Car create(Car car) {
		return carRepo.save(car);
	}
	
	public Car update(Long id, Car car) 
			throws EntityNotFoundException {
		carRepo.findById(id).orElseThrow(() -> new EntityNotFoundException(Car.class, id));
		car.setId(id);
		return carRepo.save(car);
	}
	
	public void delete(Long id) 
			throws EntityNotFoundException {
		Car car = carRepo.findById(id).orElseThrow(() -> new EntityNotFoundException(Car.class, id));
		carRepo.delete(car);
	}
}