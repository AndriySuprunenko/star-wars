import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

import { COLORS } from '../constants/constants';

const Loader = ({ color }) => {
  return (
    <Backdrop sx={{ color: color, zIndex: 999 }} open={true}>
      <CircularProgress color={COLORS.INHERIT} />
    </Backdrop>
  );
};

Loader.propTypes = {
  color: PropTypes.string,
};

Loader.defaultProps = {
  color: COLORS.WHITE,
};

export default Loader;
