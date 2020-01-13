import * as React from 'react'
import { Route } from 'react-router-dom';
import Header from 'src/components/Header';
import Wallet from 'src/containers/Wallet';
import Landing from 'src/containers/Landing';
import loadWASM from 'src/services/wasm';
import FullScreenLoading from 'src/components/Loading/FullScreenLoading';
import { loadWalletAction } from 'src/redux/actions';
import { RootState } from 'src/redux/reducers';
import { connect } from 'react-redux';
import Settings from 'src/containers/Settings';

import './index.scss';

type Props = {
  loading: boolean,
  creating: boolean,
  loadWallet: Function,
  wallet: any,
}

const App:React.FunctionComponent<Props> = ({ loading, creating, loadWallet }) => {
  const [loadedWASM, setLoadedWASM] = React.useState(false);

  React.useEffect(() => {
    const loadWebAssembly = async () => {
      await loadWASM();
      setLoadedWASM(true);
      loadWallet();
    };

    loadWebAssembly();
  }, [loadWallet]);

  if (!loadedWASM || loading || creating) {
    return <FullScreenLoading />;
  }

  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Route exact path="/" component={Landing} />
        <Route exact path="/wallet" component={Wallet} />
        <Route exact path="/wallet/settings" component={Settings} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  creating: state.walletReducer.creating,
  loading: state.walletReducer.loading,
  wallet: state.walletReducer.wallet,
  error: state.walletReducer.error
});

const mapDispatchToProps = {
  loadWallet: loadWalletAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
