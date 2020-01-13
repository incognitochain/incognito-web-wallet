import { combineReducers } from 'redux'
import bridgeTokenReducer, { BridgeTokenState } from './bridgeToken'
import walletReducer, { WalletState } from './wallet';

export interface RootState {
  bridgeTokenReducer: BridgeTokenState,
  walletReducer: WalletState,
}

const rootReducer = combineReducers({
  bridgeTokenReducer,
  walletReducer,
});

export default rootReducer;
