import React from 'react'
import { HeaderStyled } from './Header.style'
import { Dropdown } from '../Dropdown/Dropdown.controller'

export const HeaderView = () => {
    return (
        <HeaderStyled>
            <Dropdown />
        </HeaderStyled>
    )
}