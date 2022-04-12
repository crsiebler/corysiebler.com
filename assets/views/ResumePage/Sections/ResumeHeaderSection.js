import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import RoomIcon from '@material-ui/icons/Room';

const ResumeHeaderSection = () => (
  <Grid container justify="center" className="m-resume__header">
    <Grid container item direction="column" md={8} xs={12} justify="flex-start">
      <Grid item>
        <Typography variant="h2" color="primary">
          Cory Siebler
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">Senior Software Engineer</Typography>
      </Grid>
    </Grid>
    <Grid container item direction="column" md={4} xs={12} justify="center">
      <Grid container item alignItems="center">
        <PhoneIcon />
        <Link component="a" href="tel:14803192922" color="inherit">
          <Typography variant="caption" className="m-resume__header__caption">
            (480) 319-2922
          </Typography>
        </Link>
      </Grid>
      <Grid container item alignItems="center">
        <EmailIcon />
        <Link
          component="a"
          href="mailto:cory.siebler@proton.me"
          color="inherit"
        >
          <Typography variant="caption" className="m-resume__header__caption">
            cory.siebler@proton.me
          </Typography>
        </Link>
      </Grid>
      <Grid container item alignItems="center">
        <LanguageIcon />
        <Link component="a" href="https://corysiebler.com" color="inherit">
          <Typography variant="caption" className="m-resume__header__caption">
            corysiebler.com
          </Typography>
        </Link>
      </Grid>
      <Grid container item alignItems="center">
        <RoomIcon />
        <Typography variant="caption" className="m-resume__header__caption">
          Phoenix, Arizona
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default ResumeHeaderSection;
