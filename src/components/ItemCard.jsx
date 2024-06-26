import { useRef, useState } from 'react';
import styles from './ItemCard.module.css';
import PropTypes from 'prop-types';

export default function ItemCard({ photoURL, itemName, price, onClick }) {
    const [quantity, setQuantity] = useState(0);
    const [addedMessage, setAddedMessage] = useState('');

    const quantityInputRef = useRef(null);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    }

    const handleAddToCart = () => {
        onClick(quantity);
        quantityInputRef.current.value = 0;

        if (quantity > 0) {
            setAddedMessage('Added to cart.');
            setTimeout(() => {
                setAddedMessage('');
            }, 3000);
        }
    }

    return (
        <div className={styles.cardContainer} data-testid={itemName}>
            <img className={styles.cardImage} src={photoURL} alt={itemName} />
            <div className={styles.bottomCard}>
                <div className={styles.itemSpecifics}>
                    <div className={styles.item}>{itemName}</div>
                    <div className={styles.price}>${price}</div>
                </div>
                {addedMessage && <div className={styles.addedMessage}>{addedMessage}</div>}
                <div className={styles.addtoCartContainer}>
                    <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        onChange={handleQuantityChange}
                        defaultValue={0}
                        min={0}
                        max={99}
                        ref={quantityInputRef}
                        data-testid={itemName + 'Quantity'}
                    />
                    <button className={styles.addToCartBtn} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

ItemCard.propTypes = {
    photoURL: PropTypes.string.isRequired,
    itemName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}