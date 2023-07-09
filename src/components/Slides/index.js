import {Component} from 'react'

import SlideListItems from '../SlideListItems'
import SingleSlide from '../SingleSlide'
import SlideContext from '../../Context'
import './index.css'

class Slides extends Component {
  render() {
    return (
      <SlideContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideListItems
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNum={index + 1}
                  />
                ))}
              </ol>
              <SingleSlide />
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default Slides
