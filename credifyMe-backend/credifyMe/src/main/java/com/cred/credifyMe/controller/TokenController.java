package com.cred.credifyMe.controller;

import com.cred.credifyMe.Dto.TokenDto;
import com.cred.credifyMe.model.Token;
import com.cred.credifyMe.service.TokenService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class TokenController {
	@Autowired
	TokenService tokenService;
	@GetMapping("/token")
	public ResponseEntity<List<Token>> findAllToken(){
		return new ResponseEntity<>(tokenService.findAllTokens(), HttpStatus.OK);
	}

	@GetMapping("/token/id/{id}")
	public ResponseEntity<Optional<Token>> findTokenById(
			@PathVariable ObjectId ket
			){
		return new ResponseEntity<>(tokenService.findById(ket), HttpStatus.OK);
	}

	@PostMapping("/token/pid")
	public ResponseEntity<Token> createToken(TokenDto tokenDto){

	return new ResponseEntity<>(tokenService.createToken(
			tokenDto.tokenType(),
			tokenDto.score(),
			tokenDto.recipient(),
			tokenDto.verifier(),
			tokenDto.detail(),
			tokenDto.ipfs()
	),HttpStatus.OK);}

}
