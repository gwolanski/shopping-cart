import styles from './CartItem.module.css';

export default function CartItem({ photoURL, itemName, unitPrice, quantity, onChange, onClick }) {
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value)
        onChange(newQuantity);
    }

    const handleItemDelete = () => {
        onClick(itemName)
    }

    return (
        <div>
            <div className={styles.cartItemContainer}>
                <img src={photoURL} alt={itemName} className={styles.itemImage} />
                <div className={styles.itemDetailsContainer}>
                    <div className={styles.itemDetails}>
                        <div className={styles.name}>{itemName}</div>
                        <div className={styles.price}>${unitPrice} unit price</div>
                    </div>
                    <input className={styles.quantityInput} type="number" name={itemName} id={itemName} value={quantity} onChange={handleQuantityChange} max={99} />
                    <div className={styles.subtotal}>Subtotal: ${unitPrice * quantity}</div>
                    <button className={styles.deleteBtn} onClick={handleItemDelete}>X</button>
                </div>
            </div>
        </div>
    )
}