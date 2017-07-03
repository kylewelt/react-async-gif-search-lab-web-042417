import React from 'react'

const GifList = ({ gifs }) => {
  console.log(gifs)
  return (
    <ul className='gif-list'>
      {gifs.map((gif, index) => <img key={'gif_' + index} src={gif.images.fixed_height.url} />)}
    </ul>
  )
}

export default GifList
