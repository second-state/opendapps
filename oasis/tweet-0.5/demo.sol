pragma solidity >= 0.5.0;

contract OasisTweet {

    address payable owner;
    string public message;
    string public image;
    uint256 public price;
    // uint256 public currentvalue;
    struct Comment {
        string name;
        string comment;
        bool isValue;
    }
    mapping (address => Comment) comments;
    address [] addrs;

    constructor (string memory _message, string memory _image, uint256 _price) public {
        owner = msg.sender;
        message = _message;
        image = _image;
        price = _price;
    }

    function setMessage (string memory _message) public {
        require (msg.sender == owner);
        message = _message;
    }

    function setImage (string memory _image) public {
        require (msg.sender == owner);
        image = _image;
    }

    function setPrice (uint256 _price) public {
        require (msg.sender == owner);
        price = _price;
    }

    function addComment (string memory _name, string memory _comment) public payable {
        require(msg.value >= price);
        if (!comments[msg.sender].isValue) {
            addrs.push(msg.sender);
        }
        comments[msg.sender] = Comment(_name, _comment, true);
    }

    function getComment(address _addr) public view returns(string memory, string memory) {
        return (comments[_addr].name, comments[_addr].comment);
    }

    function getAddrs () public view returns (address [] memory) {
        return addrs;
    }

    function withdraw () public {
        require (msg.sender == owner);
        owner.transfer(address(this).balance);
    }
}
