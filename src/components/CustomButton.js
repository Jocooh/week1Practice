function CustomButton(props) {
  const { color, onClick, children } = props;
  if (color) {
    return (
      <button
        style={{ backgroundColor: color, color: "white" }}
        color={color}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button color={color} onClick={onClick}>
      {children}
    </button>
  );
}

export default CustomButton;
