import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  /* position: absolute;
  top: 0; */
  display: none;
  justify-content: space-between;
  height: 3.2;
  padding: 20px;
  width: 100%;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.txt};
  @media (max-width: 900px) {
      display: flex;
  }
`

export default function Header({setCollapsed}) {
  return (
    <Container>
        <button onClick={()=>setCollapsed(false)}>Collapse</button>
        <p>Logo o algo</p>
    </Container>
  )
}
