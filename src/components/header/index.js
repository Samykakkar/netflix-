import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Container,
  ButtonLink,
  Logo,
  Feature,
  Text,
} from "./styles/header";

export default function Header({ bg = true, children, ...restprops }) {
  return bg ? <Background {...restprops}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...restprops }) {
  return <Feature {...restprops}>{children}</Feature>;
};

Header.Text = function HeaderText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};


Header.Frame = function HeaderFrame({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
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
