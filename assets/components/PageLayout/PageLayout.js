import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import ResponsiveAppBar from 'components/ResponsiveAppBar';
import ResponsiveDrawer from 'components/ResponsiveDrawer';
import ScrollTop from 'components/ScrollTop';
import StickyFooter from 'components/StickyFooter';
import { menuItems } from 'constants/navigationConstants';
import AvatarSection from './Sections/AvatarSection';
import NavigationSection from './Sections/NavigationSection';
import AuthorizationSection from './Sections/AuthorizationSection';

const PageLayout = ({ children, title }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="m-page">
      <Helmet>
        <title>{title} | Cory Siebler</title>
      </Helmet>
      <ResponsiveAppBar
        menuItems={menuItems}
        title={title}
        onMenuClick={toggleMenu}
        menuOpen={menuOpen}
      >
        <AvatarSection />
        <NavigationSection />
        <AuthorizationSection />
      </ResponsiveAppBar>
      <ResponsiveDrawer>
        <AvatarSection />
        <NavigationSection />
        <AuthorizationSection />
      </ResponsiveDrawer>
      <Container
        component="main"
        maxWidth={false}
        className="m-page__container"
      >
        {children}
      </Container>
      <ScrollTop />
      <StickyFooter />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

PageLayout.defaultProps = {
  title: 'Home',
};

export default PageLayout;
