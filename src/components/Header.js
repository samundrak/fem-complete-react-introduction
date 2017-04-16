import React from 'react';
import { Navbar, FormControl, Button, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ title, handleSearch, searchItem }) => (
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
          <FormControl
            onChange={handleSearch}
            type="text"
            placeholder="Search"
          />
        </FormGroup>
        {' '}
        <Button onClick={searchItem} type="submit">Search</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchItem: PropTypes.func.isRequired,
};
export default Header;
