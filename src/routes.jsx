import App from "./App";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import ShoppingCart from "./components/ShoppingCart";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'catalog',
                element: <Catalog />
            },
            {
                path: 'shoppingCart',
                element: <ShoppingCart />
            },
        ]
    },
];

export default routes;