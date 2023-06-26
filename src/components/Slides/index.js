import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'
import SlidesItems from '../SlidesItems'
import SlidePreview from '../SlidePreview'
import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class Slides extends Component {
  state = {
    activeSlide: initialSlidesList[0].id,
    slides: initialSlidesList,
    changeHeading: false,
    changeDescription: false,
  }

  onClickSlide = id => {
    this.setState({activeSlide: id})
  }

  findActiveSlide = id => {
    const {slides} = this.state
    const activeSlide = slides.filter(eachItem => eachItem.id === id)
    return activeSlide
  }

  onClickNewSlideButton = () => {
    const {activeSlide, slides} = this.state
    const newData = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    const index = slides.findIndex(eachItem => eachItem.id === activeSlide)
    slides.splice(index + 1, 0, newData)
    this.setState({slides})
  }

  onChangeHeading = event => {
    const {activeSlide, slides} = this.state

    this.setState({
      slides: slides.map(eachItem => {
        if (eachItem.id === activeSlide) {
          console.log(event.target.value)
          return {
            id: eachItem.id,
            heading: event.target.value,
            description: eachItem.description,
          }
        }
        return eachItem
      }),
    })
  }

  onChangeDescription = event => {
    const {activeSlide, slides} = this.state

    this.setState({
      slides: slides.map(eachItem => {
        if (eachItem.id === activeSlide) {
          console.log(event.target.value)
          return {
            id: eachItem.id,
            heading: eachItem.heading,
            description: event.target.value,
          }
        }
        return eachItem
      }),
    })
  }

  onToggleChangeHeading = () => {
    this.setState(prevState => ({
      changeHeading: !prevState.changeHeading,
    }))
  }

  onToggleChangeDescription = () => {
    this.setState(prevState => ({
      changeDescription: !prevState.changeDescription,
    }))
  }

  render() {
    const {activeSlide, slides, changeHeading, changeDescription} = this.state
    const activeSlideData = this.findActiveSlide(activeSlide)
    return (
      <>
        <div className="app-bg-container">
          <Header />
          <button
            type="button"
            className="new-slide-button"
            onClick={this.onClickNewSlideButton}
          >
            <img
              className="new-plus-icon"
              alt="new plus icon"
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            />
            <p className="new-slide-text">New</p>
          </button>
          <div className="slides-container">
            <SlidesItems
              initialSlidesList={slides}
              activeSlide={activeSlide}
              onClickSlide={this.onClickSlide}
            />
            <div className="slide-preview">
              <SlidePreview
                activeSlideData={activeSlideData[0]}
                onChangeHeading={this.onChangeHeading}
                onChangeDescription={this.onChangeDescription}
                changeHeading={changeHeading}
                changeDescription={changeDescription}
                onToggleChangeDescription={this.onToggleChangeDescription}
                onToggleChangeHeading={this.onToggleChangeHeading}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Slides
