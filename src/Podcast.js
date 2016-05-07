import React from 'react'
import styles from './podcastStyles.css'

export default class Podcast extends React.Component {
  render() {
    const { title, description, url, thumb } = this.props.data

    return (
      <div className="podcast-item">
        <aside className="podcast-item__sidebar">
          <a href={url} className="podcast-item__link">
            <img src={thumb} alt={title} />
          </a>
        </aside>
        <main className="podcast-item__main">
          <h2 className="podcast-item__title">
            {title}
          </h2>
          <a href={url} className="podcast-item__link">
            {url}
          </a>
          <p className="podcast-item__link">
            {description}
          </p>
        </main>
      </div>
    )
  }
}
