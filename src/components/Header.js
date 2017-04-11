import React from 'react';
import { Navbar, FormControl, Button, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">{title}</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">Search</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
