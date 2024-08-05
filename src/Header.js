import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div>
            <ul>
            <li>
                <Link to="/about">About</Link> </li>
                <li> <Link to="/contact"> Contact Us </Link> </li>
            </ul>
        </div>
    )
}

export default Header;