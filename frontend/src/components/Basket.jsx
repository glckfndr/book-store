import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

function Basket() {
  return (
    <Link
      to="/cart"
      className="flex items-center bg-primary py-2 px-4 rounded-sm"
    >
      <HiOutlineShoppingCart className="size-6" />
      <span className="text-sm font-semibold ml-1">0</span>
    </Link>
  );
}

export default Basket;
