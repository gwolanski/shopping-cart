import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import styles from "./Catalog.module.css"

export default function Catalog() {
    const [catalog, setCatalog] = useState(null);

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

    return (
        <>
            <div className={styles.catalogContainer}>
                {products.map(product => (
                    <ItemCard key={product.node.id} photoURL={product.node.featuredImage.url} itemName={product.node.title} price={product.node.variants.edges[0].node.price.amount} />
                ))}
            </div>
        </>
    )
}