import React, { useState } from 'react'
import styled from 'styled-components'
import ChatInput from './components/Input'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    background-color: ${props => props.theme.primary};
    width: calc((100% / 1.4));
    border-radius: 10px;
    height: 95vh;
    margin: auto;
    align-items: center;
    @media (max-width: 1200px) {
      width: 65%;
    }
    @media (max-width: 900px) {
      border-radius: 6px;
      width: 90%;
      margin-top: 20px;
      height: 85vh;
    }
`
const ResponsesContainer = styled.div`
  height: 90%;
  width: 85%;
  margin: 15px;
  border: 1px solid black;
  border-radius: 8px;
`

const Input = styled.textarea`
  float: bottom;
  height: fit-content;
  overflow-y: hidden;
  width: 80%;
  height: 36px;
  font-size: 14px;
  padding: 6px;
  margin: 20px;
  border-radius: 8px;
  color: ${props => props.theme.txt};
  resize: none;
  outline: none;
`

export default function Chat() {

  const [content, setContent] = useState()

  return (
    <Container>
        <ResponsesContainer>

        </ResponsesContainer>
        <ChatInput content={content} setContent={setContent}/>
    </Container>
  )
}
