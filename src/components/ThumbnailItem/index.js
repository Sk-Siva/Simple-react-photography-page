import './index.css'

const Thumbnail = props => {
  const {thumbnailDetails, onImageChange, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails

  const onActiveClassName = isActive ? 'img-thumbnail-active' : ''
  const onclickImage = () => {
    onImageChange(id)
  }

  return (
    <>
      <li>
        <button className="btn" type="button">
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={`img-thumbnail ${onActiveClassName}`}
            onClick={onclickImage}
          />
        </button>
      </li>
    </>
  )
}

export default Thumbnail
