package com.springboot.myhospital.entity;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.bind.DefaultValue;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="appointments")
public class Appointment {

	@Id
	private int id;
	
	@Column(name="doctor_id")
	private int doctorId;
	
	private String username;
	
	@Column(name="patient_name")
	private String name;
	
	private String gender;
	
	private int age;
	
	private long mobile;
	
	private String address;
	
	@Column(name="appointment_date",length=50)
	private String appointmentDate;
	
	private String status;
	
}
