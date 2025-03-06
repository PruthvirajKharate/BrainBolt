// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OrganizationRegistry {
    address public admin;

    struct Organization {
        address wallet;
        string ipfsCid;
        uint256 reputation;
        address[] members;
        address[] validators;
        bytes32 digitalId;
        bool isRegistered;
    }

    mapping(address => Organization) public organizations;

    event OrganizationRegistered(address indexed org, bytes32 digitalId);
    event MemberAdded(address indexed org, address indexed member);
    event MemberRemoved(address indexed org, address indexed member);
    event ValidatorAdded(address indexed org, address indexed validator);
    event ValidatorRemoved(address indexed org, address indexed validator);

    constructor() {
        admin = msg.sender;
    }

    function registerOrganization(string memory _ipfsCid) external {
        require(!organizations[msg.sender].isRegistered, "Already Registered");
        bytes32 digitalId = keccak256(abi.encodePacked(msg.sender, block.timestamp));

        organizations[msg.sender] = Organization({
            wallet: msg.sender,
            ipfsCid: _ipfsCid,
            reputation: 0,
            members: new address[](0),          
            validators: new address[](0) ,
            digitalId: digitalId,
            isRegistered: true
        });

        emit OrganizationRegistered(msg.sender, digitalId);
    }

    function addMember(address _memberAddress) external {
        require(organizations[msg.sender].isRegistered, "Not Registered");
        require(!isMember(msg.sender, _memberAddress), "Already a Member");

        organizations[msg.sender].members.push(_memberAddress);
        emit MemberAdded(msg.sender, _memberAddress);
    }

    function removeMember(address _memberAddress) external {
        require(organizations[msg.sender].isRegistered, "Not Registered");

        address[] storage members = organizations[msg.sender].members;
        for (uint i = 0; i < members.length; ++i) {
            if (members[i] == _memberAddress) {
                members[i] = members[members.length - 1]; // Move last element to current index
                members.pop(); // Remove last element
                emit MemberRemoved(msg.sender, _memberAddress);
                return;
            }
        }
    }

    function addValidator(address _validatorAddress) external {
        require(organizations[msg.sender].isRegistered, "Not Registered");
        require(!isValidator(msg.sender, _validatorAddress), "Already a Validator");

        organizations[msg.sender].validators.push(_validatorAddress);
        emit ValidatorAdded(msg.sender, _validatorAddress);
    }

    function removeValidator(address _validatorAddress) external {
        require(organizations[msg.sender].isRegistered, "Not Registered");

        address[] storage validators = organizations[msg.sender].validators;
        for (uint i = 0; i < validators.length; ++i) {
            if (validators[i] == _validatorAddress) {
                validators[i] = validators[validators.length - 1];
                validators.pop();
                emit ValidatorRemoved(msg.sender, _validatorAddress);
                return;
            }
        }
    }

    function isMember(address org, address user) public view returns (bool) {
        address[] memory members = organizations[org].members;
        for (uint i = 0; i < members.length; ++i) {
            if (members[i] == user) return true;
        }
        return false;
    }

    function isValidator(address org, address user) public view returns (bool) {
        address[] memory validators = organizations[org].validators;
        for (uint i = 0; i < validators.length; ++i) {
            if (validators[i] == user) return true;
        }
        return false;
    }

    function getOrganization() public view returns(Organization memory){
        return organizations[msg.sender];
    }
}
