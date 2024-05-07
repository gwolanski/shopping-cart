import githubIcon from '../assets/github.png';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <a href="https://github.com/gwolanski" className={styles.gitLink}>
                <img src={githubIcon} alt="github icon" className={styles.gitHubIcon} />
                <div>gwolanski</div>
            </a>
        </div>
    )
}