import React from 'react'
import { AppStyled } from './App.style'
import { Footer } from './App.components/Footer/Footer.controller'
import { Header } from './App.components/Header/Header.controller'
import styled from 'styled-components'

export const AppView = () => {
    return (
        <AppStyled>
            <Header />
            <Footer />
        </AppStyled>
    )
}