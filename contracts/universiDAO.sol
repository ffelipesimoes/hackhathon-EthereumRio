//SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

contract UniversiDAO {
    address owner = msg.sender;
    mapping(address => bool) public members;
    uint256 idCount;

    struct proposal {
        uint256 id;
        string data;
        uint256 valueToReward;
        address member;
        bool active;
        uint256 createdAt;
        uint256 deadline;
        mapping(address => bool) voters;
        uint256 voteFor;
        uint256 voteAgainst;
    }

    // proposal[] public proposals;
    mapping(uint256 => proposal) proposals;

    function CreateProposal(
        string memory _data,
        uint256 _valueToReward,
        uint256 timeStamp
    ) public {
        proposal memory newProposal = proposal({
            id: idCount,
            data: _data,
            valueToReward: _valueToReward,
            member: msg.sender,
            active: true,
            createdAt: block.timestamp,
            deadline: block.timestamp + timeStamp
        });
        idCount++;

        proposals.push(newProposal);
    }

    function getProposal(uint256 index)
        public
        view
        returns (
            uint256,
            string memory,
            uint256,
            address,
            bool,
            uint256,
            uint256
        )
    {
        return (
            proposals[index].id,
            proposals[index].data,
            proposals[index].valueToReward,
            proposals[index].member,
            proposals[index].active,
            proposals[index].createdAt,
            proposals[index].deadline
        );
    }

    function toVote(uint256 proposalId, bool vote) public returns (bool) {
        require(
            proposals[proposalId].voters[msg.sender] == false,
            "already voted"
        );
        if (vote) {
            proposals[proposalId].voteFor++;
        } else {
            proposals[proposalId].voteAgainst++;
        }
        proposals[proposalId].voters[msg.sender] = true;
    }

    function getParcialResult(uint256 proposalId) public view {
        require(
            proposals[proposalId].voteFor + proposals[proposalId].voteAgainst !=
                0,
            "no votes"
        );
        return
            (100 * proposals[proposalId].voteFor) /
            (proposals[proposalId].voteFor + proposals[proposalId].voteAgainst);
    }
}
