import React, { useState, useEffect } from 'react'
import { DragContext } from './DragContext'
import { DRAGGABLE_Z_INDEX } from './Draggable'

export const DragTarget = (props) => {
  const targetRef = React.useRef()
  const DEFAULT_LENGTH = 100
  const DEFAULT_COORDINATE = 0

  const [mounted, setMounted] = useState(false)
  const [zIndex, setZIndex] = useState(1)
  const [x, setX] = useState(props.startX ? props.startX : DEFAULT_COORDINATE)
  const [y, setY] = useState(props.startY ? props.startY : DEFAULT_COORDINATE)
  const [relX, setRelX] = useState(null)
  const [relY, setRelY] = useState(null)

  //TODO: remove if not using
  useEffect(() => {
    if (!mounted) {
      const { offsetTop, offsetLeft } = targetRef.current
      console.log(
        'targetRef offset top, left: ' + offsetTop + ', ' + offsetLeft
      )
    }
    setMounted(true)
  })

  const mouseEnter = (e) => {
    setZIndex(DRAGGABLE_Z_INDEX - 1)
  }

  const mouseLeave = (e) => {
    setZIndex(DRAGGABLE_Z_INDEX + 1)
  }

  onmousemove = (e) => {
    const ref = targetRef.current;
    const { offsetTop, offsetLeft } = ref
    //This gets absolute position
    console.log(ref.getBoundingClientRect())
    setRelX(e.pageX - offsetLeft)
    setRelY(e.pageY - offsetTop)
    setX(e.pageX - relX)
    setY(e.pageY - relY)
  }

  return (
    <div
      onMouseOver={mouseEnter}
      onMouseLeave={mouseLeave}
      ref={targetRef}
      style={{
        position: 'absolute',
        width: props.startWidth ? props.startWidth : DEFAULT_LENGTH + 'px',
        height: props.startHeight ? props.startHeight : DEFAULT_LENGTH + 'px',
        zIndex: zIndex,
      }}
    >
      <span>
        relX {relX} <br/>
        relY {relY} <br/>
        adjustX {x} <br />
        adjustY {y}
      </span>
      {props.children}
    </div>
  )
}
