import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { COLORS } from '../constants/constants';

const Loader = () => {
  return (
    <Backdrop
      sx={{ color: COLORS.WHITE, zIndex: 999 }}
      open={true}
    >
      <CircularProgress color={COLORS.INHERIT} />
    </Backdrop>
  );
};

export default Loader;
