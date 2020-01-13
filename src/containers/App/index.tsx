import * as React from 'react'
import { Route } from 'react-router-dom';
import Header from 'src/components/Header';
import Wallet from 'src/containers/Wallet';
import loadWASM from 'src/services/wasm';
import FullScreenLoading from 'src/components/Loading/FullScreenLoading';
import { loadWalletAction, getBridgeTokenListAction } from 'src/redux/actions';
import { RootState } from 'src/redux/reducers';
import { connect } from 'react-redux';

type Props = {
  loadWallet: Function,
  getBridgeTokens: Function,
  wallet: any,
}

const App:React.FunctionComponent<Props> = ({ loadWallet, wallet, getBridgeTokens }) => {
  const [loadedWASM, setLoadedWASM] = React.useState(false);

  React.useEffect(() => {
    const loadWebAssembly = async () => {
      await loadWASM();
      setLoadedWASM(true);
      loadWallet();
      getBridgeTokens();
    };

    loadWebAssembly();
  }, [loadWallet, getBridgeTokens]);

  React.useEffect(() => {
    const loadAccounts = async () => {
      const accounts = await wallet.listAccount();
      console.debug('ACCOUNTS', accounts);
    };

    if (wallet) {
      loadAccounts();
    }
  }, [wallet]);

  if (!loadedWASM) {
    return <FullScreenLoading />;
  }

  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Route exact path="/" component={Wallet} />
      </div>
    </div>
  )
};

const mapStateToProps = (state: RootState) => ({
  loading: state.walletReducer.loading,
  wallet: state.walletReducer.wallet,
  error: state.walletReducer.error,
});

const mapDispatchToProps = {
  loadWallet: loadWalletAction,
  getBridgeTokens: getBridgeTokenListAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);