import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import avatar from 'images/portrait-avatar.jpg';
import { menuItems } from 'constants/navigationConstants';

const AvatarSection = () => (
  <Grid
    container
    spacing={3}
    direction="column"
    justify="flex-start"
    alignItems="center"
    className="m-page__avatar"
  >
    <Grid item xs>
      <Typography variant="h6" align="center" className="m-page__avatar__title">
        Cory Siebler
      </Typography>
    </Grid>
    <Grid item xs>
      <Avatar alt="Cory Siebler" src={avatar} className="m-page__avatar__img" />
    </Grid>
    <Grid item xs>
      <Typography variant="body2" className="m-page__avatar__caption">
        Hi! My name is Cory Siebler. Welcome to my personal website!
      </Typography>
    </Grid>
    <Grid
      container
      item
      xs
      direction="row"
      alignItems="center"
      justify="space-evenly"
      className="m-page__avatar__socials"
    >
      {menuItems.map((item, index) => (
        <Grid item xs={4} key={index}>
          <IconButton
            aria-label={item.ariaLabel}
            aria-controls="menu-appbar"
            aria-haspopup="true"
            href={item.href}
            target={item.target ? item.target : '_self'}
          >
            {item.icon}
          </IconButton>
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default AvatarSection;
