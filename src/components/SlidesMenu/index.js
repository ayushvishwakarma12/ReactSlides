import './index.css'

const SlidesMenu = props => {
  const {eachSlides, activeSlide, onClickSlide, index} = props
  const {id, heading, description} = eachSlides
  const activeSlideClass = activeSlide === id ? 'active-slide' : ''
  console.log(index + 1)
  return (
    <li testid={`slideTab${index + 1}`}>
      <div
        className={`each-slide-container ${activeSlideClass}`}
        role="button"
        tabIndex={index}
        onClick={() => onClickSlide(id)}
      >
        <p className="slide-number">{index + 1}</p>
        <div className="each-slides">
          <h1 className="slide-heading">{heading}</h1>
          <p className="slide-description">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default SlidesMenu
