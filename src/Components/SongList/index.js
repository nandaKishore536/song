import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const SongList = props => {
  const {song, onDelete} = props
  const {imageUrl, name, genre, duration, id} = song

  const onTap = () => {
    onDelete(id)
  }

  return (
    <li className="li">
      <div className="firstBg">
        <img src={imageUrl} alt="track" className="songImg" />
        <div className="secondBgCon">
          <p className="songName">{name}</p>
          <p className="songGenre">{genre}</p>
        </div>
      </div>

      <div className="thirdBg">
        <p className="duration">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          className="button"
          onClick={onTap}
        >
          <AiOutlineDelete size={20} className="delete" />
          {}
        </button>
      </div>
    </li>
  )
}

export default SongList
