import { NavLink } from "react-router";

function Navbar() {
    return (
        <nav className="flex items-center justify-between border-b px-10 py-5">
            <div className="flex gap-6">
                <NavLink
                    to="/"
                    className="text-gray-600 hover:text-black"
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className="text-gray-600 hover:text-black"
                >
                    About
                </NavLink>

                <NavLink
                    to="/testimony"
                    className="text-gray-600 hover:text-black"
                >
                    Testimony
                </NavLink>

                <NavLink
                    to="/faq"
                    className="text-gray-600 hover:text-black"
                >
                    FAQ
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;