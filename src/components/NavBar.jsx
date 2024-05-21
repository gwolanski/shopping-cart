import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
//import shoppingCartIcon from "../../public/shoppingCart.png";
// import homeIcon from "../assets/home.png";
// import catalogIcon from "../assets/catalog.png";
import fernIcon from "../assets/fern.png";
import { useState } from "react";
import PropTypes from 'prop-types';

export default function NavBar({ totalQuantity }) {
    const [activePage, setActivePage] = useState('Home');

    const handleSetActivePage = (pageName) => {
        setActivePage(pageName);
    }

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
                    <Link to='/' className={activePage === 'Home' ? styles.currentPage : ''} onClick={() => handleSetActivePage('Home')}>
                        <img className={styles.navIcon} src="/home.png" alt="home" />
                    </Link>
                    <Link to='catalog' className={activePage === 'Catalog' ? styles.currentPage : ''} onClick={() => handleSetActivePage('Catalog')}>
                        <img className={styles.navIcon} src="/catalog.png" alt="catalog" />
                    </Link>
                    <Link to='shoppingCart' className={activePage === 'ShoppingCart' ? styles.currentPage : ''} onClick={() => handleSetActivePage('ShoppingCart')}>
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