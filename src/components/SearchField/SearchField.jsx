import styles from './SearchField.module.css';
import Spinner from '../icons/Spinner.jsx';

const SearchField = ({ value, onChange, showSpinner }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.spinner}>{showSpinner && <Spinner />}</span>

      <input
        placeholder="Filter dishes..."
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchField;
