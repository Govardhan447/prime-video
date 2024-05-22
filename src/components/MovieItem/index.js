import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {thumbnail, video} = props
  return (
    <div className="popup-bg">
      <Popup
        modal
        trigger={<img src={thumbnail} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              data-testid="closeButton"
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              {IoMdClose}
            </button>
            <div>
              <ReactPlayer url={video} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
