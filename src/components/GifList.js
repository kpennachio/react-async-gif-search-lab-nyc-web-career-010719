import React from 'react'

const GifList = (props) => {

  return (
    props.gifs.map(gif => {return <img src={gif.url} alt="gif"/>})
  )
}


export default GifList
