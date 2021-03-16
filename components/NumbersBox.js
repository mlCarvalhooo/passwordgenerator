import styles from '../styles/components/CheckingBox.module.css';
import CustomCheckbox from './CustomCheckbox';

export default function NumbersBox({ state, handleChange }) {
    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <label data-tip='Whether or not the password should have numbers'>Numbers</label>
            </div>
            <div className={styles.input}>
                <CustomCheckbox text='' value={state.useNumbers} handleChange={(newValue) => handleChange('useNumbers', newValue)} />
            </div>
        </div>
    )
}
