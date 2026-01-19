import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import MenuList from '../components/MenuList/MenuList';
import Button from '../components/Button/Button';

import styles from './WishlistView.module.css';

const WishlistView = ({ wishlist }) => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar>
        <h2 className={styles.header}>My Wishlist ({wishlist.length})</h2>
        <Button onClick={() => navigate('/')}>return Home</Button>
      </NavBar>
      <div className={styles.wrapper}>
        <MenuList dishes={wishlist} placeholder="no dishes found :(" />
      </div>
    </>
  );
};

export default WishlistView;
