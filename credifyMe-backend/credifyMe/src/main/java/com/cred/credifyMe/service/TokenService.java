package com.cred.credifyMe.service;

import com.cred.credifyMe.model.Token;
import com.cred.credifyMe.repository.TokenRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TokenService {
	@Autowired
	private TokenRepository tokenRepository;
	public List<Token> findAllTokens(){
		return tokenRepository.findAll();
	}
	public Optional<Token> findById(ObjectId id){
		return tokenRepository.findById(id);
	}

	public List<Token> findTokenByType(String tokenType){
		return tokenRepository.findAllByTokenType(tokenType);
	}

	public int giveScore(ObjectId id){
		return  tokenRepository.findById(id).get().getScore();
	}

	public Token createToken(String tokenType, int score, String recipient, String verifier, String details, String ipfs){
		Token token = new Token(tokenType, score, recipient, verifier,details, ipfs);
		return tokenRepository.save(token);
	}
}
