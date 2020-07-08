import React, { useState, useEffect } from 'react'
import { DragContext } from './DragContext'
import styled from 'styled-components'

export const DRAGGABLE_Z_INDEX = 2;

export const Draggable = (props) => {
  const DEFAULT_LENGTH = 100
  const DEFAULT_COORDINATE = 0
  const dragRef = React.useRef()

  const [mounted, setMounted] = useState(false)
  const [x, setX] = useState(props.startX ? props.startX : DEFAULT_COORDINATE)
  const [y, setY] = useState(props.startY ? props.startY : DEFAULT_COORDINATE)
  const [relX, setRelX] = useState(null)
  const [relY, setRelY] = useState(null)
  const [dragging, setDragging] = useState(false)

  useEffect(() => {})

  const mouseDown = (e) => {
    if (e.button !== 0) return
    const { offsetTop, offsetLeft } = dragRef.current
    setDragging(true)
    setRelX(e.pageX - offsetLeft)
    setRelY(e.pageY - offsetTop)

    e.stopPropagation()
    e.preventDefault()
  }

  onmouseup = (e) => {
    setDragging(false)
    e.stopPropagation()
    e.preventDefault()
  }

  onmousemove = (e) => {
    if (!dragging) return
    setX(e.pageX - relX)
    setY(e.pageY - relY)
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <div
      onMouseDown={mouseDown}
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
      <DragContext.Provider value={props.contextProps}></DragContext.Provider>
      {props.children}
    </div>
  )
}

