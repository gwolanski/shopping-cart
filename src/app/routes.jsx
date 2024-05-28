import App from "./App";
import Home from "./Home";
import Catalog from "./Catalog";
import ShoppingCart from "./ShoppingCart";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
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