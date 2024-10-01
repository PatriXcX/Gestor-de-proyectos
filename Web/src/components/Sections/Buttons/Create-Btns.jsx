import PropTypes from "prop-types";

function CreateBtns({ onClick, children }) {
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
CreateBtns.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CreateBtns;
