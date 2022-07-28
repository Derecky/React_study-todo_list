import styles from './Header.module.css';

import Logo from '../../assets/rocket.svg';
import { useTask } from '../../hooks/useTask';

export const Header = () => {

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />
      <h1 className={styles.to}>to</h1>
      <h1>do</h1>
    </header>
  );
}