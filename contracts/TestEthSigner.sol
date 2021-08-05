pragma solidity 0.8.0;

contract TestEthSigner {

    uint256 public value;
    event GetValue(uint256 _val);

    function setValue(uint256 _value) public payable {
        value = _value;
        emit GetValue(value);
    }
}