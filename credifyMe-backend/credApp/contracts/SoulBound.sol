// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Soulbound is ERC721, Ownable {
    struct Credential {
        address verifier;
        uint256 issuedAt;
        string ipfscid;
        uint256 score;
    }

    mapping(uint256 => Credential) public credentials;
    uint256 private _tokenIdCounter;

    event CredentialIssued(address indexed recipient, uint256 tokenId, address verifier, string ipfscid, uint256 score);

    error SoulboundTokenCannotBeTransferred();

    constructor(address initialOwner) ERC721("Soulbound", "SOUL") Ownable(initialOwner) {}

    function issueCredential(address recipient, string memory ipfscid, uint256 score) external {
        _tokenIdCounter++;
        uint256 newTokenId = _tokenIdCounter;

        credentials[newTokenId] = Credential({
            verifier: msg.sender,
            issuedAt: block.timestamp,
            ipfscid: ipfscid,
            score: score
        });

        _safeMint(recipient, newTokenId);
        emit CredentialIssued(recipient, newTokenId, msg.sender, ipfscid, score);
    }

    function _update(address to, uint256 tokenId, address auth) internal override returns (address) {
        address from = super._update(to, tokenId, auth);

        if (from != address(0)) {
            revert SoulboundTokenCannotBeTransferred(); // Custom error for better gas efficiency
        }

        return from;
    }

    function getCredential(uint256 tokenId) external view returns(Credential memory){
        return credentials[tokenId];
    }
}