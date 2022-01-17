import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatar from 'images/portrait-avatar.jpg';

const ResumeBioSection = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className="m-resume__bio"
      spacing={matches ? 0 : 1}
    >
      <Grid item md={4} xs={12}>
        <Avatar alt="Cory Siebler" src={avatar} className="m-resume__avatar" />
      </Grid>
      <Grid item md={8} xs={12}>
        <Typography variant="body1">
          Software engineer with a wide array of talents and expertise including
          web development, database administration, and project management.
          Looking for a senior software engineering position where I am building
          new and innovative applications. Prefer Python and PHP work for
          back-end applications, but interested in Go as a new and upcoming
          technology. Currently focused on React.js front-end software using
          hooks for ease in state management and efficiency of rendering.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ResumeBioSection;
