import { useState } from 'react'
import PropTypes from 'prop-types'

export const EditableText = ({ text, onLoose }) => {
  const [hidden, setHidden] = useState(true)
  const [value, setValue] = useState('')

  const setValueInput = ({ target: { value } }) => {
    setValue(value)
  }

  const handleBlur = e => {
    e.preventDefault()

    setHidden(true)

    onLoose(value)
  }

  const showInput = () => {
    setHidden(false)
  }

  return (
    hidden ? <span onClick={showInput}>{value ? value : text}</span>
      : (
        <form onSubmit={handleBlur}>
          <input name="text" value={value} onChange={setValueInput} onBlur={handleBlur} autoFocus />
        </form>
      )
  )
}

EditableText.defaultProps = {
  onLoose: () => { }
}

EditableText.propTypes = {
  onLoose: PropTypes.func
}
