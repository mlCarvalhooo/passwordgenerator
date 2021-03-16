import styles from '../styles/components/SocialMediaList.module.css'
import { IoIosArrowBack } from 'react-icons/io'
import { IoLogoDiscord } from 'react-icons/io5'
import { AiOutlineTwitter, AiOutlineGithub, AiFillFacebook } from 'react-icons/ai'
import { SiFiverr } from 'react-icons/si';
import { useState } from 'react';

export default function SocialMediaList() {
    const [isHover, setIsHover] = useState(false);
    return (
        <div className={isHover ? styles.hoveredContainer : styles.notHoveredContainer} onMouseOut={() => setIsHover(false)} onMouseOver={() => setIsHover(true)}>
            <div className={styles.arrowContainer}>
                <IoIosArrowBack className={styles.arrow} size="30px" />
            </div>

            <div className={styles.socialMedia}>
                <a href='https://www.facebook.com/mlCarvalhooo' target='_blank'>
                    <AiFillFacebook className={styles.twitterLogo} size="30px" />
                </a>
                <a href='https://www.twitter.com/mlCarvalhooo' target='_blank'>
                    <AiOutlineTwitter className={styles.twitterLogo} size="30px" />
                </a>
                <a href="https://discord.gg/AVapadxyRP" target='_blank'>
                    <IoLogoDiscord className={styles.twitterLogo} size="30px" />
                </a>
                <a href="https://github.com/mlCarvalhooo" target='_blank'>
                    <AiOutlineGithub className={styles.github} size="30px" />
                </a>
                <a href="https://www.fiverr.com/mlcarvalhooo" target='_blank'>
                    <SiFiverr className={styles.twitterLogo} size="30px" />
                </a>
            </div>
        </div>
    )
}