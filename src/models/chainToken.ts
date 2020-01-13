import APIChainToken from './apiChainToken';

class ChainToken {
  id: string;
  name: string;
  symbol: string;
  supplyAmount: number;

  constructor(data: APIChainToken) {
    this.id = data.ID;
    this.name = data.Name;
    this.symbol = data.Symbol;
    this.supplyAmount = data.Amount;
  }
}

export default ChainToken;
