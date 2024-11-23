import avatarImg from "../assets/avatar.png";
import PropTypes from "prop-types";

function AvatarButton({ handleClick }) {
  return (
    <button>
      <img
        src={avatarImg}
        alt="Avatar"
        className={"rounded-full size-7 ring-2 ring-blue-500"}
        onClick={handleClick}
      />
    </button>
  );
}

AvatarButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default AvatarButton;
