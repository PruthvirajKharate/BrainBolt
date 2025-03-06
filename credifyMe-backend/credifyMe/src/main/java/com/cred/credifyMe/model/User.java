package com.cred.credifyMe.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Users")
public class User {
	@Id
	private ObjectId id;
	private String name;
	private String userAddress;
	private String email;
	private String gender;
	private int age;
	private String mobileNumber;
	private String associatedOrganisation;

	public User( String name, String userAddress, String email, String gender) {

		this.name = name;
		this.userAddress = userAddress;
		this.email = email;
		this.gender = gender;
	}

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAssociatedOrganisation() {
		return associatedOrganisation;
	}

	public void setAssociatedOrganisation(String associatedOrganisation) {
		this.associatedOrganisation = associatedOrganisation;
	}
}
