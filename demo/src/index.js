import React, { useState } from 'react'
import {render} from 'react-dom'

import EditableLabel from '../../src'

const Demo = props => {
  const [text, setText] = useState("Click here to edit.");

  return (
    <div>
      <h1>editable-input-react Demo</h1>
      <EditableLabel
        labelClassName="myLabelClass"
        inputClassName="myInputClass"
        inputWidth="200px"
        inputHeight="25px"
        inputMaxLength="50"
        labelFontWeight="bold"
        inputFontWeight="bold"
        value={text}
        onChange={e => setText(e.target.value)}
        onFocus={t => console.log("focus", t)}
        onFocusOut={t => console.log("focus out", t)}
      />
    </div>
  )
}

render(<Demo/>, document.querySelector('#demo'))
