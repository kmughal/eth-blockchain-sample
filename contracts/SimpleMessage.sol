pragma solidity ^0.5.16;


contract SimpleMessage {
    string public message;
    event messageSent(string  message);
    function setMessage(string memory _message) public {
        message = _message;
        emit messageSent(message);
    }
}
   