// src/components/PrivateRoute.jsx
import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

/**
 * PrivateRoute component for handling authenticated and authorized routes.
 * @param {Object} props - Component props.
 * @param {React.ComponentType} props.component - Component to render if user is authenticated and authorized.
 * @param {string[]} props.roles - Allowed roles for accessing the route.
 * @param {Object} props.user - User object with a 'role' property.
 * @param {Object} rest - Other route props.
 * @returns {React.ReactElement} - Rendered component.
 */
const PrivateRoute = ({ component: Component, roles, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          // Not logged in, redirect to login page
          return <Redirect to="/login" />;
        }

        if (!roles.includes(user.role)) {
          // Logged in but not authorized, redirect to home
          return <Redirect to="/home" />;
        }

        // Logged in and authorized, render the component
        return <Component {...props} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape({
    role: PropTypes.string.isRequired,
  }),
};

export default PrivateRoute;
