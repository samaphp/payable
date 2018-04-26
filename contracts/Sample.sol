pragma solidity ^0.4.17;

contract Sample {

  function deposit() payable {
  }

  function withdraw(address to) {
    to.transfer(this.balance);
  }

  function getBalance() returns (uint) {
    return this.balance;
  }
}
