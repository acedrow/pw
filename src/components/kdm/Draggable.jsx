import React, { useState, useEffect, useContext } from 'react'
import { CardContext } from './CardContext'
import styled from 'styled-components'

export const DRAGGABLE_Z_INDEX = 2

export const Draggable = (props) => {
  const DEFAULT_LENGTH = 100
  const DEFAULT_COORDINATE = 0
  const dragRef = React.useRef()
  //@ts-ignore
  const { setDraggedElement, setMouseUpWhileDrag } = useContext(CardContext)

  const [mounted, setMounted] = useState(false)
  const [x, setX] = useState(props.startX ? props.startX : DEFAULT_COORDINATE)
  const [y, setY] = useState(props.startY ? props.startY : DEFAULT_COORDINATE)
  const [relX, setRelX] = useState(null)
  const [relY, setRelY] = useState(null)
  const [dragging, setDragging] = useState(false)

  const mouseDown = (e) => {
    console.log('mousedown')
    if (e.button !== 0) return
    const { offsetTop, offsetLeft } = dragRef.current
    setDragging(true)
    setRelX(e.pageX - offsetLeft)
    setRelY(e.pageY - offsetTop)

    e.preventDefault()
  }

  const mouseUp = (e) => {
    console.log('draggable mouse up')
    setMouseUpWhileDrag({ dragref: dragRef, mouseX: e.pageX, mouseY: e.pageY })
    setDragging(false)

    e.preventDefault()
  }

  const mouseMove = (e) => {
    if (!dragging) return
    setX(e.pageX - relX)
    setY(e.pageY - relY)

    e.preventDefault()
  }

  return (
    <div
      onMouseDown={mouseDown}
      onMouseMove={mouseMove}
      onMouseUp={mouseUp}
      ref={dragRef}
      style={{
        // needs to be in a container positioned other than relative.
        position: 'absolute',
        width: props.startWidth ? props.startWidth : DEFAULT_LENGTH + 'px',
        height: props.startHeight ? props.startHeight : DEFAULT_LENGTH + 'px',
        left: x + 'px',
        top: y + 'px',
        zIndex: DRAGGABLE_Z_INDEX,
      }}
    >
      <CardContext.Provider value={props.contextProps}></CardContext.Provider>
      {props.children}
    </div>
  )
}
