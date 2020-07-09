import React, { useState } from 'react'
import { Draggable } from '../kdm/Draggable'
import styled from 'styled-components'
import { GearCard } from '../kdm/GearCard'
import { DragTarget } from '../kdm/DragTarget'
import { DragContextProvider } from '../kdm/DragContext'

export const DragTest = () => {
  //TODO: remove, testing only
  const [pageX, setPageX] = useState(0)
  const [pageY, setPageY] = useState(0)

  return (
    <DragContextProvider>
      <div
        onMouseMove={(e) => {
          setPageX(e.pageX)
          setPageY(e.pageY)
        }}
        style={{
          position: 'relative',
          height: '1000px',
          width: '1000px',
        }}
        id={'DragContainer'}
      >
        <h1>Drag test</h1>
        <h3>pageX: {pageX}</h3>
        <h3>pageY: {pageY}</h3>
        <GearCard
          startX={500}
          startY={100}
          startWidth={100}
          startHeight={100}
          title="gear card title"
        ></GearCard>
        <TestTargetContainer id={'TestTargetContainer'}>
          <DragTarget id="testDragTarget"></DragTarget>
        </TestTargetContainer>
      </div>
    </DragContextProvider>
  )
}

const TestTargetContainer = styled.div`
  position: relative;
  border: 5px solid red;
  height: 100px;
  width: 100px;
`

//TODO: delete if not using
// const DragTestContainer = styled.div`
// position: relative;
// width: 1000px;
// height: 1000px;
// `;
