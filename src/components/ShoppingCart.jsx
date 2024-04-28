import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";
import styles from "../components/ShoppingCart.module.css"

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useOutletContext();

    function changeQuantity(newQuantity, product) {
        //make it so this updates the quantity in cartItems

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
            return <div>Your shopping cart is empty.</div>
        }
    }

    return (
        <div className={styles.cartContainer}>
            <h2 className={styles.heading}>Shopping Cart</h2>
            {checkForEmptyCart()}
            {cartItems.map(item => (
                <CartItem
                    key={item[0].node.id}
                    photoURL={item[0].node.featuredImage.url}
                    itemName={item[0].node.title}
                    unitPrice={item[0].node.variants.edges[0].node.price.amount}
                    quantity={item[1]}
                    onChange={(quantity) => changeQuantity(quantity, item)}
                />
            ))}
        </div>
    )
}