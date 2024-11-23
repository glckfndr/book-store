import Avatar from "./Avatar";
import Basket from "./Basket";
import Heart from "./Heart";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import AvatarButton from "./AvatarButton";
import { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart page", href: "/cart" },
  { name: "Check out", href: "/checkout" },
];

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = true;
  const changeDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("Dropdown is open: ", isDropdownOpen);
  };
  return (
    <nav className="flex justify-between items-center">
      {/* left side */}
      <div className="flex md:gap-16 gap-4">
        <Logo />
        <SearchInput />
      </div>

      {/* right side */}
      <div className="relative flex items-center space-x-2 md:space-x-3">
        {currentUser ? (
          <>
            <AvatarButton handleClick={changeDropdown} />
            {isDropdownOpen && (
              <div className="absolute -left-7 top-12 w-28 rounded-lg z-40 border-cyan-950 bg-white shadow-lg shadow-gray-500 overflow-hidden">
                <ul>
                  {navigation.map((item) => (
                    <li
                      key={item.name}
                      className="block pl-2 text-sm pt-1 hover:bg-gray-100"
                    >
                      <Link to={item.ref}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <Avatar />
        )}
        <Heart />
        <Basket />
      </div>
    </nav>
  );
}

export default Navbar;
