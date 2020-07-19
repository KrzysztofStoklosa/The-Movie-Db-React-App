import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Header = () => (
  <Menu borderless color={"blue"} inverted stackable>
    <Menu.Item header as="h1">
      <Link to="/">Web Movie App</Link>
    </Menu.Item>
  </Menu>
);

export default Header;
