import styles from '../styles/components/OutputBox.module.css';
import { FiCopy } from 'react-icons/fi';
import { FaShieldAlt } from 'react-icons/fa'
import { passwordStrength } from 'password-strength-score';
import { useState } from 'react';

export default function OutputBox({ state, handleChange }) {

    const [isHover, setIsHover] = useState(false);

    var color, strength;
    switch (state.passwordStrength) {
        case 1: color = '#870005'; strength = 'Very weak'; break;
        case 2: color = '#a1630d'; strength = 'Weak'; break;
        case 3: color = '#a19e0b'; strength = 'Medium'; break;
        case 4: color = '#81b030'; strength = 'Strong'; break;
        case 5: color = '#518001'; strength = 'Very Strong'; break;
        case 6: color = '#355400'; strength = 'Super Strong'; break;
    }

    return (
        <div className={styles.outputBox}>
            <div
                className={state.animationCopied ? styles.optionsAnimation : styles.optionsNotAnimation}
                onAnimationEnd={() => handleChange('animationCopied', false)}
                onClick={() => {
                    navigator.clipboard.writeText(state.password);
                    handleChange('animationCopied', true);
                }}
            >
                {state.animationCopied ? <a>Copied!</a> : <FiCopy size='34px' />}
            </div>
            <div className={styles.output}>
                <input type='text' value={state.password} readOnly />
                <div className={styles.strength} onMouseOut={() => setIsHover(false)} onMouseOver={() => setIsHover(true)}>
                    {!color ?
                        null
                        :
                        (isHover ?
                            <a>{strength}</a>
                            :
                            <FaShieldAlt className={styles.strengthIcon} size='20px' color={color} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
