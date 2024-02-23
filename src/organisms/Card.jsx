import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Image from '../assets/luke.jpeg';

export default function ActionAreaCard() {
  const openDrawer = () => {};
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={openDrawer}>
        <CardMedia
          component='img'
          height='140'
          image={Image}
          alt='Luke Skywalker'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Luke Skywalker
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Luke Skywalker, a Force-sensitive human male, was a legendary Jedi
            Master who fought in the Galactic Civil War during the reign of the
            Galactic Empire. Along with his companions, Princess Leia Organa and
            General Han Solo, Skywalker served as a revolutionary on the side of
            the Alliance to Restore the Republic—an organization committed to
            the downfall of the Galactic Empire and the restoration of
            democracy. Following the war, Skywalker became a living legend, and
            was remembered as one of the greatest Jedi in galactic history.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
