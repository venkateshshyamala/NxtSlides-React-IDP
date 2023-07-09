import {Component} from 'react'

import './index.css'
import SlideContext from '../../Context'

class SingleSlide extends Component {
  state = {headingActive: true, descriptionActive: true}

  onClickHeading = () => {
    this.setState({headingActive: false})
  }

  onClickDescription = () => {
    this.setState({descriptionActive: false})
  }

  render() {
    const {headingActive, descriptionActive} = this.state

    return (
      <SlideContext.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            ChangeDescription,
          } = value

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({headingActive: true})
          }

          const onBlurDescription = event => {
            if (event.target.value === '') {
              ChangeDescription('Description')
            }
            this.setState({descriptionActive: true})
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const onChangeDescription = event => {
            ChangeDescription(event.target.value)
          }

          const tabDetails = initialList[activeIndex]
          const {description, heading} = tabDetails

          return (
            <div className="slide-view-container">
              <div className="slide-container">
                {headingActive ? (
                  <h1 onClick={this.onClickHeading} className="heading">
                    {heading}
                  </h1>
                ) : (
                  <input
                    type="text"
                    value={heading}
                    onChange={onChangeHeading}
                    onBlur={onBlurHeading}
                    className="slide-input-heading"
                  />
                )}
                {descriptionActive ? (
                  <p
                    onClick={this.onClickDescription}
                    className="slide-description"
                  >
                    {description}
                  </p>
                ) : (
                  <input
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                    className="slide-description-input"
                    onBlur={onBlurDescription}
                  />
                )}
              </div>
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}
export default SingleSlide
