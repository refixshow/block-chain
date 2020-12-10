import { BlockChain, Block } from "../BlockChain";

describe("testing BlockChain", () => {
  const MockedBlockChain = new BlockChain();

  it("Should add Genesis Block on setup", () => {
    const expectedChainLengthAfterSetup = 1;
    expect(MockedBlockChain.chain.length).toBe(expectedChainLengthAfterSetup);
  });

  it("Should add new Blocks", () => {
    const expectedChainLengthAfterChanges = 3;

    MockedBlockChain.addNewBlock(
      new Block(1, new Date().toDateString(), { value: 50 })
    );

    MockedBlockChain.addNewBlock(
      new Block(1, new Date().toDateString(), { value: 100 })
    );

    expect(MockedBlockChain.chain.length).toBe(expectedChainLengthAfterChanges);
  });

  it("Should detect fake data changes", () => {
    MockedBlockChain.chain[1].data = { value: 100 };

    expect(MockedBlockChain.checkChainValidity()).toBeFalsy();
  });

  it("Should detect fake data and hash changes", () => {
    MockedBlockChain.chain[1].data = { value: 100 };
    MockedBlockChain.chain[1].hash = MockedBlockChain.chain[1].createHash();

    expect(MockedBlockChain.checkChainValidity()).toBeFalsy();
  });
});
