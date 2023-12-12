import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    background-color: ${props => props.theme.primary};
    /* background-color: blue; */
    width: calc((100% / 1.5));
    border-radius: 10px;
    height: 90vh;
    margin: auto;
    @media (max-width: 900px) {
      width: 90%;
      margin-top: 30px;
    }
`

export default function Chat() {
  return (
    <Container>
        <p>chat</p>
    </Container>
  )
}
