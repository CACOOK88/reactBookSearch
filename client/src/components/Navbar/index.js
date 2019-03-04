import React, { Component } from 'react'
import './Navbar.css'

export default class index extends Component {
  render() {
    return (
      <div className="nav">
        <h2>Google Books</h2>
        <h4><a href="/">Search</a></h4>
        <h4><a href="/saved">Saved</a></h4>
      </div>
    )
  }
}
