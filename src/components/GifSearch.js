import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    query: ""
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={(e) => this.props.handleSubmit(e, this.state.query)}>
      <input onChange={this.handleChange} value={this.state.query}></input>
      </form>
    )
  }
}
