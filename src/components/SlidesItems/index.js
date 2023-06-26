import SlidesMenu from '../SlidesMenu'
import './index.css'

const SlidesItems = props => {
  const {initialSlidesList, activeSlide, onClickSlide} = props
  return (
    <>
      <ul className="slides-items">
        {initialSlidesList.map((eachSlides, i) => (
          <SlidesMenu
            index={i}
            key={eachSlides.id}
            eachSlides={eachSlides}
            activeSlide={activeSlide}
            onClickSlide={onClickSlide}
          />
        ))}
      </ul>
    </>
  )
}

export default SlidesItems
