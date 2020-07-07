import React from 'react'
import { Draggable } from '../kdm/Draggable'
import styled from 'styled-components';

export const DragTest = () => {
  return (
    <DragTestContainer
    id={'DragContainer'}>
      <h1>Drag test</h1>
      <Draggable
        startX={0}
        startY={0}
        startWidth={100}
        startHeight={100}
      ></Draggable>
    </DragTestContainer>
  )
}

const DragTestContainer = styled.div`
  position: relative;
  width: 1000px;
  height: 1000px;
`;