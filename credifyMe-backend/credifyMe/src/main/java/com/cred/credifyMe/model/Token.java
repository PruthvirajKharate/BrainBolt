package com.cred.credifyMe.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Token")
public class Token {
	@Id
	public ObjectId id;
	public String tokenType;
	public int score;
	public String recipient;
	public String verifier;
	public String detail;
	public String ipfs;

	public Token(String tokenType, int score, String recipient, String verifier, String detail, String ipfs) {
		this.tokenType = tokenType;
		this.score = score;
		this.recipient = recipient;
		this.verifier = verifier;
		this.detail = detail;
		this.ipfs = ipfs;
	}

	public Object getTokenType() {
		return tokenType;
	}

	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public String getRecipient() {
		return recipient;
	}

	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}

	public String getVerifier() {
		return verifier;
	}

	public void setVerifier(String verifier) {
		this.verifier = verifier;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public String getIpfs() {
		return ipfs;
	}

	public void setIpfs(String ipfs) {
		this.ipfs = ipfs;
	}
}
