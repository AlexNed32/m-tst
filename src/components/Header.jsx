import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';


export const Header = () => {
    return (
        <Navbar>
                <NavbarBrand>Metro Zakaz</NavbarBrand>
                <Nav>
                    <NavItem>
                        Menu
                    </NavItem>
                </Nav>
        </Navbar>
    )
}
