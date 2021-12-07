import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import List from '@material-ui/core/List';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ListItemGroup from 'components/ListItemGroup';
import { iconColorPrimary } from 'constants/navigationConstants';

const AuthorizationSection = () => {
  const { authState, oktaAuth } = useOktaAuth();

  const logout = async () => oktaAuth.signOut();

  return (
    <List>
      {authState.isAuthenticated && (
        <>
          <ListItemGroup
            href="/admin"
            primary="Admin"
            icon={<SupervisorAccountIcon style={{ color: iconColorPrimary }} />}
          />
          <ListItemGroup
            onClick={logout}
            primary="Logout"
            icon={<ExitToAppIcon style={{ color: iconColorPrimary }} />}
          />
        </>
      )}
      {/* {!authState.isPending && !authState.isAuthenticated && (
        <ListItemGroup
          href="/login"
          primary="Login"
          icon={<VpnKeyIcon style={{ color: iconColorPrimary }} />}
        />
      )} */}
    </List>
  );
};

export default AuthorizationSection;
