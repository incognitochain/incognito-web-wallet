import * as React from 'react'
import { loadWalletAction } from 'src/redux/actions';
import { RootState } from 'src/redux/reducers';
import { connect } from 'react-redux';

import styles from './index.module.scss'
import Feature from './Feature';

type Props = {
  loading: boolean,
  creating: boolean,
  loadWallet: Function,
  wallet: any,
}

const features = [
  {
    label: 'Shield',
    desc: 'Shield your crypto',
    onClick: () => null,
  },
  {
    label: 'Send',
    desc: 'Send anonymously',
    onClick: () => null,
  },
  {
    label: 'Receive',
    desc: 'Receive anonymously',
    onClick: () => null,
  },
];

const Landing: React.FunctionComponent<Props> = ({ loading, creating, loadWallet }) => {
  return (
    <div className={styles.landing}>
      <h1 className={styles.title}>Go incognito</h1>
      <h4 className={styles.desc}>A privacy-first alternative for all your crypto activities. Watch how it works</h4>
      <div className={styles.features}>
        {features.map(item => (
          <Feature
            key={item.label}
            label={item.label}
            desc={item.desc}
            onClick={item.onClick}
            icon="star"
          />
        ))}
      </div>
    </div>
  )
};

const mapStateToProps = (state: RootState) => ({
  creating: state.walletReducer.creating,
  loading: state.walletReducer.loading,
  wallet: state.walletReducer.wallet,
  error: state.walletReducer.error,
});

const mapDispatchToProps = {
  loadWallet: loadWalletAction
};

export default connect(mapStateToProps, mapDispatchToProps)(
  React.memo(Landing)
);
