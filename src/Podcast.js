import React from 'react'

import styles from './podcastStyles.css'

export default class Podcast extends React.Component {
  render() {
    const { title, description, url, thumb } = this.props.data

    return (
      <div className={styles.podcastItem}>
        <aside className={styles.podcastItemSidebar}>
          <a href={url}>
            <img src={thumb} alt={title} />
          </a>
        </aside>
        <main className={styles.podcastItemContent}>
          <h2 className={styles.podcastItemTitle}>
            {title}
          </h2>
          <a href={url}>
            {url}
          </a>
          <p>
            {description}
          </p>
        </main>
      </div>
    )
  }
}
