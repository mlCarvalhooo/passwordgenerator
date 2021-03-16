import styles from '../styles/components/LengthBox.module.css';

export default function LengthBox({ state, handleChange }) {
    return (
        <>
            <div
                className={state.animationLengthBlinking ? styles.warningShown : styles.warningHidden}
                onAnimationEnd={() => handleChange('animationLengthBlinking', false)}
            />
            <div className={styles.lengthBox}>
                <div className={state.errors.length ? styles.errorTitle : styles.title} data-tip='The number of characters that your password should have.<br /> This number must me beetween 1 and 1024!'>
                    <label>Length</label>
                </div>
                <div className={state.errors.length ? styles.errorInput : styles.input}>
                    <input
                        type='number'
                        defaultValue={state.length}
                        min={1}
                        max={1024}
                        onChange={(event) => handleChange('length', event.target.value)}
                    />
                </div>
            </div>
        </>
    )
}