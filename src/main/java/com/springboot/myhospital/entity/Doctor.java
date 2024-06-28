package com.springboot.myhospital.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="doctors")
public class Doctor {

	@Id
	int id;
	
	String name;
	
	String specialization;
	
	int experience;
	
	long contact;
	
	String email;
	
	String address;
	
	String dob;
	
}