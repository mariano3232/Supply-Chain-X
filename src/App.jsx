import { useState } from 'react'
import Sidebar from './Layout/Sidebar'
import styled from 'styled-components'
import Header from './Layout/Header'
import Chat from './Chat'

const AppContainer = styled.div`
  position:relative;
  display:flex;
  flex-direction: row;
`

function App() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <AppContainer>
      {collapsed && <Header setCollapsed={setCollapsed}/>}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Chat/>
    </AppContainer>
  )
}

export default App
