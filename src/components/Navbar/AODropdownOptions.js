import React from 'react';
import { useLocation } from '@reach/router';
import firebase from 'gatsby-plugin-firebase';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { checkUser, checkPageLoading, addProfile } from '../../state/auth/auth.actions';

const AODropdownOptions = ({ checkUser, close, checkPageLoading, addProfile }) => {
  const location = useLocation();
  const logOut = async () => {
    try {
      checkPageLoading(true);
      await firebase.auth().signOut();
      checkUser({});
      addProfile({});
      close();
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    close();
    logOut();
  };
  return (
    <ul className="ao-dropdown-options p-1 mt-1 ml-1">
        <li onClick={() => {
          close();
          if (location.pathname !== '/profile') {
            checkPageLoading(true);
            navigate('/profile');
          }
        }}>View Profile</li>
        <li onClick={() => {
          close();
          if (location.pathname !== '/settings') {
            checkPageLoading(true);
            navigate('/settings');
          }
        }}>Settings</li>
        <li onClick={(ev) => handleClick(ev)}>Log Out</li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUser: (user) => dispatch(checkUser(user)),
  checkPageLoading: (pageLoading) => dispatch(checkPageLoading(pageLoading)),
  addProfile: (profile) => dispatch(addProfile(profile))
});

export default connect(null, mapDispatchToProps)(AODropdownOptions);
