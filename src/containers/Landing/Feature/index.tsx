import * as React from 'react'
import { Icon } from 'antd';

import styles from './index.module.scss'

type Props = {
  icon: string,
  label: string,
  desc: string,
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void,
}

const Feature: React.FunctionComponent<Props> = ({ icon = 'star', label, desc, onClick }) => {
  return (
    <div
      className={styles.feature}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <Icon type="star" theme="filled" />
      <b className={styles.label}>{label}</b>
      <div className={styles.desc}>{desc}</div>
    </div>
  )
};

export default Feature;
