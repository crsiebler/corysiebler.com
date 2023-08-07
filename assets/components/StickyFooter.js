import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';

const Copyright = () => {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Cory Siebler
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
};

const StickyFooter = () => (
  <footer className="m-footer">
    <Container maxWidth="sm">
      <Hidden smDown>
        <Typography variant="body1">
          "Only the mediocre are always at their best" - Jean Giraudoux
        </Typography>
      </Hidden>
      <Copyright />
    </Container>
  </footer>
);

export default StickyFooter;
