import React, { useState, useEffect, useContext } from 'react'
import { CardContext } from './CardContext'
import { DRAGGABLE_Z_INDEX } from './Draggable'

export const DragTarget = (props) => {
  const targetRef = React.useRef()
  const DEFAULT_LENGTH = 100
  const DEFAULT_COORDINATE = 0
  //@ts-ignore
  const {mouseUpWhileDrag, setMouseUpWhileDrag} = useContext(CardContext)

  useEffect(() => {
    console.log(mouseUpWhileDrag)

      const ref = targetRef.current
      console.log(ref)
      const boundRect = ref.getBoundingClientRect()
      const relativeX = (mouseUpWhileDrag.mouseX - boundRect.x)
      const relativeY = mouseUpWhileDrag.mouseY - boundRect.y
      if (
        relativeX <= boundRect.width &&
        relativeY <= boundRect.height &&
        relativeX > 0 &&
        relativeY > 0
      ) {
        console.log('cursor in bounds')
      }
   
    
  }, [mouseUpWhileDrag])

  return (
    <div
      ref={targetRef}
      style={{
        position: 'absolute',
        width: props.startWidth ? props.startWidth : DEFAULT_LENGTH + 'px',
        height: props.startHeight ? props.startHeight : DEFAULT_LENGTH + 'px',
        zIndex: DRAGGABLE_Z_INDEX-1,
      }}
    > 
    </div>
  )
}
