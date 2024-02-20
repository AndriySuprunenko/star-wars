import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

import { COLORS } from '../constants/colors';

const Loader = ({ color, open }) => {
  return (
    <Backdrop sx={{ color: color, zIndex: 999 }} open={open}>
      <CircularProgress color={COLORS.INHERIT} />
    </Backdrop>
  );
};

Loader.propTypes = {
  color: PropTypes.string,
  open: PropTypes.bool,
};

Loader.defaultProps = {
  color: COLORS.WHITE,
  open: false,
};

export default Loader;
