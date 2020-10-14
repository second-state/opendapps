pragma solidity ^0.4.0;

contract OasisTweet {

    address owner;
    string public message;
    string public image;
    uint256 public price;
    struct Comment {
        string name;
        string comment;
        bool isValue;
    }
    mapping (address => Comment) comments;
    address [] addrs;

    function OasisTweet (string _message, string _image, uint256 _price) public {
        owner = msg.sender;
        message = _message;
        image = _image;
        price = _price;
    }

    function setMessage (string _message) public {
        require (msg.sender == owner);
        message = _message;
    }

    function setImage (string _image) public {
        require (msg.sender == owner);
        image = _image;
    }

    function setPrice (uint256 _price) public {
        require (msg.sender == owner);
        price = _price;
    }

    function addComment (string _name, string _comment) public payable {
        require(msg.value >= price);
        if (!comments[msg.sender].isValue) {
            addrs.push(msg.sender);
        }
        comments[msg.sender] = Comment(_name, _comment, true);
    }

    function getComment(address _addr) public constant returns(string, string) {
        return (comments[_addr].name, comments[_addr].comment);
    }

    function getAddrs () public constant returns (address []) {
        return addrs;
    }

    function withdraw () public {
        require (msg.sender == owner);
        owner.transfer(this.balance);
    }
}
