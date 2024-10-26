import PropTypes from "prop-types";

function DeleteBtns({ onClick, children }) {
  const handleClick = (ev) => {
    ev.preventDefault();
    onClick();
  };
  return (
    <>
      <button onClick={handleClick} className="button--large">
        {children}
      </button>
    </>
  );
}

DeleteBtns.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default DeleteBtns;
