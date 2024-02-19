import PropTypes from "prop-types";

import { ButtonStyled } from "./Button.styled";

const Button = ({ disabled, text, click }) => {
  return (
    <ButtonStyled onClick={click} disabled={disabled}>
      {text}
    </ButtonStyled>
  );
};

Button.propTypes = {
  click: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string,
};

Button.defaultProps = {
  click: () => alert("Button"),
  disabled: false,
  text: "Default text",
};

export default Button;
