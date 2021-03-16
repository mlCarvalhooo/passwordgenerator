import styles from '../styles/components/GenerateButton.module.css';

export default function GenerateButton({ state, handleChange, onClick }) {
    return (
        <div
            className={state.animationGenerateButton ? styles.buttonAnimation : styles.button}
            onAnimationEnd={() => handleChange('animationGenerateButton', false)}
            onClick={() => {
                if (!state.animationGenerateButton) {
                    onClick();
                    handleChange('animationGenerateButton', true);
                }
            }}>
            <a>Generate!</a>
        </div>
    )
}
