# CredifyMe

**CredifyMe** is a decentralized credentials verification system that issues verifiable achievements and academic records as NFTs using the ERC-721 standard. It combines blockchain transparency with traditional web infrastructure to provide a secure, tamper-proof method of verifying skills and certifications.

## Overview

CredifyMe allows institutions to issue non-fungible achievement tokens to users, which are permanently recorded on the Ethereum blockchain. Each token represents a unique, verifiable credential. A Spring Boot backend connects the smart contracts with traditional databases for hybrid storage and searchability.

## Key Features

### Credential Issuance
- ERC-721 token for each verified credential
- Tokens are minted by trusted institutions or authorities
- Stored with metadata on IPFS or centralized databases

### Verification System
- Publicly verifiable credentials on-chain
- Off-chain metadata for enriched context (e.g., transcript links, skill level)
- QR or token ID-based credential lookup

### Hybrid Architecture
- Backend built with Spring Boot for RESTful APIs
- MongoDB and/or SQL used to store issuer and user metadata
- Blockchain handles ownership and integrity

### Security and Authenticity
- Only verified issuers can mint tokens
- Tokens are immutable once issued
- MetaMask wallet integration for ownership verification

## Technology Stack

| Layer           | Technology                        |
|----------------|------------------------------------|
| Smart Contracts| Solidity (ERC-721 via OpenZeppelin)|
| Blockchain     | Ethereum (testnet)                 |
| Wallet         | MetaMask                           |
| Backend        | Java, Spring Boot                  |
| Database       | MongoDB + SQL                      |
| Frontend       | Planned React UI (TBD)             |

## Project Structure


├── contracts/ # Solidity smart contracts
│ └── AchievementToken.sol
├── backend/ # Spring Boot backend
│ ├── controllers/
│ ├── services/
│ └── repositories/
├── mongo/ # MongoDB schemas and documents
├── sql/ # SQL schema (if needed)
└── frontend/ # React UI (work in progress)

This is still an incomplete project and i will complete it in future
