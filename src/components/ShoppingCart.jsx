import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useOutletContext();
    function changeQuantity() {
        //make it so this updates the quantity in cartItems
        console.log('changed')
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.map(item => (
                <CartItem
                    key={item[0].node.id}
                    photoURL={item[0].node.featuredImage.url}
                    itemName={item[0].node.title}
                    unitPrice={item[0].node.variants.edges[0].node.price.amount}
                    quantity={item[1]}
                    onChange={changeQuantity()}
                />
            ))}
        </div>
    )
}