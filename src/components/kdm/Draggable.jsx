import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

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

  const mouseDown = (e) => {
    console.log(e)
    if (e.button !== 0) return
    console.log('mousedown')
    const { offsetTop, offsetLeft } = dragRef.current
    // console.log(pos)
    // console.log(offsetTop)
    // console.log(offsetLeft)
    console.log('e.pageX, Y = ' + e.pageX + ', ' + e.pageY)
    console.log(
      'rel X, Y= ' + (e.pageX - offsetLeft) + ', ' + (e.pageY - offsetTop)
    )
    setDragging(true)
    setRelX(e.pageX - offsetLeft)
    setRelY(e.pageY - offsetTop)

    e.stopPropagation()
    e.preventDefault()
  }

  onmouseup = (e) => {
    console.log('mouseup')
    setDragging(false)
    e.stopPropagation()
    e.preventDefault()
  }

  onmousemove = (e) => {
    if (!dragging) return
    console.log('mousemove setX, Y: ' + x + ', ' + y)
    setX(e.pageX - relX)
    setY(e.pageY - relY)
    e.stopPropagation()
    e.preventDefault()
  }



  useEffect(() => {
        const domNode = dragRef.current
        //TODO: delete if note needed
    if (!setMounted){

    }
    //domNode.addEventListener('mousedown', mouseDown)


  })

  return (
    <div
      onMouseDown={ mouseDown}
      ref={dragRef}
      style={{
        // needs to be in a container positioned other than relative.
        position: 'absolute',
        background: 'yellow',
        width: props.startWidth ? props.startWidth : DEFAULT_LENGTH + 'px',
        height: props.startHeight ? props.startHeight : DEFAULT_LENGTH + 'px',
        left: x + 'px',
        top: y + 'px',
      }}
    ></div>
  )
}
