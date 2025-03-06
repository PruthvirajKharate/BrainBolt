package com.cred.credifyMe.controller;

import com.cred.credifyMe.Dto.UserDto;
import com.cred.credifyMe.model.User;
import com.cred.credifyMe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@Controller
public class UserController {
	@Autowired
	private UserService userService;

	@GetMapping("/")
	public ResponseEntity<List<User>> findAllUser(){
		return new ResponseEntity<>(userService.findAllUsers(), HttpStatus.OK);
	}

//	@GetMapping("/address/{address}")
//	public ResponseEntity<Optional<User>> findUserByAddress(
//			@PathVariable String address
//	){
//		return new ResponseEntity<>(userService.findUserByAddress(address),HttpStatus.OK);
//	}

	@PostMapping("/")
	public ResponseEntity<User> createUser(
			UserDto userDto
	){
		return new ResponseEntity<>(userService.creatUser(
				userDto.name(),
				userDto.userAddress(),
				userDto.email(),
				userDto.gender()
		), HttpStatus.CREATED);
	}
}
