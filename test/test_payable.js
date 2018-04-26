Sample = artifacts.require('./Sample.sol');

contract('Sample', function(accounts){
  it('can be paid', async function(){
    // pay the contract then check its balance
    let sample = await Sample.deployed();
    await sample.deposit({value: 9999999999});
    let balance = await sample.getBalance.call();
    assert.equal(balance.toNumber(), 9999999999);

    //withdraw from the contract, then check its balance
    account1 = accounts[1]
    let account1Balance = web3.eth.getBalance(account1);
    await sample.withdraw(account1);
    let contractBalance = await sample.getBalance.call();
    let account1BalanceAfter = web3.eth.getBalance(account1);

    assert.equal(contractBalance.toNumber(), 0);
    assert.isTrue(account1Balance.toNumber() < account1BalanceAfter.toNumber());
  });
});
