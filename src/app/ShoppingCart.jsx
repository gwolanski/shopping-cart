import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";
import styles from "./styles/ShoppingCart.module.css"

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useOutletContext();
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        let currentTotal = 0;
        cartItems.forEach(item => {
            const itemTotal = item[1] * parseInt(item[0].node.variants.edges[0].node.price.amount);
            currentTotal += itemTotal;
        });
        setGrandTotal(currentTotal);
    }, [cartItems])

    function changeQuantity(newQuantity, product) {
        const itemIndex = cartItems.findIndex(item => {
            console.log('product:', product)
            return item[0].node.id === product[0].node.id;
        });
        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex][1] = newQuantity;
            setCartItems(updatedCartItems);
        }
    }

    function checkForEmptyCart() {
        if (cartItems.length === 0) {
            return <div className={styles.emptyCartText}>Your shopping cart is empty.</div>
        }
    }

    function deleteItem(item) {
        const itemName = item;
        const itemIndex = cartItems.findIndex(cartItem => cartItem[0].node.title === itemName);
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(itemIndex, 1);
        setCartItems(updatedCartItems);
    }

    return (
        <div className={styles.cartContainer} >
            <div className={styles.innerCartContainer}>
                <div className={styles.innerContentContainer}>
                    <h2 className={styles.heading}>Shopping Cart</h2>
                    {checkForEmptyCart()}
                    {cartItems.map(item => (
                        <CartItem
                            key={item[0].node.id}
                            photoURL={item[0].node.featuredImage.url}
                            itemName={item[0].node.title}
                            unitPrice={Number(item[0].node.variants.edges[0].node.price.amount).toFixed(0)}
                            quantity={item[1]}
                            onChange={(quantity) => changeQuantity(quantity, item)}
                            onClick={(itemName) => deleteItem(itemName)}
                        />
                    ))}
                    <div className={styles.total}>Total: ${grandTotal}</div>
                </div>
            </div>
        </div>
    )
}