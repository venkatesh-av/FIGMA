import './index.css'

const Section = props => {
  const {venky} = props
  return (
    <div className="section-container">
      <div className="section-1-div">
        <div className="section-1">Section 01</div>
        <img
          src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691773458/Group_qsuosy.svg"
          alt="dots"
        />
      </div>
      <div className="section-name">Section Title</div>
      <div className="section-description">Section description</div>
    </div>
  )
}

export default Section
