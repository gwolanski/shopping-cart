import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import shoppingCartIcon from "../assets/shoppingCartG.png";
import homeIcon from "../assets/homeG.png";
import catalogIcon from "../assets/catalogG.png";
import fernIcon from "../assets/fern.png";

export default function NavBar({ totalQuantity }) {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.nameContainer}>
                    <img src={fernIcon} alt="fern logo" className={styles.logo} />
                    <h1 className={styles.storeName}>Flo</h1>
                </div>
                <div className={styles.navContainer}>
                    <Link to='/'>
                        <img className={styles.navIcon} src={homeIcon} alt="home" />
                    </Link>
                    <Link to='catalog'>
                        <img className={styles.navIcon} src={catalogIcon} alt="catalog" />
                    </Link>
                    <Link to='shoppingCart'>
                        <img className={styles.navIcon} src={shoppingCartIcon} alt="shopping cart" />
                        <div className={styles.itemNumber}>{totalQuantity}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}