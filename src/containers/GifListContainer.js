import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const GIPHY_API_KEY = '&api_key=dc6zaTOxFJmzC'
const BASE_URL = 'http://api.giphy.com/v1/gifs/'

class GifListContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      gifs: []
    }
  }

  componentWillMount () {
    fetch(BASE_URL + 'trending?limit=3' + GIPHY_API_KEY)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          gifs: json.data
        })
      })
  }

  searchGifs (query) {
    this.setState({
      gifs: []
    })
    fetch(BASE_URL + `search?q=${query}` + GIPHY_API_KEY)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          gifs: json.data
        })
      })
  }

  render () {
    return (
      <div>
        <GifSearch search={this.searchGifs.bind(this)} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer
