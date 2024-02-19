import PropTypes from "prop-types";

import { ButtonStyled } from "./Button.styled";

const Button = ({ disabled, text, handleClick }) => {
  return (
    <ButtonStyled onClick={handleClick} disabled={disabled}>
      {text}
    </ButtonStyled>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string,
};

Button.defaultProps = {
  handleClick: () => {},
  disabled: false,
  text: "Default text",
};

export default Button;
