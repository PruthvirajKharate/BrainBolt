package com.cred.credifyMe.Dto;

public record TokenDto(String tokenType, int score, String verifier, String recipient, String detail, String ipfs) {
}
