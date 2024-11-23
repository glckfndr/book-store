import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

function Avatar() {
  return (
    <Link to="/login">
      <HiOutlineUser className="size-6" />
    </Link>
  );
}

export default Avatar;
