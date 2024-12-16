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
import { BrowserRouter,Route,Routes,Link,Router } from "react-router-dom";
import Pag1 from "./Pag1.jsx";
import Pag2 from "./Pag2.jsx";
import CardPag2 from "./CardPag2.jsx";
import CardPag3 from "./CardPag3.jsx";
import CardPag4 from "./CardPag4.jsx";
import PiePag1 from "./PiePag1.jsx";
import Pag4 from "./Pag4.jsx";
import TextPag4 from "./TextPag4.jsx"
import TextVideo1 from "./TextVideo1.jsx";
import Text1 from "./Text1.jsx";
import Pag3 from "./Pag3.jsx";
import Text2 from "./Text2.jsx";
import Pag5 from "./Pag5.jsx";
import Text3 from "./Text3.jsx";
import Pag6 from './Pag6.jsx';
import CardPag5 from "./CardPag5.jsx";
import Text5 from "./Text5.jsx";
/*Principal*/
function Uno(props)
{
    return(
        <div className="hijo1">
            <Pag1 />
            <Text1 />
            <TextVideo1 />
            <PiePag1 />
        </div>
    );
}
/*Historia*/
function Dos(props)
{
    return(
        <div className="hijo2">
            <h1>Un poco del origen de la banda:</h1>
            <h3>Un duo que creció con la musica conformado por los hermanos
                Joel Smallbone y Luke Smallbone.
            </h3>
            <Pag2 />
            <CardPag2 /*Acordeon*/ /> 
            <Pag3 />
            <Text2 />
            <Pag5 />
            <Text3 />
            <PiePag1 />
        </div>
    );
}
/*Integrantes*/
function Tres(props)
{
    return(
        <div className="hijo3">
            <Pag4 />
            <TextPag4 />
            <PiePag1 />
        </div>
    );
}
/*Tour*/
function Cuatro(props)
{
    return(
        <div className="hijo4">
            <Pag6 />
            <CardPag3 />
            <CardPag4 />
            <Text5 />
            <CardPag5 />
            <PiePag1 />
        </div>
    );
}
export default function Principal(args)
{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div className="padre">
            <div className="header">
                <Navbar {...args}>
                        <NavbarBrand href="/" className="navbar-brand-custom">for KING + COUNTRY</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                          <Nav className="me-auto" navbar>
                            <NavItem >
                              <NavLink href="/dos" className="me-auto">Historia</NavLink>
                              <NavLink href="/tres" className="me-auto">Integrantes</NavLink>
                              <NavLink href="/cuatro" className="me-auto">Tour</NavLink>
                            </NavItem>
                          </Nav>
                        </Collapse>
                      </Navbar>
            </div>
            <Routes>
                    <Route path="/" element={<Uno></Uno>}></Route>
                    <Route path="/dos" element={<Dos></Dos>}></Route>
                    <Route path="/tres" element={<Tres></Tres>}></Route>
                    <Route path="/cuatro" element={<Cuatro></Cuatro>}></Route>
            </Routes>
        </div>
    );
}