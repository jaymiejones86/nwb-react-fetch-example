import React from 'react'
import Podcast from './Podcast'
import styles from './app.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      podcasts: []
    }
  }

  componentDidMount() {
    self = this;
    let request = new Request('/podcasts.json');
    fetch('/podcasts.json')
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      self.setState({ loading: false, podcasts: data })
    });
  }

  podcastList() {
    if (this.state.loading === true) {
      return (
        <div className="loading">
          Loading podcast list...
        </div>
      )
    }

    return (
      <div className="podcast-list">
        {this.renderPodcasts()}
      </div>
    )
  }

  renderPodcasts() {
    return this.state.podcasts.map(function(data, key) {
      return <Podcast key={key} data={data} />
    })
  }

  render() {
    return (
      <div className="wrapper">
        <link href='https://fonts.googleapis.com/css?family=Neuton:400,400italic,700' rel='stylesheet' type='text/css' />
        <header className="header">
          <h1>Web Development Podcasts</h1>
          <p className="intro">A list of web development podcasts from <a href="https://github.com/ryanburgess/web-development-podcasts">https://github.com/ryanburgess/web-development-podcasts</a></p>
        </header>
        {this.podcastList()}
        <footer className="footer">View the source code on github <a href="https://github.com/jaymiejones86/nwb-react-fetch-example">jaymiejones86/nwb-react-fetch-example</a></footer>
      </div>
    )
  }
}
