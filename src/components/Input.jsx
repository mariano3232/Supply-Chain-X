import React from 'react'
import styled from 'styled-components'

const Input = styled.textarea`
  float: bottom;
  height: fit-content;
  width: 80%;
  overflow-y: hidden;
  max-height: 220px;
  font-size: 14px;
  padding: 8px;
  margin: 20px;
  border-radius: 8px;
  color: ${props => props.theme.txt};
  resize: none;
  outline: none;
`

export default function ChatInput({content,setContent}) {

    const adjustTextareaHeight = (event) => {
        const textarea = event.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
        textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;

        const currentHeight = parseInt(textarea.style.height, 10);

        if (currentHeight > 180) {
            textarea.style['overflow-y']='scroll'
        } else {
            textarea.style['overflow-y']='hidden'
        }
        setContent(textarea.value);
    };

    return (
        <Input
            value={content}
            onChange={adjustTextareaHeight}
            placeholder="Escribe algo..."
        />
    )
}
