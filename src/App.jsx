import { useState } from 'react'
import Sidebar from './Layout/Sidebar'
import styled from 'styled-components'
import Header from './Layout/Header'
import Chat from './Chat'
import { NextUIProvider } from '@nextui-org/react'
const AppContainer = styled.div`
  position:relative;
  display:flex;
  flex-direction: row;
  @media(max-width:900px){
    flex-direction: column;
  }
`

function App() {
  
  const [collapsed, setCollapsed] = useState(false)
  
  return (
    <NextUIProvider>
      <AppContainer>
        {collapsed && <Header setCollapsed={setCollapsed}/>}
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
        <Chat/>
      </AppContainer>
    </NextUIProvider>
  )
}

export default App
