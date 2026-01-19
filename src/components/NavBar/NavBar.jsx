import styles from './NavBar.module.css';

const NavBar = ({ children }) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContentWrapper}>
        <h1>ReDI React Restaurant</h1>
        {children}
      </div>
    </div>
  );
};

export default NavBar;
