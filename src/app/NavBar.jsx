import styles from "./styles/NavBar.module.css";
import { Link } from "react-router-dom";
import fernIcon from "../assets/fern.png";
import PropTypes from 'prop-types';

export default function NavBar({ totalQuantity }) {

    return (
        <div className={styles.headerContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.nameContainer}>
                        <img src={fernIcon} alt="fern logo" className={styles.logo} />
                        <h1 className={styles.storeName}>FLO</h1>
                    </div>
                    <div className={styles.slogan}>Activewear designed to fit your lifestyle.</div>
                </div>
                <div className={styles.navContainer}>
                    <Link to='/'>
                        <img className={styles.navIcon} src="/home.png" alt="home" />
                    </Link>
                    <Link to='catalog'>
                        <img className={styles.navIcon} src="/catalog.png" alt="catalog" />
                    </Link>
                    <Link to='cart'>
                        <img className={styles.navIcon} src="/shoppingCart.png" alt="shopping cart" />
                        <div className={styles.itemNumber} data-testid='linkQuantity'>{totalQuantity}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

NavBar.propTypes = {
    totalQuantity: PropTypes.number.isRequired
}