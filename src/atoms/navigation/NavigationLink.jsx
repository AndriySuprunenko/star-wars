import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

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
      <Link href='/people' underline='always'>
        {'People'}
      </Link>
      <Link href='/planets' underline='always'>
        {'Planets'}
      </Link>
      <Link href='/starships' underline='always'>
        {'Starships'}
      </Link>
    </Box>
  );
};

export default NavigationLink;
