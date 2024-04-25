import styles from './ItemCard.module.css'

export default function ItemCard({ photoURL, itemName, price }) {


    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImage} src={photoURL} alt={itemName} />
            <div className={styles.itemSpecifics}>
                <div className={styles.item}>{itemName}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <button className={styles.addToCartBtn}>Add to Cart</button>
        </div>
    )
}