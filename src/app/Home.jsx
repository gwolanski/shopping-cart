import styles from './styles/Home.module.css';
import yogaPic from '../assets/yoga.jpg';
import sweatsuitPic from '../assets/sweatpants.jpg';
import runnerPic from '../assets/runner.jpg';
import sneakersPic from '../assets/sneakers.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.topPhotosContainer}>
                <img src={yogaPic} alt="women doing yoga in activewear" className={styles.yogaPic} />
                <img src={sweatsuitPic} alt="man in sweatsuit" className={styles.sweatsuitPic} />
            </div>
            <div className={styles.smallViewPhotos}>
                <img src={yogaPic} alt="women doing yoga in activewear" className={styles.yogaPic} />
                <div className={styles.narrowPhotos}>
                    <img src={sweatsuitPic} alt="man in sweatsuit" className={styles.sweatsuitPic} />
                    <img src={sneakersPic} alt="sneakers" className={styles.sneakersPic} />
                </div>
                <img src={runnerPic} alt="man running" className={styles.runnerPic} />
            </div>
            <div className={styles.collectionTextContainer}>
                <div className={styles.collectionText}>Check out our current collection
                    <Link to='catalog' className={styles.link} data-testid='embeddedLink'> HERE</Link>
                </div>
            </div>
            <div className={styles.bottomPhotosContainer}>
                <img src={sneakersPic} alt="sneakers" className={styles.sneakersPic} />
                <img src={runnerPic} alt="man running" className={styles.runnerPic} />
            </div>
        </div>
    )
}