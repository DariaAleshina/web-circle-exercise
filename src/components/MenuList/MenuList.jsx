import styles from './MenuList.module.css';
import MenuItem from '../MenuItem/MenuItem';

const MenuList = ({ dishes, placeholderMessage }) => {
  return (
    <div className={styles.menu}>
      {dishes.length > 0 ? (
        dishes.map(dish => <MenuItem dish={dish} key={dish.idMeal} />)
      ) : (
        <p>{placeholderMessage}</p>
      )}
    </div>
  );
};

export default MenuList;
