import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import InfoIcon from '@material-ui/icons/Info';
import ListItemGroup from 'components/ListItemGroup';
import { iconColorPrimary } from 'constants/navigationConstants';

const NavigationSection = () => (
  <nav>
    <Divider />
    <List>
      <ListItemGroup
        href="/"
        primary="Home"
        icon={<HomeIcon style={{ color: iconColorPrimary }} />}
      />
      <ListItemGroup
        href="resume"
        primary="Resume"
        icon={<InfoIcon style={{ color: iconColorPrimary }} />}
      />
      <ListItemGroup
        href="/portfolio"
        primary="Portfolio"
        icon={<WorkIcon style={{ color: iconColorPrimary }} />}
      />
    </List>
    <Divider />
  </nav>
);

export default NavigationSection;
