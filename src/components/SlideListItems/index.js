import {Component} from 'react'
import './index.css'
import SlideContext from '../../Context'

class SlideListItems extends Component {
  render() {
    const {details, serialNum} = this.props
    const {id, heading, description} = details

    return (
      <SlideContext.Consumer>
        {value => {
          const {changeActiveTab, activeIndex} = value
          const isActive = activeIndex === serialNum - 1
          const activeStyling = isActive ? 'active-styling' : ''

          const onClickSlideTab = () => {
            changeActiveTab(serialNum - 1)
          }

          return (
            <li
              key={id}
              className={`slide-list-item ${activeStyling}`}
              onClick={onClickSlideTab}
              testid={`slideTab${serialNum}`}
            >
              <p className="slide-number">{serialNum}</p>
              <div className="slide-tab">
                <h1 className="tab-heading">{heading}</h1>
                <p className="tab-description">{description}</p>
              </div>
            </li>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default SlideListItems
