import React, { Component } from 'react'
import GifSearch from './GifSearch'
import GifList from './GifList'

export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs()
  }

  fetchGifs = (query = "dogs") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        console.log(this.state.gifs)
      })
  }


  handleSubmit = (e, query) => {
    e.preventDefault()
    this.fetchGifs(query)
  }

  render() {
    return (
      <div>
        < GifSearch handleSubmit={this.handleSubmit}/>
        < GifList gifs={this.state.gifs} />
      </div>
    )

  }
}
