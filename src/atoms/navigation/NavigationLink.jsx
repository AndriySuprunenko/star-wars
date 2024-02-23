import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { PATH } from '../../constants/path';

const NavigationLink = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
      }}
    >
      <Link href={PATH.PEOPLE} underline='always'>
        People
      </Link>
      <Link href={PATH.PLANETS} underline='always'>
        Planets
      </Link>
      <Link href={PATH.STARSHIPS} underline='always'>
        Starships
      </Link>
    </Box>
  );
};

export default NavigationLink;
