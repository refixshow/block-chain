// wykorzystując dowolną bibliotekę do szyfrowania np wbudowane crypto
// zbuduj klasę, która będzie wykorzystywać schemat działania blockchain - doczytaj jak nie wiesz jak działa blockchain

// to Twoja klasa przetrzymująca bloki z informacjami - np np dokładnie 40 stringów z lorem ipsum

class InformationBlock {
  // propsy
  // createdAt
  // hash
  // prevHash
  // informations

  // metody
  add(information) {}
}

class BlockChain {
  // propsy
  // blocks

  // metody
  addNewBlock(block) {}
  getLastBlock() {}
  addInformationToLastBlock(information) {}
  checkChainValidity() {}
}
