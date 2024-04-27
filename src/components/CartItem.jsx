import styles from './CartItem.module.css';

export default function CartItem({ photoURL, itemName, unitPrice, quantity, onChange }) {
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value)
        onChange(newQuantity);
    }

    return (
        <div>
            <div className={styles.cartItemContainer}>
                <img src={photoURL} alt={itemName} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                    <div className="">{itemName}</div>
                    <div className="">${unitPrice} unit price</div>
                </div>
                <input className={styles.quantityInput} type="number" name={itemName} id={itemName} value={quantity} onChange={handleQuantityChange} max={99} />
                <div>Subtotal: ({unitPrice}*{quantity})</div>
            </div>
        </div>
    )
}