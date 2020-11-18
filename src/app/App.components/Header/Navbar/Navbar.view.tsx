import React from 'react'
import { NavbarStyled, BrandStyled } from './Navbar.style'

export const NavbarView = () => {
    return (
        <NavbarStyled expand="lg">
            <BrandStyled href="#home">Mantis</BrandStyled>
        </NavbarStyled>
    )
}