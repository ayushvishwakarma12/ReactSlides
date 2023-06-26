import './index.css'

function SlidePreview(props) {
  const {
    activeSlideData,
    onChangeHeading,
    onChangeDescription,
    changeHeading,
    changeDescription,
    onToggleChangeDescription,
    onToggleChangeHeading,
  } = props
  const {heading, description} = activeSlideData

  return (
    <div className="slide-preview-container">
      {changeHeading ? (
        <input
          className="slide-preview-heading"
          value={heading}
          onChange={onChangeHeading}
        />
      ) : (
        <p onClick={onToggleChangeHeading} className="slide-preview-heading">
          {heading}
        </p>
      )}
      {changeDescription ? (
        <input
          className="slide-preview-description"
          value={description}
          onChange={onChangeDescription}
        />
      ) : (
        <p
          onClick={onToggleChangeDescription}
          className="slide-preview-description"
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SlidePreview
