import React from 'react';
import Typography from '@material-ui/core/Typography';

const SectionHeader = ({ component, variant, text }) => (
  <Typography
    component={component}
    variant={variant}
    className="m-sectionheader"
    gutterBottom
  >
    {text}
  </Typography>
);

export default SectionHeader;
