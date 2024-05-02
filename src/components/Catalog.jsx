import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import styles from "./Catalog.module.css";
import ShoppingCart from "./ShoppingCart";
import { useOutletContext } from "react-router-dom";

export default function Catalog() {
    const [catalog, setCatalog] = useState(null);
    const [cartItems, setCartItems] = useOutletContext();

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    useEffect(() => {
        fetch('https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}',
            { mode: 'cors' })
            .then((response) => response.json())
            .then((response) => setCatalog(response))
            .catch((error) => console.log(error));
    }, []);

    if (!catalog) {
        return <div>Loading...</div>;
    }

    const products = catalog.data.products.edges;

    function handleAddToCart(newItem, newQuantity) {
        if (newQuantity > 0) {
            const existingItemIndex = cartItems.findIndex(item => {
                console.log('item: ', item)
                return item[0].node.id === newItem.node.id;
            });
            if (existingItemIndex !== -1) {
                const updatedCartItems = [...cartItems];
                updatedCartItems[existingItemIndex][1] += newQuantity;
                setCartItems(updatedCartItems);
            } else {
                setCartItems([...cartItems, [newItem, newQuantity]]);
            }
        }
        console.log("cartItems: ", cartItems)
    }


    return (
        <>
            <div className={styles.catalogContainer}>
                <div className={styles.innerContainer}>
                    {products.map(product => (
                        <ItemCard
                            key={product.node.id}
                            photoURL={product.node.featuredImage.url}
                            itemName={product.node.title}
                            price={Number(product.node.variants.edges[0].node.price.amount).toFixed(0)}
                            onClick={(quantity) => handleAddToCart(product, quantity)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}