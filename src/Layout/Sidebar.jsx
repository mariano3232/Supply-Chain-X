import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 30px;
`
const Container = styled.div`
    height: 100vh;
    width: 18rem;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.txt};
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    transition: 300ms;
    opacity: ${(props) => (props.collapsed ? 0 : 1)};
    transform: translateX(${
        props => props.collapsed ? '-18rem' : '0px'
    });
    @media(max-width:900px){
        position: absolute;
        left:0;top:0;
    }
`
const Item = styled.div`
    font-size: 12px;
    padding: 5px;
    &:hover {
        cursor: pointer;
        background-color: grey;
        border-radius: 8px;
    };
`
const Date = styled.p`
    font-size: 10px;
    color: grey;
`

const CollapseButton = styled.button`
    @media(min-width: 768px){
        display: none;
    }
`

export default function Sidebar({collapsed, setCollapsed}) {

    function manejarCambioDeTamaño() {
        const screenWidth = window.innerWidth;
        if (screenWidth > 900){
            setCollapsed(false)
        } else {
            setCollapsed(true)
        }
    }

    window.addEventListener('resize', manejarCambioDeTamaño);

    return (
    <Container collapsed={collapsed}>
        <CollapseButton className='collapse-button' onClick={() => {setCollapsed(true)}}>COLLAPSE</CollapseButton>
        <Title>Supply Chain X</Title>
        <Item>Nuevo Chat</Item>
        <Date>Today</Date>
        <Item>unoasdasdasd</Item>
        <Item>unoasdasddsadasdasd</Item>
        
        <Date>Yesterday</Date>
        <Item>unoasdasdadsadsd</Item>
        <Item>unoasdaasdfasdfsdasd</Item>
        <Item>unoasdasdasd</Item>
        <Item>unoasdasddsadasdasd</Item>

        <Date>02/12/2023</Date>
        <Item>unoasdasdadsadsd</Item>
        <Item>unoasdaasdfasdfsdasd</Item>
        <Item>unoasdasdasd</Item>
        <Item>unoasdasddsadasdasd</Item>
    </Container>
  )
}
