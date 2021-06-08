package com.dtw.basicCrudService.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dtw.basicCrudService.entity.Car;

public interface CarRepo extends JpaRepository<Car, Long> {

}