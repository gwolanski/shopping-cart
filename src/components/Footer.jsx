import githubIcon from '../assets/github.svg';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <a href="https://github.com/gwolanski" className={styles.gitLink}>
                <img src={githubIcon} alt="github icon" />
                <div>gwolanski</div>
            </a>
        </div>
    )
}