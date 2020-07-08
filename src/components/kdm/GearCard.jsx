import React from 'react'
import { Draggable } from './Draggable'
import styled from 'styled-components'

export const GearCard = (props) => {
  return (
    <Draggable
      startX={props.startX}
      startY={props.startY}
      startWidth={props.startWidth}
      startHeight={props.startHeight}
      contextProps={{title: props.title}}
    >
      <GearCardContainer><span>{props.title}</span></GearCardContainer>
    </Draggable>
  )
}

const GearCardContainer = styled.div`
  background: white;
  width: 100%;
  height: 100%;
`
