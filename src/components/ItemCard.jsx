import { useState } from 'react'
import styles from './ItemCard.module.css'

export default function ItemCard({ photoURL, itemName, price, onClick }) {
    const [quantity, setQuantity] = useState(0);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    }

    const handleAddToCart = () => {
        onClick(quantity);
    }

    return (
        <div className={styles.cardContainer}>
            <img className={styles.cardImage} src={photoURL} alt={itemName} />
            <div className={styles.bottomCard}>
                <div className={styles.itemSpecifics}>
                    <div className={styles.item}>{itemName}</div>
                    <div className={styles.price}>{price}</div>
                </div>
                <div className={styles.addtoCartContainer}>
                    <input type="number" name="quantity" id="quantity" onChange={handleQuantityChange} defaultValue={0} min={0} max={99} />
                    <button className={styles.addToCartBtn} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}