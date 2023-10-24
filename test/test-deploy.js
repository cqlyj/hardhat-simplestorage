const {ethers}=require("hardhat")
const {expect, assert}=require("chai")

describe("SimpleStorage", function () {
  let simpleStorageFactory,simpleStorage

  this.beforeEach(async function(){
    simpleStorageFactory=await ethers.getContractFactory(
      "SimpleStorage"
    )
    simpleStorage = await simpleStorageFactory.deploy()
  })

  it("It should start with a favorite number of 0", async function(){
    const currentValue=await simpleStorage.retrieve()
    const expectedValue="0"
    assert.equal(currentValue.toString(),expectedValue)
  })
  it("It should update when we call store", async function(){
    const expectedValue="7"
    const transactionResponse=await simpleStorage.store(expectedValue)
    await transactionResponse.wait(1)

    const currentValue=await simpleStorage.retrieve()
    assert.equal(currentValue.toString(),expectedValue)
  })
})