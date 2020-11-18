import React from 'react'
import { HeaderStyled } from './Header.style'
import { Navbar } from './Navbar/Navbar.controller'
import { Dropdown } from '../Dropdown/Dropdown.controller'

export const HeaderView = () => {
    return (
        <HeaderStyled>
            <Navbar />
            <Dropdown />
        </HeaderStyled>
    )
}