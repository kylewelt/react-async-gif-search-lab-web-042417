import React from 'react'

class GifSearch extends React.Component {
  handleSearch (event) {
    event.preventDefault()
    this.props.search(event.target[0].value)
    event.target[0].value = ''
  }

  render () {
    return (
      <form onSubmit={this.handleSearch.bind(this)}>
        <label>
          <input type='text' placeholder='search gifs' />
        </label>
        <input type='submit' value='Search' />
      </form>
    )
  }
}

export default GifSearch
