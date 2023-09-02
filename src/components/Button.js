const Button = ({ onClick, isDisabled, children }) => {
  return (
    <button
      disabled={isDisabled ? true : false}
      style={{ cursor: "pointer", marginRight: "5px" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
