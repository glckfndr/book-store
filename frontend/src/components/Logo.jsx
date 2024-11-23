import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <HiOutlineBars3CenterLeft className="size-6" />
    </Link>
  );
}

export default Logo;
