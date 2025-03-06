package com.cred.credifyMe.repository;

import com.cred.credifyMe.model.Token;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TokenRepository extends MongoRepository<Token, ObjectId> {
	List<Token> findAllByTokenType(String tokenType);
}
