import React, { useState } from 'react'

export const DragContext = React.createContext({})

export const DragContextConsumer = DragContext.Consumer;

export const DragContextProvider = (props) => {
  const [mouseUpWhileDrag, setMouseUpWhileDrag] = useState({})
  const [draggedElement, setDraggedElement] = useState({})

  return (
    <DragContext.Provider 
    value={{ mouseUpWhileDrag, setMouseUpWhileDrag }}>
      {props.children}
    </DragContext.Provider>
  )
}
