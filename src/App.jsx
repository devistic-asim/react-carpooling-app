// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import LoginPage from "./components/auth/LoginPage";
import Home1 from "./components/application/Home1";
import Home2 from "./components/application/Home2";
import Dashboard from "./components/admin/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

const { Header, Content } = Layout;

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <a href="/application">Home</a>
            </Menu.Item>
            <Menu.Item key="2">
              {user ? (
                <a href="/login" onClick={handleLogout}>
                  Logout
                </a>
              ) : (
                <a href="/login">Login</a>
              )}
            </Menu.Item>
            {user && user.role === "Admin" && (
              <Menu.Item key="3">
                <a href="/admin">Admin</a>
              </Menu.Item>
            )}
          </Menu>
        </Header>
        <Content style={{ padding: "50px" }}>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/login">
              <LoginPage onLogin={handleLogin} />
            </Route>
            <PrivateRoute
              path="/application"
              component={Home1}
              roles={["Advertiser"]}
              user={user}
            />
            <PrivateRoute
              path="/application"
              component={Home2}
              roles={["Commuter"]}
              user={user}
            />
            <PrivateRoute
              path="/admin"
              component={Dashboard}
              roles={["Admin"]}
              user={user}
            />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
