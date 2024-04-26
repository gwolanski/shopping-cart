import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import shoppingCartIcon from "../assets/shoppingcart.png";
import homeIcon from "../assets/home.png";
import catalogIcon from "../assets/catalog.png"

export default function NavBar({ itemNumber }) {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.contentContainer}>
                <h1 className={styles.storeName}>StoreName</h1>
                <div className={styles.navContainer}>
                    <Link to='/'>
                        <img className={styles.navIcon} src={homeIcon} alt="home" />
                    </Link>
                    <Link to='catalog'>
                        <img className={styles.navIcon} src={catalogIcon} alt="catalog" />
                    </Link>
                    <Link to='shoppingCart'>
                        <img className={styles.navIcon} src={shoppingCartIcon} alt="shopping cart" />
                        <div className={styles.itemNumber}>{itemNumber}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}