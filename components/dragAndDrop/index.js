import './index.css'

const DragAndDrop = props => {
  const {textContent} = props

  return (
    <div className="drag-drop-container">
      <img
        src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691686350/Vector_en1dew.svg"
        alt="darg"
      />
      <div className="drap-drop-text">{textContent}</div>
    </div>
  )
}

export default DragAndDrop
