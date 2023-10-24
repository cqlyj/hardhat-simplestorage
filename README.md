# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## **Attention**
The ethers is of version 6 and to wait for block to be mined, below is the newest pattern.
```js
await contract.deploymentTransaction().wait()
```
When it comes to wait for function, it should be
```js
 await function.wait()
```
To get the address of the contract, instead of :
```js
contract.address
```
The new pattern is:
```js
contract.target
```
The chainId of **Sepolia** is **11155111**

When connect to the **coinmarketcap API**, make sure to use VPN!

# Thank you!
This project is done in 2023/10/24 by LuoYingjie, if you have any question about this, feel free to contact me!