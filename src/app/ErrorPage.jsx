import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>This page doesn't exist!</h1>
            <Link to="/">
                Click here to go back to the Home page.
            </Link>
        </div>
    );
};

export default ErrorPage;
