import React from 'react';
import Image from 'material-ui-image';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import InfoIcon from '@material-ui/icons/Info';
import portrait from 'images/portrait.webp';

const LandingHeroSection = () => (
  <Container className="m-landing__hero">
    <Grid container spacing={2} justify="space-around" alignItems="stretch">
      <Grid item xs={12} sm={8}>
        <Typography
          id="back-to-top-anchor"
          variant="h2"
          component="h1"
          color="textPrimary"
        >
          Cory Siebler
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Senior Software Engineer
        </Typography>
        <Typography variant="body1" color="textPrimary" gutterBottom paragraph>
          I am a full-stack developer specializing in web development with PHP,
          React, and Python. Want to see more of my work? Check out my{' '}
          <Link href="https://github.com/crsiebler" target="_blank">
            GitHub
          </Link>{' '}
          account.
        </Typography>
        <Grid container spacing={1} justify="flex-start">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              component="a"
              href="/resume"
              endIcon={<InfoIcon />}
            >
              <Hidden xsDown>View </Hidden>Resume
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              component="a"
              href="/portfolio"
            >
              <Hidden xsDown>See </Hidden>Portfolio
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Image
          src={portrait}
          alt="inviting portrait"
          className="m-landing__img"
          disableSpinner
        />
      </Grid>
    </Grid>
  </Container>
);

export default LandingHeroSection;
