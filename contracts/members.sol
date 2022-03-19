// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Members {
    address DAOaddress; // variable that will contain the address of the contract deployer
    uint256 memberCount; // number of members

    struct member {
        bool canVote;
        address memberAdress;
        uint256 memberCount;
    }

    mapping(address => member) members;

    constructor() {
        DAOaddress = msg.sender; // setting the owner the contract deployer: The DAO
    }

    modifier onlyDAO() {
        require(msg.sender == DAOaddress, "Ownable: caller is not the DAO");
        _;
    }

    function addMember(address _newMemberAddress) public onlyDAO {
        members[_newMemberAddress].canVote = true;
        members[_newMemberAddress].memberAdress = _newMemberAddress;
        members[_newMemberAddress].memberCount = memberCount;
        memberCount++;
    }

    function removeMember(address _newMemberAddress) public onlyDAO {
        delete members[_newMemberAddress];
    }

    function verifyMember(address _thisMemberAddress)
        public
        view
        returns (bool)
    {
        bool userCanVote = members[_thisMemberAddress].canVote;
        return userCanVote;
    }

    modifier isMember(address _address) {
        require(members[_address].canVote, "You need to be a member");
        _;
    }

    // function listMembers() public view returns (address[] memory) {
    //     address[] memory ret = new address[](memberCount);
    //     for (uint256 i = 0; i < memberCount; i++) {
    //         ret[i] = members[i].memberAdress;
    //     }
    //     return ret;
    // }
}
