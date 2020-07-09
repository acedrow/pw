import React, { useState, useEffect, useContext } from 'react'
import { DragContext } from './DragContext'
import { DRAGGABLE_Z_INDEX } from './Draggable'

export const DragTarget = (props) => {
  const targetRef = React.useRef()
  const DEFAULT_LENGTH = 100
  const DEFAULT_COORDINATE = 0
  //@ts-ignore
  const {mouseUpWhileDrag, setMouseUpWhileDrag} = useContext(DragContext)

  const [mouseInBounds, setMouseInBounds] = useState(false)
  const [zIndex, setZIndex] = useState(DRAGGABLE_Z_INDEX + 1)

  useEffect(() => {
  //  if (mouseUpWhileDrag.dragRef && mouseUpWhileDrag.mouseX && mouseUpWhileDrag.mouseY){
      const ref = targetRef.current
      const { offsetTop, offsetLeft } = ref
      const boundRect = ref.getBoundingClientRect()
      const relativeX = (mouseUpWhileDrag.mouseX - boundRect.x)
      const relativeY = mouseUpWhileDrag.mouseY - boundRect.y
      if (
        relativeX <= boundRect.width &&
        relativeY >= boundRect.height &&
        relativeX > 0 &&
        relativeY > 0
      ) {
        console.log('cursor in bounds')
        setMouseInBounds(false)
        setZIndex(DRAGGABLE_Z_INDEX + 1)
      }
      //setMouseUpWhileDrag({})
    
    
  }, [mouseUpWhileDrag])

  const mouseEnter = (e) => {
    setMouseInBounds(true)
    setZIndex(DRAGGABLE_Z_INDEX - 1)
  }

  // const mouseUp = (e) => (
  //   console.log('target mouse up')
  // )

  const mouseLeave = (e) => {
   // setMouseInBounds(false)

    console.log('mouseLeave')
    //setZIndex(DRAGGABLE_Z_INDEX + 1)
  }

  // onmousemove = (e) => {
  //   if (!mouseInBounds) return
  //   const ref = targetRef.current
  //   const { offsetTop, offsetLeft } = ref
  //   const boundRect = ref.getBoundingClientRect()
  //   const relativeX = e.pageX - boundRect.x
  //   const relativeY = e.pageY - boundRect.y
  //   if (
  //     relativeX > boundRect.width ||
  //     relativeY > boundRect.height ||
  //     relativeX < 0 ||
  //     relativeY < 0
  //   ) {
  //     console.log('cursor out of bounds')
  //     setMouseInBounds(false)
  //     setZIndex(DRAGGABLE_Z_INDEX + 1)
  //   }
  // }

  return (
    <div
      onMouseOver={mouseEnter}
      //onMouseUp={mouseUp}
      //onMouseLeave={mouseLeave}
      ref={targetRef}
      style={{
        position: 'absolute',
        width: props.startWidth ? props.startWidth : DEFAULT_LENGTH + 'px',
        height: props.startHeight ? props.startHeight : DEFAULT_LENGTH + 'px',
        zIndex: zIndex,
      }}
    > 
      <span>TEST: {JSON.stringify(mouseInBounds)}</span>

      <p style={{ fontSize: '10px' }}>{props.children}</p>
    </div>
  )
}
