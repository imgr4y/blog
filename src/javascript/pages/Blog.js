import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../components/Card'
import allPosts from '../utils/posts'

export default class Index extends React.Component {
    componentDidMount() {
        document.title = 'gr4y.me | blog'
    }

    render() {
        return (
          <div className="fadeInUp">
            <section className="container posts1">
                 {allPosts.map(post => {
                  const className = {
                  className: post.properties !== null
                    ? ['card1', post.properties.className].join(' ')
                    : 'card1',
                }     
                const size = post.properties !== null ? 'large' : 'small';
                    return (
                  <Card post={post} className={className} size={size} key={post.order} />
                )    
              })}
            </section>
          </div>
        )
    }
}