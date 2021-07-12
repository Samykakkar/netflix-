import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Container,
  ButtonLink,
  Logo,
  Link,
  Feature,
  Group,
  Dropdown,
  Picture,
  Profile,
  FeatureCallOut,
  Text,
} from "./styles/header";

export default function Header({ bg = true, children, ...restprops }) {
  return bg ? <Background {...restprops}>{children}</Background> : children;
}
Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restprops
}) {
  return <FeatureCallOut {...restprops}> {children}</FeatureCallOut>;
};
Header.Profile = function HeaderProfile({ children, ...restprops }) {
  return <Profile {...restprops}>{children}</Profile>;
};

Header.Feature = function HeaderFeature({ children, ...restprops }) {
  return <Feature {...restprops}>{children}</Feature>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restprops }) {
  return <Dropdown {...restprops}>{children}</Dropdown>;
};

Header.Text = function HeaderText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};
Header.TextLink = function HeaderLink({ children, ...restprops }) {
  return <Link {...restprops}>{children}</Link>;
};

Header.Picture = function HeaderPicture({ src, ...restprops }) {
  return <Picture {...restprops} src={`/images/users/${src}.png`} />;
};

Header.Frame = function HeaderFrame({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restprops }) {
  return <Group {...restprops}>{children}</Group>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restprops }) {
  return <ButtonLink {...restprops}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restprops }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restprops} />
    </ReactRouterLink>
  );
};
