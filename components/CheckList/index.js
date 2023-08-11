const CheckList = props => {
  const {venky} = props

  return (
    <div className="display-flex-box">
      <div>
        <div className="section-1-div2">
          <div className="field-title">Field Title </div>
          <img
            src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691773458/Group_qsuosy.svg"
            alt="dots"
          />
        </div>
      </div>
      <div className="box-checklist">
        <div>
          <img
            src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691774608/Group_v9xdyv.svg"
            alt="plus"
          />
          <div className="add-an-option">Add an Option</div>
        </div>
      </div>
    </div>
  )
}

export default CheckList
