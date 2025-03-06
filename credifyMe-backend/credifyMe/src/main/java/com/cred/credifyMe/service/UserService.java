package com.cred.credifyMe.service;

import com.cred.credifyMe.model.User;
import com.cred.credifyMe.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	public List<User> findAllUsers(){
		return userRepository.findAll();
	}

//	public Optional<User> findUserByAddress(String address){
//		return userRepository.findByAddress(address);
//	}

	public User creatUser(String name, String userAddress, String email, String gender){
		User user = new User(name,userAddress,email,gender);
		return userRepository.save(user);
	}
}
