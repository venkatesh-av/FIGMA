// src/components/SecondPage/index.js
import {Link} from 'react-router-dom'
import LabelComponent from '../LabelsComponent'
import LabelWithLogo from '../LabelWithLogo'
import './index.css'

const SecondPage = () => (
  <div className="secondpage-main-container">
    <div className="second-top-section">
      <div className="second-top-section">
        <div className="backButton">
          <img
            src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691745748/Group_jv55yc.svg"
            alt="backin"
          />
        </div>
        <div className="second-top-item2">
          <img
            src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691746151/Group_bimakb.svg"
            alt="sheets"
          />
          <div className="second-top-item2-text">Sheets</div>
        </div>
        <div className="second-top-item3">
          <div className="second-top-item3-text">
            First Piece CTQ : Tube Press Up
          </div>
        </div>
      </div>
      <div className="second-top-section">
        <div className="second-top-item4">
          <div className="second-top-item4-text">Authoring</div>
        </div>
        <div className="second-top-item5">
          <div className="second-top-item5-text">Preview</div>
        </div>
        <div className="startAuthB">
          <button className="button-outer" type="button">
            <Link to="/">
              <div className="button-start">Finish Authoring</div>
            </Link>
          </button>
        </div>
      </div>
    </div>
    <div className="workspace">
      <div>
        <div className="edition-section">
          <img
            src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691683160/Group_iyw0zw.svg"
            alt="tool"
            className="canva-img"
          />
          <div className="editing-text">Fields</div>
        </div>
        <LabelComponent textContent="Basic Fields" />
        <LabelWithLogo
          textContent="Text"
          altValue="text"
          imgUrl="https://res.cloudinary.com/dgurkbuce/image/upload/v1691759951/icon_1_hbotej.svg"
        />
        <LabelComponent textContent="Selection Fields" />
        <LabelWithLogo
          textContent="Checklist"
          altValue="checklist"
          imgUrl="https://res.cloudinary.com/dgurkbuce/image/upload/v1691760304/circle-checked_n4qeyh.svg"
        />
        <LabelWithLogo
          textContent="Select Date & Time"
          altValue="date"
          imgUrl="https://res.cloudinary.com/dgurkbuce/image/upload/v1691760318/calendar-dates_x7mu9f.svg"
        />
        <LabelComponent textContent="Attachment Fields" />
        <LabelWithLogo
          textContent="Upload Image"
          altValue="uploadImage"
          imgUrl="https://res.cloudinary.com/dgurkbuce/image/upload/v1691760351/Vector_1_q179ft.svg"
        />
        <LabelComponent textContent="Layout" />
        <LabelWithLogo
          textContent="Section"
          altValue="section"
          imgUrl="https://res.cloudinary.com/dgurkbuce/image/upload/v1691760330/Group_merqo3.svg"
        />
      </div>
      <hr className="hr-edit" />
      <div className="canvas-div">
        <img
          src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691750234/Group_q76pmi.svg"
          alt="edit-sapce"
          className="canva-img"
        />
        <div className="canvas">Canvas</div>
      </div>
      <hr className="hr-edit" />
      <div className="control-section">
        <div className="controls">
          <img
            src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691755923/Group_ejypuo.svg"
            alt="control"
            className="canva-img"
          />
          <div className="controls-text">Controls</div>
        </div>
      </div>
    </div>
  </div>
)

export default SecondPage
