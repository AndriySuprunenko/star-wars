import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../constants/constants";

export const Button = styled.button`
  background: ${COLORS.MIDDLE_GRAY};
  color: ${COLORS.LIGHT_GRAY};
  font-size: ${FONT_SIZE.BASE};
  padding: 10px;
  border: 2px solid ${COLORS.LIGHT_GRAY};
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: ${COLORS.GRAY};
  }
`;
