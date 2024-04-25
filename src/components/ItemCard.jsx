import styles from './ItemCard.module.css'

export default function ItemCard({ photoURL, itemName, price }) {


    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImage} src={photoURL} alt={itemName} />
            <div className={styles.bottomCard}>
                <div className={styles.itemSpecifics}>
                    <div className={styles.item}>{itemName}</div>
                    <div className={styles.price}>{price}</div>
                </div>
                <div className={styles.addtoCartContainer}>
                    <input type="number" name="quantity" id="quantity" min={0} max={10} />
                    <button className={styles.addToCartBtn}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}