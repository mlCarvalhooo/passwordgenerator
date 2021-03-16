import styles from '../styles/components/CheckingBox.module.css';
import CustomCheckbox from './CustomCheckbox'

export default function SymbolsBox({ state, handleChange }) {
    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <label data-tip='Whether or not the password should have symbols'>Symbols</label>
            </div>
            <div className={styles.input}>
                <CustomCheckbox text='' value={state.useSymbols} handleChange={(newValue) => handleChange('useSymbols', newValue)} />
            </div>
        </div>
    )
}
