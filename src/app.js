import fs from 'fs'
import { resolve } from 'path'
import React from 'react'

export default class App extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    fs.readdir(this.props.albumPath, (err, dir) => {
      this.setState({images: dir.filter(fileName => (/\.jpg$/i.test(fileName)))})
    })
  }

  render() {
    const absoluteAlbumPath = resolve(this.props.albumPath)
    return (
      <div>
        <h1>Album</h1>
        {this.state.images.map(fileName => (<img width="300" src={`file://${absoluteAlbumPath}/${fileName}`} />))}

      </div>
    )
  }
}


