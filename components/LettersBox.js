import styles from '../styles/components/CheckingBox.module.css';
import CustomCheckbox from './CustomCheckbox';

export default function LettersBox({state, handleChange}) {
    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <label data-tip='Whether or not the password should have letters'>Letters</label>
            </div>
            <div className={styles.input}>
                <CustomCheckbox text="Uppercase" value={state.useUppercaseLetters} handleChange={(newValue) => handleChange('useUppercaseLetters', newValue)} />
                <CustomCheckbox text="Lowercase" value={state.useLowercaseLetters} handleChange={(newValue) => handleChange('useLowercaseLetters', newValue)} />
            </div>
        </div>
    )
}
