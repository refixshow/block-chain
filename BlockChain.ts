import SHA256 from "crypto-js/sha256";

interface BlockInterface {
  index: number;
  timestamp: string;
  data: unknown;
  hash: string;
  prevHash: string;

  createHash(): string;
}

class Block implements BlockInterface {
  index: number;
  timestamp: string;
  data: unknown;
  hash: string;
  prevHash: string;

  constructor(index: number, timestamp: string, data: unknown, prevHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = this.createHash();
  }

  createHash() {
    const rawHashSting = `${this.index}${this.prevHash}${
      this.timestamp
    }${JSON.stringify(this.data)}`;

    const Hash = SHA256(rawHashSting).toString();

    return Hash;
  }
}

class BlockChain {
  chain: BlockInterface[];
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  private createGenesisBlock(): BlockInterface {
    return new Block(
      0,
      new Date().toDateString(),
      "Genesis Block",
      "Genesis Block"
    );
  }

  private getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addNewBlock(block: BlockInterface) {
    block.prevHash = this.getLastBlock().hash;
    block.hash = block.createHash();
    this.chain.push(block);
  }

  checkChainValidity() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const prevBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.createHash()) {
        return false;
      }

      if (currentBlock.prevHash !== prevBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

export { BlockChain, Block };
