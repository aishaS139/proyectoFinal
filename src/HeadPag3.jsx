import "./Estilos.css"
import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function HeadPag3(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="hHead">
      <Navbar {...args}>
        <NavbarBrand href="/" className="navbar-brand-custom">for KING + COUNTRY</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem >
              <NavLink href="/Pag2.jsx/" className="me-auto">Historia</NavLink>
              <NavLink href="/components/" className="me-auto">Integrantes</NavLink>
              <NavLink href="/components/" className="me-auto">Tour</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" className="me-auto">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="me-auto" nav caret >
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeadPag3;